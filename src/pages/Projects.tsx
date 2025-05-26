import { Helmet } from 'react-helmet-async'
import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard'
import ButtonShadow from '../components/input/Button'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import { TitleCenter } from '../components/partials/TitleCenter'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const projects = [
    {
        title: 'Project Ecommerce Payment Pi Wallet',
        description: ['Updating..'],
        tech: ['Laravel', 'NodeJS', 'MySQL', 'Livewire', 'Tailwind'],
        link: '',
        date: 'Ready to start..',
    },
    {
        title: 'Project Devro Admin/User 🛒',
        description: [
            'Simple e-commerce platform with integrated VNPay payment gateway',
            'Features Telegram notifications for successful payments and new user registrations',
        ],
        tech: ['Laravel', 'MySQL', 'Livewire', 'Tailwind'],
        link: 'https://demo.baro-dev.io.vn/',
        date: '01/04/2024 - 20/04/2024',
    },
    {
        title: 'TOEIC Mastery Course',
        description: [
            'Enhance your English skills and boost your TOEIC score with our expertly crafted course.',
            'Includes practice tests, real-world scenarios, and personalized feedback to ensure success.',
        ],
        tech: null,
        cmsFrontend: ['ReactJS', 'Tailwind', 'NextJS'],
        link: ['https://edu-pham-hoang-phuc.id.vn/'],
        date: '12/02/2025 - 12/02/2025',
    },
    {
        title: 'Project Ecommerce API/Admin/User 🛒',
        description: [
            'A comprehensive eCommerce solution designed to provide seamless online shopping experiences.',
            'Includes a powerful API, an intuitive admin dashboard, and a user-friendly storefront.',
            'Supports secure payments, order tracking, and an advanced product management system.',
        ],
        tech: ['Laravel', 'MySQL'],
        cmsFrontend: ['ReactJS', 'Tailwind'],
        appFrontend: ['ReactJS', 'Expo', 'Paper-logo'],
        link: ['https://gitlab.com/ecom-api-app-cms'],
        date: '28/01/2025 - 12/02/2025',
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
    {
        title: 'Project Booking Car to School for Kid 🌟',
        description: [
            'The project is a web application designed to facilitate the booking of cars for school transportation services. It includes features for both parents and drivers, allowing parents to book rides for their children and drivers to manage their schedules.',
            'The application is built using Laravel and MySQL, ensuring a robust backend for data management.',
        ],
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        link: 'http://babi2school.com.vn/',
        date: '01/2024 - 03/2024',
    },
    {
        title: 'Project VietHouse Phu My Hung Rentals 🏢',
        description: [
            'VietHouse Phu My Hung Rentals is a real estate rental project offering high-quality apartments and office spaces in the Phu My Hung urban area, Ho Chi Minh City.',
            'The platform connects tenants with trusted listings, focusing on comfort, convenience, and expat- friendly living.',
        ],
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
                            {project.title || 'No title available'}
                        </h1>
                        <ul className="mb-3 text-sm sm:text-base">
                            {project.description?.length > 0 ? (
                                project.description.map((desc, idx) => (
                                    <li key={idx} className="mb-2">
                                        {desc}
                                    </li>
                                ))
                            ) : (
                                <li>No description available</li>
                            )}
                        </ul>
                        <TitleCenter title={'Tech stack'} />
                        <div className="my-3">
                            {project.tech && (
                                <div className="flex flex-row items-center gap-4 my-3">
                                    <span>Backend:</span>
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
                                </div>
                            )}
                            {project.cmsFrontend && (
                                <div className="flex flex-row items-center gap-4 my-3">
                                    <span>Frontend:</span>
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
                                </div>
                            )}
                            {project.appFrontend && (
                                <div className="flex flex-row items-center gap-4 my-3">
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
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <TitleCenter title={'Timeline'} />
                        <p className="flex items-center gap-2 text-white my-3">
                            Duration: {project.date || 'No date available'}
                        </p>

                        {Array.isArray(project.link)
                            ? project.link.map((link, idx) => (
                                  <ButtonShadow
                                      key={idx}
                                      title={`Link ${idx + 1}`}
                                      path={link}
                                      target="_blank"
                                  />
                              ))
                            : project.link && (
                                  <ButtonShadow
                                      title={'Link Demo'}
                                      path={project.link}
                                      target="_blank"
                                  />
                              )}
                    </SpotlightCard>
                ))}
            </div>
            <div className="w-50 mx-auto my-3">
                <ButtonShadow
                    title={'View more'}
                    path={'/projects-list'}
                    icon={<MdOutlineArrowRightAlt />}
                />
            </div>
        </div>
    )
}

export default Projects
