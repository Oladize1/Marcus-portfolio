import { useEffect, useState } from 'react';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { Trash2, Calendar, User, AtSign, Inbox, Search, Clock, MailOpen, ChevronRight } from 'lucide-react';

const MailsPage = () => {
    const [mails, setMails] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMails = async () => {
        try {
            const response = await api.get('/mail');
            if (Array.isArray(response.data)) {
                setMails(response.data);
            } else {
                setMails([]);
            }
        } catch (error) {
            console.error('Failed to fetch mails', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMails();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm('Archive this message permanently?')) return;
        try {
            await api.delete(`/mail/${id}/delete_email`);
            setMails(mails.filter(m => m._id !== id));
        } catch (error) {
            alert('Operation failed.');
        }
    };

    const filteredMails = mails.filter(mail => 
        mail.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mail.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mail.message?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className="flex justify-center items-center h-[50vh]">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-bars loading-lg text-primary-500"></span>
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">Retrieving Messages...</span>
            </div>
        </div>
    );

    return (
        <div className="space-y-12 pb-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 text-white">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black tracking-tight">Communication</h1>
                    <p className="text-slate-500 text-lg">Your nexus for project inquiries and networking.</p>
                </div>
                
                <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary-400 transition-colors" size={20} />
                    <input 
                        type="text"
                        placeholder="Filter inbox..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white pl-14 pr-6 py-4 rounded-[1.5rem] focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all font-bold placeholder:text-slate-700"
                    />
                </div>
            </div>

            {filteredMails.length === 0 ? (
                <div className="premium-glass p-24 rounded-[3rem] text-center space-y-6 border-slate-900">
                    <div className="w-24 h-24 bg-primary-600/10 rounded-full flex items-center justify-center mx-auto text-primary-500">
                        <Inbox size={48} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Workspace Zero</h3>
                        <p className="text-slate-400 max-w-sm mx-auto">No unread messages. Your inbox is clean and organized.</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {filteredMails.map((mail, index) => (
                        <motion.div
                            key={mail._id}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="premium-glass p-8 rounded-[2.5rem] border border-slate-800/40 hover:border-primary-600/30 transition-all group relative overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-primary-600/20 group-hover:bg-primary-600 transition-colors duration-500" />
                            
                            <div className="flex flex-col xl:flex-row justify-between gap-10">
                                <div className="space-y-6 flex-1">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-xs font-black text-white capitalize">
                                                {mail.name.charAt(0)}
                                            </div>
                                            <span className="font-bold text-white">{mail.name}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-slate-500 bg-slate-900/40 px-4 py-2 rounded-2xl border border-slate-800/50 text-xs font-bold font-mono uppercase tracking-widest">
                                            <AtSign size={14} className="text-primary-500/60" />
                                            {mail.email}
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-600 bg-slate-900/40 px-4 py-2 rounded-2xl border border-slate-800/50 text-xs font-bold uppercase tracking-widest ml-auto xl:ml-0">
                                            <Clock size={14} />
                                            {new Date(mail.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors flex items-center gap-3">
                                            {mail.subject}
                                            <MailOpen size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary-500" />
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed whitespace-pre-wrap max-w-4xl text-lg font-medium italic">
                                            "{mail.message}"
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex xl:flex-col justify-end gap-3 shrink-0 self-end xl:self-start">
                                    <button 
                                        onClick={() => handleDelete(mail._id)}
                                        className="p-5 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white rounded-[1.5rem] transition-all duration-300 shadow-lg shadow-red-500/5 transform hover:scale-105"
                                        title="Send to Trash"
                                    >
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MailsPage;
