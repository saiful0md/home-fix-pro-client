
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='rounded-lg'>
            <Swiper
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[500px] my-12 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/DM7TxFt/photo-1444419988131-046ed4e5ffd6-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Expert Home Repair Services at Your Doorstep</h1>
                                <p className="mb-5">Welcome to HomeFixPro – Where Home Repair is Made Easy! Our dedicated team offers top-notch solutions for all your home repair needs. From quick fixes to full renovations, trust us to deliver quality service with a smile. Experience the difference with HomeFixPro today!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px] my-12 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/MhsspZ7/photo-1574359411659-15573a27fd0c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Bringing Excellence to Every Corner of Your Home</h1>
                                <p className="mb-5">HomeFixPro: Your go-to for seamless home repairs. Our skilled team offers reliable solutions for all your needs, from minor touch-ups to major overhauls. Trust us to transform your living space, hassle-free</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[500px] my-12 rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/DwVNrcL/furniture-assembly-worker-standing-reading-instruction-using-tape-measure-worker-tools-482257-24849.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Elevate Your Living Space with HomeFixPro</h1>
                                <p className="mb-5">HomeFixPro Your Home Repair Experts. With our skilled team and personalized service, we make home repairs a breeze. From start to finish, trust us to handle everything with precision and care. Experience the convenience of HomeFixPro – Your home, our expertise.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;