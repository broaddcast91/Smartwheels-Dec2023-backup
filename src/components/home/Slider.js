import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const homeBanners = [
  // {
  //   id: 1,
  //   img: require('../../assets/banners/smartwheels-gudipadwa.webp'),
  // },  {
  //   id: 2,
  //   img: require('../../assets/banners/smartwheels-holi-banner.webp'),
  // },
  {
    id: 3,
    img: require('../../assets/banners/smartwheels-maruti-suzuki-arena-brezza-scng.webp'),
  },
  // {
  //   id: 2,
  //   img: require('../../assets/banners/smartwheels-service-banner.webp'),
  // },
  {
    id: 4,
    img: require('../../assets/banners/smartwheels-banner-fronx.png'),
  },
  {
    id: 5,
    img: require('../../assets/banners/smartwheels-banner-jimny.png'),
  },
  // {
  //   id: 3,
  //   img: require('../../assets/smartwheels-arena-banner.webp'),
  // },
  // {
  //   id: 4,
  //   img: require('../../assets/smartwheels-banner-dec.png'),
  // },
  {
    id: 6,
    img: require('../../assets/smartwheels-vitara-new-banner.webp'),
  },
  {
    id: 7,
    img: require('../../assets/Alto _Web Banner (1).webp'),
  },
  {
    id: 8,
    img: require('../../assets/banner1.webp'),
  },
  {
    id: 9,
    img: require('../../assets/banner2.webp'),
  },
  {
    id: 10,
    img: require('../../assets/banner3.jpg'),
  },
  {
    id: 11,
    img: require('../../assets/WagonR_web_1366x600.webp'),
  },
];

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className='homescreen_slider mx-10 rounded'
      >
        {homeBanners.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              className='h-full w-full bg-black'
              alt={item.id}
            />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className='absolute left-10 top-1/2 z-10 bg-white rounded-lg p-3 cursor-pointer'
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className='absolute right-10 top-1/2 z-10 bg-white rounded-lg p-3 cursor-pointer'
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default Slider;
