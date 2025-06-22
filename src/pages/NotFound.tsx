import FixedThemeToggle from '../components/FixedThemeToggle.tsx'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center theme-bg theme-text">
            <h1 className="text-6xl font-bold animate-glitch glitch-text relative mb-4">
                404
            </h1>
            <p className="text-xl theme-text-muted mb-4">Oops! Page not found.</p>
            <FixedThemeToggle />
        </div>
    )
}
