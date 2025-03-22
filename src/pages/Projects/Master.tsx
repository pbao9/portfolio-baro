import { Outlet } from 'react-router'
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'
const MasterProject = () => {
    return (
        <div className="relative">
            <div className="bg-black opacity-90 min-h-screen text-white font-outfit w-full relative">
                <div className="flex flex-col justify-center items-center max-w-[1190px] mx-auto">
                    <Header />
                    <div className="relative z-[999] w-full">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MasterProject
