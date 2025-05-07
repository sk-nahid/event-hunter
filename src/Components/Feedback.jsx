
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feedback = () => {
    return (
        <div>
            <section className="py-10 bg-white">
            <div className='my-12'>
            <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>People's Feedback</h1>
            <p className='text-center text-lg mb-4'>what people say about us </p>
            </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                >
                    <SwiperSlide>
                        <div className="p-6 border rounded shadow text-center max-w-xl mx-auto">
                            <p className="italic">"This event changed my life. Everything was so well organized!"</p>
                            <p className="mt-2 font-semibold">— bilai miya</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-6 border rounded shadow text-center max-w-xl mx-auto">
                            <p className="italic">"this event is too good and its help us to comeback!"</p>
                            <p className="mt-2 font-semibold">— Hablu mama</p>
                        </div>
                    </SwiperSlide>
                    {/* Add more SwiperSlide components as needed */}
                </Swiper>
            </section>
        </div>
    );
};

export default Feedback;