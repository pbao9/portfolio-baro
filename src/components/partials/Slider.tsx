import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Mousewheel } from 'swiper/modules'
import {
    FiArrowDown,
    FiArrowLeft,
    FiArrowRight,
    FiArrowUp,
} from 'react-icons/fi'
import { Swiper as SwiperType } from 'swiper'
interface SliderProps {
    images: string[]
    link: string | undefined 
    thumbsSwiper: SwiperType | null
    setThumbsSwiper: (swiper: SwiperType) => void
}

const Slider: React.FC<SliderProps> = ({
    images,
    thumbsSwiper,
    setThumbsSwiper,
    link,
}) => {
    return (
        <div className="mockup-browser border border-base-300 w-full bg-dark-custom">
            <div className="mockup-browser-toolbar bg-black/30 py-3">
                <div className="input text-black">{link}</div>
            </div>
            <div className="place-content-center">
                <section className="slider">
                    <div className="slider__flex">
                        <div className="slider__col">
                            <div className="slider__prev">
                                <div className="hidden md:hidden lg:block">
                                    <FiArrowUp />
                                </div>
                                <div className="block md:block lg:hidden">
                                    <FiArrowLeft />
                                </div>
                            </div>

                            <div className="slider__thumbs">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    direction="vertical"
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation={{
                                        nextEl: '.slider__next',
                                        prevEl: '.slider__prev',
                                    }}
                                    className="swiper-container1"
                                    breakpoints={{
                                        0: {
                                            direction: 'horizontal',
                                        },
                                        768: {
                                            direction: 'vertical',
                                        },
                                    }}
                                    modules={[Navigation, Thumbs]}
                                >
                                    {images.map((image, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="slider__image">
                                                    <img
                                                        src={image}
                                                        alt={`Thumbnail ${index}`}
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>

                            <div className="slider__next">
                                <div className="hidden md:hidden lg:block">
                                    <FiArrowDown />
                                </div>
                                <div className="block md:block lg:hidden">
                                    <FiArrowRight />
                                </div>
                            </div>
                        </div>

                        <div className="slider__images">
                            <Swiper
                                thumbs={{
                                    swiper: thumbsSwiper,
                                }}
                                direction="horizontal"
                                slidesPerView={1}
                                spaceBetween={32}
                                mousewheel={true}
                                navigation={{
                                    nextEl: '.slider__next',
                                    prevEl: '.slider__prev',
                                }}
                                breakpoints={{
                                    0: {
                                        direction: 'horizontal',
                                    },
                                    768: {
                                        direction: 'horizontal',
                                    },
                                }}
                                className="swiper-container2"
                                modules={[Navigation, Thumbs, Mousewheel]}
                            >
                                {images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="slider__image">
                                                <img
                                                    src={image}
                                                    alt={`Image ${index}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Slider
