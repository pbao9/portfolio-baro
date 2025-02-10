import { Helmet } from 'react-helmet-async'
import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard'
import ButtonShadow from '../components/input/Button'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import { TitleCenter } from '../components/partials/TitleCenter'

const projects = [
    {
        title: 'Project BuzzMart API/Admin/User 🛒',
        description: ['Updating...', ''],
        tech: ['nodejs', 'express', 'MySQL'],
        cmsFrontend: ['ReactJS', 'Tailwind', 'NextJS'],
        appFrontend: ['ReactJS', 'Expo', 'Paper-logo'],
        link: [
            'https://gitlab.com/pbao9/backendbuzzmart',
            'https://gitlab.com/pbao9/frontendbuzzmart',
        ],
        date: 'onready',
    },
    {
        title: 'Project VisonLand API/Admin 🛸',
        description: [
            'Developed an API and Admin CMS for real estate postings. Implemented payment functions for direct and indirect commissions using in-app currency, with logic for commission calculations based on referral codes.',
            'Optimized database queries with Eloquent ORM for better performance.',
            'Designed a notification feature for new posts from the admin panel to enhance user interaction.',
        ],
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/VisonLandAffiliate',
        date: '09/2024 - 11/2024',
    },
    {
        title: 'Project Fishing Booking API/Admin 🌟',
        description: [
            'Developed an API and Admin CMS for managing fishing spots. Introduced an event feature allowing lower-rank players to earn rewards and commissions through referral codes.',
            'Streamlined commission transfers to app and bank accounts with admin approval for better financial management.',
        ],
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/VipFishing',
        date: '06/2024 - 09/2024',
    },
    {
        title: 'Project Lafresh Ecommerce 🌟',
        description: [
            'The Lafresh project is an eCommerce website specializing in selling bottled and packaged water',
            'The platform includes a unique promotional system where customers receive bonus products based on product categories (Bottle/Pack)',
            "The system is designed to support two key roles: 'Distributors' and 'Retail Sellers,' ensuring seamless order management and efficient product distribution",
        ],
        tech: ['Laravel', 'Postman', 'MySQL'],
        link: 'https://github.com/pbao9/Lafresh-Ecommerce',
        date: '01/2024 - 04/2024',
    },
]

const Projects = () => {
    return (
        <div className="container mx-auto px-4 animate-fade-down">
            <Helmet>
                <title>Baro | Projects</title>
            </Helmet>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
                Recent Projects and
                <ShinyText
                    text="Achievements"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card"
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <h1 className="font-semibold text-xl sm:text-2xl mb-5">
                            {project.title}
                        </h1>
                        <ul className="mb-3 text-sm sm:text-base">
                            {project.description.map((desc, idx) => (
                                <li key={idx} className="mb-2">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <TitleCenter title={'Tech stack'} />
                        <div className="my-3">
                            <p className="flex flex-row items-center gap-4 my-3">
                                Backend:
                                <div className="flex flex-row gap-4">
                                    {project.tech.map((tech, idx) => (
                                        <img
                                            key={idx}
                                            src={`/${tech.toLowerCase()}.svg`}
                                            alt={tech}
                                            width={25}
                                            height={25}
                                        />
                                    ))}
                                </div>
                            </p>
                            {project.cmsFrontend && (
                                <p className="flex flex-row items-center gap-4 my-3">
                                    CMS Frontend:
                                    <div className="flex flex-row gap-4">
                                        {project.cmsFrontend.map(
                                            (tech, idx) => (
                                                <img
                                                    key={idx}
                                                    src={`/${tech.toLowerCase()}.svg`}
                                                    alt={tech}
                                                    width={25}
                                                    height={25}
                                                />
                                            )
                                        )}
                                    </div>
                                </p>
                            )}
                            {project.appFrontend && (
                                <p className="flex flex-row items-center gap-4 my-3">
                                    App Frontend:
                                    <div className="flex flex-row gap-4">
                                        {project.appFrontend.map(
                                            (tech, idx) => (
                                                <img
                                                    key={idx}
                                                    src={`/${tech.toLowerCase()}.svg`}
                                                    alt={tech}
                                                    width={25}
                                                    height={25}
                                                    className={
                                                        tech === 'Expo' ||
                                                        tech === 'Paper-logo'
                                                            ? 'bg-white rounded-xl'
                                                            : ''
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </p>
                            )}
                        </div>
                        <TitleCenter title={'Timeline'} />
                        <p className="flex items-center gap-2 text-white my-3">
                            Duration: {project.date}
                        </p>

                        {Array.isArray(project.link) ? (
                            project.link.map((link, idx) => (
                                <ButtonShadow
                                    key={idx}
                                    title={`Link ${idx + 1}`}
                                    path={link}
                                />
                            ))
                        ) : (
                            <ButtonShadow
                                title={'Link Demo'}
                                path={project.link}
                            />
                        )}
                    </SpotlightCard>
                ))}
            </div>
        </div>
    )
}

export default Projects
