import { useEffect, useState } from 'react';
import api from '../services/api.ts';
import { Mail, Search, Eye, Trash2, X, AlertCircle } from 'lucide-react';

type MailItem = {
    _id: string;
    fullname: string;
    name?: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
};

const MailsPage = () => {
    const [mails, setMails] = useState<MailItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [viewMail, setViewMail] = useState<MailItem | null>(null);

    useEffect(() => {
        const fetchMails = async () => {
            try {
                const response = await api.get('/mail');
                setMails(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Failed to fetch mail:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMails();
    }, []);

    const deleteMail = async (id: string) => {
        if (!window.confirm('Delete this message permanently?')) return;
        try {
            await api.delete(`/mail/${id}`);
            setMails(prev => prev.filter(m => m._id !== id));
            if (viewMail?._id === id) setViewMail(null);
        } catch {
            alert('Could not delete. Please try again.');
        }
    };

    const displayName = (mail: MailItem) => mail.fullname || mail.name || 'Unknown';

    const filtered = (mails ?? []).filter(m => {
        const q = search.toLowerCase();
        return (
            displayName(m).toLowerCase().includes(q) ||
            m.email?.toLowerCase().includes(q) ||
            m.subject?.toLowerCase().includes(q)
        );
    });

    return (
        <div className="space-y-6">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        <Mail className="text-indigo-500 w-8 h-8" />
                        Messages
                    </h1>
                    <p className="text-slate-400 mt-1">
                        Inbox from your portfolio contact form
                    </p>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Search messages..."
                    />
                </div>
            </div>

            {/* Stat Badge */}
            {!loading && (
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">
                        <Mail size={14} />
                        {filtered.length} {filtered.length === 1 ? 'Message' : 'Messages'}
                    </span>
                    {search && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-sm font-medium">
                            Filtered results
                        </span>
                    )}
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden animate-pulse">
                    <div className="h-14 bg-slate-800/50 border-b border-slate-800"></div>
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-16 border-b border-slate-800/50"></div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && filtered.length === 0 && (
                <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="text-slate-400 w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">No messages found</h2>
                    <p className="text-slate-400">
                        {search ? `Nothing matches your search "${search}"` : "You don't have any messages yet."}
                    </p>
                </div>
            )}

            {/* Table */}
            {!loading && filtered.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-300">
                            <thead className="bg-slate-800/50 text-xs uppercase text-slate-400 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Name</th>
                                    <th className="px-6 py-4 font-medium">Email</th>
                                    <th className="px-6 py-4 font-medium">Subject</th>
                                    <th className="px-6 py-4 font-medium">Date</th>
                                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {(filtered ?? []).map((mail) => (
                                    <tr key={mail._id} className="hover:bg-slate-800/20 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">
                                            {displayName(mail)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                                            {mail.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-slate-300">
                                            {mail.subject.length > 40 ? `${mail.subject.substring(0, 40)}...` : mail.subject}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                                            {new Date(mail.createdAt).toLocaleDateString(undefined, { 
                                                month: 'short', day: 'numeric', year: 'numeric' 
                                            })}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setViewMail(mail)}
                                                    className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                                                    title="View Message"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button
                                                    onClick={() => deleteMail(mail._id)}
                                                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                                    title="Delete Message"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* View Message Modal */}
            {viewMail && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <div 
                        className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-800/30">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Mail className="text-indigo-400 w-5 h-5" />
                                Message Details
                            </h3>
                            <button 
                                onClick={() => setViewMail(null)}
                                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto flex-1 space-y-6">
                            {/* Meta Info */}
                            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                                <div className="flex">
                                    <span className="w-20 text-slate-500 text-sm font-medium">From:</span>
                                    <span className="text-white font-medium">{displayName(viewMail)}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-20 text-slate-500 text-sm font-medium">Email:</span>
                                    <a href={`mailto:${viewMail.email}`} className="text-indigo-400 hover:underline">
                                        {viewMail.email}
                                    </a>
                                </div>
                                <div className="flex">
                                    <span className="w-20 text-slate-500 text-sm font-medium">Date:</span>
                                    <span className="text-slate-300">
                                        {new Date(viewMail.createdAt).toLocaleString(undefined, { 
                                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                        })}
                                    </span>
                                </div>
                                <div className="flex pt-3 mt-3 border-t border-slate-800">
                                    <span className="w-20 text-slate-500 text-sm font-medium">Subject:</span>
                                    <span className="text-white font-bold">{viewMail.subject}</span>
                                </div>
                            </div>

                            {/* Message Content */}
                            <div>
                                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Message</h4>
                                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-800">
                                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {viewMail.message}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    deleteMail(viewMail._id);
                                }}
                                className="px-4 py-2 font-medium text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                            <a
                                href={`mailto:${viewMail.email}?subject=Re: ${encodeURIComponent(viewMail.subject)}`}
                                className="px-5 py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                            >
                                Reply
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MailsPage;
