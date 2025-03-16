import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import { Swiper as SwiperType } from 'swiper'
import SliderDesktop from '../../components/partials/Slider'
import { Project } from '../../types/Project'
import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard'

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
        <div className='my-10'>
            <SpotlightCard>
                <h1 className="project-title text-center uppercase font-bold text-4xl">{project?.title}</h1>
                <div className="project-info">
                    <p className="project-price">
                        <strong>Price:</strong>{' '}
                        {project?.price.toLocaleString()} VND
                    </p>
                </div>
                <h1 className="project-description">{project?.description}</h1>
            </SpotlightCard>
            <h1 className="divider uppercase text-4xl font-bold py-10">
                Desktop View
            </h1>
            <SliderDesktop
                images={project?.images || []}
                thumbsSwiper={thumbsSwiper}
                setThumbsSwiper={setThumbsSwiper}
                link={project?.link}
            />
            <h1 className="divider uppercase text-4xl font-bold py-10">
                Mobile View
            </h1>
            <div className="p-5 flex justify-center">
                <div className="mockup-phone border-dark-custom">
                    <div className="mockup-phone-camera"></div>
                    <div className="mockup-phone-display">
                        <img
                            alt="wallpaper"
                            src={project?.image_phone}
                            className="h-full w-full object-cover object-top transition-all duration-[5s] hover:object-bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
