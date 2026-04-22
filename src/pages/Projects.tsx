import { Helmet } from 'react-helmet-async';
import { FiExternalLink, FiLock, FiCheckCircle } from 'react-icons/fi';
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText';

type ProjectType = 'featured' | 'backend' | 'fullstack' | 'side';
type DeploymentType = 'Production' | 'Internal' | 'Demo';

interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    date: string;
    type: ProjectType;
    role: string;
    isPrivate: boolean;
    deployment: DeploymentType;
    highlight?: string[];
    metrics?: string[];
}

const projects: Project[] = [
    {
        title: 'POS System',
        description:
            'Scalable RESTful POS system handling product management, order processing, and checkout workflows. Architected for high performance and seamless integration with multiple clients.',
        tech: ['Golang', 'RESTful API', 'React', 'Next.js', 'Redux', 'TanStack'],
        link: '#',
        date: 'Ongoing',
        type: 'featured',
        role: 'Backend Developer',
        isPrivate: true,
        deployment: 'Internal',
        highlight: [
            'Architected scalable backend services with Golang',
            'Implemented RESTful APIs for multi-platform clients',
            'Ensured high performance for real-time workflows',
        ],
    },
    {
        title: 'Nexon7 Corporate Gifts',
        description:
            'Decoupled e-commerce platform for corporate gifting. Built flexible GraphQL APIs to power an SSR-optimized Next.js storefront and a Vue.js CMS.',
        tech: ['Laravel', 'GraphQL', 'Next.js', 'Vue.js', 'MySQL'],
        link: 'https://nexon7.vn',
        date: 'Ongoing',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Architected Headless eCommerce system',
            'Developed flexible GraphQL API layer with Laravel',
            'Optimized SSR frontend for SEO and Core Web Vitals',
        ],
    },
    {
        title: 'Dermat.vn',
        description:
            'Headless eCommerce architecture utilizing WordPress as a CMS and Astro for an ultra-fast frontend, delivering exceptional Core Web Vitals.',
        tech: ['WordPress', 'GraphQL', 'Astro', 'React'],
        link: 'https://dermat.vn',
        date: '03/2026 - 04/2026',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Implemented Headless CMS architecture with GraphQL',
            'Built ultra-fast static frontend with Astro',
            'Achieved high performance and SEO metrics',
        ],
    },
    {
        title: 'KFC Survey System',
        description:
            'Nationwide data collection and analysis platform for KFC Vietnam staff. Containerized system generating complex YoY comparative PDF reports.',
        tech: ['Laravel', 'Vue.js', 'Docker', 'MySQL'],
        link: '#',
        date: '10/2025 - 11/2025',
        type: 'featured',
        role: 'Backend Developer',
        isPrivate: true,
        deployment: 'Internal',
        highlight: [
            'Engineered complex data aggregation logic',
            'Automated YoY comparison PDF report generation',
            'Dockerized entire stack for consistent deployments',
        ],
    },
    {
        title: 'AI Chatbot System',
        description:
            'Intelligent real-time communication platform integrating Gemini AI for natural language processing.',
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
        description:
            'Educational platform for TOEIC preparation with interactive course materials.',
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
        description: 'Comprehensive API and Admin CMS for a multi-platform eCommerce solution.',
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
        description:
            'Real estate API and CMS with payment integration and affiliate commission tracking.',
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
        description:
            'Management system for fishing spots including event management and referral features.',
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
        description: 'Streamlined eCommerce platform featuring VNPay payment gateway integration.',
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
        description:
            'Specialized eCommerce API for beverage products with a custom promotional engine.',
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
        description: 'Transportation management and booking API tailored for school services.',
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
        description: 'Real estate rental platform for premium apartments and office spaces.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://viethousephumyhung.com/',
        date: '11/2023 - 01/2024',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
    },
];

