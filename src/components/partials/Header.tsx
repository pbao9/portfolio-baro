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
        <nav className="sticky w-[20rem] bg-dark-custom font-primary flex justify-around p-2 mt-5 rounded-lg top-10 z-[9999] shadow-2xs">
            {navItems.map(({ to, icon, label }) => (
                <Link
                    key={to}
                    to={to}
                    className={`group p-2 rounded-lg transition-all duration-300 relative ${
                        location.pathname === to ? 'bg-green-custom' : ''
                    }`}
                >
                    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[10px] text-xs text-white bg-dark-custom p-2 rounded transition-all duration-300">
                        {label}
                    </div>
                    <div
                        className={`absolute inset-0 scale-0 group-hover:scale-100 transition-all duration-200 rounded-lg ${
                            location.pathname === to
                                ? 'scale-100'
                                : 'bg-green-custom'
                        }`}
                    ></div>
                    <div className="text-white relative z-10">{icon}</div>
                </Link>
            ))}
        </nav>
    )
}

export default Header
