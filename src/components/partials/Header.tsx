import { Link, useLocation } from 'react-router'
import { FiBriefcase, FiFolder, FiHome, FiMail, FiTool } from 'react-icons/fi'

const Header = () => {
    const location = useLocation()

    const navItems = [
        { to: '/', icon: <FiHome size={20} />, label: 'Home' },
        { to: '/projects', icon: <FiFolder size={20} />, label: 'Projects' },
        { to: '/tools', icon: <FiTool size={20} />, label: 'Tools' },
        {
            to: '/experience',
            icon: <FiBriefcase size={20} />,
            label: 'Experience',
        },
        { to: '/contact', icon: <FiMail size={20} />, label: 'Contact' },
    ]

    const handleNavClick = () => {
        // Scroll to top using Lenis if available
        const lenis = (window as any).lenis
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 })
        } else {
            // Fallback to window scroll
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className="sticky w-auto bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg font-primary flex items-center gap-1 px-2 py-2 mt-5 top-10 z-[9999] shadow-lg">
            {navItems.map(({ to, icon, label }) => (
                <Link
                    key={to}
                    to={to}
                    onClick={handleNavClick}
                    className={`group px-4 py-2 rounded-md transition-all duration-200 relative ${
                        location.pathname === to 
                            ? 'text-green-custom bg-green-custom/10' 
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <div className="flex items-center gap-2">
                        {icon}
                        <span className="text-sm font-medium">{label}</span>
                    </div>
                </Link>
            ))}
        </nav>
    )
}

export default Header
