import React from 'react'
import { Button } from '../ui/button'
import { IconBrandLinkedin, IconDownload, IconGitBranch } from '@tabler/icons-react'

const Card = () => {
    return (
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-black/10 rounded-3xl p-4 shadow-xl border border-white/10 overflow-hidden transition-transform duration-200">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-purple-500/30 via-pink-400/20 to-blue-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col gap-6 relative z-10">
                <div>
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Baro Pham"
                        className="w-16 h-16 rounded-full border-4 border-white/20 shadow-md mb-4"
                    />
                    <h1 className="text-xl md:text-3xl font-bold text-white mb-1">
                        I’m Baro Pham,
                    </h1>
                    <span className="inline-block bg-white/10 text-xs text-white/70 px-3 py-1 rounded-full font-medium tracking-wide">
                        Software Engineer
                    </span>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                    I’m a software engineer with a passion for building scalable
                    and efficient web applications.
                </p>
                <div className="flex flex-row items-center justify-center gap-2 border border-white/10 rounded-full p-2">
                    <div className="flex gap-2 items-center">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        <span className="text-white/70 text-base leading-relaxed">
                            Available for work
                        </span>
                    </div>
                </div>

                <div className="mx-auto">
                    <Button variant="outline" className="cursor-pointer">
                        <IconDownload /> Download CV
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card
