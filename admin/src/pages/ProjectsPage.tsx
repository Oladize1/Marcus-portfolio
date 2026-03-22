import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.ts';
import { Github, FolderGit2, Trash2, ExternalLink, Edit3, Plus } from 'lucide-react';

type Project = {
    _id: string;
    projectTitle: string;
    projectdesc: string;
    projectTags: string[];
    projectSrcLink: string;
    projectLink?: string;
    projectImg: string;
    createdAt?: string;
    updatedAt?: string;
};

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(true);

    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects');
            setProjects(Array.isArray(response.data) ? response.data : []);
        } catch (err: any) {
            console.error('Failed to fetch projects:', err);
        } finally {
            setLoadingProjects(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const deleteProject = async (projectId: string) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            await api.delete(`/projects/${projectId}`);
            setProjects(projects.filter(p => p._id !== projectId));
        } catch (error) {
            console.error('Delete failed:', error);
            alert('Failed to delete project');
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            
            {/* ---------------- PROJECT GRID SECTION ---------------- */}
            <div>
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            <FolderGit2 className="text-indigo-400 w-8 h-8" />
                            All Projects
                        </h2>
                        <p className="text-slate-400 mt-2">Manage and view your deployed projects.</p>
                    </div>
                    <Link
                        to="/dashboard/projects/create"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors shadow-lg shadow-indigo-600/20"
                    >
                        <Plus size={18} />
                        Publish New Work
                    </Link>
                </div>

                {loadingProjects ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl h-[420px] animate-pulse"></div>
                        ))}
                    </div>
                ) : (projects ?? []).length === 0 ? (
                    <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-12 text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FolderGit2 className="text-slate-400 w-8 h-8" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">No projects yet</h2>
                        <p className="text-slate-400">Publish a project above to see it appear here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(projects ?? []).map((project) => (
                            <div 
                                key={project._id} 
                                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col group"
                            >
                                {/* Image Placeholder or URL */}
                                <div className="h-48 bg-slate-800 relative overflow-hidden shrink-0">
                                    {project.projectImg ? (
                                        <img 
                                            src={project.projectImg} 
                                            alt={project.projectTitle} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-800/50">
                                            <FolderGit2 size={32} />
                                        </div>
                                    )}
                                </div>
                                
                                {/* Content - flexible to prevent squeeze padding */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white line-clamp-1 mb-2 group-hover:text-indigo-400 transition-colors">
                                        {project.projectTitle}
                                    </h3>
                                    
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {project.projectdesc}
                                    </p>
                                    
                                    <div className="mt-auto space-y-5">
                                        {/* Neatly mapped pill tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {(project.projectTags ?? []).map((tag, idx) => (
                                                <span key={idx} className="text-[11px] font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50 tracking-wide">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Action Buttons Box */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
                                            <div className="flex items-center gap-2">
                                                {project.projectSrcLink && (
                                                    <a 
                                                        href={project.projectSrcLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors border border-slate-700/50 flex items-center gap-2"
                                                        title="View Source Code"
                                                    >
                                                        <Github size={16} /> 
                                                        <span className="sr-only sm:not-sr-only text-xs font-medium">Code</span>
                                                    </a>
                                                )}
                                                {project.projectLink && (
                                                    <a 
                                                        href={project.projectLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors border border-slate-700/50 flex items-center gap-2"
                                                        title="View Live Site"
                                                    >
                                                        <ExternalLink size={16} />
                                                        <span className="sr-only sm:not-sr-only text-xs font-medium">Live</span>
                                                    </a>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 shrink-0">
                                                <Link 
                                                    to={`/dashboard/projects/edit/${project._id}`}
                                                    className="bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold border border-indigo-500/20 hover:border-indigo-400 flex items-center gap-1.5"
                                                >
                                                    <Edit3 size={14} /> Edit
                                                </Link>
                                                <button 
                                                    onClick={() => deleteProject(project._id)}
                                                    className="bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white px-3 py-2 rounded-lg transition-colors text-sm font-semibold border border-red-500/20 hover:border-red-500 flex items-center gap-1.5"
                                                >
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
