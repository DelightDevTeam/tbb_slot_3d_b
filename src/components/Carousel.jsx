import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BASE_URL from '../hooks/baseURL'
import useFetch from '../hooks/useFetch'

const Carousel = () => {
    const {data: banners} = useFetch(BASE_URL + '/banner');
    const {data: bannerText} = useFetch(BASE_URL + '/bannerText');
    // console.log(bannerText);

  return (
    <Swiper
    // spaceBetween={50}
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination, Navigation]}
  >
    {banners && banners.map((banner,index)=>{
        return  <SwiperSlide key={index}>
            <img className='bannerImg w-100' src={banner.img_url} />
        </SwiperSlide>

    })}
    <marquee className='mb-0 p-2 text-light bg-dark' >
        {bannerText.text && bannerText.text}
      </marquee>
  </Swiper>
  )
}

export default Carousel
