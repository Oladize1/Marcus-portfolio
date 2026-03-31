import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, Mail, LogOut, Code, Menu, X, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.tsx';
import { useState } from 'react';

const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/dashboard/projects', icon: Code, label: 'Projects' },
    { path: '/dashboard/projects/create', icon: FolderPlus, label: 'Publish Work' },
    { path: '/dashboard/mails', icon: Mail, label: 'Messages' },
];

const AdminLayout = () => {
    const location = useLocation();
    const { user, logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (item: typeof navItems[0]) => {
        if (item.exact) return location.pathname === item.path;
        return location.pathname.startsWith(item.path);
    };

    const currentPage = navItems.find(i => isActive(i))?.label ?? 'Dashboard';

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col md:flex-row font-sans">
            
            {/* Mobile Header */}
            <header className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                        <User size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-lg text-white">Admin Portal</span>
                </div>
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors"
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Backdrop for mobile */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:flex-shrink-0
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 hidden md:flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                        <User size={18} className="text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">Admin Portal</span>
                </div>

                <div className="px-4 py-2 md:py-0">
                    <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">Navigation</p>
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const active = isActive(item);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                        ${active 
                                            ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                                        }
                                    `}
                                >
                                    <item.icon size={18} className={active ? 'text-indigo-400' : 'text-slate-500'} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-auto p-4">
                    <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                                <User size={14} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-200">Marcus</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                        >
                            <LogOut size={16} />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen md:h-auto overflow-hidden md:overflow-visible">
                {user?.role === 'demo' && (
                    <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 flex items-center justify-center gap-2 sticky top-0 z-40 w-full backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-amber-500 text-sm font-semibold">Demo Mode – Changes are not saved</span>
                    </div>
                )}
                
                {/* Desktop Header area / breadcrumbs */}
                <header className="hidden md:flex items-center px-8 py-5 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-medium">Admin Portal</span>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-200 font-semibold">{currentPage}</span>
                    </div>
                </header>
                
                <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
