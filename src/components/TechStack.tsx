import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.tsx";

function TechStack() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div className="slider-container">
            <h1 className='font-bold text-6xl'>Tech Stack I
                <ShinyText
                    text="Using"
                    disabled={false}
                    speed={3}
                    className="custom-class mx-2"
                />
            </h1>
            <Slider {...settings}>
                <div className=' p-5 rounded-2xl mx-3'>
                    <img src='/flutter.svg' alt='flutter' width={60} height={60} className='mx-auto' />
                </div>
                <div  className=' p-5 rounded-2xl mx-3'>
                    <img src='/laravel.svg' alt='laravel' width={60} height={60} className='mx-auto' />
                </div>
                <div  className=' p-5 rounded-2xl mx-3'>
                    <img src='/typescript.svg' alt='typescript' width={60} height={60} className='mx-auto' />
                </div>
                <div  className=' p-5 rounded-2xl mx-3'>
                    <img src='/tailwind.svg' alt='tailwind' width={60} height={60} className='mx-auto' />
                </div>
                <div  className=' p-5 rounded-2xl mx-3'>
                    <img src='/vue.svg' alt='vue' width={60} height={60} className='mx-auto' />
                </div>
                <div  className=' p-5 rounded-2xl mx-3'>
                    <img src='/nextjs.svg' alt='next' width={60} height={60} className='mx-auto bg-white p-[0.1rem] rounded-full' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/reactjs.svg' alt='react' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/postman.svg' alt='postman' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/phpstorm.svg' alt='phpstorm' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/mongodb.svg' alt='mongodb' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/mysql.svg' alt='mysql' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/swagger.svg' alt='swagger' width={60} height={60} className='mx-auto' />
                </div>
                <div  className='p-5 rounded-2xl mx-3'>
                    <img src='/DBeaver.svg' alt='dbeaver' width={60} height={60} className='mx-auto' />
                </div>
            </Slider>
        </div>
    )
}

export default TechStack
