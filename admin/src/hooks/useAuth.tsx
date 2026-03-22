import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import api from '../services/api.ts';

type AuthUser = {
    role: 'admin';
};

type LoginResult = {
    success: boolean;
    message?: string;
};

export const useAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const status = localStorage.getItem('isLoggedIn');
            if (status === 'true') {
                setUser({ role: 'admin' });
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
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
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                return { success: false, message: error.response?.data || 'Login failed' };
            }

            return { success: false, message: 'Login failed' };
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
