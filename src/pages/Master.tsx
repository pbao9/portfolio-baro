import { Outlet } from 'react-router'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

const Master = () => {
    return (
        <div className="min-h-screen bg-canvas text-white font-jetbrains-mono">
            <div className="fixed inset-0 bg-bg-image bg-cover bg-center opacity-[0.04] blur-sm pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-canvas/50 to-canvas pointer-events-none" />

            <div className="relative z-10">
                <Header />
                <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-16">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Master
