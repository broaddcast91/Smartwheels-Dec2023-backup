import { Fragment, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Helmet } from 'react-helmet';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function AdminNavbar() {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = async () => {
    await signOut(auth)
      .then((res) => {
        console.log(res);
        navigate('/');
        dispatch({ type: 'LOGOUT' });
        localStorage.setItem('user', '');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Disclosure as='nav' className='bg-white border border-gray-100'>
        {({ open }) => (
          <>
            <div className='px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <button>
                  <FaBars className='h-10' />
                </button>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* Profile dropdown */}
                  <Menu as='div' className='ml-3 relative'>
                    <div>
                      <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none border border-gray-500'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/smartwheels/logos/white_logo.png'
                          alt='image in admin navbar'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default AdminNavbar;