const Projects = () => {
    const featuredProjects = projects.filter((p) => p.type === 'featured');
    const otherProjects = projects.filter((p) => p.type !== 'featured');

    return (
        <div className="container mx-auto px-4 animate-fade-down pb-20">
            <Helmet>
                <title>Baro | Projects</title>
            </Helmet>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 theme-text">
                Recent Projects and
                <br className="hidden sm:block" />
                <ShinyText
                    text="Achievements"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </h1>

            <p className="text-base md:text-lg theme-text-secondary max-w-3xl mb-12 leading-relaxed">
                Most projects were independently developed and deployed in real-world environments.
                Due to NDA constraints, some source code or domains cannot be publicly shared.
            </p>

            {/* Featured Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {featuredProjects.map((project, index) => {
                    const isNDA = project.link === '#' || project.isPrivate;
                    const CardElement = isNDA ? 'div' : 'a';

                    return (
                        <CardElement
                            key={index}
                            href={isNDA ? undefined : project.link}
                            target={isNDA ? undefined : '_blank'}
                            rel={isNDA ? undefined : 'noopener noreferrer'}
                            className={`group flex flex-col h-full border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 bg-white/[0.01] ${
                                isNDA
                                    ? 'cursor-default'
                                    : 'hover:border-green-custom/50 hover:bg-white/[0.03] hover:-translate-y-1'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3
                                        className={`text-xl md:text-2xl font-semibold theme-text mb-2 ${
                                            !isNDA &&
                                            'group-hover:text-green-custom transition-colors'
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <div className="text-sm text-green-custom/80 font-mono mb-4">
                                        {project.role}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {isNDA && (
                                        <span className="text-xs px-2.5 py-1 rounded border border-yellow-500/30 text-yellow-500/80 bg-yellow-500/5 font-medium flex items-center gap-1.5 whitespace-nowrap">
                                            <FiLock size={12} /> NDA
                                        </span>
                                    )}
                                    {project.deployment === 'Production' && (
                                        <span className="text-xs px-2.5 py-1 rounded border border-green-500/30 text-green-500/80 bg-green-500/5 font-medium whitespace-nowrap">
                                            Production
                                        </span>
                                    )}
                                    {!isNDA && (
                                        <div className="p-2 rounded-full bg-white/5 text-theme-text-secondary group-hover:bg-green-custom/10 group-hover:text-green-custom transition-colors shrink-0">
                                            <FiExternalLink size={16} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm md:text-base theme-text-secondary leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {project.highlight && project.highlight.length > 0 && (
                                <ul className="mb-8 space-y-2.5">
                                    {project.highlight.map((hl, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm theme-text-secondary"
                                        >
                                            <span className="text-green-custom/80 mt-0.5 shrink-0">
                                                <FiCheckCircle size={16} />
                                            </span>
                                            <span>{hl}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="pt-6 border-t border-white/10 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 theme-text-muted"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardElement>
                    );
                })}
            </div>

            {/* Other Projects */}
            <h2 className="text-2xl font-bold theme-text mb-6">Other Notable Projects</h2>
            <div className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
                {otherProjects.map((project, index) => {
                    const isNDA = project.link === '#' || project.isPrivate;
                    const RowElement = isNDA ? 'div' : 'a';

                    return (
                        <RowElement
                            key={index}
                            href={isNDA ? undefined : project.link}
                            target={isNDA ? undefined : '_blank'}
                            rel={isNDA ? undefined : 'noopener noreferrer'}
                            className={`group flex flex-col md:flex-row md:items-center justify-between p-5 border-b border-white/10 last:border-b-0 transition-colors ${
                                isNDA
                                    ? 'cursor-default'
                                    : 'hover:bg-white/[0.03] cursor-pointer'
                            }`}
                        >
                            <div className="flex-1 md:pr-6">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3
                                        className={`font-semibold text-lg theme-text ${
                                            !isNDA &&
                                            'group-hover:text-green-custom transition-colors'
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-mono text-green-custom/70">
                                        {project.role}
                                    </span>
                                    {isNDA && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-yellow-500/30 text-yellow-500/80 bg-yellow-500/5 uppercase font-medium tracking-wider flex items-center gap-1">
                                            <FiLock size={10} /> NDA
                                        </span>
                                    )}
                                    {project.deployment === 'Production' && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-green-500/30 text-green-500/80 bg-green-500/5 uppercase font-medium tracking-wider">
                                            Prod
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm theme-text-secondary line-clamp-2 md:line-clamp-1">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 shrink-0">
                                <div className="flex flex-wrap items-center gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/5 theme-text-muted"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[11px] font-medium px-2 py-1 theme-text-muted">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                                {!isNDA && (
                                    <div className="text-theme-text-secondary opacity-0 group-hover:opacity-100 group-hover:text-green-custom transition-all -translate-x-2 group-hover:translate-x-0">
                                        <FiExternalLink size={18} />
                                    </div>
                                )}
                            </div>
                        </RowElement>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
