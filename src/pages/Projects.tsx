import Marquee from 'react-fast-marquee'
import { FiExternalLink, FiLock } from 'react-icons/fi'
import { Link } from 'react-router'

type ProjectType = 'featured' | 'backend' | 'fullstack' | 'side'
type DeploymentType = 'Production' | 'Internal' | 'Demo'

interface Project {
    title: string
    slug: string
    description: string
    tech: string[]
    link: string
    date: string
    type: ProjectType
    role: string
    isPrivate: boolean
    deployment: DeploymentType
    highlight?: string[]
    thumbnail?: string
}

const projects: Project[] = [
    {
        title: 'Victoire LMS',
        slug: 'victoire-lms',
        description: 'Comprehensive Learning Management System with AI-powered voice scoring.',
        tech: ['Laravel', 'React', 'Antd', 'Tailwind', 'Pusher', 'Gemini', 'Ollama'],
        link: 'https://lms.phapnguvictoire.com',
        date: '08/2025 - 03/2026',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Built comprehensive LMS with role-based management',
            'Integrated AI voice scoring using Gemini and Ollama',
            'Real-time features with Pusher',
        ],
    },
    {
        title: 'Rose DAO',
        slug: 'rose-dao',
        description: 'eCommerce platform with Laravel GraphQL backend and Nuxt.js frontend.',
        tech: ['Laravel', 'GraphQL', 'Nuxt.js', 'Vue.js', 'Zod', 'Zustand', 'TanStack', 'PrimeVue'],
        link: 'https://rosedao.vn',
        date: '11/2025 - 12/2025',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Flexible GraphQL API layer with Laravel',
            'Performant Nuxt.js storefront',
            'Robust Admin CMS with Vue.js',
        ],
    },
    {
        title: 'Thế giới túi vải',
        slug: 'the-gioi-tui-vai',
        description: 'B2B eCommerce platform for wholesale canvas bags with performance optimization.',
        tech: ['WordPress', 'Elementor Pro', 'ACF Pro'],
        link: 'https://thegioituivai.com',
        date: '06/2025 - 07/2025',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Custom B2B eCommerce functionalities',
            'Dynamic layouts with ACF Pro',
            'High performance optimization',
        ],
    },
    {
        title: 'POS System',
        slug: 'pos-system',
        description: 'Scalable RESTful POS system with Golang backend and React frontend.',
        tech: ['Golang', 'RESTful API', 'React', 'Next.js', 'Redux', 'TanStack'],
        link: '#',
        date: 'Ongoing',
        type: 'featured',
        role: 'Backend Developer',
        isPrivate: true,
        deployment: 'Internal',
        highlight: [
            'Scalable backend services with Golang',
            'RESTful APIs for multi-platform clients',
            'High performance for real-time workflows',
        ],
    },
    {
        title: 'Nexon7 Corporate Gifts',
        slug: 'nexon7-corporate-gifts',
        description: 'Decoupled e-commerce platform with GraphQL APIs and Next.js storefront.',
        tech: ['Laravel', 'GraphQL', 'Next.js', 'Vue.js', 'MySQL'],
        link: 'https://nexon7.vn',
        date: 'Ongoing',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Headless eCommerce system',
            'GraphQL API layer with Laravel',
            'SSR frontend for SEO',
        ],
    },
    {
        title: 'Dermat.vn',
        slug: 'dermat-vn',
        description: 'Headless eCommerce with WordPress CMS and Astro ultra-fast frontend.',
        tech: ['WordPress', 'GraphQL', 'Astro', 'React'],
        link: 'https://dermat.vn',
        date: '03/2026 - 04/2026',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Headless CMS architecture',
            'Ultra-fast Astro frontend',
            'High performance metrics',
        ],
    },
    {
        title: 'KFC Survey System',
        slug: 'kfc-survey-system',
        description: 'Nationwide data collection platform for KFC Vietnam with PDF reports.',
        tech: ['Laravel', 'Vue.js', 'Docker', 'MySQL'],
        link: '#',
        date: '10/2025 - 11/2025',
        type: 'featured',
        role: 'Backend Developer',
        isPrivate: true,
        deployment: 'Internal',
        highlight: [
            'Complex data aggregation logic',
            'Automated YoY PDF reports',
            'Dockerized stack',
        ],
    },
    {
        title: 'AI Chatbot System',
        slug: 'ai-chatbot-system',
        description: 'Real-time communication platform with Gemini AI integration.',
        tech: ['NestJS', 'Next.js', 'Gemini AI', 'TypeScript'],
        link: '#',
        date: '2025',
        type: 'side',
        role: 'Fullstack Developer',
        isPrivate: true,
        deployment: 'Demo',
    },
    {
        title: 'TOEIC Mastery Course',
        slug: 'toeic-mastery-course',
        description: 'Educational platform for TOEIC preparation with interactive materials.',
        tech: ['React', 'Tailwind', 'Next.js'],
        link: 'https://edu-pham-hoang-phuc.id.vn/',
        date: '02/2025',
        type: 'side',
        role: 'Frontend Developer',
        isPrivate: false,
        deployment: 'Production',
    },
    {
        title: 'Ecommerce API & CMS',
        slug: 'ecommerce-api-cms',
        description: 'Comprehensive API and Admin CMS for multi-platform eCommerce.',
        tech: ['Laravel', 'MySQL', 'React', 'Expo'],
        link: 'https://gitlab.com/ecom-api-app-cms',
        date: '01/2025 - 02/2025',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'VisonLand Real Estate',
        slug: 'visonland-real-estate',
        description: 'Real estate API and CMS with payment and affiliate tracking.',
        tech: ['Laravel', 'MySQL', 'Postman'],
        link: 'https://github.com/pbao9/VisonLandAffiliate',
        date: '09/2024 - 11/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'VipFishing Booking',
        slug: 'vipfishing-booking',
        description: 'Fishing spot management system with events and referrals.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://github.com/pbao9/VipFishing',
        date: '06/2024 - 09/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'Devro Ecommerce',
        slug: 'devro-ecommerce',
        description: 'eCommerce platform with VNPay payment gateway integration.',
        tech: ['Laravel', 'Livewire', 'Tailwind'],
        link: 'https://demo.baro-dev.io.vn/',
        date: '04/2024',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'Lafresh Ecommerce',
        slug: 'lafresh-ecommerce',
        description: 'eCommerce API for beverage products with promotional engine.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://github.com/pbao9/Lafresh-Ecommerce',
        date: '01/2024 - 04/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'School Transport Booking',
        slug: 'school-transport-booking',
        description: 'Transportation management and booking API for school services.',
        tech: ['Laravel', 'MySQL'],
        link: 'http://babi2school.com.vn/',
        date: '01/2024 - 03/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
    },
    {
        title: 'VietHouse Rentals',
        slug: 'viethouse-rentals',
        description: 'Real estate rental platform for premium apartments and offices.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://viethousephumyhung.com/',
        date: '11/2023 - 01/2024',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
    },
]

