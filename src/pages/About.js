import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';

function About() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Best Nexa Dealers in Gorakhpur, Uttar Pradesh | Nexa Dealers in Uttar
          Pradesh
        </title>
        <meta
          name='title'
          content='Best Nexa Dealers in Gorakhpur, Uttar Pradesh | Nexa Dealers in Uttar Pradesh'
        />
        <meta
          name='description'
          content='Smartwheels one of the best Nexa authorized dealer in Gorakhpur, Uttar Pradesh. Simplify your Maruti Suzuki Nexa car buying experience with Smartwheels.'
        />
      </Helmet>
      <div className='bg-[#15151e] py-20'>
        <p className='text-center text-white uppercase text-3xl font-semibold'>
          About Us
        </p>
      </div>

      <div className='container mx-auto py-16 rounded-lg'>
        <div className='bg-white dark:bg-gray-900 p-2'>
          <div class='gap-6 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <img
              src={require('.././assets/undraw_delivery_truck_vt6p.png')}
              className='w-full hover:scale-105  ease-in duration-300'
              alt='a picture of about us page'
            />
            <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7 '>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                Our Clients Love Us<br></br>
              </h2>
              <p className='mb-6  text-black md:text-lg dark:text-black tracking-wide text-center'>
                Smartwheel Pvt Ltd. Largest Authorized Dealer for Maruti Suzuki
                Cars in Eastern UP since 1995.<br></br>
                <br></br> With an extensive and rapidly growing network of
                multiple Showrooms, Nexa, Arena, and True Value Outlets,
                E-Outlets, R-Outlets, Service Workshops, Accident-Repair
                Workshops. Driving Schools in various locations in and around
                Gorakhpur, Faizabad, Basti, Gonda, and Deoria.
              </p>
            </div>
          </div>

          <div className='gap-4 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7'>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                Strive not to be a success, but rather to be of value
              </h2>
              <p className='mb-6  text-black md:text-lg dark:text-black tracking-wide text-center'>
                We are passionately committed to building lifelong relationships
                with our customers and strive to provide them with the best
                shopping experience and high-quality after-sales service at all
                times.
              </p>
            </div>
            <img
              src={require('../assets/undraw_order_a_car_3tww.png')}
              className='w-full hover:scale-105  ease-in duration-300'
              alt='a picture in about us page'
            />
          </div>
          <div class='gap-6 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <img
              src={require('.././assets/undraw_Order_ride_re_372k.png')}
              className='w-full hover:scale-105  ease-in duration-300'
              alt='a picture in about us page'
            />
            <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7 hover:scale-100 ease-in duration-200'>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                A satisfied customer is the best business strategy of all
              </h2>
              <p className='mb-6  text-black md:text-lg dark:text-black tracking-wide text-center'>
                With our trained and passionate workforce backed by
                state-of-the-art and contemporary facilities, we are committed
                to forging lifelong relationships with our clients.<br></br>
                <br></br> Our showrooms offer a complete range of Maruti Suzuki
                cars to suit various needs, budgets, and personalities. We pride
                ourselves on being the perfect place to experience a smooth and
                enjoyable car buying experience in the region.
              </p>
            </div>
          </div>
          <div class='gap-6 items-center py-6 px-2 mx-auto max-w-screen-xl xl:gap-14 md:grid md:grid-cols-2 sm:py-14 lg:px-4'>
            <div className='mt-4 md:mt-0 bg-gray-100 shadow-2xl rounded-lg p-7 hover:scale-100 ease-in duration-200'>
              <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center'>
                Excellent customer service is the number one job in any company!
              </h2>
              <p className='mb-6  text-black md:text-lg dark:text-black tracking-wide text-center'>
                Our quality of sales and service, high business ethics, and an
                unwavering commitment to customer satisfaction have made us the
                most trusted and preferred dealer in the region.
              </p>
            </div>
            <img
              src={require('.././assets/undraw_Vehicle_sale_a645.png')}
              className='w-full hover:scale-105  ease-in duration-300'
              alt='a picture in about us page'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
