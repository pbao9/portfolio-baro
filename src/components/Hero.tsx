import CountUp from '../blocks/TextAnimations/CountUp/CountUp'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText'
import ButtonShadow from './input/Button'
import Hyperlink from './input/Hyperlink'

const Hero = () => {
    return (
        <div className="w-full animate-fade-down theme-text">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl my-5 theme-text">
                Transforming Your
                <br /> Ideas into
                <ShinyText
                    text="Reality"
                    disabled={false}
                    speed={3}
                    className="custom-class mx-2"
                />
            </h1>
            <span className="theme-text-secondary">
                Passionate about creating intuitive and engaging user
                experiences. <br />
                Specialize in transforming ideas into beautifully crafted
                products.
            </span>

            <div className="flex flex-row my-2 justify-between sm:justify-between md:justify-baseline lg:justify-baseline xl:justify-start">
                <div className="w-1/4 text-start">
                    <div className="flex flex-row justify-start text-5xl items-center">
                        <h3 className="theme-text">+</h3>
                        <CountUp
                            from={100}
                            to={2}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text theme-text"
                        />
                    </div>
                    <h3 className="fw-bold text-sm theme-text-secondary">
                        YEARS OF <br />
                        EXPERIENCE
                    </h3>
                </div>
                <div className="w-1/4 text-start">
                    <div className="flex flex-row justify-start text-5xl items-center">
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
                    <h3 className="fw-bold text-sm theme-text-secondary">
                        PROJECTS
                        <br /> COMPLETED
                    </h3>
                </div>
                <div className="w-1/4 text-start">
                    <div className="flex flex-row justify-start text-5xl items-center">
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
                    <h3 className="fw-bold text-sm theme-text-secondary">
                        WORLDWIDE
                        <br /> CLIENT
                    </h3>
                </div>
            </div>
            <div className="inline-flex flex-row justify-between items-center gap-5 my-5">
                <ButtonShadow
                    title="Let's talk"
                    path={'mailto:pbao.business@gmail.com'}
                />
                <Hyperlink path="/projects" title="My work" />
            </div>
        </div>
    )
}

export default Hero
