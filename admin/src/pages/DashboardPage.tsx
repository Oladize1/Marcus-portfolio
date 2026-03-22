import { useEffect, useState } from 'react';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { Trash2, Github, Plus, Layers, AlertCircle, Eye, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects');
            if (Array.isArray(response.data)) {
                setProjects(response.data);
            } else {
                setProjects([]);
            }
        } catch (error) {
            setError('Failed to load projects');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            await api.delete(`/projects/${id}/delete`);
            setProjects(projects.filter(p => p._id !== id));
        } catch (error) {
            alert('Failed to delete project');
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center h-[50vh]">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-infinity loading-lg text-primary-500"></span>
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">Syncing Data...</span>
            </div>
        </div>
    );

    return (
        <div className="space-y-12 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black text-white tracking-tight">Showcase Room</h1>
                    <p className="text-slate-500 text-lg">Curate and manage your collection of digital masterpieces.</p>
                </div>
                <Link
                    to="/dashboard/projects/create"
                    className="bg-white text-black hover:bg-primary-500 hover:text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all font-bold active:scale-95 shadow-2xl group"
                >
                    <Plus size={22} className="group-hover:rotate-90 transition-transform duration-300" />
                    Launch Component
                </Link>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-[2rem] flex items-center gap-4 premium-glass">
                    <AlertCircle size={24} />
                    <span className="font-semibold">{error}</span>
                </div>
            )}

            {projects.length === 0 ? (
                <div className="premium-glass p-20 rounded-[3rem] text-center space-y-6 border-dashed border-2 border-slate-800">
                    <div className="w-24 h-24 bg-primary-600/10 rounded-full flex items-center justify-center mx-auto text-primary-500">
                        <Layers size={48} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Workspace is Empty</h3>
                        <p className="text-slate-400 max-w-sm mx-auto">Your portfolio is waiting for its first display. Time to upload your latest creation.</p>
                    </div>
                    <Link to="/dashboard/projects/create" className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold inline-block hover:shadow-primary-600/20 hover:shadow-lg transition-all">Get Started &rarr;</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-glass rounded-[2.5rem] overflow-hidden group border border-slate-800/50 hover:border-primary-500/50 transition-all duration-700 hover:shadow-primary-500/10 hover:shadow-3xl"
                        >
                            <div className="relative h-60 overflow-hidden m-4 rounded-[1.8rem]">
                                <img
                                    src={project.projectImg}
                                    alt={project.projectTitle}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-2">
                                        <a href={project.projectLink} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-primary-500 hover:text-white transition-colors">
                                            <Eye size={20} />
                                        </a>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-red-500 transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="absolute bottom-5 left-6 right-6 flex justify-between items-center text-white">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary-600 px-3 py-1 rounded-md mb-1 block w-fit">Project</span>
                                </div>
                            </div>

                            <div className="px-8 pb-8 pt-2 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors leading-tight">{project.projectTitle}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{project.projectdesc}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-primary-400">
                                    {project.projectTags.slice(0, 4).map((tag: string) => (
                                        <span key={tag} className="text-[11px] font-bold px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg">
                                            #{tag}
                                        </span>
                                    ))}
                                    {project.projectTags.length > 4 && (
                                        <span className="text-[11px] font-bold px-3 py-1.5 text-slate-600">+{project.projectTags.length - 4}</span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                                    <a href={project.projectSrcLink} target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold font-mono">
                                        <Github size={16} /> REPOSITORY
                                    </a>
                                    <div className="flex items-center gap-1 text-primary-400 font-black text-[10px] tracking-widest uppercase">
                                        Live Preview <ChevronRight size={12} />
                                    </div>
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
