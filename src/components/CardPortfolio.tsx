import {Link} from "react-router";
import { FaGithub, FaLinkedin, FaGitlab   } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const CardPortfolio = () => {
    return (
        <div className="shadow-lg p-6 w-80 text-center block bg-dark-custom rounded-3xl">
            <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-[250px] h-[250px] mx-auto rounded-xl object-cover border-4 border-green-custom hover:border-white transition-all duration-500"
            />
            <h2 className="text-xl font-semibold text-white mt-4">
                Baro Pham
            </h2>

            <p className="text-white text-sm mt-1">Web Developer
                HCM, Vietnam</p>

            <div id='social' className="flex flex-wrap justify-center gap-x-4 gap-x-2 py-2">
                <Link
                    to='https://github.com/pbao9'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGithub size={24} className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10" />
                </Link>
                <Link
                    to='https://www.linkedin.com/in/pbao/'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaLinkedin size={24} className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10" />
                </Link>
                <Link
                    to='https://gitlab.com/pbao9'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGitlab size={24} className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10" />
                </Link>
                <Link
                    to='mailto:pbao.business@gmail.com'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <MdOutlineAlternateEmail size={24} className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10" />
                </Link>
            </div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Liên hệ ngay
            </button>
        </div>
    );
};

export default CardPortfolio;
