import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay,Navigation, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div >
            <img className='w-full h-[500px] object-center object-cover' src={"https://i.ibb.co.com/XfxWX5qC/headway-F2-KRf-Qf-Cqw-unsplash.jpg"} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='w-full h-[500px] object-center object-cover' src={"https://i.ibb.co.com/h1BwgkBq/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg"} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='w-full h-[500px] object-center object-cover' src={"https://i.ibb.co.com/0VY7gWf1/jakob-dalbjorn-cu-KJre3ny-Yc-unsplash.jpg"} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;