import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.tsx';
import { motion } from 'framer-motion';
import { LogIn, User, Lock, AlertCircle, ShieldCheck } from 'lucide-react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        const result = await login(username, password);
        if (!result.success) {
            setError(result.message);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-jakarta">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800/50 premium-glass"
            >
                {/* Visual Side */}
                <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-primary-900/40 to-slate-900 border-r border-slate-800/50">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-600/20 float-animation">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Control Your <br /><span className="text-primary-400">Digital Presence</span></h2>
                            <p className="text-slate-400 text-lg leading-relaxed">Management made effortless. Secure access to your portfolio projects, messages, and site analytics.</p>
                        </div>
                        <div className="pt-8 flex gap-4">
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Status</p>
                                <div className="flex items-center gap-2 text-green-400 font-semibold">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                                    Secure Connection
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-10 lg:hidden text-center">
                        <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center md:text-left mb-8">
                            <h3 className="text-2xl font-bold text-white mb-1">Sign In</h3>
                            <p className="text-slate-500">Enter your credentials to continue</p>
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-4 rounded-2xl flex items-center gap-3 text-sm"
                            >
                                <AlertCircle size={18} />
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Username</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors">
                                    <User size={18} />
                                </span>
                                <input 
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                                    placeholder="Marcus"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors">
                                    <Lock size={18} />
                                </span>
                                <input 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-slate-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary-600/20 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 group mt-8"
                        >
                            {isSubmitting ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                <>
                                    Authenticating...
                                    <LogIn size={20} className="transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
