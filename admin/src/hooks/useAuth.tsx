import { useState, useEffect } from 'react';
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

export const useAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            await api.get('/mail');
            setUser({ role: 'admin' });
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

    return { user, loading, login, logout };
};
