import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router'

export const Collaborate = () => {
    return (
        <Link to="/contact">
            <div className="group cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between relative border border-white/5 rounded-xl p-8 md:p-10 bg-white/[0.02] hover:border-accent/20 transition-all duration-300 my-8">
                <div>
                    <h2 className="font-outfit font-semibold text-3xl md:text-4xl mb-3">
                        Let's <span className="text-accent">collaborate</span>
                    </h2>
                    <p className="text-white/50 max-w-lg leading-relaxed">
                        Unlock the potential of your product with expert design and development services.
                        Let's collaborate to create user-centered solutions that delight your users.
                    </p>
                </div>
                <div className="mt-6 md:mt-0 shrink-0 p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-canvas transition-all duration-300">
                    <FiArrowUpRight size={24} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
            </div>
        </Link>
    )
}
