import { Link } from 'react-router'
import { FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa6'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition.tsx'
import { Pulse } from './partials/Pulse.tsx'
import { useState } from 'react'

const CardPortfolio = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsImageLoaded(true)
    }

    return (
        <div
            className="theme-shadow theme-card p-6 w-full text-center block rounded-3xl mx-auto 
            backdrop-blur-md relative overflow-hidden"
        >
            <PixelTransition
                firstContent={
                    <img
                        src="https://res.cloudinary.com/dqtxna4oa/image/upload/v1743590900/anhdaidien_egkiou.jpg"
                        alt="Avatar"
                        className={`w-full h-full object-cover ${
                            isImageLoaded ? 'blur-0' : 'blur-2xl'
                        }`}
                        onLoad={handleImageLoad}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: '45% 85%',
                            scale: '1.5',
                            objectFit: 'cover',
                            transition: 'filter 0.3s ease-out',
                        }}
                    />
                }
                secondContent={
                    <div>
                        <img
                            src="https://res.cloudinary.com/dqtxna4oa/image/upload/v1750085951/Logo_jodsvn.jpg"
                            alt="Avatar"
                            className={`w-full h-full object-cover ${
                                isImageLoaded ? 'blur-0' : 'blur-2xl'
                            }`}
                            onLoad={handleImageLoad}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'filter 0.3s ease-out',
                            }}
                        />
                    </div>
                }
                gridSize={30}
                pixelColor="var(--theme-text)"
                animationStepDuration={0.4}
                className="theme-border hover:theme-shadow-hover hover:border-green-custom transition-all duration-500 cursor-pointer border"
            />
            <h1 className="text-4xl font-semibold theme-text mt-4">
                Baro Pham
            </h1>
            <a href='https://devro-tech.com/' className="theme-text text-sm mt-1 uppercase font-bold">Devro Tech</a>

            <p className="theme-text-secondary text-sm mt-1">Back-End Developer</p>

            <div
                id="social"
                className="flex flex-wrap justify-center gap-x-4 py-2"
            >
                <Link
                    to="https://github.com/pbao9"
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGithub
                        size={24}
                        className="text-green-custom group-hover:text-white transition-all duration-500 relative z-10"
                    />
                </Link>
                <Link
                    to="https://www.linkedin.com/in/pbao/"
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaLinkedin
                        size={24}
                        className="text-green-custom group-hover:text-white transition-all duration-500 relative z-10"
                    />
                </Link>
                <Link
                    to="https://gitlab.com/pbao9"
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGitlab
                        size={24}
                        className="text-green-custom group-hover:text-white transition-all duration-500 relative z-10"
                    />
                </Link>
                <Link
                    to="mailto:pbao.business@gmail.com"
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <MdOutlineAlternateEmail
                        size={24}
                        className="text-green-custom group-hover:text-white transition-all duration-500 relative z-10"
                    />
                </Link>
            </div>
            <Pulse />
            {/* <ButtonShadow
                target="_blank"
                title="View my Resume"
                path={
                    'https://drive.google.com/file/d/1vgcB-O1UUgwdAOIuNMVsXd9A1gFnOwxU/view?usp=sharing'
                }
                icon={<TbFileCv />}
            /> */}
        </div>
    )
}

export default CardPortfolio
