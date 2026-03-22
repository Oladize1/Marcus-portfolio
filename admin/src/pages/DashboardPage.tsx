import { useEffect, useState } from 'react';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { Trash2, Github, Plus, Layers, AlertCircle, Eye, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
    _id: string;
    projectImg: string;
    projectTitle: string;
    projectdesc: string;
    projectTags: string[];
    projectLink: string;
    projectSrcLink?: string;
};

const DashboardPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects');
                setProjects(Array.isArray(response.data) ? response.data : []);
            } catch (err: any) {
                setError('Unable to sync workspace data');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const deleteProject = async (id: string) => {
        if (!window.confirm('Are you sure you want to archive this project?')) return;
        try {
            await api.delete(`/projects/${id}`);
            setProjects(projects.filter(p => p._id !== id));
        } catch {
            alert('Failed to delete project');
        }
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-96 space-y-6">
            <div className="w-16 h-16 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
            <p className="text-sm font-black text-zinc-500 tracking-[0.3em] uppercase">Syncing Portfolio...</p>
        </div>
    );

    return (
        <div className="space-y-16">
            {/* Page Header */}
            <header className="flex flex-col space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-400">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight">Showcase Dashboard</h1>
                        <p className="text-zinc-500 text-sm font-medium mt-1">Manage and curate your digital existence.</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                    <Link 
                        to="/dashboard/projects/create" 
                        className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 rounded-xl text-sm font-black text-white hover:shadow-lg hover:shadow-violet-600/20 transition-all active:scale-[0.98]"
                    >
                        <Plus size={18} />
                        New Deployment
                    </Link>
                    <div className="h-10 w-[1px] bg-zinc-800 mx-2" />
                    <div className="flex gap-6">
                        <div className="text-center">
                            <span className="block text-xl font-black text-white">{projects.length}</span>
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Total Projects</span>
                        </div>
                    </div>
                </div>
            </header>

            {error && (
                <div className="p-5 rounded-2xl border border-red-500/10 bg-red-500/5 text-red-400 text-sm flex items-center gap-4">
                    <AlertCircle size={20} />
                    {error}
                </div>
            )}

            {projects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 bg-[#0c0c0e] rounded-[32px] border border-zinc-900 border-dashed group hover:border-violet-500/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-110 group-hover:bg-violet-600/10 group-hover:text-violet-500 transition-all">
                        <Box size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">No active deployments</h2>
                    <p className="text-zinc-500 text-sm max-w-sm text-center leading-relaxed">
                        Start building your portfolio by deploying your first project to the showcase.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="premium-card group relative"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative h-56 overflow-hidden rounded-t-[16px]">
                                <img 
                                    src={project.projectImg} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    alt={project.projectTitle}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button 
                                        onClick={() => deleteProject(project._id)}
                                        className="p-2 bg-black/40 backdrop-blur-md rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-400/20 transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.projectTags?.slice(0, 3).map((tag: string) => (
                                            <span key={tag} className="text-[10px] font-black text-white px-2 py-1 bg-violet-600/80 backdrop-blur-md rounded-lg uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-black text-white group-hover:text-violet-400 transition-colors">{project.projectTitle}</h3>
                                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                        <Terminal size={14} className="text-zinc-500" />
                                    </div>
                                </div>
                                
                                <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed h-10">
                                    {project.projectdesc}
                                </p>

                                <div className="pt-6 border-t border-zinc-800/50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Active Live</span>
                                    </div>
                                    <a 
                                        href={project.projectLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="p-2 text-zinc-500 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
