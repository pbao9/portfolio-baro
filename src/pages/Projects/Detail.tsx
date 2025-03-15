import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { FiExternalLink, FiX } from 'react-icons/fi'
import { Dialog } from '@headlessui/react'
import ViewPort from '../../components/partials/ViewPort'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Project {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    images: string[]
    link: string
}

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [project, setProject] = useState<Project | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/projects.json')
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.projects.find((p: Project) => p.id === Number(id))
                setProject(foundProject || null)
                setSelectedImage(foundProject ? foundProject.thumbnail : null)
            })
            .catch((error) => console.error('Error fetching project:', error))
            .finally(() => setIsLoading(false)) 
    }, [id])

    if (!project && !isLoading) return <div className="text-center text-white">Project not found.</div>

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">
                {isLoading ? <Skeleton width={200} height={30} /> : project?.title}
            </h1>

            {isLoading ? (
                <Skeleton height={300} className="rounded-lg" />
            ) : (
                <ViewPort data={selectedImage || project!.thumbnail} />
            )}

            <div className="flex gap-2 mt-4 overflow-x-auto">
                {isLoading
                    ? Array(4)
                          .fill(0)
                          .map((_, index) => <Skeleton key={index} height={80} width={80} className="rounded-lg" />)
                    : project?.images.map((img, index) => (
                          <img
                              key={index}
                              src={img}
                              alt={`Project ${index}`}
                              className={`h-auto max-h-[80px] object-cover rounded-lg cursor-pointer shadow-md transition-all duration-300 ${
                                  selectedImage === img
                                      ? 'border-4 border-blue-500'
                                      : 'opacity-80 hover:opacity-100'
                              }`}
                              onClick={() => setSelectedImage(img)}
                          />
                      ))}
            </div>

            {/* Description */}
            <p className="mt-4">{isLoading ? <Skeleton count={3} /> : project?.description}</p>

            {/* Price */}
            <p className="mt-2 font-semibold">
                {isLoading ? (
                    <Skeleton width={150} />
                ) : (
                    <>
                        Price:{' '}
                        {project!.price === 0
                            ? 'Negotiable'
                            : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                  project!.price
                              )}
                    </>
                )}
            </p>

            {/* Link dự án */}
            {isLoading ? (
                <Skeleton width={150} height={20} />
            ) : (
                <a
                    href={project?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline mt-3"
                >
                    <FiExternalLink /> Visit Project
                </a>
            )}

            {/* Lightbox Modal */}
            <Dialog
                open={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            >
                <div className="relative w-auto max-w-3xl">
                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute -top-6 -right-6 bg-red-500 text-white rounded-full p-2"
                    >
                        <FiX size={24} />
                    </button>
                    <img
                        src={selectedImage || project?.thumbnail}
                        alt="Enlarged"
                        className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                    />
                </div>
            </Dialog>
        </div>
    )
}

export default ProjectDetail
