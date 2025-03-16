import ViewPort from '../../components/partials/ViewPort'
import { useEffect, useState, useRef } from 'react'
import ButtonShadow from '../../components/input/Button'
import { FiArrowRight } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'

interface Project {
    id: number
    title: string
    duration: string
    description: string
    price: number
    thumbnail: string
    link: string
}

const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const projectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetch('/api/projects.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch')
                return response.json()
            })
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error('Error fetching projects:', error))
    }, [])

    useEffect(() => {
        if (projects.length > 0) {
            gsap.fromTo(
                '.project-item',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            )
        }
    }, [projects])

    return (
        <>
            <Helmet>
                <title>Baro | Projects</title>
            </Helmet>

            <div className='my-10'>
                <div className="text-center">
                    <ShinyText
                        text={'Projects'}
                        disabled={false}
                        speed={3}
                        className="font-bold text-4xl sm:text-5xl md:text-6xl text-center mb-3"
                    />
                </div>

                <div
                    ref={projectRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 my-4"
                >
                    {projects.map((project) => (
                        <div key={project.id} className="project-item">
                            <ViewPort data={project.thumbnail} />
                            <div className="bg-[#222] rounded-lg w-full px-10 pt-3 shadow-lg mt-3">
                                <div className="text-center font-semibold text-white">
                                    Webiste: {project.title} 💻
                                </div>
                                <div className="text-center font-semibold text-white">
                                    Duration: {project.duration} ⏲️
                                </div>
                                <div className="text-center font-semibold text-white">
                                    Price: {''}
                                    {project.price === 0
                                        ? 'Negotiable'
                                        : new Intl.NumberFormat('vi-VN', {
                                              style: 'currency',
                                              currency: 'VND',
                                          }).format(project.price)}
                                    💰
                                </div>
                                <div className="w-full mx-auto py-3">
                                    <ButtonShadow
                                        path={`/projects-list/view/${project.id}`}
                                        title="View detail"
                                        icon={<FiArrowRight />}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectList
