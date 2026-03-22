import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.ts';
import { FolderGit2, Calendar, Mail, ArrowRight, Clock } from 'lucide-react';

type MailItem = {
    _id: string;
    fullname?: string;
    name?: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
};

const DashboardPage = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const [messagesCount, setMessagesCount] = useState(0);
    const [recentMails, setRecentMails] = useState<MailItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, mailsRes] = await Promise.all([
                    api.get('/projects'),
                    api.get('/mail')
                ]);
                setProjectsCount(Array.isArray(projectsRes.data) ? projectsRes.data.length : 0);
                
                const mails = Array.isArray(mailsRes.data) ? mailsRes.data : [];
                setMessagesCount(mails.length);
                setRecentMails(mails.slice(0, 5)); // Get top 5 recent messages
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const displayName = (mail: MailItem) => mail.fullname || mail.name || 'Unknown';

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse">
                <div className="flex justify-between items-center">
                    <div className="h-8 bg-slate-800 rounded w-48"></div>
                    <div className="h-10 bg-slate-800 rounded w-32"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl h-24"></div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl h-24"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl h-80"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header & Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
                    <p className="text-slate-400 mt-1">Manage all your portfolio projects in one place.</p>
                </div>
                <Link
                    to="/dashboard/projects"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-5 rounded-lg border border-slate-700 transition-colors shadow-sm"
                >
                    <FolderGit2 size={18} />
                    Manage Projects
                </Link>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center border-l-4 border-l-indigo-500 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-xl">
                            <FolderGit2 className="text-indigo-500 w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400">Total Projects</p>
                            <h3 className="text-3xl font-bold text-white tracking-tight">{projectsCount}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center border-l-4 border-l-purple-500 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl">
                            <Calendar className="text-purple-500 w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400">Total Messages</p>
                            <h3 className="text-3xl font-bold text-white tracking-tight">{messagesCount}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Messages Section */}
            <div>
                <div className="flex items-center justify-between mb-6 border-b border-slate-800/50 pb-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Clock className="text-slate-400 w-5 h-5" />
                        Recent Messages
                    </h2>
                    <Link 
                        to="/dashboard/mails"
                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                    >
                        View all <ArrowRight size={14} />
                    </Link>
                </div>

                {recentMails.length === 0 ? (
                    <div className="bg-slate-900 border border-slate-800 border-dashed rounded-2xl p-8 text-center">
                        <Mail className="text-slate-500 w-8 h-8 mx-auto mb-3" />
                        <p className="text-slate-400 font-medium text-sm">No recent messages found.</p>
                    </div>
                ) : (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <div className="divide-y divide-slate-800/50">
                            {recentMails.map((mail) => (
                                <Link 
                                    key={mail._id} 
                                    to="/dashboard/mails"
                                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/20 transition-colors group block"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                            <span className="text-slate-300 font-semibold text-sm">
                                                {displayName(mail).charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-0.5 group-hover:text-indigo-400 transition-colors">
                                                {displayName(mail)}
                                            </h4>
                                            <p className="text-slate-400 text-xs truncate max-w-[200px] sm:max-w-xs cursor-pointer">
                                                {mail.subject}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium shrink-0 flex items-center gap-1.5 sm:ml-auto">
                                        <Calendar size={13} />
                                        {new Date(mail.createdAt).toLocaleDateString(undefined, { 
                                            month: 'short', day: 'numeric'
                                        })}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
