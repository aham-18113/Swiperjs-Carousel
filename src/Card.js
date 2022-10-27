import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { data } from "./data";

export default function Card() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                // loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {data.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div className="items-center pt-6">
                            <div className="flex justify-center">
                                <img src="https://www.collegecanteen.co.in/images/Kanak.jpeg" alt="" className='w-32 h-32 rounded-full' />
                            </div>
                            <div className='text-center'>
                                <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{post.name}</h5>
                                <div class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{post.description}</div>
                                <p className='text-xl font-bold'>{post.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
