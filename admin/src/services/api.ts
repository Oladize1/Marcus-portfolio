import axios from 'axios';
import { mockDB } from '../mock/demoData';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  withCredentials: true,
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const handleMockRequest = async (method: string, url: string, data?: any) => {
    await delay(300); // Realistic network delay
    const path = url.replace(api.defaults.baseURL || '', '');

    if (path.includes('/projects')) {
        if (method === 'get') return { data: mockDB.projects };
        if (method === 'post') {
            const formData = data as FormData | any;
            const newProject = {
                _id: 'demo-proj-' + Date.now(),
                projectTitle: formData?.get ? formData.get('projectTitle') : (data?.projectTitle || 'Demo Project'),
                projectdesc: formData?.get ? formData.get('projectdesc') : (data?.projectdesc || 'Description'),
                projectLink: formData?.get ? formData.get('projectLink') : (data?.projectLink || '#'),
                projectSrcLink: formData?.get ? formData.get('projectSrcLink') : (data?.projectSrcLink || '#'),
                projectTags: formData?.getAll ? formData.getAll('projectTags') : (data?.projectTags || ['Demo']),
                projectImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
                createdAt: new Date().toISOString(),
            };
            mockDB.projects.unshift(newProject);
            return { data: newProject };
        }
        if (method === 'put') {
            const id = path.split('/').slice(-2)[0] === 'projects' ? path.split('/').pop() : path.split('/')[2];
            const index = mockDB.projects.findIndex(p => p._id === id);
            if (index !== -1) {
                const formData = data as FormData | any;
                if (formData?.get) {
                    if (formData.get('projectTitle')) mockDB.projects[index].projectTitle = formData.get('projectTitle') as string;
                    if (formData.get('projectdesc')) mockDB.projects[index].projectdesc = formData.get('projectdesc') as string;
                } else if (data) {
                    Object.assign(mockDB.projects[index], data);
                }
                return { data: mockDB.projects[index] };
            }
        }
        if (method === 'delete') {
            const id = path.split('/').slice(-2)[0]; // e.g. /projects/123/delete
            mockDB.projects = mockDB.projects.filter((p: any) => p._id !== id);
            return { data: { message: "Deleted" } };
        }
    }

    if (path.includes('/mail')) {
        if (method === 'get') return { data: mockDB.mails };
        if (method === 'delete') {
            const id = path.split('/').slice(-2)[0];
            mockDB.mails = mockDB.mails.filter((m: any) => m._id !== id);
            return { data: { message: "Deleted" } };
        }
    }

    if (path.includes('/admin/me')) return { data: { role: 'demo' } };
    if (path.includes('/admin/logout')) return { data: { success: true } };

    return { data: {} };
};

const originalGet = api.get;
const originalPost = api.post;
const originalPut = api.put;
const originalDelete = api.delete;

api.get = async function (url: string, config?: any) {
    if (localStorage.getItem('isDemoMode') === 'true') {
        const res = await handleMockRequest('get', url);
        return { ...res, status: 200, statusText: 'OK', headers: {}, config: config || {} } as any;
    }
    return originalGet.apply(this, [url, config]);
};

api.post = async function (url: string, data?: any, config?: any) {
    if (localStorage.getItem('isDemoMode') === 'true') {
        const res = await handleMockRequest('post', url, data);
        return { ...res, status: 200, statusText: 'OK', headers: {}, config: config || {} } as any;
    }
    return originalPost.apply(this, [url, data, config]);
};

api.put = async function (url: string, data?: any, config?: any) {
    if (localStorage.getItem('isDemoMode') === 'true') {
        const res = await handleMockRequest('put', url, data);
        return { ...res, status: 200, statusText: 'OK', headers: {}, config: config || {} } as any;
    }
    return originalPut.apply(this, [url, data, config]);
};

api.delete = async function (url: string, config?: any) {
    if (localStorage.getItem('isDemoMode') === 'true') {
        const res = await handleMockRequest('delete', url);
        return { ...res, status: 200, statusText: 'OK', headers: {}, config: config || {} } as any;
    }
    return originalDelete.apply(this, [url, config]);
};

export default api;
