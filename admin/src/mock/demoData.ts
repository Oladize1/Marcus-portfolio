export const mockDB = {
    projects: [
        {
            _id: "demo-proj-1",
            projectTitle: "FinTech Dashboard Pro",
            projectdesc: "A fully responsive, unified financial dashboard built for scale. Featuring real-time data visualization, dark mode, and seamless wallet integration.",
            projectLink: "https://demo.example.com",
            projectSrcLink: "https://github.com/",
            projectTags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
            projectImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "demo-proj-2",
            projectTitle: "AI Content Generator",
            projectdesc: "Harnesses the power of LLMs to generate high-quality blog posts and marketing copy in seconds. Built with a minimalist, high-performance UI.",
            projectLink: "https://demo.example.com/ai",
            projectSrcLink: "https://github.com/",
            projectTags: ["Next.js", "OpenAI", "Framer Motion"],
            projectImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000",
            createdAt: new Date().toISOString(),
        }
    ],

    mails: [
        {
            _id: "demo-mail-1",
            fullname: "Sarah Jenkins",
            name: "Sarah Jenkins",
            email: "sarah.jenkins@startup.co",
            subject: "We'd love to hire you!",
            message: "Hi Marcus, I reviewed your stunning portfolio and would love to discuss a Senior Frontend Developer role at our startup. Let me know when you're free for a quick chat.",
            createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
            _id: "demo-mail-2",
            fullname: "David Chen",
            name: "David Chen",
            email: "david@designagency.dev",
            subject: "Freelance Project Inquiry",
            message: "Hello! We are an agency looking to revamp our client's SaaS dashboard and your style is exactly what we need. Are you open to freelance projects this month?",
            createdAt: new Date(Date.now() - 172800000).toISOString(),
        }
    ]
};
