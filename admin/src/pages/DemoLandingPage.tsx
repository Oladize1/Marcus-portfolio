import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, LayoutDashboard, Database, Shield } from 'lucide-react';

const DemoLandingPage = () => {
    const { demoLogin } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLaunchDemo = async () => {
        setIsLoading(true);
        const res = await demoLogin();
        setIsLoading(false);
        if (res.success) {
            navigate('/dashboard');
        } else {
            alert('Failed to launch demo. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 px-6 py-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl w-full z-10 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    Interactive Sandbox
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                    Experience the <br className="hidden sm:block" /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Admin Dashboard</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Explore a fully-functional, isolated replica of the content management system. Create projects, manage messages, and review UI analytics safely.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleLaunchDemo}
                        disabled={isLoading}
                        className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? 'Preparing Sandbox...' : 'Launch Demo Environment'}
                        {!isLoading && <ArrowRight size={20} />}
                    </button>
                    <a 
                        href="https://marcus-oladunjoye-portfolio.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 border border-slate-800 hover:bg-slate-800 text-white font-semibold rounded-full transition-all flex items-center justify-center backdrop-blur-sm"
                    >
                        View Live Portfolio
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-16 border-t border-slate-800/50 text-left">
                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
                        <Database className="text-indigo-400 w-7 h-7 mb-4" />
                        <h3 className="text-base font-bold text-white mb-2">Isolated Data Store</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Your session runs on an isolated in-memory replica. Changes won't affect the live production database.</p>
                    </div>
                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
                        <Shield className="text-blue-400 w-7 h-7 mb-4" />
                        <h3 className="text-base font-bold text-white mb-2">Secure Sandbox</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Advanced routing infrastructure intercepts mutating requests, guaranteeing zero risk to real data.</p>
                    </div>
                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
                        <LayoutDashboard className="text-purple-400 w-7 h-7 mb-4" />
                        <h3 className="text-base font-bold text-white mb-2">Full Functionality</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Write, edit, and delete capability simulated perfectly to demonstrate UI responsiveness and flows.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoLandingPage;
