const Footer = () => {
    return (
        <footer className="border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/30">
                    Made by{' '}
                    <a
                        href="https://www.facebook.com/baro.phajm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                    >
                        Baro Pham
                    </a>
                </p>
                <p className="text-xs font-jetbrains-mono text-white/20">
                    &copy; {new Date().getFullYear()} Devro Tech
                </p>
            </div>
        </footer>
    )
}

export default Footer
