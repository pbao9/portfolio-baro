import { Outlet } from 'react-router'
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'
import Squares from '../../blocks/Backgrounds/Squares/Squares'
import FixedThemeToggle from '../../components/FixedThemeToggle.tsx'

const MasterProject = () => {
    return (
        <>
            <div className="relative">
                <div className="theme-bg theme-text opacity-90 min-h-screen font-outfit w-full relative">
                    <div className="flex flex-col justify-center items-center max-w-[1190px] mx-auto">
                        <Header />
                        <div className="relative z-[999] w-full">
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <Squares
                speed={0.5}
                squareSize={40}
                direction="diagonal"
                borderColor="var(--theme-border)"
                hoverFillColor="var(--theme-hover)"
            />
            <FixedThemeToggle />
        </>
    )
}

export default MasterProject
