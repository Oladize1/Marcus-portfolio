import { useState } from 'react';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, AlertCircle, X, Image as ImageIcon, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreateProjectPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectdesc: '',
        projectLink: '',
        projectSrcLink: '',
    });
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!tags.includes(tagInput.trim())) {
                setTags([...tags, tagInput.trim()]);
            }
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!image) return setError('Project cover image is required');
        if (tags.length < 4) return setError('At least 4 tags are required for indexing');

        setLoading(true);
        const data = new FormData();
        data.append('projectTitle', formData.projectTitle);
        data.append('projectdesc', formData.projectdesc);
        data.append('projectLink', formData.projectLink);
        data.append('projectSrcLink', formData.projectSrcLink);
        data.append('projectImg', image);
        tags.forEach(tag => data.append('projectTags', tag));

        try {
            await api.post('/projects/create', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/dashboard');
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                setError(error.response?.data || 'Submission failed. Please check your data.');
            } else {
                setError('Submission failed. Please check your data.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-all group font-bold text-sm tracking-widest uppercase">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return to Workspace
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Form Section */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-primary-400 font-black text-xs uppercase tracking-[0.3em] mb-4">
                            <Sparkles size={16} /> New Asset Creation
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tight">Project Genesis</h1>
                        <p className="text-slate-500 text-lg">Define the metadata for your next masterpiece.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="premium-glass p-10 rounded-[3rem] space-y-8 border-slate-800/40">
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-500/10 border border-red-500/20 text-red-400 p-5 rounded-2xl flex items-center gap-4 text-sm font-semibold"
                            >
                                <AlertCircle size={20} />
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Core Identity</label>
                            <input 
                                type="text"
                                required
                                value={formData.projectTitle}
                                onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                                className="w-full bg-slate-950/50 border border-slate-800/50 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none text-lg font-bold placeholder:text-slate-700"
                                placeholder="Project Title"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Narrative</label>
                            <textarea 
                                required
                                value={formData.projectdesc}
                                onChange={(e) => setFormData({...formData, projectdesc: e.target.value})}
                                rows={5}
                                className="w-full bg-slate-950/50 border border-slate-800/50 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none leading-relaxed placeholder:text-slate-700 font-medium"
                                placeholder="Describe the technical challenges and creative vision..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Live Endpoint</label>
                                <input 
                                    type="url"
                                    required
                                    value={formData.projectLink}
                                    onChange={(e) => setFormData({...formData, projectLink: e.target.value})}
                                    className="w-full bg-slate-950/50 border border-slate-800/50 text-slate-300 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none text-sm font-mono"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Source Control</label>
                                <input 
                                    type="url"
                                    value={formData.projectSrcLink}
                                    onChange={(e) => setFormData({...formData, projectSrcLink: e.target.value})}
                                    className="w-full bg-slate-950/50 border border-slate-800/50 text-slate-300 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none text-sm font-mono"
                                    placeholder="GitHub URL"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Tech Stack Tags</label>
                            <div className="w-full bg-slate-950/50 border border-slate-800/50 rounded-2xl p-4 focus-within:ring-2 focus-within:ring-primary-600 transition-all">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tags.map(tag => (
                                        <span key={tag} className="flex items-center gap-2 bg-primary-600/20 text-primary-400 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl border border-primary-600/30">
                                            {tag}
                                            <button type="button" onClick={() => removeTag(tag)} className="hover:text-white transition-colors"><X size={14}/></button>
                                        </span>
                                    ))}
                                </div>
                                <input 
                                    type="text"
                                    onKeyDown={handleAddTag}
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    className="w-full bg-transparent border-none text-white px-2 py-2 outline-none placeholder:text-slate-700 font-bold"
                                    placeholder={tags.length < 4 ? `Add tags (${tags.length}/4 required)...` : "Tag added."}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black hover:bg-primary-600 hover:text-white font-black py-5 rounded-[2rem] shadow-3xl transition-all flex justify-center items-center gap-3 group disabled:opacity-50 text-lg"
                        >
                            {loading ? <span className="loading loading-spinner"></span> : (
                                <>
                                    Finalize Creation
                                    <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Preview Section */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Visual Asset</label>
                        <div 
                            onClick={() => document.getElementById('image-upload')?.click()}
                            className="premium-glass aspect-[4/5] rounded-[3rem] border-2 border-dashed border-slate-800/50 hover:border-primary-600/50 transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-6 group relative"
                        >
                            {preview ? (
                                <>
                                    <img src={preview} className="w-full h-full object-cover p-4 rounded-[3.5rem]" />
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                        <div className="bg-white text-black p-4 rounded-full shadow-2xl">
                                            <Upload size={24} />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center text-slate-600 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-primary-600/20 transition-all duration-500">
                                        <ImageIcon size={32} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-white">Upload Cover Art</p>
                                        <p className="text-sm text-slate-500 mt-2 px-10 leading-relaxed">High-resolution project capture. <br />Supports JPG, PNG, WEBP.</p>
                                    </div>
                                    <div className="mt-4 px-6 py-2 bg-slate-900/50 rounded-full text-[10px] font-black tracking-widest text-slate-600 uppercase border border-slate-800/50">
                                        Recommended: 1200 x 1500
                                    </div>
                                </>
                            )}
                        </div>
                        <input 
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProjectPage;
