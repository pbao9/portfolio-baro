import { Link } from 'react-router'
import { FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa6'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition.tsx'
import { Pulse } from './partials/Pulse.tsx'
import ButtonShadow from './input/Button.tsx'

const CardPortfolio = () => {
    return (
        <div className="shadow-lg p-6 w-full text-center block bg-dark-custom rounded-3xl mx-auto">
            <PixelTransition
                firstContent={
                    <img
                        src="/avatar.png"
                        alt="Avatar"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                }
                secondContent={
                    <div>
                        <img
                            src="/icon.jpg"
                            alt="Avatar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                }
                gridSize={5}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="shadow-green-custom border-green-custom hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.7)] hover:border-white transition-all duration-500"
            />
            <h1 className="text-4xl font-semibold text-white mt-4">
                Baro Pham
            </h1>
            <p className="text-white text-sm mt-1 uppercase font-bold">
                Devro Team
            </p>

            <p className="text-white text-sm mt-1">
                Web Developer HCM, Vietnam
            </p>

            <div
                id="social"
                className="flex flex-wrap justify-center gap-x-4 gap-x-2 py-2"
            >
                <Link
                    to="https://github.com/pbao9"
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGithub
                        size={24}
                        className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"
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
                        className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"
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
                        className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"
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
                        className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"
                    />
                </Link>
            </div>
            <Pulse />
            <div className="py-2"></div>
            <ButtonShadow
                title="Let's talk"
                path={'mailto:pbao.business@gmail.com'}
            />
        </div>
    )
}

export default CardPortfolio
