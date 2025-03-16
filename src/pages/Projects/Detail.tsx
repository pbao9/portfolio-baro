import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import { Swiper as SwiperType } from 'swiper'
import Slider from '../../components/partials/Slider'

interface Project {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    images: string[]
    link: string
}

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [project, setProject] = useState<Project | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
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

    if (!project && !isLoading)
        return <div className="text-center text-white">Project not found.</div>

    return (
        <div>
            <section className="project-details">
                <h1 className="project-title">{project?.title}</h1>
                <div className="project-info">
                    <p className="project-price">
                        <strong>Price:</strong>{' '}
                        {project?.price.toLocaleString()} VND
                    </p>
                </div>
            </section>

            <Slider images={project?.images || []} thumbsSwiper={thumbsSwiper} setThumbsSwiper={setThumbsSwiper} link={project?.link} />
        </div>
    )
}

export default ProjectDetail
