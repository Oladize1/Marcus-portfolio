import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api.ts';
import { Image as ImageIcon, Link as LinkIcon, Github, Tag, FolderPlus, Info, CheckCircle2, Edit3, UploadCloud } from 'lucide-react';

const CreateProjectPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const isEditMode = !!id;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingInit, setIsLoadingInit] = useState(isEditMode);
    const [error, setError] = useState<string | null>(null);
    const [tagInput, setTagInput] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
    
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectdesc: '',
        projectLink: '',
        projectSrcLink: '',
        projectTags: [] as string[]
    });

    useEffect(() => {
        if (!isEditMode) return;
        const fetchProject = async () => {
            try {
                const response = await api.get('/projects');
                const projects = Array.isArray(response.data) ? response.data : [];
                const project = projects.find((p: any) => p._id === id);
                if (project) {
                    setFormData({
                        projectTitle: project.projectTitle || project.title || '',
                        projectdesc: project.projectdesc || project.description || '',
                        projectLink: project.projectLink || project.liveUrl || '',
                        projectSrcLink: project.projectSrcLink || project.githubUrl || '',
                        projectTags: Array.isArray(project.projectTags) ? project.projectTags : (project.tags || [])
                    });
                    setExistingImageUrl(project.projectImg || project.imageUrl || null);
                } else {
                    setError('Project not found');
                }
            } catch (err: any) {
                setError('Failed to fetch existing project details');
            } finally {
                setIsLoadingInit(false);
            }
        };
        fetchProject();
    }, [id, isEditMode]);

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTags(tagInput);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        addTags(pastedText);
    };

    const addTags = (inputStr: string) => {
        const newTags = inputStr.split(',').map(t => t.trim()).filter(t => t);
        if (newTags.length > 0) {
            setFormData(prev => {
                const updated = [...prev.projectTags];
                newTags.forEach(t => {
                    if (!updated.includes(t)) updated.push(t);
                });
                return { ...prev, projectTags: updated };
            });
        }
        setTagInput('');
    };

    const removeTag = (tagToRemove: string) => {
        setFormData(prev => ({ ...prev, projectTags: prev.projectTags.filter(t => t !== tagToRemove) }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.projectTags.length < 4) {
            setError('At least 4 tags are required.');
            return;
        }

        if (!isEditMode && !imageFile) {
            setError('An image file is required for new projects.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const data = new FormData();
            data.append('projectTitle', formData.projectTitle);
            data.append('projectdesc', formData.projectdesc);
            if (formData.projectLink) data.append('projectLink', formData.projectLink);
            if (formData.projectSrcLink) data.append('projectSrcLink', formData.projectSrcLink);
            
            formData.projectTags.forEach(tag => {
                data.append('projectTags', tag);
            });

            if (imageFile) {
                data.append('projectImg', imageFile);
            }

            if (isEditMode) {
                await api.put(`/projects/${id}/edit`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await api.post('/projects/create', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            navigate('/dashboard/projects');
        } catch (error: any) {
            setError(error.response?.data || error.response?.data?.message || 'Failed to submit project');
            setIsSubmitting(false);
        }
    };

    if (isLoadingInit) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-10 h-10 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        {isEditMode ? <Edit3 className="text-indigo-500 w-8 h-8" /> : <FolderPlus className="text-indigo-500 w-8 h-8" />}
                        {isEditMode ? 'Edit Project' : 'Publish New Work'}
                    </h1>
                    <p className="text-slate-400 mt-2">
                        {isEditMode ? 'Update the details of your existing project.' : 'Fill in the details below to add a new project to your portfolio.'}
                    </p>
                </div>
            </div>

            {error && (
                <div className="mb-8 bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-400">
                    <Info size={20} />
                    <p className="font-medium text-sm">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                
                {/* Visuals Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
                        <ImageIcon size={18} className="text-indigo-400" />
                        Project Identity
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300">Project Title</label>
                            <input
                                type="text"
                                value={formData.projectTitle}
                                onChange={e => setFormData({ ...formData, projectTitle: e.target.value })}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="e.g. E-Commerce Dashboard"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300 flex items-center justify-between">
                                Project Image 
                                {!imageFile && existingImageUrl && <span className="text-xs text-indigo-400 font-normal">Existing image loaded</span>}
                            </label>
                            <div className="w-full bg-slate-950 border border-slate-800 rounded-lg relative overflow-hidden transition-colors hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 group">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    required={!isEditMode && !imageFile}
                                />
                                <div className="px-4 py-3 flex items-center gap-3 text-slate-400">
                                    <UploadCloud size={20} className="group-hover:text-indigo-400 transition-colors" />
                                    <span className="truncate text-sm">
                                        {imageFile ? imageFile.name : (existingImageUrl ? 'Upload new to replace...' : 'Choose image file...')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Description</label>
                        <textarea
                            value={formData.projectdesc}
                            onChange={e => setFormData({ ...formData, projectdesc: e.target.value })}
                            rows={4}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-y"
                            placeholder="Describe what the project is, the problem it solves, and your role..."
                            required
                        />
                    </div>
                </div>

                {/* Tech & Links Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 border-b border-slate-800 pb-3 pt-4">
                        <LinkIcon size={18} className="text-indigo-400" />
                        Details & Links
                    </h2>

                    <div className="space-y-6">
                        {/* Tags Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <Tag size={14} className="text-slate-400" />
                                    Technologies & Tags
                                </span>
                                <span className={`text-xs ${formData.projectTags.length < 4 ? 'text-red-400' : 'text-emerald-400'}`}>
                                    {formData.projectTags.length}/4 minimum required
                                </span>
                            </label>
                            
                            <div className="bg-slate-950 border border-slate-800 rounded-lg min-h-[52px] p-2 flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-colors">
                                {(formData.projectTags ?? []).map(tag => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium rounded-md">
                                        {tag}
                                        <button 
                                            type="button" 
                                            onClick={() => removeTag(tag)}
                                            className="text-slate-400 hover:text-red-400 focus:outline-none"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={e => setTagInput(e.target.value)}
                                    onKeyDown={handleAddTag}
                                    onPaste={handlePaste}
                                    className="flex-1 min-w-[120px] bg-transparent border-none text-white placeholder-slate-500 focus:outline-none focus:ring-0 text-sm py-1 px-2"
                                    placeholder={formData.projectTags.length === 0 ? "Type a tag and press Enter" : "Add another..."}
                                />
                            </div>
                        </div>

                        {/* URLs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <Github size={14} className="text-slate-400" />
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.projectSrcLink}
                                    onChange={e => setFormData({ ...formData, projectSrcLink: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                    placeholder="https://github.com/..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <LinkIcon size={14} className="text-slate-400" />
                                    Live Demo URL
                                </label>
                                <input
                                    type="url"
                                    value={formData.projectLink}
                                    onChange={e => setFormData({ ...formData, projectLink: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                    placeholder="https://..."
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Area */}
                <div className="pt-6 border-t border-slate-800 mt-8 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/dashboard/projects')}
                        className="px-6 py-2.5 rounded-lg font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2.5 rounded-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-md shadow-indigo-600/20 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isSubmitting ? (isEditMode ? 'Updating...' : 'Publishing...') : (
                            <>
                                {isEditMode ? <Edit3 size={18} /> : <CheckCircle2 size={18} />}
                                {isEditMode ? 'Save Changes' : 'Publish Project'}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProjectPage;
