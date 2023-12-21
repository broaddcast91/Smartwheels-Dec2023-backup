import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Offerstest = () => {
  return (
    <>
      <div>
        <Header />
        <Helmet>
          <title>
            Maruti Suzuki Car Offers in Uttar Pradesh| Nexa Car Offers in
            Gorakhpur
          </title>
          <meta
            name='title'
            content='Maruti Suzuki Car Offers in Uttar Pradesh| Nexa Car Offers in Gorakhpur'
          />
          <meta
            name='description'
            content='Get Best Offers on Maruti Suzuki new cars in Uttar Pradesh. Check out Nexa car offers in Gorakhpur. Visit your nearest Smartwheels showroom today to get best deals on Maruti Cars'
          />
        </Helmet>
        <img
          src={require('../assets/offers-info.png')}
          className='w-full rounded-lg shadow-2xl'
          alt='offer-banner'
        />
        <div className='text-center pt-6 font-bold text-2xl'>
          Enjoy great offers with Smartwheels. Hurry up, Limited Period only.{' '}
          <br></br>
          Offer Valid till 31-December-2022 only.
        </div>
        <div>
          <OffersPanel />
        </div>
        {/* <div className='container mx-auto'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>
            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('../assets/nexa/ciaz/ciaz-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>Ciaz </span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 45,000 /-
                  </span>
                </p>
                <Link
                  to='/contact'
                  className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                >
                  Book Now
                </Link>
                <div className='flex items-center justify-between sm:hidden mt-3 px-5'>
                  <p className='text-2xl text-blue-800'>
                    Save upto <br />
                    <span className='font-semibold text-red-600'>
                      ₹ 45,000 /-
                    </span>
                  </p>
                  <Link
                    to='/contact'
                    className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('../assets/nexa/ignis/nexa-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>Ignis BS VI</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 57,000 /-
                  </span>
                </p>
                <Link
                  to='/contact'
                  className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                >
                  Book Now
                </Link>
                <div className='flex items-center justify-between sm:hidden mt-3 px-5'>
                  <p className='text-2xl text-blue-800'>
                    Save upto <br />
                    <span className='font-semibold text-red-600'>
                      ₹ 57,000 /-
                    </span>
                  </p>
                  <Link
                    to='/contact'
                    className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('../assets/nexa/baleno/baleno-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>BALENO BS VI</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 20,000 /-
                  </span>
                </p>
                <Link
                  to='/contact'
                  className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                >
                  Book Now
                </Link>
                <div className='flex items-center justify-between sm:hidden mt-3 px-5'>
                  <p className='text-2xl text-blue-800'>
                    Save upto <br />
                    <span className='font-semibold text-red-600'>
                      ₹ 20,000 /-
                    </span>
                  </p>
                  <Link
                    to='/contact'
                    className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

const OffersPanel = () => {
  const [value, setValue] = useState(10);

  return (
    <>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value={10}>Arena</option>
        <option value={20}>Commercial</option>
        <option value={30}>CNG</option>
      </select>
      {value === 10 && <SmartwheelsArena />}
      {value === 20 && <SmartwheelsCommercial />}
      {value === 30 && <SmartwheelsCNG />}
    </>
  );
}

const SmartwheelsArena = () => {
  return (
    <>
      <p>smartwheels arena</p>
    </>
  );
};

const SmartwheelsCommercial = () => {
  return (
    <>
      <p>smartwheels commercial</p>
    </>
  );
};

const SmartwheelsCNG = () => {
  return (
    <>
      <p>smartwheels cng</p>
    </>
  );
};

export default Offerstest;
