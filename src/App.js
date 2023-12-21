import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Transition, Dialog } from '@headlessui/react';

import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle, IoLogoWhatsapp } from 'react-icons/io5';
import { BsTelephoneForward } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Alto from './pages/vehicles/arena/Alto';
import Brezza from './pages/vehicles/arena/Brezza';
import Celerio from './pages/vehicles/arena/Celerio';
import Dzire from './pages/vehicles/arena/Dzire';
import Spresso from './pages/vehicles/arena/Spresso';
import Swift from './pages/vehicles/arena/Swift';
import WagonR from './pages/vehicles/arena/WagonR';
import EECO from './pages/vehicles/arena/EECO';
import Ertiga from './pages/vehicles/arena/Ertiga';
import AltoCng from './pages/vehicles/cng/AltoCng';
import BrezzaCNG from './pages/vehicles/cng/BrezzaCNG';
import loginkey from './assets/logo.png';

import WagonrCng from './pages/vehicles/cng/WagonrCng';
import DzireCng from './pages/vehicles/cng/DzireCng';
import ErtigaCng from './pages/vehicles/cng/ErtigaCng';
import SpressoCng from './pages/vehicles/cng/SpressoCng';
import EecoCng from './pages/vehicles/cng/EecoCng';
import CelerioCng from './pages/vehicles/cng/CelerioCng';
import Ignis from './pages/vehicles/nexa/Ignis';
import Baleno from './pages/vehicles/nexa/Baleno';

import Xl6 from './pages/vehicles/nexa/Xl6';
import Ciaz from './pages/vehicles/nexa/Ciaz';
import TourH1 from './pages/vehicles/commercial/TourH1';
import TourS from './pages/vehicles/commercial/TourS';
import TourM from './pages/vehicles/commercial/TourM';
import TourH3 from './pages/vehicles/commercial/TourH3';
import TourV from './pages/vehicles/commercial/TourV';
import SuperCarry from './pages/vehicles/commercial/SuperCarry';
import EecoCargo from './pages/vehicles/commercial/EecoCargo';

import BookAService from './pages/BookAService';
import Insurance from './pages/Services/Insurance';
import Finance from './pages/Services/Finance';
import DrivingSchool from './pages/Services/DrivingSchool';

import Thankyou from './pages/Thankyou';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Login from './pages/auth/Login';

