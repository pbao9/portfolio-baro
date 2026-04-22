import Marquee from 'react-fast-marquee'

const techGroups = {
    Frontend: [
        { name: 'TypeScript', icon: '/typescript.svg' },
        { name: 'Vue.js', icon: '/vue.svg' },
        { name: 'Nuxt', icon: '/nuxt.svg' },
        { name: 'Next.js', icon: '/nextjs.svg' },
        { name: 'React', icon: '/reactjs.svg' },
        { name: 'Angular', icon: '/angular.svg' },
    ],
    Backend: [
        { name: 'Laravel', icon: '/laravel.svg' },
        { name: 'CodeIgniter', icon: '/codeigniter.svg' },
        { name: 'Golang', icon: '/golang.svg' },
        { name: 'Python', icon: '/python.svg' },
        { name: 'GraphQL', icon: '/graphql.svg' },
        { name: 'NestJS', icon: '/nestjs.svg' },
    ],
    Mobile: [
        { name: 'Flutter', icon: '/flutter.svg' },
        { name: 'React Native', icon: '/reactjs.svg' },
    ],
    Database: [
        { name: 'MySQL', icon: '/mysql.svg' },
        { name: 'MongoDB', icon: '/mongodb.svg' },
        { name: 'Redis', icon: '/redis.svg' },
        { name: 'Firebase', icon: '/firebase.svg' },
        { name: 'PostgreSQL', icon: '/postgresql.svg' },
    ],
    Tools: [
        { name: 'Docker', icon: '/docker.svg' },
        { name: 'Postman', icon: '/postman.svg' },
        { name: 'PhpStorm', icon: '/phpstorm.svg' },
        { name: 'Swagger', icon: '/swagger.svg' },
        { name: 'Git', icon: '/git.svg' },
    ],
    Styling: [
        { name: 'Tailwind', icon: '/tailwind.svg' },
        { name: 'Bootstrap 5', icon: '/bootstrap.svg' },
    ],
    Ecommerce: [
        { name: 'WordPress', icon: '/wordpress.svg' },
        { name: 'Magento', icon: '/magento-icon.svg' },
    ],
}

function TechItem({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-3 px-5 py-3 mx-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer shrink-0">
            <img
                src={icon}
                alt={name}
                width={24}
                height={24}
                className="opacity-50 hover:opacity-100 transition-opacity"
            />
            <span className="text-sm font-jetbrains-mono text-white/60 hover:text-white transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    )
}

function TechStack() {
    const groupEntries = Object.entries(techGroups)

    const row1Groups = groupEntries.filter((_, i) => i % 2 === 0)
    const row2Groups = groupEntries.filter((_, i) => i % 2 === 1)

    const row1Items = row1Groups.flatMap(([_, items]) => items)
    const row2Items = row2Groups.flatMap(([_, items]) => items)

    return (
        <section className="py-16">
            <div className="mb-12">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// Skills</p>
                <h2 className="font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    Tools &<br />
                    <span className="text-white/40">Technologies</span>
                </h2>
                <p className="text-white/50 max-w-2xl leading-relaxed">
                    Leveraging cutting-edge technologies to deliver exceptional digital experiences.
                </p>
            </div>

            <div className="space-y-4 mb-12">
                {/* Row 1: Left to Right */}
                <div className="overflow-hidden rounded-xl">
                    <Marquee gradient={true} gradientColor="#1a1a1a" gradientWidth={80} speed={30} pauseOnHover>
                        {row1Items.map((tech, i) => (
                            <TechItem key={`row1-${i}`} name={tech.name} icon={tech.icon} />
                        ))}
                    </Marquee>
                </div>

                {/* Row 2: Right to Left */}
                <div className="overflow-hidden rounded-xl">
                    <Marquee
                        gradient={true}
                        gradientColor="#1a1a1a"
                        gradientWidth={80}
                        speed={30}
                        direction="right"
                        pauseOnHover
                    >
                        {row2Items.map((tech, i) => (
                            <TechItem key={`row2-${i}`} name={tech.name} icon={tech.icon} />
                        ))}
                    </Marquee>
                </div>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-3xl font-outfit font-semibold text-accent mb-1">
                        {Object.values(techGroups).flat().length}+
                    </div>
                    <div className="text-sm text-white/40 font-jetbrains-mono">Technologies</div>
                </div>
                <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-3xl font-outfit font-semibold text-accent mb-1">
                        {groupEntries.length}
                    </div>
                    <div className="text-sm text-white/40 font-jetbrains-mono">Categories</div>
                </div>
                <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-3xl font-outfit font-semibold text-accent mb-1">3+</div>
                    <div className="text-sm text-white/40 font-jetbrains-mono">Years Exp</div>
                </div>
                <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-3xl font-outfit font-semibold text-accent mb-1">35+</div>
                    <div className="text-sm text-white/40 font-jetbrains-mono">Projects</div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
