import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.ts';

type AuthUser = {
    role: 'admin' | 'demo';
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
    demoLogin: () => Promise<LoginResult>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            if (localStorage.getItem('isDemoMode') === 'true') {
                setUser({ role: 'demo' });
                setLoading(false);
                return;
            }
            const response = await api.get('/admin/me');
            if (response.status === 200) {
                // Assuming backend returns { role: 'admin' | 'demo' }
                setUser({ role: response.data.role || 'admin' });
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

    const demoLogin = async (): Promise<LoginResult> => {
        localStorage.setItem('isDemoMode', 'true');
        localStorage.setItem('isLoggedIn', 'true');
        setUser({ role: 'demo' });
        navigate('/');
        return { success: true };
    };

    const logout = async () => {
        try {
            const isDemo = localStorage.getItem('isDemoMode') === 'true';
            
            if (isDemo) {
                localStorage.removeItem('isDemoMode');
                localStorage.removeItem('isLoggedIn');
                navigate('/demo');
                setTimeout(() => setUser(null), 50);
                return;
            }
            
            await api.post('/admin/logout');
            localStorage.removeItem('isLoggedIn');
            navigate('/login');
            setTimeout(() => setUser(null), 50);
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, demoLogin, logout }}>
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
