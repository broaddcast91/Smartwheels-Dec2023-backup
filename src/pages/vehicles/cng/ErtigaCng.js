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

const ErtigaSlidersdata = [
  {
    original: require('../../../assets/cng/ertiga/Ertiga_banner.jpg'),
  },
];
function ErtigaCng() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Ertiga CNG On Road Price in Uttar Pradesh | Maruti
          Ertiga CNG Mileage
        </title>
        <meta
          name='title'
          content=' Maruti Suzuki Ertiga CNG On Road Price in Uttar Pradesh | Maruti
          Ertiga CNG Mileage'
        />
        <meta
          name='description'
          content='Maruti Suzuki Ertiga CNG on road price in Uttar Pradesh starts at ₹10.50 Lakh. Ertiga S-CNG Mileage, Fuel Efficiency, Tank Capacity. Ertiga CNG advanced safety features. Visit nearest Smartwheels Showroom today for more info and offers.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8 '>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#21641d] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              NEW ERTIGA S-CNG
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 8.35 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-6 '>
            <ErtigaSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-1 gap-9 mt-3 mx-6 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <ErtigaSlider />
            </div>
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <div className='container mx-auto  mt-5 px-5 gap-9'>
            <p className='leading-loose text-lg text-justify'>
              The Next-Gen Ertiga’s journey to become the market leader in MPV
              has always been stylish. Now, the style is all set to take a leap
              by going smarter and greener. Ertiga now comes with Factory-fitted
              S-CNG technology with a CNG tank capacity of 60L (water
              equivalent), establishing itself as the only MPV in the segment
              that can boast of taking this smart and eco-friendly path.
            </p>
            <p className='leading-loose text-lg text-justify'>
              The S-CNG powered Next Gen Ertiga will offer maximum performance,
              enhanced safety and unmatched convenience. Equipped with
              Intelligent Injection System and dual interdependent ECUs, the MPV
              ensures consistent performance across all terrains. It ranks high
              on safety, all thanks to the Leak-proof Design and Integrated
              Harness. The Auto-Fuel Switch allows easy switching of fuel from
              petrol to CNG, thereby avoiding any jerks. So now, get together,
              go green and make your journeys smooth, safe, and seamless.
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
                  FEATURES
                </Tab>

                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                      : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
                  }
                >
                  SPECIFICATIONS
                </Tab>
              </Tab.List>
            </div>
            <div>
              <Tab.Panels>
                {/* exterior */}
                <Tab.Panel>
                  <div className='flex items-center bg-gray-100  justify-between'>
                    <p className='flex-1 border px-5 py-3'>FEATURES</p>

                    <p className='flex-1 border px-5 py-3'>VXI CNG</p>
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
                              Projector Headlamps (Halogen)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Body Coloured ORVM
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              3D Tail Lamps with LED
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Chrome Front Grille
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Full Wheel Caps
                            </p>
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
                              Dual Tone Interiors
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              2nd Row Seats 60:40 Split with Slide and Recline
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              3rd Row Seats 50:50 Split with Recline
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              2nd Row Armrest
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headrest Front Row Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headrest 2nd Row Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headrest 3rd Row Seats
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gear Shift Knob with Chrome Finish
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Driver Side Sunvisor with Ticket Holder
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Chrome Tipped Parking Brake Lever
                            </p>
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
                            {' '}
                            COMFORT AND CONVENIENCE
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
                              Manual AC
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Air Cooled Twin Cup Holder (Console)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Accessory Socket Front Row with Smartphone Storage
                              Space
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power Windows (Fr/Rr) with Dr. Side Auto Down
                              Functions
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power & Tilt Steering
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Bottle Holders (In Each Row)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Cabin Lamp (Fr. + Rr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              2nd Row Adjustable AC
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Remote Keyless Entry
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Accessory Socket 2nd Row with Smartphone Storage
                              Space
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Day & Night Adjustable IRVM
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Electrical Adjustable ORVM
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Electrical Foldable ORVM
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Passenger Side Sunvisor with Vanity Mirror
                            </p>

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
                              Audio System with Electrostatic Touch Buttons
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Bluetooth Connectivity
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speakers(4)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              USB and AUX Connectivity
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Steering Mounted Audio Control
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>MID</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tachometer
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gear Shift Indicator
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Digital Clock
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headlamp on Warning
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Door Ajar Warning Lamp
                            </p>
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
                            {' '}
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
                              Dual Airbag
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Parking Sensors
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Central Locking
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              High Speed Alert System
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Security Alarm
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              ABS with EBD and Brake Assist
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Engine Immobilizer
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              ISOFIX Child Seat Anchorages (2nd Row Seats)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Seat Belts with Pre-tensioner & Force
                              Limiters (Dr.+Co-Dr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seat Belt Reminder Lamp with Buzzer (Dr.+Co-Dr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>-</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speed Sensitive Auto Door Lock
                            </p>
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
                    <p className='flex-1 border px-5 py-3'>SPECIFICATIONS</p>
                    <p className='flex-1 border px-5 py-3'>VXI CNG</p>
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
                            <p className='flex-1 border px-5 py-3'>4395 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Width
                            </p>
                            <p className='flex-1 border px-5 py-3'>1735 mm</p>
                          </div>

                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Height</p>
                            <p className='flex-1 border px-5 py-3'>1690 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheelbase
                            </p>
                            <p className='flex-1 border px-5 py-3'>2740 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Turning Radius
                            </p>
                            <p className='flex-1 border px-5 py-3'>5.2 m</p>
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
                            <p className='flex-1 border px-5 py-3'>1235 kg</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gross Vehicle Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>1795 kg</p>
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
                            <p className='flex-1 border px-5 py-3'>K15B</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Capacity</p>
                            <p className='flex-1 border px-5 py-3'>1462 CC</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Compression Ratio
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              (10.5 ± 0.3):1
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Bore X Stroke
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              74.0 x 85.0 mm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              77 kW @ 6,000 RPM
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Torque (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              138 Nm @ 4,400 RPM
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>45 L</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Emission Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>BS6</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              68 kW @ 6,000 RPM
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Torque (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              122 Nm @ 4400 RPM
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Efficiency (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              26.08 km/kg
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              60 L (Water Equivalent)
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
                              MacPherson Strut & Coil Spring
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>
                              Torsion Beam & Coil Spring
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
                            <p className='flex-1 border px-5 py-3'>7</p>
                          </div>

                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              <td>Fuel Tank Capacity (Petrol)</td>
                            </p>
                            <p className='flex-1 border px-5 py-3'>45 L</p>
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
                              185/65 R15
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
                              (Ventilated) Disc
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>
                              (Leading & Trailing) Drum
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
const ErtigaSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={ErtigaSlidersdata}
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
            <option value='Ertiga CNGs'>Ertiga CNG</option>
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

export default ErtigaCng;