import { useEffect, useContext, useState, Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Dashboard from './pages/admin/Dashboard';

import TestShowRooms from './pages/Outlets';

import Enquiries from './pages/admin/Enquiries';
import Showrooms from './pages/Showrooms';
import Outlets from './pages/Outlets';

import ArenaInfo from './pages/arena-info/ArenaInfo';
import NexaInfo from './pages/nexa-info/NexaInfo';
import CommercialInfo from './pages/commercial-info/CommercialInfo';
import Offers from './pages/Offers';
import Offerstest from './pages/Offerstest';
import GrandVitara from './pages/vehicles/nexa/GrandVitara';
import AltoK10 from './pages/vehicles/arena/AltoK10';
import SwiftCNG from './pages/vehicles/cng/SwiftCNG';

import MyEmaillApp from './pages/EmailService/MyEmaillApp';
import Fronx from './pages/vehicles/nexa/Fronx';
import Jimny from './pages/vehicles/nexa/Jimny';
import FAQs from './pages/FAQs';

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState();
  const [comments, setComments] = useState('Popup');
  const [model, setModel] = useState('');
  const [loader, setLoader] = useState(false);

  const dataCollectionRef = collection(db, 'popup');

  const today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = date + ' ' + time;

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (sessionStorage.getItem('popup') !== 'true') {
          setOpen(true);
          sessionStorage.setItem('popup', 'true');
        }
      }, 1000);
    }, [pathname]);
    return null;
  };

  const Popup = () => {
    let navigate = useNavigate();
    const [number, setNumber] = useState('');
    let [isOpen, setIsOpen] = useState(true);
    const [email, setEmail] = useState();
    const [model, setModel] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState();
    const [loader, setLoader] = useState('');

    // const [methodpopup, setMethodPopup] = useState();

    const pattern = /^[6-9][0-9]{6,9}$/;
    if (number !== '' && number.length === 10) {
      if (!pattern.test(number)) {
        sessionStorage.setItem('popup', 'false');
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
          phone: phone,

          comments: comments,
          timestamp: dateTime,
        });
        toast.success('Thank you for the Enquiry');

        setPhone('');
        setModel('');
        navigate('/');
      } catch (error) {
        toast.error('Something went wrong!');
      }
      setLoader(false);
      setOpen(false);
    };

    const cancelButtonRef = useRef(null);

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          onClose={() => setOpen(false)}
        >
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='text-left'>
                    {/* <button
                      className='outline-none absolute right-2 top-2'
                      onClick={() => setOpen(false)}

                    >
                      <IoCloseCircle size={28} />
                    </button> */}
                    <div className='hero container max-w-screen-lg mx-auto pb-10 flex justify-center'>
                      <form onSubmit={handleSubmit} className='justify-between'>
                        <div className='container mt-2 space-y-3 justify-center'>
                          <img
                            src={loginkey}
                            alt='logo'
                            className='w-50 h-16 m-auto'
                          />
                          <h4 className='text-center text-red-600 font-bold'>
                            Get A Quote/Offer
                          </h4>
                          <div className='hidden'>
                            <label className='block text-sm font-medium text-gray-700'>
                              Email
                            </label>
                            <input
                              className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                              type='text'
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className='mt-3'>
                            <label
                              htmlFor='mobile'
                              className='text-[#1a3760] hidden'
                            >
                              Mobile
                            </label>
                            <input
                              type='text'
                              id='mobile'
                              className='border w-full h-9 rounded p-2'
                              value={phone}
                              minLength='10'
                              maxLength='10'
                              placeholder='Enter your mobile number'
                              onChange={(e) =>
                                setPhone(
                                  e.target.value.replace(/[^1-9]/g, '') &&
                                    e.target.value.replace(/ /g, '')
                                )
                              }
                            />
                            {!pattern.test(phone) && phone.length === 10 ? (
                              <small className='text-red-500'>
                                phone number is invalid
                              </small>
                            ) : (
                              ''
                            )}
                          </div>

                          <p className='text-gray-700 mt-5 text-xs'>
                            <span className='text-black font-bold text-sm'>
                              Disclaimer
                            </span>
                            : I agree that by clicking the ‘Submit’ button
                            below, I am explicitly soliciting a call/message
                            from Smartwheels Maruti or its representatives on my
                            ‘Mobile’.
                          </p>

                          <div className='flex items-start mt-5'>
                            <input
                              id='disclaimer'
                              type='checkbox'
                              required
                              className='h-4 w-4 rounded'
                            />

                            <div className='ml-2 text-sm '>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                Please agree with the above disclaimer
                              </label>
                            </div>
                          </div>
                          <div className='flex justify-center pt-5 space-x-4'>
                            <button
                              className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-900 text-base font-medium text-white hover:bg-green-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                              type='submit'
                              disabled={
                                pattern.test(phone) && phone.length === 10
                                  ? false
                                  : true
                              }
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
                            <button
                              type='button'
                              className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-gray-200 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Popup />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Vehicles */}
          <Route
            path='/alto-k10-on-road-price-in-uttarpradesh'
            element={<AltoK10 />}
          />
          <Route
            path='/alto-on-road-price-in-uttarpradesh'
            element={<Alto />}
          />
          <Route
            path='/swift-on-road-price-in-uttarpradesh'
            element={<Swift />}
          />
          <Route
            path='/swift-dzire-on-road-price-in-uttarpradesh'
            element={<Dzire />}
          />
          <Route
            path='/all-new-celerio-on-road-price-in-uttarpradesh'
            element={<Celerio />}
          />
          <Route
            path='/wagonr-on-road-price-in-uttarpradesh'
            element={<WagonR />}
          />
          <Route
            path='/spresso-on-road-price-in-uttarpradesh'
            element={<Spresso />}
          />
          <Route
            path='/maruti-suzuki-brezza-on-road-price-in-uttarpradesh'
            element={<Brezza />}
          />
          <Route
            path='/eeco-on-road-price-in-uttarpradesh'
            element={<EECO />}
          />
          <Route
            path='/maruti-ertiga-on-road-price-in-uttarpradesh'
            element={<Ertiga />}
          />
          <Route
            path='/maruti-suzuki-alto-cng-on-road-price-in-uttarpradesh'
            element={<AltoCng />}
          />
          <Route
            path='/maruti-suzuki-brezza-cng-on-road-price-in-uttarpradesh'
            element={<BrezzaCNG />}
          />
          <Route
            path='/maruti-suzuki-swift-cng-on-road-price-in-uttarpradesh'
            element={<SwiftCNG />}
          />
          <Route path='/Workshops' element={<TestShowRooms />} />
          <Route
            path='/maruti-suzuki-wagonr-cng-on-road-price-in-uttarpradesh'
            element={<WagonrCng />}
          />
          <Route
            path='/maruti-suzuki-swift-dzire-cng-on-road-price-in-uttarpradesh'
            element={<DzireCng />}
          />
          <Route
            path='/maruti-suzuki-ertiga-cng-on-road-price-in-uttarpradesh'
            element={<ErtigaCng />}
          />
          <Route
            path='/maruti-suzuki-sspresso-cng-on-road-price-in-uttarpradesh'
            element={<SpressoCng />}
          />
          <Route
            path='/maruti-suzuki-eeco-cng-on-road-price-in-uttarpradesh'
            element={<EecoCng />}
          />
          <Route
            path='/maruti-suzuki-celerio-cng-on-road-price-in-uttarpradesh'
            element={<CelerioCng />}
          />
          <Route
            path='/nexa-ignis-on-road-price-in-uttarpradesh'
            element={<Ignis />}
          />
          <Route
            path='/nexa-baleno-on-road-price-in-uttarpradesh'
            element={<Baleno />}
          />

          <Route
            path='/nexa-xl6-on-road-price-in-uttarpradesh'
            element={<Xl6 />}
          />
          <Route
            path='/nexa-ciaz-on-road-price-in-uttarpradesh'
            element={<Ciaz />}
          />
          <Route
            path='/nexa-fronx-on-road-price-in-uttarpradesh'
            element={<Fronx />}
          />
          <Route
            path='/nexa-jimny-on-road-price-in-uttarpradesh'
            element={<Jimny />}
          />
          <Route
            path='/nexa-grand-vitara-on-road-price-in-uttarpradesh'
            element={<GrandVitara />}
          />
          <Route
            path='/maruti-alto-tourh1-on-road-price-in-uttarpradesh'
            element={<TourH1 />}
          />
          <Route
            path='/maruti-dzire-tours-on-road-price-in-uttarpradesh'
            element={<TourS />}
          />
          <Route
            path='/maruti-ertiga-tourm-on-road-price-in-uttarpradesh'
            element={<TourM />}
          />
          <Route
            path='/maruti-wagonr-tourh3-on-road-price-in-uttarpradesh'
            element={<TourH3 />}
          />
          <Route
            path='/maruti-eeco-tourhv-on-road-price-in-uttarpradesh'
            element={<TourV />}
          />
          <Route
            path='/maruti-super-carry-on-road-price-in-uttarpradesh'
            element={<SuperCarry />}
          />
          <Route
            path='/maruti-super-eeco-cargo-on-road-price-in-uttarpradesh'
            element={<EecoCargo />}
          />
          <Route path='/FAQs' element={<FAQs />} />
          <Route path='/BookAService' element={<BookAService />} />
          <Route path='/testemail' element={<MyEmaillApp />} />
          <Route path='/maruti-suzuki-car-Insurance' element={<Insurance />} />
          <Route path='/maruti-car-finance' element={<Finance />} />
          <Route path='/maruti-driving-school' element={<DrivingSchool />} />
          <Route path='/Thankyou' element={<Thankyou />} />
          <Route path='/AboutUs' element={<About />} />
          <Route path='/ContactUs' element={<Contactus />} />

          <Route path='/Showrooms' element={<Showrooms />} />
          <Route path='/Outlets' element={<Outlets />} />
          <Route path='/ArenaCars' element={<ArenaInfo />} />
          <Route path='/NexaCars' element={<NexaInfo />} />
          <Route path='/CommercialCars' element={<CommercialInfo />} />
          <Route path='/maruti-suzuki-new-car-offers' element={<Offers />} />
          <Route path='/offerstest' element={<Offerstest />} />

          {/* Login */}
          <Route path='/login' element={<Login />} />

          {/* Admin */}
          <Route
            path='/admin/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* enquiries */}
          <Route
            path='/admin/enquiries'
            element={
              <ProtectedRoute>
                <Enquiries />
              </ProtectedRoute>
            }
          />

          {/* Not Found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ScrollToTop smooth className='p-1.5' />
        <Footer />
      </BrowserRouter>
    </>
  );
}

const ModalDialog = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='flex items-center justify-center min-h-screen'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
        <div className='relative bg-white rounded max-w-sm mx-auto p-8'>
          <Dialog.Title className='text-xl'>Title of dialog</Dialog.Title>
          <Dialog.Description>
            Description of dialog contents.
          </Dialog.Description>
          <button
            className='border-black border-solid border rounded mx-2 mt-8 py-1 px-2'
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className='border-black border-solid border rounded mx-2 mt-8 py-1 px-2'
            onClick={() => setIsOpen(false)}
          >
            Confirm
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default App;
