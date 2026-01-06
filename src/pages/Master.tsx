import Footer from '../components/partials/Footer'
import Header from '../components/partials/Header'
import { Outlet } from 'react-router'
import CardPortfolio from '../components/CardPortfolio.tsx'
import { Question } from '../components/Question.tsx'
import { Collaborate } from '../components/Collaborate.tsx'
import { MouseFollower } from '../components/MouseFollower.tsx'
import { SmoothScroll } from '../components/SmoothScroll.tsx'

const Master = () => {
    return (
        <div>
            <MouseFollower />
            <SmoothScroll />
            <div className="relative">
                <div className="theme-bg theme-text opacity-90 min-h-screen font-outfit w-full relative z-1">
                    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto">
                        <Header />
                        <div className="relative z-[999] flex flex-col lg:flex-row justify-center max-w-full px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 gap-4 lg:gap-0">
                            <div className="w-full lg:w-1/4 lg:sticky lg:top-20 self-start animate-fade-right">
                                <CardPortfolio />
                            </div>
                            <div className="w-full lg:w-3/4 p-2 sm:p-3 rounded-lg lg:pl-20">
                                <Outlet />
                                <Question />
                                <Collaborate />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Master
