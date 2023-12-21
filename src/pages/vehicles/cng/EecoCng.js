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

const EecoSlidersdata = [
  {
    original: require('../../../assets/cng/eeco/Eeco_CNG_Web-Banner.jpg'),
  },
];
function EecoCng() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki EECO CNG On Road Price in Uttar Pradesh | Maruti EECO
          CNG Mileage
        </title>
        <meta
          name='title'
          content='Maruti Suzuki EECO CNG On Road Price in Uttar Pradesh | Maruti EECO CNG Mileage'
        />
        <meta
          name='description'
          content='Maruti Suzuki EECO CNG on road price in Uttar Pradesh starts at ₹5.94 Lakh. EECO S-CNG Mileage, Fuel Efficiency, Tank Capacity. EECO CNG advanced safety features. Visit nearest Smartwheels Showroom today for more info and offers'
        />
      </Helmet>
      <div className='bg-gray-50 py-8 '>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#21641d] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              EECO S-CNG
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 5.60 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-6 '>
            <EecoSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-1 gap-9 mt-3 mx-6 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <EecoSlider />
            </div>
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <div className='container mx-auto  mt-5 px-5 gap-9'>
            <p className='leading-loose text-lg text-justify'>
              Maruti Suzuki Eeco S-CNG brings together efficiency, versatility,
              and greener mobility, making it the No. 1 Partner for families and
              businesses alike. Helping Maruti Suzuki move forward in its
              Mission Green Million, Eeco S-CNG comes with a BS6 compliant
              petrol engine which delivers peak power of 61 bhp@6000 rpm and a
              peak torque of and 85Nm @3000 rpm.
            </p>
            <p className='leading-loose text-lg text-justify'>
              The tank capacity of Eeco CNG is 65L (5-Seater), and this
              versatile MPV delivers an impressive mileage of 20.88 km/kg*. The
              factory-fitted CNG kit is integrated from the ground up with
              corrosion-resistant, stainless-steel pipeline structure and
              integrated harness for enhanced safety. As for the performance,
              Eeco S-CNG comes with dual interdependent ECUs and an Intelligent
              Injection System in the set-up which improves drivability,
              performance, and smoother pickup.
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
                    <p className='flex-1 border px-5 py-3'>5 Seater AC, CNG</p>
                    <p className='flex-1 border px-5 py-3'>EECO Cargo CNG</p>
                    <p className='flex-1 border px-5 py-3'>EECO Cargo CNG AC</p>
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
                              Front Mud Flaps
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheel Cover (Center Cap)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Outside Rear View Mirror
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              (Left & Right)
                            </p>
                            <p className='flex-1 border px-5 py-3'>Standard</p>
                            <p className='flex-1 border px-5 py-3'>Standard</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tubeless Tyres (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Badging (Decal)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Covered Cargo Cabin (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Door Lock - Driver & Back Door (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Locable Fuel Cap - Petrol (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
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
                              Interior Colour
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>--</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Both Side Sunvisor
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Molded Floor Carpet
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Molded Roof Lining
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Cabin Lamp
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Cabin Lamp
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              New Colour Seat Matching Interior Colour
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Assist Grip (Co - Driver + Rear)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speed Limiting Sticker (LHS Door)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              New Interior Colour (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Flat Cargo Bed (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Floor Carpet (Front)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Co-driver Assist Grip
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
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
                            <p className='flex-1 border px-5 py-3 '>Heater</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Sliding Driver Seat
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Reclining Front Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Head Rests - Front Row
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Fixed pillow
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Fixed pillow
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Fixed pillow
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Air Conditioner
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seat Back Pocket (Co - Driver Seat)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Integrated Head Rests - Second Row
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Two Speed Windshield Wipers (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
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
                            INSTRUMENT PANEL & CONSOLE
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
                              Multi Tripmeter
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              12 Volt Accessory Socket
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speedometer Illumination Colour(Amber)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Digital Meter Cluster
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              (Fuel level, Odometer & Tripmeter)
                            </p>
                            <p className='flex-1 border px-5 py-3'>(S)</p>
                            <p className='flex-1 border px-5 py-3'>(S)</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Audio 1 Din Box + Cover (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
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
                          <span className='text-base uppercase'>SAFETY</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headlamp Leveling
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Side Impact Beams
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seat Belts for all Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              High Mount Stop Lamp
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Child Lock for Sliding Doors & Windows
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Reflector Strips - Front & Rear (S)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fire Extinguisher
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Speed Limit - 80 km/h
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
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
                    <p className='flex-1 border px-5 py-3'>5 Seater AC, CNG</p>
                    <p className='flex-1 border px-5 py-3'>EECO Cargo CNG</p>
                    <p className='flex-1 border px-5 py-3'>EECO Cargo CNG AC</p>
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
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Length
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              3675 mm mm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              3675 mm mm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              3675 mm mm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Width
                            </p>
                            <p className='flex-1 border px-5 py-3'>1475 mm</p>
                            <p className='flex-1 border px-5 py-3'>1475 mm</p>
                            <p className='flex-1 border px-5 py-3'>1475 mm</p>
                          </div>

                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Height</p>
                            <p className='flex-1 border px-5 py-3'>1825 mm</p>
                            <p className='flex-1 border px-5 py-3'>1825 mm</p>
                            <p className='flex-1 border px-5 py-3'>1825 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheelbase
                            </p>
                            <p className='flex-1 border px-5 py-3'>2350 mm</p>
                            <p className='flex-1 border px-5 py-3'>2350 mm</p>
                            <p className='flex-1 border px-5 py-3'>2350 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Min. Turning Radius
                            </p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                            <p className='flex-1 border px-5 py-3'>4.5 m</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tread (Front)
                            </p>
                            <p className='flex-1 border px-5 py-3'>1280 mm</p>
                            <p className='flex-1 border px-5 py-3'>1280 mm</p>
                            <p className='flex-1 border px-5 py-3'>1280 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tread (Rear)
                            </p>
                            <p className='flex-1 border px-5 py-3'>1290 mm</p>
                            <p className='flex-1 border px-5 py-3'>1290 mm</p>
                            <p className='flex-1 border px-5 py-3'>1290 mm</p>
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
                            <p className='flex-1 border px-5 py-3'>1050 kg</p>
                            <p className='flex-1 border px-5 py-3'>1010 kg</p>
                            <p className='flex-1 border px-5 py-3'>1030 kg</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gross Vehicle Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>1510 kg</p>
                            <p className='flex-1 border px-5 py-3'>1540 kg</p>
                            <p className='flex-1 border px-5 py-3'>1540 kg</p>
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
                            <p className='flex-1 border px-5 py-3'>G12B</p>
                            <p className='flex-1 border px-5 py-3'>G12B</p>
                            <p className='flex-1 border px-5 py-3'>G12B</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Engine Capacity
                            </p>
                            <p className='flex-1 border px-5 py-3'>1196 cc</p>
                            <p className='flex-1 border px-5 py-3'>1196 cc</p>
                            <p className='flex-1 border px-5 py-3'>1196 cc</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              No. of Cylinders
                            </p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Distribution
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Multi Point Injection
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Multi Point Injection
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Multi Point Injection
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Max. Power (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              46 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              46 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              46 kW @ 6000 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Max. Power (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              54 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              54 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              54 kW @ 6000 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Max. Torque (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              85 Nm @ 3000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              85 Nm @ 3000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              85 Nm @ 3000 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Max. Torque (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              98 Nm @ 3000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              98 Nm @ 3000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              98 Nm @ 3000 rpm
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
                              Fuel Tank Capacity (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              40 (Gasoline – L)
                            </p>
                            <p className='flex-1 border px-5 py-3'>40 L</p>
                            <p className='flex-1 border px-5 py-3'>40 L</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (CNG Cylinder)
                            </p>
                            <p className='flex-1 border px-5 py-3 '>
                              65 (Water Equivalent – L)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              65 (Water Equivalent – L)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              65 (Water Equivalent – L)
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
                              155 R13 LT 8PR
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              155 R13 LT 8PR
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              155 R13 LT 8PR
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
                            <p className='flex-1 border px-5 py-3'>Disc</p>
                            <p className='flex-1 border px-5 py-3'>Disc</p>
                            <p className='flex-1 border px-5 py-3'>Disc</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Suspension
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Mac Pherson Strut
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Mac Pherson Strut
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              Mac Pherson Strut
                            </p>
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
const EecoSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={EecoSlidersdata}
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
            <option value='Eeco CNG'>EECO CNG</option>
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

export default EecoCng;
