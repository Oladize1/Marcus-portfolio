import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Plus, X, Image as ImageIcon, Link as LinkIcon, Type, FileText, Hash, Code, Sparkles, Globe } from 'lucide-react';

const CreateProjectPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [tagInput, setTagInput] = useState('');
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectImg: '',
        projectdesc: '',
        projectLink: '',
        projectSrcLink: '',
        projectTags: [] as string[]
    });

    const addTag = () => {
        if (tagInput.trim() && !formData.projectTags.includes(tagInput.trim())) {
            setFormData({ ...formData, projectTags: [...formData.projectTags, tagInput.trim()] });
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setFormData({ ...formData, projectTags: formData.projectTags.filter(tag => tag !== tagToRemove) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.projectTags.length < 4) {
            alert('Please add at least 4 tags for optimal presentation');
            return;
        }
        setLoading(true);
        try {
            await api.post('/projects', formData);
            navigate('/dashboard/projects');
        } catch (error) {
            alert('Encountered an error during deployment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-24">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-black text-white tracking-tight">Deployment Console</h1>
                        <p className="text-zinc-500 text-sm font-medium">Curate a new entry for your digital masterpiece.</p>
                    </div>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Core Config */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-[#0c0c0e] p-10 rounded-[32px] border border-zinc-800/50 shadow-2xl space-y-8">
                        <div className="flex items-center gap-3 pb-6 border-b border-zinc-800/50">
                            <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400">
                                <Sparkles size={16} />
                            </div>
                            <h2 className="text-lg font-black text-white uppercase tracking-widest">General Configuration</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Type size={14} className="text-violet-500" /> Project Title
                                </label>
                                <input 
                                    required
                                    value={formData.projectTitle}
                                    onChange={e => setFormData({...formData, projectTitle: e.target.value})}
                                    className="input-modern w-full"
                                    placeholder="e.g. Quantum Engine"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <FileText size={14} className="text-violet-500" /> Executive Summary
                                </label>
                                <textarea 
                                    required
                                    value={formData.projectdesc}
                                    onChange={e => setFormData({...formData, projectdesc: e.target.value})}
                                    className="input-modern w-full min-h-[140px] resize-none"
                                    placeholder="Provide a high-level summary of the build..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <Globe size={14} className="text-violet-500" /> Live Endpoint
                                    </label>
                                    <input 
                                        required
                                        value={formData.projectLink}
                                        onChange={e => setFormData({...formData, projectLink: e.target.value})}
                                        className="input-modern w-full text-xs"
                                        placeholder="https://client-preview.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <Code size={14} className="text-violet-500" /> Repository URL
                                    </label>
                                    <input 
                                        value={formData.projectSrcLink}
                                        onChange={e => setFormData({...formData, projectSrcLink: e.target.value})}
                                        className="input-modern w-full text-xs"
                                        placeholder="https://github.com/marcus/app"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#0c0c0e] p-10 rounded-[32px] border border-zinc-800/50 shadow-2xl space-y-8">
                        <div className="flex items-center gap-3 pb-6 border-b border-zinc-800/50">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                                <Hash size={16} />
                            </div>
                            <h2 className="text-lg font-black text-white uppercase tracking-widest">Functional Tags</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <input 
                                    value={tagInput}
                                    onChange={e => setTagInput(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addTag())}
                                    className="flex-1 input-modern"
                                    placeholder="Add skill (React, AWS, etc.)"
                                />
                                <button 
                                    type="button" 
                                    onClick={addTag}
                                    className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-2xl hover:bg-violet-600/20 hover:border-violet-500/50 hover:text-violet-400 transition-all"
                                >
                                    <Plus size={24} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {formData.projectTags.map(tag => (
                                    <span key={tag} className="flex items-center gap-2 bg-zinc-900 text-zinc-100 px-4 py-2 rounded-xl text-xs font-black border border-zinc-800">
                                        {tag}
                                        <button type="button" onClick={() => removeTag(tag)} className="text-zinc-600 hover:text-red-500">
                                            <X size={14} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Media & Action */}
                <div className="space-y-8 lg:sticky lg:top-32 h-fit">
                    <section className="bg-[#0c0c0e] p-10 rounded-[32px] border border-zinc-800/50 shadow-2xl space-y-8">
                        <div className="flex items-center gap-3 pb-6 border-b border-zinc-800/50">
                            <div className="w-8 h-8 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400">
                                <ImageIcon size={16} />
                            </div>
                            <h2 className="text-lg font-black text-white uppercase tracking-widest">Visual Cover</h2>
                        </div>

                        <div className="aspect-[4/3] rounded-2xl bg-zinc-950 border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center overflow-hidden relative group">
                            {formData.projectImg ? (
                                <img src={formData.projectImg} className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-center group-hover:scale-110 transition-transform">
                                    <div className="w-14 h-14 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-700 mb-4 border border-zinc-800">
                                        <ImageIcon size={24} />
                                    </div>
                                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em]">Asset Pending</p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Cover Image Source</label>
                            <input 
                                required
                                value={formData.projectImg}
                                onChange={e => setFormData({...formData, projectImg: e.target.value})}
                                className="input-modern w-full text-[10px] font-black"
                                placeholder="https://res.cloudinary.com/..."
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full button-brand flex items-center justify-center gap-3 group"
                        >
                            {loading ? (
                                <span className="loading loading-spinner text-white"></span>
                            ) : (
                                <>
                                    <Save size={20} className="group-hover:rotate-12 transition-transform" />
                                    <span>Deploy Project</span>
                                </>
                            )}
                        </button>
                    </section>
                </div>
            </form>
        </div>
    );
};

export default CreateProjectPage;
