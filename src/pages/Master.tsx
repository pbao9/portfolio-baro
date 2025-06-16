import Footer from '../components/partials/Footer'
import Header from '../components/partials/Header'
import { Outlet } from 'react-router'
import CardPortfolio from '../components/CardPortfolio.tsx'
import { Question } from '../components/Question.tsx'
import { Collaborate } from '../components/Collaborate.tsx'
import Squares from '../blocks/Backgrounds/Squares/Squares.tsx'
import { MouseFollower } from '../components/MouseFollower.tsx'
import { SmoothScroll } from '../components/SmoothScroll.tsx'
const Master = () => {
    return (
        <div>
            <MouseFollower />
            <SmoothScroll />
            <div className="relative">
                <div className="opacity-90 min-h-screen text-white font-outfit w-full relative z-1">
                    <div className="flex flex-col justify-center items-center max-w-[1190px] mx-auto">
                        <Header />
                        <div className="relative z-[999] flex flex-wrap lg:flex-nowrap justify-center max-w-full px-4 md:px-10 py-10">
                            <div className="w-full md:w-1/2 lg:w-1/4 top-10 relative lg:sticky self-start animate-fade-right px-4 lg:px-0">
                                <CardPortfolio />
                            </div>
                            <div className="w-full md:w-2/3 lg:w-3/4 p-3 rounded-lg mt-15 pl-[0] lg:pl-[5rem] lg:mt-0 px-4 container">
                                <Outlet />
                                <Question />
                                <Collaborate />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 -z-10 h-screen w-screen">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="#fff"
                    hoverFillColor="#222"
                />
            </div>
        </div>
    )
}

export default Master
