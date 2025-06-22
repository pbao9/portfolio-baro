import { Link, useLocation } from 'react-router'
import { FiBriefcase, FiFolder, FiHome, FiMail, FiTool } from 'react-icons/fi'

const Header = () => {
    const location = useLocation()

    const navItems = [
        { to: '/', icon: <FiHome size={24} />, label: 'Home' },
        { to: '/projects', icon: <FiFolder size={24} />, label: 'Projects' },
        { to: '/tools', icon: <FiTool size={24} />, label: 'Tools' },
        {
            to: '/experience',
            icon: <FiBriefcase size={24} />,
            label: 'Experience',
        },
        { to: '/contact', icon: <FiMail size={24} />, label: 'Contact' },
    ]

    return (
        <nav className="sticky w-[20rem] bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 font-primary flex justify-around p-3 mt-5 rounded-2xl top-10 z-[9999] shadow-2xl shadow-black/10">
            {navItems.map(({ to, icon, label }) => (
                <Link
                    key={to}
                    to={to}
                    className={`group p-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
                        location.pathname === to ? 'bg-green-custom/20' : ''
                    }`}
                >
                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-black/80 backdrop-blur-md p-2 rounded-lg transition-all duration-300 whitespace-nowrap">
                        {label}
                    </div>
                    
                    {/* Active background */}
                    <div
                        className={`absolute inset-0 scale-0 group-hover:scale-100 transition-all duration-200 rounded-xl ${
                            location.pathname === to
                                ? 'scale-100 bg-green-custom/30'
                                : 'bg-green-custom/20'
                        }`}
                    ></div>
                    
                    {/* Icon with glass effect */}
                    <div className="text-white relative z-10 group-hover:drop-shadow-lg transition-all duration-300">
                        {icon}
                    </div>
                </Link>
            ))}
        </nav>
    )
}

export default Header
