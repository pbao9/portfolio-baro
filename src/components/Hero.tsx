import CountUp from '../blocks/TextAnimations/CountUp/CountUp'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import ButtonShadow from './input/Button'
import Hyperlink from './input/Hyperlink'
import { getYearsOfExperience } from '../utils/experience'

const Hero = () => {
    const yearsOfExp = getYearsOfExperience()
    return (
        <div className="w-full animate-fade-down theme-text">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-4 sm:my-5 theme-text leading-tight">
                Transforming Your
                <br /> Ideas into
                <ShinyText
                    text="Reality"
                    disabled={false}
                    speed={3}
                    className="custom-class mx-2"
                />
            </h1>
            <span className="theme-text-secondary text-sm sm:text-base block">
                Passionate about creating intuitive and engaging user experiences.{' '}
                <br className="hidden sm:block" />
                <span className="sm:inline block">
                    Specialize in transforming ideas into beautifully crafted products.
                </span>
            </span>

            <div className="flex flex-row my-4 sm:my-6 justify-between sm:justify-start gap-2 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1 sm:flex-none sm:w-auto text-start">
                    <div className="flex flex-row justify-start text-3xl sm:text-4xl md:text-5xl items-center">
                        <h3 className="theme-text">+</h3>
                        <CountUp
                            from={100}
                            to={yearsOfExp}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text theme-text"
                        />
                    </div>
                    <h3 className="fw-bold text-xs sm:text-sm theme-text-secondary">
                        YEARS OF <br />
                        EXPERIENCE
                    </h3>
                </div>
                <div className="flex-1 sm:flex-none sm:w-auto text-start">
                    <div className="flex flex-row justify-start text-3xl sm:text-4xl md:text-5xl items-center">
                        <h3 className="theme-text">+</h3>
                        <CountUp
                            from={100}
                            to={35}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text theme-text"
                        />
                    </div>
                    <h3 className="fw-bold text-xs sm:text-sm theme-text-secondary">
                        PROJECTS
                        <br /> COMPLETED
                    </h3>
                </div>
                <div className="flex-1 sm:flex-none sm:w-auto text-start">
                    <div className="flex flex-row justify-start text-3xl sm:text-4xl md:text-5xl items-center">
                        <h3 className="theme-text">+</h3>
                        <CountUp
                            from={100}
                            to={5}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text theme-text"
                        />
                    </div>
                    <h3 className="fw-bold text-xs sm:text-sm theme-text-secondary">
                        WORLDWIDE
                        <br /> CLIENT
                    </h3>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:inline-flex items-stretch sm:items-center gap-3 sm:gap-5 my-5 w-full sm:w-auto">
                <ButtonShadow title="Let's talk" path={'mailto:pbao.business@gmail.com'} />
                <Hyperlink path="/projects" title="My work" />
            </div>
        </div>
    );
}

export default Hero
