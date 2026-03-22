import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.ts';

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            // Check if user is logged in by hitting a protected profile link or just checking localStorage
            // For now, we'll use a simple "logged_in" flag in localStorage for UI purposes, 
            // but the actual security is in the httpOnly cookies handled by the server.
            const status = localStorage.getItem('isLoggedIn');
            if (status === 'true') {
                setUser({ role: 'admin' });
            } else {
                setUser(null);
            }
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            await api.post('/admin/login', { username, password });
            localStorage.setItem('isLoggedIn', 'true');
            setUser({ role: 'admin' });
            navigate('/');
            return { success: true };
        } catch (error: any) {
            return { success: false, message: error.response?.data || 'Login failed' };
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
