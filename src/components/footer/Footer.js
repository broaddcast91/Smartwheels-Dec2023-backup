import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { GrInstagram } from 'react-icons/gr';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

const links = {
  arena: [
    {
      id: 1,
      name: 'Alto K10',
      to: '/alto-k10-on-road-price-in-uttarpradesh',
    },
    {
      id: 1,
      name: 'Alto',
      to: '/alto-on-road-price-in-uttarpradesh',
    },
    {
      id: 2,
      name: 'WagonR',
      to: '/wagonr-on-road-price-in-uttarpradesh',
    },
    {
      id: 3,
      name: 'Celerio',
      to: '/all-new-celerio-on-road-price-in-uttarpradesh',
    },
    {
      id: 4,
      name: 'Swift',
      to: '/swift-on-road-price-in-uttarpradesh',
    },
    {
      id: 8,
      name: 'Dzire',
      to: '/swift-dzire-on-road-price-in-uttarpradesh',
    },
    {
      id: 5,
      name: 'S-Presso',
      to: '/spresso-on-road-price-in-uttarpradesh',
    },
    {
      id: 6,
      name: 'Ertiga',
      to: '/maruti-ertiga-on-road-price-in-uttarpradesh',
    },
    {
      id: 7,
      name: 'Brezza',
      to: '/maruti-suzuki-brezza-on-road-price-in-uttarpradesh',
    },
    {
      id: 8,
      name: 'EECO',
      to: '/eeco-on-road-price-in-uttarpradesh',
    },
  ],
  nexa: [
    {
      id: 1,
      name: 'Baleno',
      to: '/nexa-baleno-on-road-price-in-uttarpradesh',
    },
    {
      id: 2,
      name: 'Ciaz',
      to: '/nexa-ciaz-on-road-price-in-uttarpradesh',
    },
    {
      id: 3,
      name: 'XL6',
      to: '/nexa-xl6-on-road-price-in-uttarpradesh',
    },
    // {
    //   id: 4,
    //   name: "S-Cross",
    //   to: "/Scross",
    // },
    {
      id: 5,
      name: 'Ignis',
      to: '/nexa-ignis-on-road-price-in-uttarpradesh',
    },
    {
      id: 6,
      name: 'Grand Vitara',
      to: '/nexa-grand-vitara-on-road-price-in-uttarpradesh',
    },
    {
      id: 5,
      name: 'Fronx',
      to: '/nexa-fronx-on-road-price-in-uttarpradesh',
    },
    {
      id: 6,
      name: 'Jimny',
      to: '/nexa-jimny-on-road-price-in-uttarpradesh',
    },
  ],

  commercial: [
    {
      id: 1,
      name: 'Super Carry',
      to: '/maruti-super-carry-on-road-price-in-uttarpradesh',
    },
    {
      id: 2,
      name: 'EECO Cargo',
      to: '/maruti-super-eeco-cargo-on-road-price-in-uttarpradesh',
    },
    {
      id: 3,
      name: 'Tour S',
      to: '/maruti-dzire-tours-on-road-price-in-uttarpradesh',
    },
    {
      id: 4,
      name: 'Tour M',
      to: '/maruti-ertiga-tourm-on-road-price-in-uttarpradesh',
    },
    {
      id: 5,
      name: 'Tour H1',
      to: '/maruti-alto-tourh1-on-road-price-in-uttarpradesh',
    },

    {
      id: 6,
      name: 'Tour H3',
      to: '/maruti-wagonr-tourh3-on-road-price-in-uttarpradesh',
    },
    {
      id: 6,
      name: 'Tour V',
      to: '/maruti-eeco-tourhv-on-road-price-in-uttarpradesh',
    },
  ],

  cng: [
    {
      id: 1,
      name: 'Swift CNG',
      to: '/maruti-suzuki-swift-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 2,
      name: 'Alto CNG',
      to: '/maruti-suzuki-alto-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 3,
      name: 'Brezza CNG',
      to: '/maruti-suzuki-brezza-cng-on-road-price-in-uttarpradesh',
    },

    {
      id: 4,
      name: 'Wagon R CNG',
      to: '/maruti-suzuki-wagonr-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 5,
      name: 'Dzire CNG',
      to: '/maruti-suzuki-swift-dzire-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 6,
      name: 'Ertiga CNG',
      to: '/maruti-suzuki-ertiga-cng-on-road-price-in-uttarpradesh',
    },

    {
      id: 7,
      name: 'Spresso CNG',
      to: '/maruti-suzuki-sspresso-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 8,
      name: 'Eeco CNG',
      to: '/maruti-suzuki-eeco-cng-on-road-price-in-uttarpradesh',
    },
    {
      id: 9,
      name: 'Celerio CNG',
      to: '/maruti-suzuki-celerio-cng-on-road-price-in-uttarpradesh',
    },
  ],

  usefulLink: [
    {
      id: 1,
      name: 'Contact Us',
      to: './ContactUs',
    },

    {
      id: 2,
      name: 'Outlets',
      to: '/Showrooms',
    },
    {
      id: 3,
      name: 'Book a Service',
      to: '/BookAService',
    },
    {
      id: 4,
      name: 'Offers',
      to: '/maruti-suzuki-new-car-offers',
    },
    {
      id: 4,
      name: 'Driving School',
      to: '/maruti-driving-school',
    },
  ],
};



