import React from 'react';
import Header from '../../components/header/Header';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

const ArenaInfo = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src={require('../../assets/arena-info-banner.png')}
          className='w-full rounded-lg shadow-2xl'
          alt='arena information banner'
        />
      </div>

      <div>
        <body class='antialiased bg-white text-gray-900 font-sans p-2'>
          <div class='container mx-auto p-2'>
            <div class='flex flex-wrap flex flex-row justify-center items-center'>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/alto-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/alto/Maruti-Suzuki-Alto-Exterior.webp')}
                      alt='alto exterior picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/alto-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Alto
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 3.39 Lakh*
                      </span>
                      <a
                        href='/alto-on-road-price-in-uttarpradesh'
                        className='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/alto-on-road-price-in-uttarpradesh'>
                    <img
                      class='rounded-t-lg'
                      src={require('../../assets/alto/Maruti-Suzuki-Alto-Exterior.webp')}
                      alt='alto exterior picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/alto-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Alto K10
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 3.39 Lakh*
                      </span>
                      <a
                        href='/alto-on-road-price-in-uttarpradesh'
                        className='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/maruti-suzuki-brezza-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg object-fill'
                      src={require('../../assets/brezza/new-brezza/exterior-image-170.webp')}
                      alt='brezza exterior picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/maruti-suzuki-brezza-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki New Brezza
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 7.99 Lakh*
                      </span>
                      <a
                        href='/maruti-suzuki-brezza-on-road-price-in-uttarpradesh'
                        className='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/swift-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/swift/swift.webp')}
                      alt='swift picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/swift-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Swiift
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 5.91 Lakh*
                      </span>
                      <a
                        href='/swift-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='flex flex-wrap flex flex-row justify-center items-center'>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/swift-dzire-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/dzire/dzire.jpg')}
                      alt='dzire picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/swift-dzire-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Dzire
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 6.24 Lakh*
                      </span>
                      <a
                        href='/swift-dzire-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/all-new-celerio-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/celerio/celerio.jpg')}
                      alt='celerio picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/all-new-celerio-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Celerio
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 5.25 Lakh*
                      </span>
                      <a
                        href='/all-new-celerio-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='#'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/wagonr/wagon-r.jpg')}
                      alt='wagonr picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='#'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Wagon-R
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 5.44 Lakh*
                      </span>
                      <a
                        href='#'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='flex flex-wrap flex flex-row justify-center items-center'>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/spresso-on-road-price-in-uttarpradesh'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/spresso/s-presso.jpg')}
                      alt='spresso picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/spresso-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti S-Presso
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 3.99 Lakh*
                      </span>
                      <a
                        href='/spresso-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/maruti-ertiga-on-road-price-in-uttarpradesh'>
                    <img
                      class='rounded-t-lg'
                      src={require('../../assets/ertiga/ertiga.webp')}
                      alt='ertiga picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='#'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Ertiga
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 8.35 Lakh*
                      </span>
                      <a
                        href='/maruti-ertiga-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='#'>
                    <img
                      class=' rounded-t-lg'
                      src={require('../../assets/eeco/eeco.jpg')}
                      alt='eeco picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/eeco-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Eeco
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 4.39 Lakh*
                      </span>
                      <a
                        href='/eeco-on-road-price-in-uttarpradesh'
                        class='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <div class='max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
                  <a href='/alto-k10-on-road-price-in-uttarpradesh'>
                    <img
                      class='rounded-t-lg'
                      src={require('../../assets/cars/new-alto-k10.webp')}
                      alt='alto exterior picture'
                    />
                  </a>
                  <div class='p-5'>
                    <a href='/alto-k10-on-road-price-in-uttarpradesh'>
                      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                        Maruti Suzuki Alto K10
                      </h5>
                    </a>
                    <div class='flex items-center mt-2.5 mb-5'>
                      <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                        EX-SHOWROOM
                      </span>
                    </div>
                    <div class='flex justify-between items-center'>
                      <span class='text-2xl font-bold text-gray-900 dark:text-white'>
                        ₹ 3.99 Lakh*
                      </span>
                      <a
                        href='/alto-k10-on-road-price-in-uttarpradesh'
                        className='bg-[#1A2646] hover:bg-blue-600 border-b-4 border-blue-900 hover:bg-[#314783] text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
            <h5 class='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>
              WE LOVE OUR CUSTOMERS
            </h5>
            <p class='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
              Stay up to date and receive our updates.
            </p>
          </div>
        </body>
      </div>
    </div>
  );
};

export default ArenaInfo;
