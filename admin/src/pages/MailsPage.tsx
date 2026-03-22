import { useEffect, useState } from 'react';
import api from '../services/api.ts';
import { motion } from 'framer-motion';
import { Mail, Search, Trash2, Calendar, User, AtSign, Filter, ChevronRight, MessageSquare, AtSign as AtIcon } from 'lucide-react';

const MailsPage = () => {
    const [mails, setMails] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchMails = async () => {
            try {
                const response = await api.get('/mail');
                setMails(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Workspace sync error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMails();
    }, []);

    const deleteMail = async (id: string) => {
        if (!window.confirm('Archive this conversation?')) return;
        try {
            await api.delete(`/mail/${id}`);
            setMails(mails.filter(m => m._id !== id));
        } catch (error) {
            alert('Failed to archive message');
        }
    };

    const filteredMails = Array.isArray(mails) ? mails.filter(m => 
        m.fullname?.toLowerCase().includes(search.toLowerCase()) ||
        m.subject?.toLowerCase().includes(search.toLowerCase()) ||
        m.email?.toLowerCase().includes(search.toLowerCase())
    ) : [];

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-96 space-y-6">
            <div className="w-16 h-16 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
            <p className="text-sm font-black text-zinc-500 tracking-[0.3em] uppercase">Opening Inbox...</p>
        </div>
    );

    return (
        <div className="space-y-16">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 shadow-inner">
                            <Mail size={24} />
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tight">Collaborations</h1>
                    </div>
                    <p className="text-zinc-500 text-sm font-medium">Coordinate with potential clients and stakeholders.</p>
                </div>

                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-violet-400 transition-colors" size={20} />
                    <input 
                        type="text"
                        placeholder="Filter by sender or subject..."
                        className="input-modern w-full pl-12 pr-4"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </header>

            <div className="space-y-4">
                {filteredMails.length === 0 ? (
                    <div className="py-32 text-center bg-[#0c0c0e] rounded-[32px] border border-zinc-900 border-dashed">
                        <div className="w-20 h-20 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-700 mb-6 border border-zinc-800 shadow-inner">
                            <MessageSquare size={32} />
                        </div>
                        <p className="text-zinc-500 font-black uppercase tracking-widest">Inbox is Vacant</p>
                    </div>
                ) : (
                    filteredMails.map((mail, index) => (
                        <motion.div 
                            key={mail._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#0c0c0e] hover:bg-[#111114] border border-zinc-900 hover:border-violet-500/30 rounded-2xl p-6 transition-all group flex flex-col md:flex-row md:items-center gap-8"
                        >
                            <div className="flex items-center gap-4 md:w-64 shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-black text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                    {mail.fullname?.charAt(0)}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-black text-white truncate">{mail.fullname}</span>
                                    <span className="text-[10px] text-zinc-500 font-bold tracking-widest truncate">{mail.email}</span>
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-black text-zinc-200 uppercase tracking-wide mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                    {mail.subject}
                                </h3>
                                <p className="text-sm text-zinc-500 italic line-clamp-2 leading-relaxed">
                                    "{mail.message}"
                                </p>
                            </div>

                            <div className="flex items-center gap-8 shrink-0">
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Received</span>
                                    <span className="text-xs font-bold text-zinc-400">
                                        {new Date(mail.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>
                                <div className="h-8 w-[1px] bg-zinc-800" />
                                <button 
                                    onClick={() => deleteMail(mail._id)}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-700 hover:text-red-400 hover:bg-red-400/10 transition-all border border-transparent hover:border-red-500/20"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MailsPage;
