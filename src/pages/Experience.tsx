import { Helmet } from 'react-helmet-async'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

interface ExpItem {
    company: string
    role: string
    period: string
    location: string
    description: string
    highlights: string[]
    tech: string[]
    link: string
}

const experiences: ExpItem[] = [
    {
        company: 'DIGIWORLD TECH SOLUTIONS JSC',
        role: 'Software Engineer',
        period: 'Apr 2025 - Current',
        location: 'Ho Chi Minh City, Vietnam',
        description:
            'Developed and maintained WHMCS-based hosting platforms, and upgraded web applications using Laravel, WordPress, and CodeIgniter. Collaborated cross-functionally with departments to fulfill assigned tasks while also taking on Business Analyst and Web Project Manager roles.',
        highlights: [
            'Built and maintained WHMCS-based hosting platforms',
            'Upgraded web applications using Laravel, WordPress, and CodeIgniter',
            'Took on Business Analyst and Web Project Manager roles',
            'Collaborated cross-functionally with multiple departments',
        ],
        tech: ['Laravel', 'WordPress', 'CodeIgniter', 'WHMCS', 'PHP'],
        link: '/experience/tgs',
    },
    {
        company: 'Mevivu Technology',
        role: 'Web Developer',
        period: 'Oct 2023 - Nov 2024',
        location: 'Ho Chi Minh City, Vietnam',
        description:
            'Developed scalable websites and APIs with Laravel, built custom WordPress e-commerce sites, and managed web hosting with DirectAdmin. Worked closely with frontend developers and business analysts to enhance user experience and project efficiency.',
        highlights: [
            'Developed scalable websites and APIs with Laravel',
            'Built custom WordPress e-commerce sites',
            'Managed web hosting with DirectAdmin',
            'Collaborated with frontend developers and business analysts',
        ],
        tech: ['Laravel', 'WordPress', 'DirectAdmin', 'MySQL', 'PHP'],
        link: '/experience/mevivu',
    },
]

export const Experience = () => {
    return (
        <section className="py-16">
            <Helmet>
                <title>Baro Pham — Work Experience</title>
                <meta name="description" content="Baro Pham's work experience at Devro Tech and Mevivu Technology, specializing in fullstack development with Laravel, WordPress, and more." />
            </Helmet>

            <div className="mb-12">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// Career</p>
                <h2 className="font-jetbrains-mono font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    Work<br />
                    <span className="text-white/40">Experience</span>
                </h2>
                <p className="text-white/50 max-w-2xl leading-relaxed">
                    Building scalable web applications and leading projects across diverse industries.
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/5" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-12 md:pl-20">
                            <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-accent border-4 border-canvas" />

                            <div className="border border-white/5 rounded-xl p-6 bg-white/[0.02] hover:border-accent/20 transition-colors">
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2 text-accent/70">
                                        <FiBriefcase size={16} />
                                        <span className="text-sm font-medium">{exp.role}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/40">
                                        <FiCalendar size={14} />
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/40">
                                        <FiMapPin size={14} />
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                </div>

                                <h3 className="font-jetbrains-mono font-semibold text-xl mb-3">{exp.company}</h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-6">{exp.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {exp.highlights.map((hl, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                                            <span className="text-accent/60 mt-1 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                                            <span>{hl}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/40 font-jetbrains-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
