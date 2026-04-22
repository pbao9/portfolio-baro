import { useState, useEffect } from 'react'
import CountUp from '../blocks/TextAnimations/CountUp/CountUp'
import { getYearsOfExperience } from '../utils/experience'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaGitlab } from 'react-icons/fa6'

const roles = [
    'Software Engineering',
    'Backend Engineer',
    'Frontend Development',
    'DevOps Engineer',
]

const Hero = () => {
    const yearsOfExp = getYearsOfExperience()
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        const currentRole = roles[roleIndex]

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1))
                setTypingSpeed(100)

                if (displayedText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1))
                setTypingSpeed(50)

                if (displayedText === '') {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, roleIndex, typingSpeed])

    return (
        <section className="relative py-20 md:py-32">
            <div className="absolute inset-0 bg-hero-image bg-cover bg-center opacity-[0.06] blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/90 to-canvas" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                        <img
                            src="https://res.cloudinary.com/dqtxna4oa/image/upload/f_webp,w_256/v1776831256/avatar_gqkcfy.jpg"
                            alt="Baro Pham"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                    <div>
                        <h2 className="font-jetbrains-mono font-semibold text-lg">Phạm Gia Bảo (Baro Pham)</h2>
                        <p className="text-white/40 text-sm">
                            <a href="https://devro-tech.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                devro-tech.com
                            </a>
                        </p>
                    </div>
                </div>

                <h1 className="font-jetbrains-mono font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-4">
                    Transforming Ideas
                    <br />
                    into <span className="text-accent">Reality</span>
                </h1>

                <div className="h-10 md:h-12 flex items-center mb-8">
                    <span className="text-accent/60 mr-2">{'>'}</span>
                    <span className="text-xl md:text-2xl font-jetbrains-mono bg-accent/10 text-accent px-3 py-1 rounded-lg">
                        {displayedText}
                    </span>
                    <span className="w-0.5 h-6 bg-accent ml-2 animate-pulse" />
                </div>

                <p className="text-base text-white/40 max-w-xl leading-relaxed mb-10">
                    Passionate about creating intuitive and engaging user experiences.
                    Specialize in transforming ideas into beautifully crafted products.
                </p>

                <div className="flex flex-wrap gap-8 mb-12">
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-accent text-xl font-light">+</span>
                            <CountUp
                                from={0}
                                to={yearsOfExp}
                                separator=","
                                direction="up"
                                duration={1.5}
                                className="text-3xl font-jetbrains-mono font-semibold"
                            />
                        </div>
                        <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">Years Exp</p>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-accent text-xl font-light">+</span>
                            <CountUp
                                from={0}
                                to={35}
                                separator=","
                                direction="up"
                                duration={1.5}
                                className="text-3xl font-jetbrains-mono font-semibold"
                            />
                        </div>
                        <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">Projects</p>
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-accent text-xl font-light">+</span>
                            <CountUp
                                from={0}
                                to={20}
                                separator=","
                                direction="up"
                                duration={1.5}
                                className="text-3xl font-jetbrains-mono font-semibold"
                            />
                        </div>
                        <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">Clients</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-12">
                    <a
                        href="mailto:pbao.business@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-canvas font-medium rounded-lg hover:bg-accent-hover transition-colors text-sm"
                    >
                        <FiMail size={16} />
                        Let's Talk
                    </a>
                    <a
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white/50 rounded-lg hover:text-white transition-colors text-sm"
                    >
                        View My Work
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/pbao9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-white/20 hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <FiGithub size={18} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pbao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-white/20 hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={18} />
                    </a>
                    <a
                        href="https://gitlab.com/pbao9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-white/20 hover:text-accent transition-colors"
                        aria-label="GitLab"
                    >
                        <FaGitlab size={18} />
                    </a>
                    <a
                        href="mailto:pbao.business@gmail.com"
                        className="p-2.5 text-white/20 hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <FiMail size={18} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <FiArrowDown className="text-white/10" size={18} />
            </div>
        </section>
    )
}

export default Hero
