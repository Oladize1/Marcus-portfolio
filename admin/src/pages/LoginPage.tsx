import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.tsx';
import { motion } from 'framer-motion';
import { LogIn, User, Lock, AlertCircle, Sparkles } from 'lucide-react';

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
            setError(result.message || 'Login failed');
        }
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden font-jakarta">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-[#141417]/80 backdrop-blur-xl border border-zinc-800/50 p-10 rounded-3xl shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-6 shadow-lg shadow-violet-500/20">
                            <Sparkles size={32} className="text-white" />
                        </div>
                        <h1 className="text-3xl font-black text-white mb-2 leading-tight">Welcome Back</h1>
                        <p className="text-zinc-500 text-sm font-medium">Control your portfolio with precision.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3"
                            >
                                <AlertCircle size={16} />
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase ml-1">Username</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-violet-400 transition-colors">
                                    <User size={18} />
                                </span>
                                <input 
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-[#0a0a0c] border border-zinc-800 text-white pl-12 pr-4 py-4 rounded-xl focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-sm font-medium placeholder:text-zinc-800"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase ml-1">Password</label>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-violet-400 transition-colors">
                                    <Lock size={18} />
                                </span>
                                <input 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0a0a0c] border border-zinc-800 text-white pl-12 pr-4 py-4 rounded-xl focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-sm font-medium placeholder:text-zinc-800"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black py-4 rounded-xl shadow-lg shadow-violet-600/20 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 text-sm mt-8"
                        >
                            {isSubmitting ? (
                                <>
                                    Authenticating...
                                    <span className="loading loading-spinner loading-sm"></span>
                                </>
                            ) : (
                                <>
                                    Sign In
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