function Footer() {
  const { pathname } = useLocation();
  console.log(pathname);
  // condition
  if (pathname === '/admin/dashboard' || pathname === '/admin/enquiries')
    return null;
  return (
    <>
      <ScrollToTop />
      <div className=' bg-[#1A2646] px-5 '>
        <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 py-8 '>
          <div className='space-y-3 mb-5 col-span-2 sm:col-span-1 mr-4 pr-2'>
            <a href='/'>
              <img
                src={require('../../assets/white_logo.png')}
                className='h-20 '
                alt='smartwheels white logo in footer'
              />
            </a>
            <a
              className='flex items-center hover:text-red-500 text-white'
              href='tel:18001201888'
            >
              <FaPhoneAlt className='mr-1' />
              18001201888 - Arena
            </a>
            <a
              className='flex items-center hover:text-red-500 text-white'
              href='tel:18001211888'
            >
              <FaPhoneAlt className='mr-1' />
              18001211888 - NEXA
            </a>

            <a
              className='flex items-center text-white hover:text-red-500'
              href='mailto:ddm@smartwheels.co.in'
            >
              <FaEnvelope className='mr-1' />
              ddm@smartwheels.co.in
            </a>
            <br></br>
            <div className='flex text-white hover:text-red-500 font-extralight'>
              <IoLocationSharp />
              <p className='ml-2'>
                Nexa Showroom <br />
                Smartwheels Pvt Ltd <br />
                Medical College Road, Near Gulhariya Thana, <br />
                Gorakhpur, U.P. - 273013
              </p>
            </div>
            <br></br>
            <div className='flex items-center text-white '>
              <a
                href='https://www.facebook.com/smartwheels.gorakhpur'
                className='mr-5 hover:text-red-500'
              >
                <FaFacebook size={20} />
              </a>
              <a
                href='https://www.instagram.com/smartwheels.gorakhpur/'
                className='mr-5 hover:text-red-500'
              >
                <GrInstagram size={20} />
              </a>
              {/* <a href='/' className='mr-5 hover:text-red-500'>
                <FaLinkedin size={20} />
              </a> */}
              {/* <a href='/' className='mr-5 hover:text-red-500'>
                <FaYoutube size={24} />
              </a> */}
            </div>
          </div>
          <div className='space-y-1 mb-2 text-white p-4 ml-6'>
            <p className='sm:text-2xl  uppercase text-lg hover:text-red-500'>
              Arena
            </p>
            <div className='flex flex-col space-y-2 font-light'>
              {links.arena.map((item, index) => (
                <Link to={item.to} key={index} className='hover:text-red-500'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-3 mb-5 text-white p-4'>
            <p className='text-lg sm:text-2xl uppercase hover:text-red-500'>
              Nexa
            </p>
            <div className='flex flex-col space-y-2 font-light'>
              {links.nexa.map((item, index) => (
                <Link to={item.to} key={index} className='hover:text-red-500'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-3 mb-5 text-white p-4'>
            <p className='sm:text-2xl  uppercase text-lg hover:text-red-500'>
              CNG
            </p>
            <div className='flex flex-col space-y-2 font-light'>
              {links.cng.map((item, index) => (
                <Link to={item.to} key={index} className='hover:text-red-500'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-3 mb-5 text-white p-4'>
            <p className='text-lg sm:text-2xl uppercase hover:text-red-500'>
              Commercial
            </p>
            <div className='flex flex-col space-y-2 font-light'>
              {links.commercial.map((item, index) => (
                <Link to={item.to} key={index} className='hover:text-red-500'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-3 mb-5 text-white p-4'>
            <p className='text-lg sm:text-2xl uppercase hover:text-red-500'>
              Useful Links
            </p>
            <div className='flex flex-col space-y-2 font-light'>
              {links.usefulLink.map((item, index) => (
                <Link to={item.to} key={index} className='hover:text-red-500'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 p-4 text-white '>
        <div className='container mx-auto text-center md:flex items-center justify-between font-light '>
          <p className='hover:text-red-500'>
            2022 All Rights Reserved by Smartwheels Pvt.Ltd
          </p>
          <p className='hover:text-red-500'>
            Powered by&nbsp;
            <a
              href='https://broaddcast.com/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-red-500'
            >
              Broaddcast Business Solutions LLP
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
