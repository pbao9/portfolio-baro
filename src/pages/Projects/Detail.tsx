import { useParams, Link } from 'react-router'
import { useEffect, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import SliderDesktop from '../../components/partials/Slider'
import { FiArrowLeft, FiInbox, FiExternalLink } from 'react-icons/fi'

interface Project {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    tech_stack: string[]
    images: string[]
    link: string
    image_phone: string
    duration: string
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [project, setProject] = useState<Project | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/projects.json')
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.projects.find(
                    (p: Project) => p.id === Number(id)
                )
                setProject(foundProject || null)
            })
            .catch((error) => console.error('Error fetching project:', error))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) {
        return (
            <div className="py-16 animate-pulse">
                <div className="h-8 bg-white/5 rounded w-48 mb-8"></div>
                <div className="h-64 bg-white/5 rounded-xl mb-8"></div>
                <div className="h-4 bg-white/5 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="py-16 text-center">
                <p className="text-white/40 text-lg">Project not found.</p>
                <Link to="/projects-list" className="text-accent hover:underline mt-4 inline-block">
                    Back to projects
                </Link>
            </div>
        )
    }

    return (
        <section className="py-16">
            <Link
                to="/projects-list"
                className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors mb-8"
            >
                <FiArrowLeft size={16} />
                <span className="text-sm font-jetbrains-mono">Back to projects</span>
            </Link>

            <div className="mb-10">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// Project</p>
                <h1 className="font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    {project.title}
                </h1>
                <p className="text-white/50 max-w-2xl leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                    {project.price > 0 && (
                        <span className="text-sm text-accent/70 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10">
                            {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(project.price)}
                        </span>
                    )}
                    <span className="text-sm text-white/40 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                        {project.duration}
                    </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech_stack.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt="tech"
                            width={28}
                            height={28}
                            className="opacity-50 hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                    <a
                        href="https://zalo.me/0901430854"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-canvas font-medium rounded-lg hover:bg-accent-hover transition-colors"
                    >
                        <FiInbox size={18} />
                        Contact Now
                    </a>
                    {project.link !== '#' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/80 rounded-lg hover:border-accent hover:text-accent transition-colors"
                        >
                            <FiExternalLink size={18} />
                            Visit Site
                        </a>
                    )}
                </div>
            </div>

            <div className="mb-12">
                <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-white/40 mb-6">
                    Desktop View
                </h2>
                <SliderDesktop
                    images={project.images || []}
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                    link={project.link}
                />
            </div>

            <div>
                <h2 className="font-jetbrains-mono text-sm uppercase tracking-wider text-white/40 mb-6">
                    Mobile View
                </h2>
                <div className="flex justify-center">
                    <div className="w-[280px] rounded-[2.5rem] border-4 border-white/10 overflow-hidden bg-surface">
                        <img
                            alt={project.title}
                            src={project.image_phone}
                            className="w-full h-auto object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail
