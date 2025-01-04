import slider1 from '../assets/Slider (1).jpg'
import slider2 from '../assets/Slider (2).jpg'
import slider3 from '../assets/Slider (3).jpg'
import slider4 from '../assets/Slider (4).jpg'
import slider5 from '../assets/Slider (5).jpg'
import slider6 from '../assets/Slider (6).jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, EffectCoverflow, Pagination,} from 'swiper/modules';

const Banner = () => {
    return (
        <>
        <Swiper
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
            delay: 2500,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          loop: true,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper my-14 w-11/12 mx-auto"
      >
        <SwiperSlide>
            <img src={slider1} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider6} alt="" className='h-72 md:h-96 w-[800px] mx-auto object-cover rounded-3xl' />
        </SwiperSlide>
      </Swiper>
        </>
    );
}

export default Banner;
