import React from 'react';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GrOverview } from 'react-icons/gr';

const offer_products = [
  {
    name: 'S-Presso',
    price: '81000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/spresso/new-spresso.webp',
    explore: '/spresso-on-road-price-in-uttarpradesh',
  },
  {
    name: 'Alto K10',
    price: '83000',
    logo: 'Alto',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-k10/new-alto-k10.webp',
    explore: '/alto-k10-on-road-price-in-uttarpradesh',
  },
  {
    name: 'WagonR ',
    price: '58000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/wagon-r/new-wagonr.webp',
    explore: '/wagonr-on-road-price-in-uttarpradesh',
  },
  {
    name: 'Alto 800',
    price: '61000',
    logo: 'Alto',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/new-alto.webp',
    explore: '/alto-on-road-price-in-uttarpradesh',
  },

  {
    name: 'Celerio',
    price: '66000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/celerio/new-celerio.webp',
    explore: '/all-new-celerio-on-road-price-in-uttarpradesh',
  },
  {
    name: 'EECO',
    price: '39000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/eeco-new.webp',
    explore: '/eeco-on-road-price-in-uttarpradesh',
  },
  // {
  //   name: "Vitara Breeza",
  //   price: "26600",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/offers/maruti-suzuki-brezza.webp",
  //   explore: "/maruti-new-brezza-on-road-price-in-hyderabad",
  // },
  {
    name: 'Swift',
    price: '42000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift/new-swift.webp',
    explore: '/swift-on-road-price-in-uttarpradesh',
  },
  {
    name: 'Dzire',
    price: '32000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/dzire/new-dzire.webp',
    explore: '/swift-dzire-on-road-price-in-uttarpradesh',
  },

  {
    name: 'Ignis',
    price: '37000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-Ignis.webp',
    explore: '/nexa-ignis-on-road-price-in-uttarpradesh',
  },
  {
    name: 'Ciaz',
    price: '35000',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-ciaz.webp',
    explore: '/nexa-ciaz-on-road-price-in-uttarpradesh',
  },
  // {
  //   name: "Ertiga",
  //   price: "0",
  //   discount: "Low Cost EMI",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-ertiga/ertiga_2.png",
  //   explore: "/maruti-ertiga-on-road-price-in-hyderabad",
  // },
  // {
  //   name: 'Tour H1',
  //   price: '35000',

  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/alto-tour-h1/Alto800_car.png',
  //   explore: '/maruti-alto-tourh1-on-road-price-in-uttarpradesh',
  // },

  // {
  //   name: 'Tour V',
  //   price: '25000',

  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco_Car.png',
  //   explore: '/maruti-eeco-tourhv-on-road-price-in-uttarpradesh',
  // },
  // {
  //   name: 'Tour S',
  //   price: '10000',

  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Dzire_car.png',
  //   explore: '/maruti-dzire-tours-on-road-price-in-uttarpradesh',
  // },
  // {
  //   name: 'Tour H3',
  //   price: '20000',

  //   img: 'https://saboomaruti.in/static/media/wagonR.47c3c101c4c120a22870.webp',
  //   explore: '/maruti-wagonr-tourh3-on-road-price-in-uttarpradesh',
  // },
  // {
  //   name: 'Super Carry (Petrol)',
  //   price: '50000',

  //   img: 'https://www.saboocommercial.in/admin/img/vehicleimages/maruti-suzuki-super-carry-88671.jpg',
  //   explore: '/maruti-super-carry-on-road-price-in-uttarpradesh',
  // },
  // {
  //   name: 'Super Carry (CNG)',
  //   price: '45000',

  //   img: 'https://www.saboocommercial.in/admin/img/vehicleimages/maruti-suzuki-super-carry-88671.jpg',
  //   explore: '/maruti-super-carry-on-road-price-in-uttarpradesh',
  // },
];

const Offers = () => {
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
          alt='offer-information'
        />
        <div className='text-center pt-6 font-bold text-2xl'>
          Enjoy great offers with Smartwheels. Hurry up, Limited Period only.{' '}
          <br></br>
          Offer Valid till 30-Apr-2023 only.
        </div>
        <br></br>
        <div className='container mx-auto'>
          {/* <div className='grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-2'>
            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/S-Presso/9218/1658907133481/front-left-side-47.jpg?tr=w-456')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>S-presso </span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 70,000 /-
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
                      ₹ 70,000 /-
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
                  <span className='text-sm'>Alto K10</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 65,000 /-
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
                      ₹ 65,000 /-
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
                  <span className='text-sm'>Wagon R</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 55,000 /-
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
                      ₹ 55,000 /-
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
                  <span className='text-sm'>Alto 800</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 50,000 /-
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
                      ₹ 50,000 /-
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
                  <span className='text-sm'>Celerio</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 55,000 /-
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
                      ₹ 55,000 /-
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
                  src={require('../assets/nexa/ciaz/ciaz-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>EECO </span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 30,000 /-
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
                      ₹ 30,000 /-
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
                  <span className='text-sm'>Swift</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 35,000 /-
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
                      ₹ 35,000 /-
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
                  <span className='text-sm'>Dzire</span>
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
            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('../assets/nexa/baleno/baleno-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>Tour H1</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 35,000 /-
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
                      ₹ 35,000 /-
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
                  <span className='text-sm'>Tour H3</span>
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
            <div className='mx-2'>
              <div className='sm:flex sm:items-center sm:justify-between bg-white shadow rounded-lg mx-auto max-w-2xl p-2 my-16 border border-gray-300 hover:scale-105  ease-in duration-300'>
                <img
                  src={require('../assets/nexa/ciaz/ciaz-info.jpg')}
                  alt='1'
                  className='rounded-lg sm:h-40'
                />
                <p className='hidden sm:block text-sm'>
                  Maruti <br />
                  <span className='text-sm'>Tour V </span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 25,000 /-
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
                      ₹ 25,000 /-
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
                  <span className='text-sm'>Tour S</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 10,000 /-
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
                      ₹ 10,000 /-
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
                  <span className='text-sm'>Super Carry (Petrol)</span>
                </p>
                <p className='hidden sm:block text-2xl text-blue-800'>
                  Save up to <br />
                  <span className='font-semibold text-red-600'>
                    ₹ 50,000 /-
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
                      ₹ 50,000 /-
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
                  <span className='text-sm'>Super Carry (CNG)</span>
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
          </div> */}

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 gap-4 container mx-auto pb-5'>
            {offer_products.map((item) => (
              <div
                className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
                key={item.name}
              >
                <p className='absolute top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28'>
                  Offer
                </p>

                <div className=' flex-auto'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='mx-auto w-full'
                  />
                </div>
                <div className='flex-auto bg-white'>
                  <div>
                    <div className='flex items-center justify-between p-5 '>
                      {/* <img src={item.logo} alt={item.name} /> */}
                      <p className='text-xl font-bold'>
                        <i>{item.name}</i>
                      </p>
                      <p className='uppercase font-bold'>
                        Save up to <br />{' '}
                        <span className='text-red-500'>
                          ₹ {Intl.NumberFormat('en-IN').format(item.price)}*
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className='text-blue-500'>{item.discount}</span>
                      </p>
                    </div>
                    <div className='flex flex-col w-full px-5 mb-3'>
                      <Link
                        to={item.explore}
                        className='bg-blue-900  rounded-md text-white text-center font-bold uppercase py-2 hover:animate-pulse'
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
