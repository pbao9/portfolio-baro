import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.tsx";
import { useState } from 'react';

const techStackData = [
    { name: 'Flutter', icon: '/flutter.svg', category: 'Mobile' },
    { name: 'Laravel', icon: '/laravel.svg', category: 'Backend' },
    { name: 'TypeScript', icon: '/typescript.svg', category: 'Frontend' },
    { name: 'Tailwind', icon: '/tailwind.svg', category: 'Styling' },
    { name: 'Vue.js', icon: '/vue.svg', category: 'Frontend' },
    { name: 'Next.js', icon: '/nextjs.svg', category: 'Frontend' },
    { name: 'React', icon: '/reactjs.svg', category: 'Frontend' },
    { name: 'React Native', icon: '/reactjs.svg', category: 'Mobile' },
    { name: 'Postman', icon: '/postman.svg', category: 'Tools' },
    { name: 'PhpStorm', icon: '/phpstorm.svg', category: 'Tools' },
    { name: 'MongoDB', icon: '/mongodb.svg', category: 'Database' },
    { name: 'MySQL', icon: '/mysql.svg', category: 'Database' },
    { name: 'Swagger', icon: '/swagger.svg', category: 'Tools' },
    { name: 'CodeIgniter', icon: '/codeigniter.svg', category: 'Backend' },
    { name: 'Magento', icon: '/magento-icon.svg', category: 'E-commerce' },
    { name: 'WordPress', icon: '/wordpress.svg', category: 'E-commerce' },
    { name: 'Redis', icon: '/redis.svg', category: 'Database' },
    { name: 'Bootstrap 5', icon: '/bootstrap.svg', category: 'Styling' },
    { name: 'Firebase', icon: '/firebase.svg', category: 'Database' },
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools', 'Styling', 'E-commerce'];

function TechStack() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTechStack = selectedCategory === 'All' 
        ? techStackData 
        : techStackData.filter(tech => tech.category === selectedCategory);

    const settings = {
        dots: false,
        arrows: false,
        infinite: filteredTechStack.length > 1,
        slidesToShow: Math.min(4, Math.max(1, filteredTechStack.length)),
        slidesToScroll: 1,
        autoplay: filteredTechStack.length > 1,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(4, Math.max(1, filteredTechStack.length)),
                    slidesToScroll: Math.min(2, filteredTechStack.length),
                    infinite: filteredTechStack.length > 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(3, Math.max(1, filteredTechStack.length)),
                    slidesToScroll: Math.min(2, filteredTechStack.length),
                    infinite: filteredTechStack.length > 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(2, Math.max(1, filteredTechStack.length)),
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    }

    const renderTechCard = (tech: any, index: number) => (
        <div key={index} className="px-2">
            <div className="group relative p-6 rounded-2xl theme-card theme-border hover:theme-shadow-hover transition-all duration-500 transform cursor-pointer">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-custom/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tech Icon */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 p-3 rounded-xl theme-bg-secondary flex items-center justify-center transition-transform duration-300">
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            width={40} 
                            height={40} 
                            className="filter group-hover:brightness-110 transition-all duration-300"
                        />
                    </div>
                    
                    {/* Tech Name */}
                    <h3 className="font-semibold text-sm theme-text text-center mb-2">
                        {tech.name}
                    </h3>
                    
                    {/* Category Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-custom/20 text-green-custom border border-green-custom/30">
                        {tech.category}
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="slider-container animate-fade-down">
            <div className="text-center mb-12">
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl mb-6 theme-text'>
                    Top-Tier Tools for Exceptional
                    <ShinyText
                        text="Results"
                        disabled={false}
                        speed={3}
                        className="custom-class mx-2"
                    />
                </h1>
                <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
                    Leveraging cutting-edge technologies to deliver exceptional digital experiences
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                            selectedCategory === category
                                ? 'bg-green-custom text-white shadow-lg shadow-green-custom/30'
                                : 'theme-card theme-border hover:theme-bg-tertiary theme-text'
                        }`}
                    >
                        {category}
                        {selectedCategory === category && (
                            <span className="ml-2 text-xs">({selectedCategory === 'All' ? techStackData.length : techStackData.filter(tech => tech.category === category).length})</span>
                        )}
                    </button>
                ))}
            </div>

            {/* Tech Stack Display */}
            {filteredTechStack.length > 0 ? (
                <div className="mb-8">
                    {filteredTechStack.length === 1 ? (
                        // Single item display - không dùng slider
                        <div className="flex justify-center">
                            <div className="px-2 max-w-sm">
                                {renderTechCard(filteredTechStack[0], 0)}
                            </div>
                        </div>
                    ) : (
                        // Multiple items - sử dụng slider
                        <Slider {...settings}>
                            {filteredTechStack.map((tech, index) => renderTechCard(tech, index))}
                        </Slider>
                    )}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold theme-text mb-2">No technologies found</h3>
                    <p className="theme-text-secondary">Try selecting a different category</p>
                </div>
            )}

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 rounded-2xl theme-card">
                    <div className="text-3xl font-bold text-green-custom mb-2">{techStackData.length}+</div>
                    <div className="text-sm theme-text-secondary">Technologies</div>
                </div>
                <div className="text-center p-6 rounded-2xl theme-card">
                    <div className="text-3xl font-bold text-green-custom mb-2">{categories.length - 1}</div>
                    <div className="text-sm theme-text-secondary">Categories</div>
                </div>
                <div className="text-center p-6 rounded-2xl theme-card">
                    <div className="text-3xl font-bold text-green-custom mb-2">2</div>
                    <div className="text-sm theme-text-secondary">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-2xl theme-card">
                    <div className="text-3xl font-bold text-green-custom mb-2">50+</div>
                    <div className="text-sm theme-text-secondary">Projects Completed</div>
                </div>
            </div>
        </div>
    )
}

export default TechStack
