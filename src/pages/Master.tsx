import Footer from '../components/partials/Footer'
import Header from '../components/partials/Header'
import {Outlet} from 'react-router'
import CardPortfolio from "../components/CardPortfolio.tsx";
import {Question} from "../components/Question.tsx";

const Master = () => {
    return (
        <div className="bg-black opacity-90 min-h-screen text-white font-inter w-full">
            <div className="flex flex-col justify-center items-center max-w-[1440px] mx-auto">
                <Header />
                <div className="relative flex flex-row justify-center gap-16 w-full px-10 py-10">

                    <div className="w-1/4 top-10 sticky self-start">
                        <CardPortfolio />
                    </div>

                    <div className="w-3/4 p-3 rounded-lg shadow-lg">
                        <Outlet />


                        <Question/>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Master
