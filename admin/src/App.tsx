import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';
import AdminLayout from './components/layout/AdminLayout.tsx';
import LoginPage from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import CreateProjectPage from './pages/CreateProjectPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import MailsPage from './pages/MailsPage.tsx';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();
    
    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
            <div className="w-12 h-12 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
    );
    
    if (!user) return <Navigate to="/login" />;
    
    return <>{children}</>;
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    
                    {/* Redirect root to dashboard */}
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }>
                        <Route index element={<DashboardPage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="projects/create" element={<CreateProjectPage />} />
                        <Route path="projects/edit/:id" element={<CreateProjectPage />} />
                        <Route path="mails" element={<MailsPage />} />
                    </Route>

                    {/* Catch all */}
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
