import { Helmet } from 'react-helmet-async'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'Project Devro Admin/User',
        description: 'Simple e-commerce platform with integrated VNPay payment gateway',
        tech: ['Laravel', 'MySQL', 'Livewire', 'Tailwind'],
        link: 'https://demo.baro-dev.io.vn/',
        date: '01/04/2024 - 20/04/2024',
    },
    {
        title: 'TOEIC Mastery Course',
        description: 'Enhance your English skills and boost your TOEIC score with our expertly crafted course.',
        tech: ['ReactJS', 'Tailwind', 'NextJS'],
        link: 'https://edu-pham-hoang-phuc.id.vn/',
        date: '12/02/2025 - 12/02/2025',
    },
    {
        title: 'Project Ecommerce API/Admin/User',
        description: 'A comprehensive eCommerce solution designed to provide seamless online shopping experiences.',
        tech: ['Laravel', 'MySQL', 'ReactJS', 'Tailwind', 'Expo'],
        link: 'https://gitlab.com/ecom-api-app-cms',
        date: '28/01/2025 - 12/02/2025',
    },
    {
        title: 'Project VisonLand API/Admin',
        description: 'Developed an API and Admin CMS for real estate postings with payment functions and commission system.',
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/VisonLandAffiliate',
        date: '09/2024 - 11/2024',
    },
    {
        title: 'Project Fishing Booking API/Admin',
        description: 'Developed an API and Admin CMS for managing fishing spots with event features and referral system.',
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/VipFishing',
        date: '06/2024 - 09/2024',
    },
    {
        title: 'Project Lafresh Ecommerce',
        description: 'eCommerce website specializing in selling bottled and packaged water with promotional system.',
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/Lafresh-Ecommerce',
        date: '01/2024 - 04/2024',
    },
    {
        title: 'Project Booking Car to School for Kid',
        description: 'Web application for booking cars for school transportation services.',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        link: 'http://babi2school.com.vn/',
        date: '01/2024 - 03/2024',
    },
    {
        title: 'Project VietHouse Phu My Hung Rentals',
        description: 'Real estate rental project offering high-quality apartments and office spaces.',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        link: 'https://viethousephumyhung.com/',
        date: '11/2023 - 01/2024',
    },
]

const Projects = () => {
    return (
        <div className="container mx-auto px-4 animate-fade-down">
            <Helmet>
                <title>Baro | Projects</title>
            </Helmet>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-12 theme-text">
                Recent Projects and
                <ShinyText
                    text="Achievements"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </h1>

            <div className="space-y-1">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border-b border-white/10 hover:border-green-custom/50 transition-colors duration-300 py-6"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="font-medium text-lg theme-text group-hover:text-green-custom transition-colors">
                                        {project.title}
                                    </h2>
                                    <FiExternalLink className="text-theme-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                </div>
                                <p className="text-sm theme-text-secondary mb-3 max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 rounded border border-white/10 theme-text-secondary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    <span className="text-xs theme-text-muted">
                                        {project.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects
