import React from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './navigationButton.css'

const Slider = () => {
    return (
        <div className='container bg-amber-300'>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className='rounded-md max-w-2xl'
            >
                <SwiperSlide><img src="pic.jpg" alt="pic" /></SwiperSlide>    {/* map() on images */}
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider