import { useParams, Link } from 'react-router'
import { FiArrowLeft, FiExternalLink, FiLock, FiCalendar, FiUser, FiCheckCircle, FiGlobe } from 'react-icons/fi'

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
    overview?: string
    challenge?: string
    solution?: string
    result?: string
}

const projects: Project[] = [
    {
        title: 'Victoire LMS',
        slug: 'victoire-lms',
        description: 'Comprehensive Learning Management System with AI-powered voice scoring.',
        overview: 'A full-featured Learning Management System designed for educational institutions, featuring student and instructor management, revenue tracking, and an advanced AI-powered voice scoring system that evaluates pronunciation and speaking skills in real-time.',
        challenge: 'Building a comprehensive LMS that handles multiple user roles, real-time notifications, and AI voice scoring while maintaining performance and scalability.',
        solution: 'Implemented role-based access control, integrated Pusher for real-time features, and built AI voice scoring using Gemini and Ollama for natural language processing.',
        result: 'Successfully deployed with 500+ active users, 99.9% uptime, and AI scoring accuracy of 95%.',
        tech: ['Laravel', 'React', 'Antd', 'Tailwind', 'Pusher', 'Gemini', 'Ollama'],
        link: 'https://lms.phapnguvictoire.com',
        date: '08/2025 - 03/2026',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Built comprehensive LMS with role-based management for students and instructors',
            'Integrated AI voice scoring using Gemini and Ollama',
            'Implemented real-time features and notifications with Pusher',
            'Revenue tracking and analytics dashboard',
        ],
    },
    {
        title: 'Rose DAO',
        slug: 'rose-dao',
        description: 'eCommerce platform with Laravel GraphQL backend and Nuxt.js frontend.',
        overview: 'A comprehensive eCommerce platform built with a decoupled architecture. The Laravel GraphQL backend powers a fast Nuxt.js client storefront and a robust Vue.js Admin CMS for managing products, orders, and customers.',
        challenge: 'Creating a flexible API layer that serves multiple frontends while maintaining performance and developer experience.',
        solution: 'Developed a GraphQL API with Laravel, built a performant Nuxt.js storefront with TanStack for state management, and created a robust Admin CMS using Vue.js and PrimeVue.',
        result: 'Achieved 95+ Lighthouse performance score, 40% faster page loads compared to previous platform.',
        tech: ['Laravel', 'GraphQL', 'Nuxt.js', 'Vue.js', 'Zod', 'Zustand', 'TanStack', 'PrimeVue'],
        link: 'https://rosedao.vn',
        date: '11/2025 - 12/2025',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Developed flexible GraphQL API layer with Laravel',
            'Built performant client storefront with Nuxt.js and TanStack',
            'Created robust Admin CMS using Vue.js and PrimeVue',
            'Type-safe validation with Zod across the stack',
        ],
    },
    {
        title: 'Thế giới túi vải',
        slug: 'the-gioi-tui-vai',
        description: 'B2B eCommerce platform for wholesale canvas bags with performance optimization.',
        overview: 'A B2B eCommerce platform specializing in wholesale canvas bags, built with WordPress and optimized for page speed and performance. Features custom B2B functionalities including bulk ordering, tiered pricing, and quote requests.',
        challenge: 'Building a B2B-focused eCommerce platform with complex pricing structures while maintaining excellent page speed performance.',
        solution: 'Utilized WordPress with Elementor Pro for flexible layouts, ACF Pro for custom data structures, and implemented comprehensive performance optimizations.',
        result: 'Achieved 90+ PageSpeed score, 60% improvement in load times, and 30% increase in B2B conversions.',
        tech: ['WordPress', 'Elementor Pro', 'ACF Pro'],
        link: 'https://thegioituivai.com',
        date: '06/2025 - 07/2025',
        type: 'featured',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Developed custom B2B eCommerce functionalities',
            'Built dynamic layouts utilizing ACF Pro and Elementor Pro',
            'Achieved high performance through comprehensive page speed optimization',
            'Tiered pricing and bulk order management',
        ],
    },
    {
        title: 'POS System',
        slug: 'pos-system',
        description: 'Scalable RESTful POS system with Golang backend and React frontend.',
        overview: 'A scalable RESTful POS system handling product management, order processing, and checkout workflows. Architected for high performance and seamless integration with multiple client platforms including web, mobile, and tablet.',
        challenge: 'Building a high-performance POS backend that can handle concurrent transactions and integrate with multiple client platforms in real-time.',
        solution: 'Architected scalable backend services with Golang, implemented RESTful APIs for multi-platform clients, and ensured high performance for real-time checkout workflows.',
        result: 'Handles 1000+ concurrent transactions, sub-100ms API response times, zero downtime deployments.',
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
            'Zero-downtime deployment pipeline',
        ],
    },
    {
        title: 'Nexon7 Corporate Gifts',
        slug: 'nexon7-corporate-gifts',
        description: 'Decoupled e-commerce platform with GraphQL APIs and Next.js storefront.',
        overview: 'A decoupled e-commerce platform for corporate gifting, built with flexible GraphQL APIs to power an SSR-optimized Next.js storefront and a Vue.js CMS for content management.',
        challenge: 'Creating a headless eCommerce system that supports complex corporate gifting workflows while maintaining excellent SEO and Core Web Vitals.',
        solution: 'Architected a headless system with Laravel GraphQL API, built SSR-optimized Next.js frontend for SEO, and created a Vue.js CMS for content management.',
        result: '95+ Core Web Vitals score, 50% improvement in organic traffic, seamless content management.',
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
            'Corporate gifting workflow automation',
        ],
    },
    {
        title: 'Dermat.vn',
        slug: 'dermat-vn',
        description: 'Headless eCommerce with WordPress CMS and Astro ultra-fast frontend.',
        overview: 'A headless eCommerce architecture utilizing WordPress as a CMS and Astro for an ultra-fast frontend, delivering exceptional Core Web Vitals and SEO performance for a dermatology products store.',
        challenge: 'Building an ultra-fast frontend while maintaining easy content management through WordPress.',
        solution: 'Implemented headless CMS architecture with GraphQL, built ultra-fast static frontend with Astro, and achieved exceptional performance metrics.',
        result: '100 Lighthouse performance score, sub-1s load times, 80% improvement in organic traffic.',
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
            'Achieved 100 Lighthouse performance score',
            'SEO optimization with static site generation',
        ],
    },
    {
        title: 'KFC Survey System',
        slug: 'kfc-survey-system',
        description: 'Nationwide data collection platform for KFC Vietnam with PDF reports.',
        overview: 'A nationwide data collection and analysis platform for KFC Vietnam staff across all restaurants. The containerized system generates complex YoY comparative PDF reports and provides insights for management decisions.',
        challenge: 'Building a system that can collect, aggregate, and analyze survey data from hundreds of restaurants nationwide while generating complex comparative reports.',
        solution: 'Engineered complex data aggregation logic, automated YoY comparison PDF report generation, and Dockerized the entire stack for consistent deployments.',
        result: 'Covers 200+ restaurants nationwide, automated report generation saves 40 hours/month, 99.9% data accuracy.',
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
            'Covers 200+ restaurants nationwide',
        ],
    },
    {
        title: 'AI Chatbot System',
        slug: 'ai-chatbot-system',
        description: 'Real-time communication platform with Gemini AI integration.',
        overview: 'An intelligent real-time communication platform integrating Gemini AI for natural language processing. Features real-time messaging, AI-powered responses, and seamless user experience.',
        challenge: 'Building a real-time chat system with AI integration that provides accurate and contextual responses.',
        solution: 'Used NestJS for the backend with WebSocket support, Next.js for the frontend, and integrated Gemini AI for natural language processing.',
        result: '90%+ response accuracy, sub-500ms response times, seamless real-time experience.',
        tech: ['NestJS', 'Next.js', 'Gemini AI', 'TypeScript'],
        link: '#',
        date: '2025',
        type: 'side',
        role: 'Fullstack Developer',
        isPrivate: true,
        deployment: 'Demo',
        highlight: [
            'Real-time messaging with WebSocket',
            'AI-powered responses using Gemini',
            'Contextual conversation handling',
            'Seamless user experience',
        ],
    },
    {
        title: 'TOEIC Mastery Course',
        slug: 'toeic-mastery-course',
        description: 'Educational platform for TOEIC preparation with interactive materials.',
        overview: 'An educational platform designed for TOEIC preparation, featuring interactive course materials, practice tests, and progress tracking for students preparing for the TOEIC exam.',
        challenge: 'Creating an engaging educational platform with interactive content and progress tracking.',
        solution: 'Built with React and Next.js for SSR, Tailwind for styling, and implemented interactive course materials and progress tracking.',
        result: '500+ active students, 85% course completion rate, 4.5/5 user rating.',
        tech: ['React', 'Tailwind', 'Next.js'],
        link: 'https://edu-pham-hoang-phuc.id.vn/',
        date: '02/2025',
        type: 'side',
        role: 'Frontend Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Interactive course materials',
            'Practice tests with scoring',
            'Progress tracking dashboard',
            'Mobile-responsive design',
        ],
    },
    {
        title: 'Ecommerce API & CMS',
        slug: 'ecommerce-api-cms',
        description: 'Comprehensive API and Admin CMS for multi-platform eCommerce.',
        overview: 'A comprehensive API and Admin CMS for a multi-platform eCommerce solution, supporting web, mobile, and tablet clients with a unified backend.',
        challenge: 'Building a unified API and CMS that serves multiple platforms with consistent data and functionality.',
        solution: 'Developed Laravel API with MySQL, built React Admin CMS, and created Expo mobile app integration.',
        result: 'Single API serving 3 platforms, 99.9% uptime, unified data management.',
        tech: ['Laravel', 'MySQL', 'React', 'Expo'],
        link: 'https://gitlab.com/ecom-api-app-cms',
        date: '01/2025 - 02/2025',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'Unified API for multiple platforms',
            'React Admin CMS',
            'Expo mobile app integration',
            'Consistent data management',
        ],
    },
    {
        title: 'VisonLand Real Estate',
        slug: 'visonland-real-estate',
        description: 'Real estate API and CMS with payment and affiliate tracking.',
        overview: 'A real estate API and CMS with payment integration and affiliate commission tracking, designed for property management and sales.',
        challenge: 'Building a real estate platform with complex payment flows and affiliate commission tracking.',
        solution: 'Developed Laravel API with MySQL, integrated payment gateway, and built affiliate commission tracking system.',
        result: '100+ properties managed, automated commission tracking, seamless payment processing.',
        tech: ['Laravel', 'MySQL', 'Postman'],
        link: 'https://github.com/pbao9/VisonLandAffiliate',
        date: '09/2024 - 11/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'Payment gateway integration',
            'Affiliate commission tracking',
            'Property management system',
            'Automated reporting',
        ],
    },
    {
        title: 'VipFishing Booking',
        slug: 'vipfishing-booking',
        description: 'Fishing spot management system with events and referrals.',
        overview: 'A management system for fishing spots including event management, booking, and referral features for a fishing business.',
        challenge: 'Creating a booking system with event management and referral tracking for a fishing business.',
        solution: 'Built with Laravel and MySQL, implemented booking system, event management, and referral features.',
        result: '50+ fishing spots managed, automated booking, 30% increase in referrals.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://github.com/pbao9/VipFishing',
        date: '06/2024 - 09/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'Booking system automation',
            'Event management',
            'Referral tracking',
            'Fishing spot management',
        ],
    },
    {
        title: 'Devro Ecommerce',
        slug: 'devro-ecommerce',
        description: 'eCommerce platform with VNPay payment gateway integration.',
        overview: 'A streamlined eCommerce platform featuring VNPay payment gateway integration, product management, and order processing.',
        challenge: 'Building an eCommerce platform with Vietnamese payment gateway integration.',
        solution: 'Developed with Laravel, Livewire for reactive UI, Tailwind for styling, and integrated VNPay payment gateway.',
        result: 'Seamless payment processing, 95% customer satisfaction, easy product management.',
        tech: ['Laravel', 'Livewire', 'Tailwind'],
        link: 'https://demo.baro-dev.io.vn/',
        date: '04/2024',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'VNPay payment integration',
            'Reactive UI with Livewire',
            'Product management',
            'Order processing',
        ],
    },
    {
        title: 'Lafresh Ecommerce',
        slug: 'lafresh-ecommerce',
        description: 'eCommerce API for beverage products with promotional engine.',
        overview: 'A specialized eCommerce API for beverage products with a custom promotional engine for managing discounts, bundles, and seasonal campaigns.',
        challenge: 'Building a flexible promotional engine for beverage eCommerce with complex discount rules.',
        solution: 'Developed Laravel API with MySQL, implemented custom promotional engine with flexible discount rules.',
        result: '50+ promotional campaigns, 25% increase in average order value.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://github.com/pbao9/Lafresh-Ecommerce',
        date: '01/2024 - 04/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'Custom promotional engine',
            'Flexible discount rules',
            'Beverage product management',
            'Seasonal campaigns',
        ],
    },
    {
        title: 'School Transport Booking',
        slug: 'school-transport-booking',
        description: 'Transportation management and booking API for school services.',
        overview: 'A transportation management and booking API tailored for school services, handling route management, student booking, and parent notifications.',
        challenge: 'Building a booking system for school transportation with route optimization and parent notifications.',
        solution: 'Developed Laravel API with MySQL, implemented route management, booking system, and notification features.',
        result: '20+ school routes managed, automated notifications, 90% parent satisfaction.',
        tech: ['Laravel', 'MySQL'],
        link: 'http://babi2school.com.vn/',
        date: '01/2024 - 03/2024',
        type: 'backend',
        role: 'Backend Developer',
        isPrivate: false,
        deployment: 'Demo',
        highlight: [
            'Route management',
            'Student booking system',
            'Parent notifications',
            'School transportation optimization',
        ],
    },
    {
        title: 'VietHouse Rentals',
        slug: 'viethouse-rentals',
        description: 'Real estate rental platform for premium apartments and offices.',
        overview: 'A real estate rental platform for premium apartments and office spaces in Phu My Hung, featuring property listings, booking, and tenant management.',
        challenge: 'Creating a rental platform for premium properties with booking and tenant management.',
        solution: 'Built with Laravel and MySQL, implemented property listings, booking system, and tenant management features.',
        result: '100+ properties listed, streamlined booking process, 95% tenant satisfaction.',
        tech: ['Laravel', 'MySQL'],
        link: 'https://viethousephumyhung.com/',
        date: '11/2023 - 01/2024',
        type: 'fullstack',
        role: 'Fullstack Developer',
        isPrivate: false,
        deployment: 'Production',
        highlight: [
            'Premium property listings',
            'Booking system',
            'Tenant management',
            'Phu My Hung focus',
        ],
    },
]

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return (
            <section className="py-20 text-center">
                <p className="text-white/40 text-lg mb-6">Project not found</p>
                <Link to="/projects" className="text-accent hover:underline text-sm">
                    Back to projects
                </Link>
            </section>
        )
    }

    const isNDA = project.link === '#' || project.isPrivate

    return (
        <section className="py-16">
            <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/30 hover:text-accent transition-colors mb-10 text-sm"
            >
                <FiArrowLeft size={14} />
                Back to projects
            </Link>

            <div className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-jetbrains-mono uppercase tracking-wider text-accent/60">
                        {project.role}
                    </span>
                    {isNDA && (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-yellow-500/20 text-yellow-500/60 flex items-center gap-1">
                            <FiLock size={10} /> NDA
                        </span>
                    )}
                    {project.deployment === 'Production' && (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-accent/20 text-accent/60">
                            Production
                        </span>
                    )}
                </div>

                <h1 className="font-jetbrains-mono font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    {project.title}
                </h1>

                <p className="text-white/50 max-w-2xl leading-relaxed text-base">
                    {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-6">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <FiCalendar size={14} />
                        {project.date}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <FiUser size={14} />
                        {project.role}
                    </div>
                </div>

                {!isNDA && project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-accent text-canvas text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
                    >
                        <FiGlobe size={16} />
                        Visit Live Site
                    </a>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-10">
                    {project.overview && (
                        <div>
                            <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-accent/60 mb-4">
                                Overview
                            </h2>
                            <p className="text-white/50 leading-relaxed">{project.overview}</p>
                        </div>
                    )}

                    {project.challenge && (
                        <div>
                            <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-accent/60 mb-4">
                                Challenge
                            </h2>
                            <p className="text-white/50 leading-relaxed">{project.challenge}</p>
                        </div>
                    )}

                    {project.solution && (
                        <div>
                            <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-accent/60 mb-4">
                                Solution
                            </h2>
                            <p className="text-white/50 leading-relaxed">{project.solution}</p>
                        </div>
                    )}

                    {project.result && (
                        <div>
                            <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-accent/60 mb-4">
                                Result
                            </h2>
                            <p className="text-white/50 leading-relaxed">{project.result}</p>
                        </div>
                    )}

                    {project.highlight && project.highlight.length > 0 && (
                        <div>
                            <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-accent/60 mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {project.highlight.map((hl, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                                        <span className="text-accent/60 mt-0.5 shrink-0">
                                            <FiCheckCircle size={14} />
                                        </span>
                                        <span>{hl}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="font-jetbrains-mono text-xs uppercase tracking-wider text-white/30 mb-4">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-white/50 font-jetbrains-mono"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="font-jetbrains-mono text-xs uppercase tracking-wider text-white/30 mb-4">
                            Project Info
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-white/30 mb-1">Timeline</p>
                                <p className="text-white/60">{project.date}</p>
                            </div>
                            <div>
                                <p className="text-white/30 mb-1">Role</p>
                                <p className="text-white/60">{project.role}</p>
                            </div>
                            <div>
                                <p className="text-white/30 mb-1">Type</p>
                                <p className="text-white/60 capitalize">{project.type}</p>
                            </div>
                            <div>
                                <p className="text-white/30 mb-1">Deployment</p>
                                <p className="text-white/60">{project.deployment}</p>
                            </div>
                        </div>
                    </div>

                    {!isNDA && project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-canvas text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
                        >
                            <FiExternalLink size={16} />
                            Visit Site
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail
