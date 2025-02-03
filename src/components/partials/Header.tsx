import { Link } from "react-router"; // Lỗi import ở đây cần sửa lại là react-router-dom
import {FiBriefcase, FiFolder, FiHome, FiMail, FiTool} from "react-icons/fi";

const Header = () => {
    return (
        <nav className="w-[20rem] bg-dark-custom font-primary flex justify-around p-2 mt-5 rounded-lg sticky top-10 z-[999] shadow-2xs">
            <Link
                to={'/'}
                className="group p-2 rounded-lg transition-all duration-300 relative"
            >
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                    Home
                </div>
                <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                <FiHome size={24} className="text-white relative z-10" />
            </Link>
            <Link
                to={'/projects'}
                className="group p-2 rounded-lg transition-all duration-300 relative"
            >
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                    Projects
                </div>
                <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                <FiFolder size={24} className="text-white relative z-10" />
            </Link>
            <Link
                to={'/tools'}
                className="group p-2 rounded-lg transition-all duration-300 relative"
            >
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                    Tools
                </div>
                <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                <FiTool size={24} className="text-white relative z-10" />
            </Link>
            <Link
                to={'/experience'}
                className="group p-2 rounded-lg transition-all duration-300 relative"
            >
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                    Experience
                </div>
                <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                <FiBriefcase size={24} className="text-white relative z-10" />
            </Link>
            <Link
                to={'/contact'}
                className="group p-2 rounded-lg transition-all duration-300 relative"
            >
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                    Contact
                </div>
                <div className="absolute inset-0 bg-green-custom scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg"></div>
                <FiMail size={24} className="text-white relative z-10" />
            </Link>

        </nav>
    );
};

export default Header;
1