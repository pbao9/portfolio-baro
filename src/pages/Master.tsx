import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';
import { Outlet } from 'react-router';
import CardPortfolio from "../components/CardPortfolio.tsx";
import { Question } from "../components/Question.tsx";
import {Collaborate} from "../components/Collaborate.tsx";
import Squares from "../blocks/Backgrounds/Squares/Squares.tsx";

const Master = () => {
    return (
        <div className='relative'>
            <div className="bg-black opacity-90 min-h-screen text-white font-inter w-full relative">
                <div className="flex flex-col justify-center items-center max-w-[1440px] mx-auto">
                    <Header />

                    <div className="relative z-[999] flex flex-wrap lg:flex-nowrap justify-center gap-16 md:gap-16 w-full px-4 md:px-10 py-10">
                        <div className="w-full md:w-1/2 lg:w-1/4 top-10 relative lg:sticky self-start animate-fade-right">
                            <CardPortfolio />
                        </div>

                        <div className="w-full md:w-2/3 lg:w-3/4 p-3 rounded-lg shadow-lg">
                            <Outlet />
                            <Question />
                            <Collaborate/>
                        </div>
                    </div>

                    <Footer />
                </div>
                <Squares />

            </div>
        </div>
    );
};

export default Master;
