import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

import { Swiper as SwiperType } from 'swiper'
import SliderDesktop from '../../components/partials/Slider'
import { Project } from '../../types/Project'
import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'
import ButtonShadow from '../../components/input/Button'
import { FiInbox } from 'react-icons/fi'

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
        <div className="my-10">
            <SpotlightCard className="w-72 mx-auto">
                <div className="project-info">
                    <ShinyText
                        text={project?.title || 'Project Title'}
                        disabled={false}
                        speed={3}
                        className="font-bold text-2xl text-center"
                    />
                    <p className="project-price">
                        <strong>Price:</strong>{' '}
                        {project?.price.toLocaleString()} VND
                    </p>
                </div>
                <h1 className="project-description">
                    <strong>Description:</strong> {project?.description}
                </h1>
                <ButtonShadow path='https://zalo.me/0901430854' title='Contact now' icon={<FiInbox />} ></ButtonShadow>
            </SpotlightCard>
            <h1 className="divider uppercase text-4xl font-bold py-10">
                <ShinyText
                    text="DESKTOP VIEW"
                    disabled={false}
                    speed={3}
                    className="custom-class mx-2"
                />
            </h1>
            <SliderDesktop
                images={project?.images || []}
                thumbsSwiper={thumbsSwiper}
                setThumbsSwiper={setThumbsSwiper}
                link={project?.link}
            />
            <h1 className="divider uppercase text-4xl font-bold py-10">
                <ShinyText
                    text="Mobile View"
                    disabled={false}
                    speed={3}
                    className="custom-class mx-2"
                />
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
