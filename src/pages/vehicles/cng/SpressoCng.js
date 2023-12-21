import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Tab } from '@headlessui/react';
import { Helmet } from 'react-helmet';

const SpressoSlidersdata = [
  {
    original: require('../../../assets/cng/spresso/s-presso_desktop.jpg'),
  },
];
function SpressoCng() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Spresso CNG On Road Price in Uttar Pradesh | Maruti
          Spresso CNG Mileage
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Spresso CNG On Road Price in Uttar Pradesh | Maruti Spresso CNG Mileage'
        />
        <meta
          name='description'
          content='Maruti Suzuki Spresso CNG on road price in Uttar Pradesh starts at ₹5.11 Lakh. Swift S-CNG Mileage, Fuel Efficiency, Tank Capacity. Spresso CNG advanced safety features. Visit nearest Smartwheels Showroom today for more info and offers'
        />
      </Helmet>
      <div className='bg-gray-50 py-8 '>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#21641d] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              S-PRESSO S-CNG
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 5.11 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-6 '>
            <SpressoSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-1 gap-9 mt-3 mx-6 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <SpressoSlider />
            </div>
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <div className='container mx-auto  mt-5 px-5 gap-9'>
            <p className='leading-loose text-lg text-justify'>
              Equipped with the revolutionary S-CNG technology, S-PRESSO S-CNG
              is here for you to live it up and drive green! Producing 50 kW @
              5500 rpm of maximum power and 90 Nm @ 3500 rpm of maximum torque,
              the S-PRESSO S-CNG is spirited to drive. It comes with a CNG tank
              capacity of 55L (water equivalent) and delivers an impressive
              mileage of 31.2 km/kg.
            </p>
            <p className='leading-loose text-lg text-justify'>
              The car has a factory-fitted S-CNG kit which has been integrated
              from the ground up on the factory floor. The CNG setup has a
              leak-proof design and the pipeline structure for CNG flow is made
              up of stainless steel pipes that are corrosion-resistant. To
              ensure optimal performance, S-CNG technology in S-PRESSO has dual
              interdependent ECUs and an Intelligent Injection System – this
              ensures great drivability, smoother pickup, and optimum
              performance.
            </p>
          </div>
          <CarEnquiry />
        </div>
        <div className='container mx-auto mt-5 px-5 gap-9'>
          <Tab.Group>
            <div className='flex items-center justify-end py-8'>
              <Tab.List className='space-x-1'>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                      : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
                  }
                >
                  Features
                </Tab>

                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                      : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
                  }
                >
                  Specifications
                </Tab>
              </Tab.List>
            </div>
            <div>
              <Tab.Panels>
                {/* exterior */}
                <Tab.Panel>
                  <div className='flex items-center bg-gray-100  justify-between'>
                    <p className='flex-1 border px-5 py-3'>Features</p>
                    <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>VXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
                    <p className='flex-1 border px-5 py-3'>VXI (O) CNG</p>
                  </div>

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Exterior</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              SUV Inspired Bold Front Fascia
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Twin Chamber Headlamps
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Full Wheel Covers
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Signature C shaped Tail Lamps
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Side Body Cladding
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Side Body Cladding
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Body Coloured Bumpers
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>INTERIOR</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Dynamic Centre Console
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              High Seating for commanding drive view
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Cabin Lamp( 3 positions)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Sunvisor (Dr+Co. Dr)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>COMFORT</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              AC with Heater
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power Steering
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Accessory Socket
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Console Utility Space
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              1L Bottle Holders with Map Pockets (front doors)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Console Utility Space
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Co-Driver Side Utility Space
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Reclining & Front Sliding Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Remote keyless entry
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Power Windows
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>UTILITY</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Console Bottle Holder
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Console Bottle Holder
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Door Trim Map Pocket (Dr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Door Trim Map Pocket (Passenger)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>
                            SAFETY AND SECURITY
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              HEARTECT Platform
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Driver side Airbag
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              ABS with EBD
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seat belt reminder (Dr+Co. Dr) with Buzzer
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Reverse Parking Sensors
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speed Alert System**
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Pedestrian protection
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Crash compliance
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Immobiliser
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Child Proof Rear Door Lock
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speed Sensitive Auto Door Lock
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Central Door Locking
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Parking Brake Warning
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Passenger side Airbag
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seatbelt Pre-tensioner and Force Limiter
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>
                              (Dr+Co. Dr)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              (Dr+Co. Dr)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Low Fuel Warning
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>
                              (Gasoline in SmartPlay Dock)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>
                              (Gasoline in SmartPlay Dock)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Door Ajar Warning
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>
                              (SmartPlay Dock)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>
                              (SmartPlay Dock)
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </Tab.Panel>

                {/* interior */}
                <Tab.Panel>
                  <div className='flex items-center bg-gray-100  justify-between'>
                    <p className='flex-1 border px-5 py-3'>Specifications</p>
                    <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>VXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
                    <p className='flex-1 border px-5 py-3'>VXI (O) CNG</p>
                  </div>

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>
                            Dimensions
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Length</p>
                            <p className='flex-1 border px-5 py-3'>3565 mm</p>
                            <p className='flex-1 border px-5 py-3'>3565 mm</p>
                            <p className='flex-1 border px-5 py-3'>3565 mm</p>
                            <p className='flex-1 border px-5 py-3'>3565 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Width</p>
                            <p className='flex-1 border px-5 py-3'>1520 mm</p>
                            <p className='flex-1 border px-5 py-3'>1520 mm</p>
                            <p className='flex-1 border px-5 py-3'>1520 mm</p>
                            <p className='flex-1 border px-5 py-3'>1520 mm</p>
                          </div>

                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Height</p>
                            <p className='flex-1 border px-5 py-3'>1549 mm</p>
                            <p className='flex-1 border px-5 py-3'>1564 mm</p>
                            <p className='flex-1 border px-5 py-3'>1549 mm</p>
                            <p className='flex-1 border px-5 py-3'>1564 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheelbase
                            </p>
                            <p className='flex-1 border px-5 py-3'>2380 mm</p>
                            <p className='flex-1 border px-5 py-3'>2380 mm</p>
                            <p className='flex-1 border px-5 py-3'>2380 mm</p>
                            <p className='flex-1 border px-5 py-3'>2380 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Turning Radius
                            </p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seating Capacity
                            </p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Weight</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Kerb Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              831-854 kg
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              831-854 kg
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              831-854 kg
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              831-854 kg
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gross Vehicle Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>1170 kg</p>
                            <p className='flex-1 border px-5 py-3'>1170 kg</p>
                            <p className='flex-1 border px-5 py-3'>1170 kg</p>
                            <p className='flex-1 border px-5 py-3'>1170 kg</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Engine</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Engine Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>K10B</p>
                            <p className='flex-1 border px-5 py-3'>K10B</p>
                            <p className='flex-1 border px-5 py-3'>K10B</p>
                            <p className='flex-1 border px-5 py-3'>K10B</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Swept Volume
                            </p>
                            <p className='flex-1 border px-5 py-3'>998 CC</p>
                            <p className='flex-1 border px-5 py-3'>998 CC</p>
                            <p className='flex-1 border px-5 py-3'>998 CC</p>
                            <p className='flex-1 border px-5 py-3'>998 CC</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Power (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              43.5 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              43.5 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              43.5 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              43.5 kW @ 5500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Power (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              50 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              50 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              50 kW @ 5500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              50 kW @ 5500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Torque (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              78 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              78 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              78 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              78 Nm @ 3500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Torque (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              90 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              90 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              90 Nm @ 3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              90 Nm @ 3500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Petrol+CNG
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Petrol+CNG
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Petrol+CNG
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Petrol+CNG
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (L)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Compression Ratio
                            </p>
                            <p className='flex-1 border px-5 py-3'>11.0:1</p>
                            <p className='flex-1 border px-5 py-3'>11.0:1</p>
                            <p className='flex-1 border px-5 py-3'>11.0:1</p>
                            <p className='flex-1 border px-5 py-3'>11.0:1</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Bore X Stroke
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              73.0 X 79.5 (mm)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              73.0 X 79.5 (mm)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              73.0 X 79.5 (mm)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              73.0 X 79.5 (mm)
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>
                            Suspension System
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Front</p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson Strut with Coil Spring and Stabilizer
                              Bar
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson Strut with Coil Spring and Stabilizer
                              Bar
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson Strut with Coil Spring and Stabilizer
                              Bar
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson Strut with Coil Spring and Stabilizer
                              Bar
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>
                              Torsion Beam with Coil Spring
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Torsion Beam with Coil Spring
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Torsion Beam with Coil Spring
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Torsion Beam with Coil Spring
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Capacity</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seating Capacity
                            </p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3 '>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3 '>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              55 ( Equivalent water Filling Capacity)
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Tyres</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tyre Size
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              145/80 R13 (LXi)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              165/70 R14 (VXi)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              145/80 R13 (LXi)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              165/70 R14 (VXi)
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Brakes</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Front</p>
                            <p className='flex-1 border px-5 py-3'>
                              Ventilated Disc
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Ventilated Disc
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Ventilated Disc
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Ventilated Disc
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
          <br></br>
          <div className='text-xs'>
            <p>
              <sup>*</sup>Black glass on the vehicles is due to lighting effect.
            </p>
            <p>
              <sup>*</sup>
              <sup>*</sup>Car models and accessories shown may vary from actual
              product. Images are used for illustration purpose only.
            </p>
            <p>
              <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
            </p>
            <p>
              <sup>*</sup>Prices shown above are ex showroom Delhi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const SpressoSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={SpressoSlidersdata}
    />
  );
};

const CarEnquiry = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [loader, setLoader] = useState('');

  const dataCollectionRef = collection(db, 'popup');
  const today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = date + ' ' + time;

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await addDoc(dataCollectionRef, {
        name: name,
        email: email,
        phone: phone,
        model: model,
        timestamp: dateTime,
      });
      toast.success('Form submitted successfully');
      setLoader(false);
      setName('');
      setEmail('');
      setPhone('');
      setModel('');
      navigate('/thankyou');
    } catch (error) {
      setLoader(false);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className='bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide mb-7'>Car Enquiry</p>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label htmlFor='name' className='text-[#1a3760]'>
            Name
          </label>
          <input
            id='name'
            type='text'
            className='border w-full h-9 rounded p-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mt-3'>
          <label htmlFor='email' className='text-[#1a3760]'>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='border w-full h-9 rounded p-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mt-3'>
          <label htmlFor='mobile' className='text-[#1a3760]'>
            Mobile
          </label>
          <input
            type='text'
            id='mobile'
            className='border w-full h-9 rounded p-2'
            value={phone}
            minLength='10'
            maxLength='10'
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/[^1-9]/g, '') &&
                  e.target.value.replace(/ /g, '')
              )
            }
          />
          {!pattern.test(phone) && phone.length === 10 ? (
            <small className='text-red-500'>phone number is invalid</small>
          ) : (
            ''
          )}
        </div>

        <div className='mt-3'>
          <label htmlFor='' className='text-[#1a3760]'>
            Model
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm'
          >
            <option>Select</option>
            <option value='Spresso CNG'>Spresso CNG</option>
          </select>
        </div>

        <p className='text-gray-700 mt-5 text-xs'>
          <span className='text-black font-bold text-sm'>Disclaimer</span>: I
          agree that by clicking the ‘Submit’ button below, I am explicitly
          soliciting a call/Message from Smartwheels Maruti or its
          Representatives on my ‘Mobile’.
        </p>

        <div className='flex items-start mt-5'>
          <input
            id='disclaimer'
            type='checkbox'
            required
            className='h-4 w-4 rounded'
          />
          <div className='ml-2 text-sm '>
            <label htmlFor='disclaimer' className='font-medium text-gray-700'>
              Please agree with following Disclaimer
            </label>
          </div>
        </div>

        <button
          className='bg-red-500 hover:bg-red-400 text-white px-5 py-1.5 font-bold flex mx-auto mt-5 rounded'
          type='submit'
          disabled={pattern.test(phone) && phone.length === 10 ? false : true}
        >
          {loader ? (
            <div className='flex items-center justify-center'>
              <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
              Loading
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default SpressoCng;
