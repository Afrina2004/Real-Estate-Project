import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from '../../../assets/pic(3).jpg';
import Slide2 from '../../../assets/pic(1).jpg';
import Slide3 from '../../../assets/pic(2).jpg';

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Slide1} className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} className='w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
