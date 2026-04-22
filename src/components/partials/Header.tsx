import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { FiBriefcase, FiFolder, FiHome, FiMail, FiTool, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { to: '/', icon: <FiHome size={16} />, label: 'Home' },
        { to: '/projects', icon: <FiFolder size={16} />, label: 'Projects' },
        { to: '/tools', icon: <FiTool size={16} />, label: 'Tools' },
        { to: '/experience', icon: <FiBriefcase size={16} />, label: 'Experience' },
        { to: '/contact', icon: <FiMail size={16} />, label: 'Contact' },
    ]

    const handleNavClick = () => {
        setMobileOpen(false)
        const lenis = (window as any).lenis
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? 'bg-canvas/70 backdrop-blur-xl' : 'bg-transparent'
                }`}
            >
                <nav className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
                        <img
                            src="https://res.cloudinary.com/dqtxna4oa/image/upload/f_webp,w_64/v1776831433/Logo_latw69.png"
                            alt="Baro Pham"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-jetbrains-mono font-semibold text-sm tracking-tight text-white/90">
                            baro<span className="text-accent">.</span>dev
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map(({ to, label }) => {
                            const isActive = location.pathname === to
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={handleNavClick}
                                    className={`text-sm transition-colors duration-200 ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-white/30 hover:text-white/60'
                                    }`}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </div>

                    <button
                        className="md:hidden p-2 text-white/40 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </nav>
            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-canvas md:hidden">
                    <div className="flex items-center justify-between px-6 h-16">
                        <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
                            <img
                                src="https://res.cloudinary.com/dqtxna4oa/image/upload/f_webp,w_64/v1776831433/Logo_latw69.png"
                                alt="Baro Pham"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="font-jetbrains-mono font-semibold text-sm text-white/90">
                                baro<span className="text-accent">.</span>dev
                            </span>
                        </Link>
                        <button
                            className="p-2 text-white/40 hover:text-white"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                        >
                            <FiX size={20} />
                        </button>
                    </div>
                    <nav className="flex flex-col px-6 pt-4 gap-1">
                        {navItems.map(({ to, icon, label }) => (
                            <Link
                                key={to}
                                to={to}
                                onClick={handleNavClick}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                                    location.pathname === to
                                        ? 'text-accent'
                                        : 'text-white/30 hover:text-white/60'
                                }`}
                            >
                                {icon}
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header
