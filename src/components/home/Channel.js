import React from 'react';
import { Link } from 'react-router-dom';

const channels = [
  {
    id: 1,
    name: 'Welcome',
    title: 'To new-age designs',
    image: require('../../assets/alto-k10-thumbnail.webp'),
    link: '/ArenaCars',
  },
  {
    id: 2,
    name: 'Driven by innovation',
    title: 'Create. Inspire.',
    image: require('../../assets/thumbnails/nexa/smartwheels-nexa-thumbnail.webp'),
    link: '/NexaCars',
  },
  {
    id: 3,
    name: '',
    title: 'Commercial',
    image: require('../../assets/Commercial.jpg'),
    link: '/CommercialCars',
  },
];

function Channel() {
  return (
    <div className='bg-[#0c0b17] py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-10'>
        {channels.map((channel) => (
          <div
            className='relative overflow-hidden rounded hover:scale-105  ease-in duration-300'
            key={channel.id}
          >
            <img src={channel.image} alt={channel.id} />
            <div className='absolute bottom-10 text-gray-100 p-5 left-4 '>
              <p className='font-light lg:text-3xl'>{channel.name}</p>
              <p className='mb-5 font-light lg:text-3xl'>{channel.title}</p>
              <Link
                to={channel.link}
                className='border border-white px-5 py-1.5 lg:text-2xl rounded hover:bg-white hover:text-black duration-300'
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='container mx-auto rounded overflow-hidden relative'>
        <img
          src={require('../../assets/service_banner.jpg')}
          className='hidden md:flex'
          alt='service banner'
        />
        <img
          src={require('../../assets/MicrosoftTeams-image.png')}
          className='md:hidden'
          alt='service_banner'
        />
        <div className='absolute top-1/2 left-14'>
          <Link
            to='/bookAService'
            className='bg-[#1A2646] hover:bg-blue-600 text-white px-4 py-2 font-bold flex mx-auto mt-5 md:text-center rounded-lg  border-b-4 border-blue-900 hover:bg-[#314783] text-sm'
          >
            Book a Service Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Channel;
