import {Link} from "react-router";
import {FaGithub, FaLinkedin, FaGitlab} from "react-icons/fa6";
import {MdOutlineAlternateEmail} from "react-icons/md";

const CardPortfolio = () => {
    return (
        <div className="shadow-lg p-6 w-80 text-center block bg-dark-custom rounded-3xl mx-auto">
            <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-[250px] h-[250px] mx-auto rounded-xl object-cover border-4 shadow-green-custom border-green-custom hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.7)] hover:border-white transition-all duration-500"
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
                    <div
                        className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGithub size={24}
                              className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"/>
                </Link>
                <Link
                    to='https://www.linkedin.com/in/pbao/'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div
                        className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaLinkedin size={24}
                                className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"/>
                </Link>
                <Link
                    to='https://gitlab.com/pbao9'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div
                        className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <FaGitlab size={24}
                              className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"/>
                </Link>
                <Link
                    to='mailto:pbao.business@gmail.com'
                    target={'_blank'}
                    className="group p-2 rounded-lg transition-all duration-300 relative"
                >
                    <div
                        className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                    <MdOutlineAlternateEmail size={24}
                                             className="text-green-custom group-hover:text-white transition transition-all duration-500 relative z-10"/>
                </Link>
            </div>
            <button
                className="text-green-custom hover:before:bg-green-custom border-green-custom relative h-[40px] w-30 overflow-hidden border border-green-custom bg-white rounded-xl px-3 text-green-custom shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-custom before:transition-all before:duration-500 hover:text-white hover:shadow-green-custom hover:before:left-0 hover:before:w-full">
                <Link to={'https://zalo.me/0901430854'} target={'_blank'} className="relative z-10">Contact me</Link>
            </button>


        </div>
    );
};

export default CardPortfolio;
