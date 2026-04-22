import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FiArrowUpRight } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'

interface Project {
    id: number
    title: string
    duration: string
    description: string
    price: number
    thumbnail: string
    tech_stack: string[]
    link: string
}

const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/projects.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch')
                return response.json()
            })
            .then((data) => {
                setProjects(data.projects)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching projects:', error)
                setLoading(false)
            })
    }, [])

    const renderSkeleton = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden animate-pulse">
                    <div className="h-48 bg-white/5"></div>
                    <div className="p-5 space-y-3">
                        <div className="h-4 bg-white/5 rounded w-3/4"></div>
                        <div className="h-3 bg-white/5 rounded w-1/2"></div>
                        <div className="h-3 bg-white/5 rounded w-1/3"></div>
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <>
            <Helmet>
                <title>Baro Pham — All Projects</title>
                <meta name="description" content="Browse all projects by Baro Pham including web development, eCommerce, and API projects." />
            </Helmet>

            <section className="py-16">
                <div className="mb-12">
                    <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// All Work</p>
                    <h2 className="font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                        All<br />
                        <span className="text-white/40">Projects</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl leading-relaxed">
                        A complete collection of projects I've built, from eCommerce platforms to complex API systems.
                    </p>
                </div>

                {loading ? (
                    renderSkeleton()
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/projects-list/view/${project.id}`}
                                className="group rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden bg-white/5">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-3 right-3 p-2 rounded-full bg-canvas/80 text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                        <FiArrowUpRight size={16} />
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="font-semibold text-base mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-white/40 mb-3">{project.duration}</p>

                                    {project.price > 0 && (
                                        <p className="text-sm text-accent/70 mb-3">
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(project.price)}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                        {project.tech_stack.slice(0, 4).map((icon, index) => (
                                            <img
                                                key={index}
                                                src={icon}
                                                alt="tech"
                                                width={20}
                                                height={20}
                                                className="opacity-40 hover:opacity-80 transition-opacity"
                                            />
                                        ))}
                                        {project.tech_stack.length > 4 && (
                                            <span className="text-xs text-white/30 px-1.5 py-0.5">
                                                +{project.tech_stack.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </>
    )
}

export default ProjectList
