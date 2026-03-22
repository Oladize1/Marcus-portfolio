import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, Mail, LogOut, Menu, X, Rocket, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth.tsx';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();
    const { logout } = useAuth();

    const menuItems = [
        { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Overview' },
        { path: '/dashboard/projects', icon: <Rocket size={20} />, label: 'All Projects' },
        { path: '/dashboard/projects/create', icon: <FolderPlus size={20} />, label: 'New Project' },
        { path: '/dashboard/mails', icon: <Mail size={20} />, label: 'Messages' },
    ];

    const isActive = (path: string) => {
        if (path === '/dashboard' && location.pathname === '/dashboard') return true;
        if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="flex min-h-screen text-slate-100 font-jakarta overflow-hidden">
            {/* Sidebar */}
            <motion.aside 
                initial={false}
                animate={{ width: isSidebarOpen ? 280 : 100 }}
                className="bg-slate-900/40 backdrop-blur-xl border-r border-slate-800/50 flex flex-col z-30 relative"
            >
                <div className="p-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary-600/30 shrink-0">
                        <Rocket size={26} />
                    </div>
                    {isSidebarOpen && (
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <span className="font-bold text-lg tracking-tight leading-none">Portfolio</span>
                            <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mt-1">Admin Pro</span>
                        </motion.div>
                    )}
                </div>

                <nav className="flex-1 mt-8 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.path} 
                            to={item.path}
                            className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                                isActive(item.path) 
                                ? 'bg-primary-600/10 text-primary-400 border border-primary-600/20' 
                                : 'text-slate-500 hover:bg-slate-800/40 hover:text-slate-300'
                            }`}
                        >
                            <span className={`${isActive(item.path) ? 'text-primary-400' : 'group-hover:scale-110 transition-transform'}`}>
                                {item.icon}
                            </span>
                            {isSidebarOpen && (
                                <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }}
                                    className="flex-1 flex justify-between items-center"
                                >
                                    <span className="font-semibold">{item.label}</span>
                                    {isActive(item.path) && <ChevronRight size={14} className="opacity-50" />}
                                </motion.div>
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 space-y-4">
                    <button 
                        onClick={logout}
                        className="flex items-center justify-center gap-4 p-4 w-full rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold group shadow-lg shadow-red-500/5"
                    >
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        {isSidebarOpen && <span>Leave Session</span>}
                    </button>
                    
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-3 w-full flex justify-center text-slate-600 hover:text-slate-300 transition-colors border border-slate-800/50 rounded-xl"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Top Navbar */}
                <header className="h-20 border-b border-slate-800/50 flex items-center justify-between px-10 bg-slate-950/20 backdrop-blur-md z-20">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-sm">Pages</span>
                        <ChevronRight size={14} className="text-slate-700" />
                        <span className="text-white font-bold">{menuItems.find(m => isActive(m.path))?.label || 'Overview'}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end mr-2">
                            <span className="text-white font-bold text-sm">Marcus</span>
                            <span className="text-primary-400 text-[10px] uppercase font-bold tracking-widest">Super Admin</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-purple-600 border-2 border-slate-800 p-0.5">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs">MA</div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-10 relative custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="max-w-7xl mx-auto"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
