import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, Mail, LogOut, Code, ChevronRight, User, Settings, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth.tsx';

const AdminLayout = () => {
    const location = useLocation();
    const { logout } = useAuth();

    const menuItems = [
        { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Overview' },
        { path: '/dashboard/projects', icon: <Code size={20} />, label: 'Workshops' },
        { path: '/dashboard/projects/create', icon: <FolderPlus size={20} />, label: 'Publish Work' },
        { path: '/dashboard/mails', icon: <Mail size={20} />, label: 'Collaborators' },
    ];

    const isActive = (path: string) => {
        if (path === '/dashboard' && location.pathname === '/dashboard') return true;
        if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="flex h-screen bg-[#0a0a0c] text-zinc-300 font-jakarta overflow-hidden">
            {/* Premium Sidebar */}
            <aside className="w-72 bg-[#0c0c0e] border-r border-zinc-800/50 flex flex-col relative z-20">
                <div className="p-8 mb-4">
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                            <Globe size={20} className="text-white" />
                        </div>
                        <div>
                            <span className="font-black text-lg tracking-tight block leading-none">Marcus</span>
                            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest mt-1 block">Project Hub</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] px-4 mb-4">Navigation</div>
                    {menuItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link 
                                key={item.path} 
                                to={item.path}
                                className={`group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                                    active 
                                    ? 'text-white' 
                                    : 'text-zinc-500 hover:text-zinc-200'
                                }`}
                            >
                                {active && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-violet-600/10 border border-violet-500/20"
                                        style={{ borderRadius: '16px' }}
                                    />
                                )}
                                <span className={`${active ? 'text-violet-400' : 'group-hover:text-violet-400'} transition-colors duration-300`}>
                                    {item.icon}
                                </span>
                                <span className="font-bold text-sm leading-none relative z-10">{item.label}</span>
                                {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 mt-auto">
                    <div className="bg-[#141417] border border-zinc-800/50 rounded-2xl p-4 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 shadow-inner">
                                <User size={20} className="text-zinc-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-white">Marcus</span>
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Super Admin</span>
                            </div>
                        </div>
                        <button 
                            onClick={logout}
                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-red-500/5 hover:border-red-500/20 hover:text-red-400 transition-all text-xs font-black uppercase tracking-widest"
                        >
                            <LogOut size={14} />
                            Exit Session
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Workspace */}
            <div className="flex-1 flex flex-col relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

                <header className="h-20 border-b border-zinc-800/50 flex items-center px-12 justify-between bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">System Online</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-zinc-500 hover:text-white transition-colors bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
                            <Settings size={18} />
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-12 lg:p-16 custom-scrollbar relative">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="max-w-6xl mx-auto"
                    >
                        <Outlet />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