function ProjectCard({ project }: { project: Project }) {
    const isNDA = project.link === '#' || project.isPrivate

    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group flex flex-col w-[320px] mx-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-all duration-300 cursor-pointer shrink-0"
        >
            <div className="relative h-44 overflow-hidden bg-white/5 rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-white/5 group-hover:from-accent/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-jetbrains-mono font-semibold text-white/10 group-hover:text-accent/20 transition-colors">
                        {project.title.charAt(0)}
                    </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                    {isNDA && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500/60 flex items-center gap-1">
                            <FiLock size={8} /> NDA
                        </span>
                    )}
                    {project.deployment === 'Production' && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/60">
                            Prod
                        </span>
                    )}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-jetbrains-mono text-sm font-medium text-white/80 group-hover:text-accent transition-colors truncate pr-2">
                        {project.title}
                    </h3>
                    {!isNDA && (
                        <FiExternalLink size={14} className="text-white/20 group-hover:text-accent transition-colors shrink-0 mt-1" />
                    )}
                </div>

                <p className="text-xs text-white/30 mb-3 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 4).map((t, i) => (
                        <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/30 font-jetbrains-mono"
                        >
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="text-[10px] text-white/20">+{project.tech.length - 4}</span>
                    )}
                </div>
            </div>
        </Link>
    )
}

const Projects = () => {
    const row1 = projects.filter((_, i) => i % 2 === 0)
    const row2 = projects.filter((_, i) => i % 2 === 1)

    return (
        <section className="py-16">
            <div className="mb-10">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// Portfolio</p>
                <h2 className="font-jetbrains-mono font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    Recent Projects &<br />
                    <span className="text-white/40">Achievements</span>
                </h2>
                <p className="text-white/50 max-w-2xl leading-relaxed">
                    Most projects were independently developed and deployed in real-world environments.
                    Due to NDA constraints, some source code or domains cannot be publicly shared.
                </p>
            </div>

            <div className="space-y-4">
                <div className="overflow-hidden">
                    <Marquee gradient={true} gradientColor="#1a1a1a" gradientWidth={100} speed={25} pauseOnHover>
                        {row1.map((project, i) => (
                            <ProjectCard key={`row1-${i}`} project={project} />
                        ))}
                    </Marquee>
                </div>

                <div className="overflow-hidden">
                    <Marquee gradient={true} gradientColor="#1a1a1a" gradientWidth={100} speed={25} direction="right" pauseOnHover>
                        {row2.map((project, i) => (
                            <ProjectCard key={`row2-${i}`} project={project} />
                        ))}
                    </Marquee>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/projects-list"
                    className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-accent transition-colors"
                >
                    View all projects
                    <FiExternalLink size={14} />
                </Link>
            </div>
        </section>
    )
}

export default Projects
