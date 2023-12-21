import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './range.css';

import { Autoplay, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

import {
  arenaCarsData,
  nexaCarsData,
  commercialCarsData,
} from '../../../constants/data';
import ScrollToTop from '../../ScrollToTop';

function Range() {
  return (
    <>
      <img
        src={require('../../../assets/car_background.jpg')}
        className='w-full h-[550px] object-cover object-bottom'
        alt='car background'
      />
      <Slider />
    </>
  );
}

const Slider = () => {
  const [tabs, setTabs] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className='slider_margin_range'>
      <p className='text-center text-6xl tracking-wider text-white'>
        Our Range
      </p>
      <div className='max-w-xl mx-auto flex items-center justify-evenly text-2xl text-white mt-8 mb-20 cursor-pointer'>
        <p
          className={tabs === 0 ? 'pb-1 border-b-4 border-b-white' : ''}
          onClick={(e) => setTabs(0)}
        >
          Arena
        </p>
        <p
          className={tabs === 1 ? 'pb-1 border-b-4 border-b-white' : ''}
          onClick={(e) => setTabs(1)}
        >
          Nexa
        </p>
        <p
          className={tabs === 2 ? 'pb-1 border-b-4 border-b-white' : ''}
          onClick={(e) => setTabs(2)}
        >
          Commercial
        </p>
      </div>
      <Swiper
        speed={2000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        centeredSlides={true}
        grabCursor={true}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Autoplay]}
        className='carSlider flex items-center '
      >
        {tabs === 0
          ? arenaCarsData.map((car) => (
              <SwiperSlide key={car.id} className='py-6'>
                <ScrollToTop />
                <Link to={car.link} className='focus:outline-none'>
                  <img src={car.img} className='slider_car' alt='alto' />
                  <img
                    src={car.logo}
                    style={{ width: '100px' }}
                    className='pl-5 lg:mt-4 car_logo'
                    alt='saboo arena car logo'
                  />
                  <div className='flex items-center justify-between car_content px-5 pb-5 lg:pb-5 lg:pt-2'>
                    {/* <img
                  src={car.logo}
                  style={{ width: "100px" }}
                  className="lg:hidden"
                  alt=""
                /> */}
                    <div className='block'>
                      <p>Starting at</p>
                      <p className='lg:text-xl font-semibold'>{car.price}</p>
                      <p className='text-xs'>*Ex-Showroom</p>
                    </div>
                    <div className='block'>
                      <p>Mileage</p>
                      <p className='lg:text-xl font-semibold'>
                        {car.mileage} <span className='text-xs'>km/l*</span>
                      </p>
                      <p className='text-xs'>Petrol</p>
                    </div>
                    <div className='block'>
                      <p>Power</p>
                      <p className='lg:text-xl font-semibold'>{car.power}</p>
                    </div>
                    <Link
                      to={car.link}
                      className='border border-black px-5 py-1 rounded hidden sm:block hover:bg-black hover:text-white duration-300'
                    >
                      Explore
                    </Link>
                  </div>
                  <Link
                    to={car.link}
                    className='border border-black px-5 ml-5 py-1 rounded sm:hidden'
                  >
                    Explore
                  </Link>
                </Link>
              </SwiperSlide>
            ))
          : ''}

        {/* Nexa */}
        {tabs === 1
          ? nexaCarsData.map((car) => (
              <SwiperSlide key={car.id} className='py-6'>
                <Link to={car.link} className='focus:outline-none'>
                  <img src={car.img} className='slider_car' alt='alto' />
                  <img
                    src={car.logo}
                    style={{ width: '100px' }}
                    className='pl-5 lg:mt-4 car_logo'
                    alt='saboo nexa car logos'
                  />
                  <div className='flex items-center justify-between car_content px-5 pb-5 lg:pb-5 lg:pt-2'>
                    {/* <img
                  src={car.logo}
                  style={{ width: "100px" }}
                  className="lg:hidden"
                  alt=""
                /> */}
                    <div className='block'>
                      <p>Starting at</p>
                      <p className='lg:text-xl font-semibold'>{car.price}</p>
                      <p className='text-xs'>*Ex-Showroom</p>
                    </div>
                    <div className='block'>
                      <p>Mileage</p>
                      <p className='lg:text-xl font-semibold'>
                        {car.mileage} <span className='text-xs'>km/l*</span>
                      </p>
                      <p className='text-xs'>Petrol</p>
                    </div>
                    <div className='block'>
                      <p>Power</p>
                      <p className='lg:text-xl font-semibold'>{car.power}</p>
                    </div>
                    <Link
                      to={car.link}
                      className='border border-black px-5 py-1 rounded hidden sm:block hover:bg-black hover:text-white duration-300'
                    >
                      Explore
                    </Link>
                  </div>
                  <Link
                    to={car.link}
                    className='border border-black px-5 ml-5 py-1 rounded sm:hidden'
                  >
                    Explore
                  </Link>
                </Link>
              </SwiperSlide>
            ))
          : ''}

        {/* Commercial */}
        {tabs === 2
          ? commercialCarsData.map((car) => (
              <SwiperSlide key={car.id} className='py-6'>
                <Link to={car.link} className='focus:outline-none'>
                  <img src={car.img} className='slider_car' alt='alto' />
                  <img
                    src={car.logo}
                    style={{ width: '100px' }}
                    className='pl-5 lg:mt-4 car_logo'
                    alt='saboo commercial car logos'
                  />
                  <div className='flex items-center justify-between car_content px-5 pb-5 lg:pb-5 lg:pt-2'>
                    {/* <img
                  src={car.logo}
                  style={{ width: "100px" }}
                  className="lg:hidden"
                  alt=""
                /> */}
                    <div className='block'>
                      <p>Starting at</p>
                      <p className='lg:text-xl font-semibold'>{car.price}</p>
                      <p className='text-xs'>*Ex-Showroom</p>
                    </div>
                    <div className='block'>
                      <p>Mileage</p>
                      <p className='lg:text-xl font-semibold'>
                        {car.mileage} <span className='text-xs'>km/l*</span>
                      </p>
                      <p className='text-xs'>Petrol</p>
                    </div>
                    <div className='block'>
                      <p>Power</p>
                      <p className='lg:text-xl font-semibold'>{car.power}</p>
                    </div>
                    <Link
                      to={car.link}
                      className='border border-black px-5 py-1 rounded hidden sm:block hover:bg-black hover:text-white duration-300'
                    >
                      Explore
                    </Link>
                  </div>
                  <Link
                    to={car.link}
                    className='border border-black px-5 ml-5 py-1 rounded sm:hidden'
                  >
                    Explore
                  </Link>
                </Link>
              </SwiperSlide>
            ))
          : ''}

        <div
          ref={navigationPrevRef}
          className='absolute left-2 sm:left-10 xl:top-[200px] lg:top-[155px] md:top-[11.5rem] top-[5.8rem] z-10 bg-gray-200 rounded-full p-1.5 sm:p-3 cursor-pointer'
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className='absolute right-2 sm:right-10 xl:top-[200px] lg:top-[155px] md:top-[11.5rem] top-[5.8rem] z-10 bg-gray-200 rounded-full p-1.5 sm:p-3 cursor-pointer'
        >
          <GrFormNext />
        </div>
      </Swiper>
    </div>
  );
};

export default Range;
