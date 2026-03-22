import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.ts';

type AuthUser = {
    role: 'admin';
};

type LoginResult = {
    success: boolean;
    message?: string;
};

type ApiError = {
    response?: {
        data?: string;
    };
};

interface AuthContextType {
    user: AuthUser | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<LoginResult>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const response = await api.get('/admin/me');
            if (response.status === 200) {
                setUser({ role: 'admin' });
            } else {
                setUser(null);
                localStorage.removeItem('isLoggedIn');
            }
        } catch (error) {
            setUser(null);
            localStorage.removeItem('isLoggedIn');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (username: string, password: string): Promise<LoginResult> => {
        try {
            await api.post('/admin/login', { username, password });
            localStorage.setItem('isLoggedIn', 'true');
            setUser({ role: 'admin' });
            navigate('/');
            return { success: true };
        } catch (error) {
            const apiError = error as ApiError;

            return {
                success: false,
                message: apiError.response?.data || 'Login failed',
            };
        }
    };

    const logout = async () => {
        try {
            await api.post('/admin/logout');
            localStorage.removeItem('isLoggedIn');
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
