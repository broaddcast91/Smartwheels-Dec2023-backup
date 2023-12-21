import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';

import { FaPhoneAlt, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navigation = {
  categories: [
    {
      id: 'vehicles',
      name: 'Vehicles',
      sections: [
        {
          id: 'arena',
          name: 'Arena',
          items: [
            {
              name: 'Alto K10',
              href: '/alto-k10-on-road-price-in-uttarpradesh',
            },
            { name: 'Alto', href: '/alto-on-road-price-in-uttarpradesh' },
            { name: 'Swift', href: '/swift-on-road-price-in-uttarpradesh' },
            {
              name: 'Dzire',
              href: '/swift-dzire-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Celerio',
              href: '/all-new-celerio-on-road-price-in-uttarpradesh',
            },
            { name: 'Wagon R', href: '/wagonr-on-road-price-in-uttarpradesh' },
            {
              name: 'S-Presso',
              href: '/spresso-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Ertiga',
              href: '/maruti-ertiga-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Brezza',
              href: '/maruti-suzuki-brezza-on-road-price-in-uttarpradesh',
            },
            { name: 'EECO', href: '/eeco-on-road-price-in-uttarpradesh' },
          ],
        },
        {
          id: 'nexa',
          name: 'Nexa',
          items: [
            { name: 'Ciaz', href: '/nexa-ciaz-on-road-price-in-uttarpradesh' },
            { name: 'XL6', href: '/nexa-xl6-on-road-price-in-uttarpradesh' },

            {
              name: 'Baleno',
              href: '/nexa-baleno-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Ignis',
              href: '/nexa-ignis-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Grand Vitara',
              href: '/nexa-grand-vitara-on-road-price-in-uttarpradesh',
            },
            {
              name: 'FRONX',
              href: '/nexa-fronx-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Jimny',
              href: '/nexa-jimny-on-road-price-in-uttarpradesh',
            },
          ],
        },
        {
          id: 'commercial',
          name: 'Commercial',
          items: [
            {
              name: 'Super Carry',
              href: '/maruti-super-carry-on-road-price-in-uttarpradesh',
            },
            {
              name: 'EECO Cargo',
              href: '/maruti-super-eeco-cargo-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Tour S',
              href: '/maruti-dzire-tours-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Tour H1',
              href: '/maruti-alto-tourh1-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Tour M',
              href: '/maruti-ertiga-tourm-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Tour H3',
              href: '/maruti-wagonr-tourh3-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Tour V',
              href: '/maruti-eeco-tourhv-on-road-price-in-uttarpradesh',
            },
          ],
        },
        {
          id: 'cng',
          name: 'CNG',
          items: [
            {
              name: 'Brezza CNG',
              href: '/maruti-suzuki-brezza-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Swift CNG',
              href: '/maruti-suzuki-swift-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Alto CNG',
              href: '/maruti-suzuki-alto-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'WagonR CNG',
              href: '/maruti-suzuki-wagonr-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Dzire CNG',
              href: '/maruti-suzuki-swift-dzire-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Ertiga CNG',
              href: '/maruti-suzuki-ertiga-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Spresso CNG',
              href: '/maruti-suzuki-sspresso-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Eeco CNG',
              href: '/maruti-suzuki-eeco-cng-on-road-price-in-uttarpradesh',
            },
            {
              name: 'Celerio CNG',
              href: '/maruti-suzuki-celerio-cng-on-road-price-in-uttarpradesh',
            },
          ],
        },
      ],
    },
  ],
  services: [
    {
      name: 'Book a Service',
      to: '/BookAService',
    },
    {
      name: 'Insurance',
      to: '/maruti-suzuki-car-Insurance',
    },
    {
      name: 'Finance',
      to: '/maruti-car-finance',
    },
    {
      name: 'Accessories',
      to: '/',
    },

    {
      name: 'Driving School',
      to: '/maruti-driving-school',
    },
  ],
  pages: [
    { name: 'About Us', to: '/AboutUs' },
    { name: 'Offers', to: '/maruti-suzuki-new-car-offers' },
  ],
  outlets: [
    // { name: 'Nexa', to: '/Nexa' },
    // { name: 'Arena', to: '/Arena' },
    // { name: 'True Value', to: '/TrueValue' },
    // { name: 'Commercial', to: '/Commercial' },
    { name: 'Showrooms', to: '/Showrooms' },
    { name: 'Workshops', to: '/Workshops' },
  ],
  more: [
    { name: 'Awards', to: '/' },
    { name: 'Blog', to: '/' },
    { name: 'Contact Us', to: '/ContactUs' },
    { name: 'FAQs', to: '/FAQs' },
  ],
  contact: [{ name: 'Contact Us', to: '/ContactUs' }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-[#1A2646] mousehover'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 flex z-40'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'></div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='pt-10 pb-8 px-4 space-y-10 '
                      >
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className={
                                section.name === 'Arena'
                                  ? 'font-medium  text-center bg-blue-500 text-white rounded shadow-sm py-2 '
                                  : section.name === 'Nexa'
                                  ? 'font-medium  text-center bg-black text-gray-100 rounded shadow-sm py-2'
                                  : section.name === 'CNG'
                                  ? 'font-medium  text-center bg-green-200 text-gray-900 rounded shadow-sm py-2'
                                  : section.name === 'Commercial'
                                  ? 'font-medium  text-center bg-red-400 text-white rounded shadow-sm py-2'
                                  : 'font-medium  text-center  text-gray-900 rounded shadow-sm border py-2'
                              }
                            >
                              {section.name}
                            </p>
                            <div
                              role='list'
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className='mt-6 flex flex-col space-y-6'
                            >
                              {section.items.map((item) => (
                                <div key={item.name} className='flow-root'>
                                  <Link
                                    to={item.href}
                                    className='-m-2 p-2 block text-gray-500'
                                  >
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                  {navigation.services.map((item) => (
                    <div key={item.name} className='flow-root '>
                      <a
                        href={item.to}
                        className='-m-2 p-2 block font-medium text-gray-900 '
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                  {navigation.outlets.map((item) => (
                    <div key={item.name} className='flow-root'>
                      <a
                        href={item.to}
                        className='-m-2 p-2 block font-medium text-gray-900 '
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <TopHeader />
      <header className='relative bg-white'>
        {/* <div className="flex flex-row bg-[#1A2646] text-white   p-2 h-10">
          <div className="ml-20 pl-14 invisible">01</div>

          <div className="ml-20 ">18001201888</div>
          <div className="flex items-left space-x-1 justify-center sm:justify-start">
            <FaPhoneAlt size={12} />
            <a href="18001201888">18001201888</a>
          </div>
        </div> */}

        <nav aria-label='Top' className='container mx-auto p-3 sm:px-6 lg:px-8'>
          <div className='border-gray-200'>
            <div className='h-16 flex items-center justify-between'>
              <button
                type='button'
                className='bg-white p-2 rounded-md text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <a href='/'>
                  <img
                    className='h-20 w-auto p-1'
                    src={require('../../assets/logo.png')}
                    alt=''
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:ml-auto lg:block lg:self-stretch'>
                <div className='h-full flex space-x-8'>
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className='flex '>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors outline-none focus:outline-none ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-[#1A2646]' : 'text-gray-900',
                                  'ml-1 h-4 w-4 group-hover:text-gray-400'
                                )}
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute top-full inset-x-96 text-sm text-gray-500 z-10 border rounded shadow'>
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              />
                              <div className='relative bg-white'>
                                <div className='max-w-2xl mx-auto px-8'>
                                  <div className='grid grid-cols-4 gap-y-10 gap-x-8 text-sm py-16'>
                                    {category.sections.map((section) => (
                                      <div
                                        key={section.name}
                                        className='mx-auto hover:text-blue-900'
                                      >
                                        <p
                                          id={`${section.name}-heading`}
                                          className='font-medium text-gray-900'
                                        >
                                          {section.name}
                                        </p>
                                        <div
                                          role='list'
                                          aria-labelledby={`${section.name}-heading`}
                                          className='mt-6 space-y-6 sm:mt-4 sm:space-y-4 hover:text-gray-800'
                                        >
                                          {section.items.map((item) => (
                                            <div
                                              key={item.name}
                                              className='flex'
                                            >
                                              <Link
                                                to={item.href}
                                                className='hover:text-red-600'
                                              >
                                                {item.name}
                                              </Link>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.to}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 '
                    >
                      {page.name}
                    </a>
                  ))}

                  <Popover className='flex hover:text-red-600'>
                    {({ open }) => (
                      <>
                        <div className='relative flex'>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900 hover:text-gray-400',
                              'relative z-10 flex items-center transition-colors outline-none focus:outline-none ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            Services
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-indigo-600' : 'text-gray-900',
                                'ml-1 h-4 w-4 group-hover:text-gray-400 hover:text-red-600'
                              )}
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute top-full -ml-6 text-sm text-gray-500 shadow rounded overflow-hidden w-full max-w-[130px]'>
                            <div
                              className='absolute inset-0 top-1/2 bg-white'
                              aria-hidden='true'
                            />
                            {navigation.services.map((item, index) => (
                              <Link to={item.to} key={index}>
                                <p className='relative p-3 hover:bg-gray-100 bg-white z-10 hover:text-red-600'>
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className='flex hover:text-red-600'>
                    {({ open }) => (
                      <>
                        <div className='relative flex'>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900 hover:text-gray-400',
                              'relative z-10 flex items-center transition-colors outline-none focus:outline-none ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            Outlets
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-indigo-600' : 'text-gray-900',
                                'ml-1 h-4 w-4 group-hover:text-gray-400 hover:text-red-600'
                              )}
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute top-full -ml-6 text-sm text-gray-500 shadow rounded overflow-hidden w-full max-w-[130px]'>
                            <div
                              className='absolute inset-0 top-1/2 bg-white'
                              aria-hidden='true'
                            />
                            {navigation.outlets.map((item, index) => (
                              <Link to={item.to} key={index}>
                                <p className='relative p-3 hover:bg-gray-100 bg-white z-10 hover:text-red-600'>
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className='flex hover:text-red-600'>
                    {({ open }) => (
                      <>
                        <div className='relative flex'>
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-900 hover:text-gray-400',
                              'relative z-10 flex items-center transition-colors outline-none focus:outline-none ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            More
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-indigo-600' : 'text-gray-900',
                                'ml-1 h-4 w-4 group-hover:text-gray-400 hover:text-red-600'
                              )}
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel className='absolute top-full -ml-6 text-sm text-gray-500 shadow rounded overflow-hidden w-full max-w-[130px]'>
                            <div
                              className='absolute inset-0 top-1/2 bg-white'
                              aria-hidden='true'
                            />
                            {navigation.more.map((item, index) => (
                              <Link to={item.to} key={index}>
                                <p className='relative p-3 hover:bg-gray-100 bg-white z-10 hover:text-red-600'>
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </Popover.Group>

              <div className='ml-auto flex items-center'>
                <div className='hidden md:block ml-4 flow-root pb-6 lg:ml-2'>
                  <a
                    href='tel:+917705809400'
                    className='bservice bg-[#1A2646] hover:bg-blue-600 text-white px-5 py-1.5 font-bold flex mx-auto mt-5 md:text-left rounded-lg  border-b-4 border-blue-900 hover:bg-[#314783] text-sm'
                  >
                    {' '}
                    Call&nbsp;&nbsp;
                    <FaPhoneAlt className='mr-2' />
                  </a>
                </div>
                <div className='ml-4 flow-root pb-6 lg:ml-6'>
                  <a
                    href='/BookAService'
                    className='bservice bg-[#1A2646] hover:bg-blue-600 text-white px-5 py-1.5 font-bold flex mx-auto mt-5 lg:text-center md:text-center sm:text-center rounded-lg  border-b-4 border-blue-900 hover:bg-[#314783] text-sm'
                  >
                    Book A Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

const TopHeader = () => {
  return (
    //   <> <div className='container py-2 mx-auto block space-y-3 md:px-5 sm:flex items-center justify-between bg-[#1A2646]'>
    //   <div className='space-x-3 lg:flex items-center'>
    //     <div className='flex items-center justify-center space-x-5'>
    //       <div className='border text-black h-5 hidden lg:flex space-y-4 invisible'></div>

    //     </div>
    //   </div>
    // </div></>

    <div className='container py-3 mx-auto block space-y-3 sm:flex items-center justify-between '>
      <div className='flex items-center space-x-4 justify-center'>
        <div className='flex items-center space-x-1 justify-center sm:justify-start text-white font-thin'>
          <p>Toll Free : </p>&nbsp;&nbsp; <FaPhoneAlt size={12} />
          <a href='tel:18001201888'>18001201888</a>
        </div>
      </div>
      <div className='space-x-3 lg:flex items-center'>
        <div className='flex items-center justify-center space-x-5'>
          <div className='flex items-center space-x-1 text-white font-thin'>
            <p>Follow Us</p>&nbsp;&nbsp;
            <a href='https://www.facebook.com/smartwheels.gorakhpur'>
              <FaFacebook />
            </a>
          </div>

          <div className='flex items-center space-x-1 justify-center sm:justify-start text-white font-thin'>
            <a href='https://www.youtube.com/@Smartwheels.Gorakhpur'>
              <FaYoutube />
            </a>
          </div>
          <div className='flex items-center space-x-1 justify-center sm:justify-start text-white font-thin'>
            <a href='https://www.instagram.com/smartwheels.gorakhpur/'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
