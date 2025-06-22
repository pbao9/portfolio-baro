import { Helmet } from 'react-helmet-async'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText.tsx'
import { Link } from 'react-router'

export const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Baro | Contact</title>
            </Helmet>
            <div className="w-full animate-fade-down">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl my-5 theme-text">
                    Let's Create
                    <ShinyText
                        text="Something Amazing"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                    />
                </h1>
            </div>

            <div className="max-w-4xl mx-auto p-5 theme-card rounded-lg theme-shadow animate-fade-down">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 theme-text">Get in Touch</h2>
                        <p className="theme-text-secondary mb-6">
                            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-custom rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium theme-text">Email</p>
                                    <p className="theme-text-secondary">pbao.business@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-custom rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium theme-text">Location</p>
                                    <p className="theme-text-secondary">Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-4 theme-text">Quick Links</h2>
                        <div className="space-y-3">
                            <Link to="/projects" className="block p-3 theme-bg-secondary rounded-lg hover:theme-bg-tertiary transition-colors">
                                <h3 className="font-medium theme-text">View My Projects</h3>
                                <p className="text-sm theme-text-secondary">Explore my latest work and case studies</p>
                            </Link>
                            
                            <Link to="/experience" className="block p-3 theme-bg-secondary rounded-lg hover:theme-bg-tertiary transition-colors">
                                <h3 className="font-medium theme-text">My Experience</h3>
                                <p className="text-sm theme-text-secondary">Learn about my background and expertise</p>
                            </Link>
                            
                            <a href="mailto:pbao.business@gmail.com" className="block p-3 theme-bg-secondary rounded-lg hover:theme-bg-tertiary transition-colors">
                                <h3 className="font-medium theme-text">Send Email</h3>
                                <p className="text-sm theme-text-secondary">Get in touch directly via email</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
