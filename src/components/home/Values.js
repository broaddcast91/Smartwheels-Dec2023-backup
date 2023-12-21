import React, { Fragment, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

function Values() {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [model, setModel] = useState('');
  const [loader, setLoader] = useState(false);

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

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='grid grid-cols-2 md:grid-cols-2'>
          <div
            className='bg-gray-100 border cursor-pointer'
            onClick={() => setOpen(true)}
          >
            <div className='flex items-center justify-center h-full flex-col hover:bg-gray-200 py-3 sm:py-0'>
              <img
                src={require('../../assets/Icons/Icon-2.png')}
                alt='icon'
                className='h-14 md:h-20 lg:h-28'
              />
              <p className='xl:text-3xl lg:text-xl md:text-lg font-light text-center'>
                Book a <br /> Test Drive
              </p>
            </div>
          </div>

          <Link
            className='flex items-center justify-center h-full flex-col hover:bg-gray-200 py-3 sm:py-0'
            to='/maruti-suzuki-new-car-offers'
          >
            <img
              src={require('../../assets/Icons/Icon-1.png')}
              className='h-14 md:h-20 lg:h-28'
              alt='icon'
            />
            <p className='xl:text-3xl lg:text-xl md:text-lg  font-light text-center'>
              Offers
            </p>
          </Link>
          <Link
            className='flex items-center justify-center h-full flex-col hover:bg-gray-200 py-3 sm:py-0'
            to='/contactus'
          >
            <img
              src={require('../../assets/Icons/Icon-3.png')}
              className='h-14 md:h-20 lg:h-28'
              alt='icon'
            />
            <p className='xl:text-3xl lg:text-xl md:text-lg  font-light text-center'>
              Get a <br /> Quotation
            </p>
          </Link>
          <Link
            className='bg-gray-100 border flex items-center justify-center h-full flex-col hover:bg-gray-200 py-3 sm:py-0'
            to='/showrooms'
          >
            <img
              src={require('../../assets/Icons/Icon-4.png')}
              className='h-14 md:h-20 lg:h-28'
              alt='icon'
            />
            <p className='xl:text-3xl lg:text-xl md:text-lg  font-light text-center'>
              Locate a<br /> Showroom
            </p>
          </Link>
        </div>
        <div className='flex items-center justify-center h-full flex-col'>
          <img
            src={require('../../assets/smartwheels-banner-square.webp')}
            alt='side banner'
          />
        </div>
      </div>
      <OurValues />

      <NexaBanner />

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
              <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='ldeskuid'
                    name='ldeskuid'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='LDTuvid'
                    name='LDTuvid'
                  />
                  <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                    <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg leading-6 font-medium text-gray-900 text-center p-5'
                        >
                          Book A Test Drive
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 py-8 space-y-3'>
                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Name
                              </label>
                              <input
                                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Email
                              </label>
                              <input
                                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                                type='text'
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Phone
                              </label>
                              <input
                                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                                type='text'
                                value={phone}
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

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Model
                              </label>
                              <select
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm'
                              >
                                <option>Select Model</option>
                                <optgroup label='Arena'>
                                  <option value='Maruti Alto 800'>
                                    Maruti Alto
                                  </option>
                                  <option value='Maruti Wagon R'>
                                    Maruti Wagon R
                                  </option>
                                  <option value='Maruti Celerio'>
                                    Maruti New Celerio
                                  </option>
                                  <option value='Maruti Swift'>
                                    Maruti Swift
                                  </option>
                                  <option value='Maruti Dzire'>
                                    Maruti Dzire
                                  </option>
                                  <option value='Maruti S-Presso'>
                                    Maruti S-Presso
                                  </option>
                                  <option value='Maruti Ertiga'>
                                    Maruti Ertiga
                                  </option>
                                  <option value='Maruti New Brezza'>
                                    Maruti New Brezza
                                  </option>
                                  <option value='Maruti Eeco'>
                                    Maruti Eeco
                                  </option>
                                </optgroup>

                                <optgroup label='Nexa'>
                                  <option value='Maruti Ciaz'>
                                    Maruti Ciaz
                                  </option>
                                  <option value='Maruti XL6'>Maruti XL6</option>
                                  {/* <option value="Maruti s-Cross">
                                    Maruti s-Cross
                                  </option> */}
                                  <option value='Maruti Baleno'>
                                    Maruti Baleno
                                  </option>
                                  <option value='Maruti Ignis'>
                                    Maruti Ignis
                                  </option>
                                </optgroup>

                                <optgroup label='CNG'>
                                  <option value='Maruti Alto CNG'>
                                    Maruti Alto CNG
                                  </option>
                                  <option value='Maruti Wagon R CNG'>
                                    Maruti Wagon R CNG
                                  </option>
                                  <option value='Maruti Celerio CNG'>
                                    Maruti New Celerio CNG
                                  </option>
                                  <option value='Maruti Dzire CNG'>
                                    Maruti Dzire CNG
                                  </option>
                                  <option value='Maruti S-Presso CNG'>
                                    Maruti S-Presso CNG
                                  </option>
                                  <option value='Maruti Ertiga CNG'>
                                    Maruti Ertiga CNG
                                  </option>
                                  <option value='Maruti Eeco CNG'>
                                    Maruti Eeco CNG
                                  </option>
                                </optgroup>

                                <optgroup label='Passenger Carrier'>
                                  <option value='Maruti Tour H1'>
                                    Maruti Tour H1
                                  </option>
                                  <option value='Maruti Tour H3'>
                                    Maruti Tour H3
                                  </option>
                                  <option value='Maruti Tour S'>
                                    Maruti Tour S
                                  </option>
                                  <option value='Maruti Tour V'>
                                    Maruti Tour V
                                  </option>
                                  <option value='Maruti Tour M'>
                                    Maruti Tour M
                                  </option>
                                </optgroup>
                                <optgroup label='Goods Carrier'>
                                  <option value='Super Carry'>
                                    Super Carry
                                  </option>
                                  <option value='Eeco Cargo'>Eeco Cargo</option>
                                </optgroup>
                              </select>
                              {/* <select
                                id="LEADCF6"
                                name="LEADCF6"
                                required
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              >
                                <option>Select Model</option>
                                <optgroup label="Arena">
                                  <option value="Maruti Alto 800">
                                    Maruti Alto
                                  </option>
                                  <option value="Maruti Wagon R">
                                    Maruti Wagon R
                                  </option>
                                  <option value="Maruti Celerio">
                                    Maruti New Celerio
                                  </option>
                                  <option value="Maruti Swift">
                                    Maruti Swift
                                  </option>
                                  <option value="Maruti Dzire">
                                    Maruti Dzire
                                  </option>
                                  <option value="Maruti S-Presso">
                                    Maruti S-Presso
                                  </option>
                                  <option value="Maruti Ertiga">
                                    Maruti Ertiga
                                  </option>
                                  <option value="Maruti New Brezza">
                                    Maruti New Brezza
                                  </option>
                                  <option value="Maruti Eeco">
                                    Maruti Eeco
                                  </option>
                                </optgroup>

                                <optgroup label="Nexa">
                                  <option value="Maruti Ciaz">
                                    Maruti Ciaz
                                  </option>
                                  <option value="Maruti XL6">Maruti XL6</option>
                                  <option value="Maruti s-Cross">
                                    Maruti s-Cross
                                  </option>
                                  <option value="Maruti Baleno">
                                    Maruti Baleno
                                  </option>
                                  <option value="Maruti Ignis">
                                    Maruti Ignis
                                  </option>
                                </optgroup>

                                <optgroup label="CNG">
                                  <option value="Maruti Alto CNG">
                                    Maruti Alto CNG
                                  </option>
                                  <option value="Maruti Wagon R CNG">
                                    Maruti Wagon R CNG
                                  </option>
                                  <option value="Maruti Celerio CNG">
                                    Maruti New Celerio CNG
                                  </option>
                                  <option value="Maruti Dzire CNG">
                                    Maruti Dzire CNG
                                  </option>
                                  <option value="Maruti S-Presso CNG">
                                    Maruti S-Presso CNG
                                  </option>
                                  <option value="Maruti Ertiga CNG">
                                    Maruti Ertiga CNG
                                  </option>
                                  <option value="Maruti Eeco CNG">
                                    Maruti Eeco CNG
                                  </option>
                                </optgroup>

                                <optgroup label="Passenger Carrier">
                                  <option value="Maruti Tour H1">
                                    Maruti Tour H1
                                  </option>
                                  <option value="Maruti Tour H3">
                                    Maruti Tour H3
                                  </option>
                                  <option value="Maruti Tour S">
                                    Maruti Tour S
                                  </option>
                                  <option value="Maruti Tour V">
                                    Maruti Tour V
                                  </option>
                                  <option value="Maruti Tour M">
                                    Maruti Tour M
                                  </option>
                                </optgroup>
                                <optgroup label="Goods Carrier">
                                  <option value="Super Carry">
                                    Super Carry
                                  </option>
                                  <option value="Eeco Cargo">Eeco Cargo</option>
                                </optgroup>
                              </select> */}
                            </div>
                          </div>

                          <div className='flex items-center space-x-2 mb-5'>
                            <input
                              id='disclaimer'
                              type='checkbox'
                              className=' h-4 w-4 border-gray-300 rounded'
                              required
                            />
                            <label
                              htmlFor='comments'
                              className='text-gray-700 text-sm'
                            >
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-900 text-base font-medium text-white hover:bg-green-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
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
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
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

const OurValues = () => {
  return (
    <div className='bg-gray-100 px-5'>
      <div className='max-w-5xl mx-auto py-8'>
        <p className='text-center px-6 py-1.5 max-w-max flex mx-auto border-2 border-[#1A2646] text-2xl font-semibold rounded-l-full rounded-tr-full'>
          Our Values
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
          <div className='shadow border rounded-2xl flex items-center hover:scale-105  ease-in duration-300 justify-center p-6 max-w-[400px] w-full mx-auto bg-white'>
            <img
              src={require('../../assets/Icons/responsible.png')}
              alt='icon'
            />
            <div className='flex items-center flex-col ml-10'>
              <p className='uppercase font-semibold text-2xl'>Responsible</p>
              <p className='font-light mt-2'>
                You can always rely on <br /> us and our network.
              </p>
            </div>
          </div>

          <div className='shadow border rounded-2xl flex items-center hover:scale-105  ease-in duration-300 justify-center p-6 max-w-[400px] w-full mx-auto bg-white'>
            <img src={require('../../assets/Icons/open.png')} alt='icon' />
            <div className='flex items-center flex-col ml-10'>
              <p className='uppercase font-semibold text-2xl'>Open</p>
              <p className='font-light mt-2'>
                All our actions are open <br /> and transparent.
              </p>
            </div>
          </div>

          <div className='shadow border rounded-2xl flex items-center hover:scale-105  ease-in duration-300 justify-center p-6 max-w-[400px] w-full mx-auto bg-white'>
            <img src={require('../../assets/Icons/efficient.png')} alt='icon' />
            <div className='flex items-center flex-col ml-10'>
              <p className='uppercase font-semibold text-2xl text-left'>
                efficient
              </p>
              <p className='font-light mt-2'>
                Expertise that ensures <br /> utmost efficiency.
              </p>
            </div>
          </div>

          <div className='shadow border rounded-2xl flex items-center hover:scale-105  ease-in duration-300 justify-center p-6 max-w-[400px] w-full mx-auto bg-white'>
            <img src={require('../../assets/Icons/reliable.png')} alt='icon' />
            <div className='flex items-center flex-col ml-10'>
              <p className='uppercase font-semibold text-2xl'>reliable</p>
              <p className='font-light mt-2'>
                Your safety is our number <br /> one priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NexaBanner = () => {
  return (
    <div className='relative'>
      <img
        src={require('../../assets/smartwheels-banner-new.webp')}
        className='w-full'
        alt='saboo nexa banner picture'
      />
      <div className='absolute top-5 lg:top-1/4 left-0 right-0'>
        <p className='text-sm sm:text-xl md:text-2xl lg:text-3xl text-center font-extralight'>
          With our cars, we aim to give you an experince that makes you looks
          forward to driving them.
        </p>
        <p className='text-center text-sm sm:text-xl md:text-2xl lg:text-3xl font-extralight'>
          Therefore, if there's anything we can do to improve your drives...
        </p>
        <Link to='/NexaCars'>
          <button className='bg-[#1A2646] hover:bg-blue-600 text-white px-5 py-1.5 font-bold flex mx-auto mt-5 rounded-lg  border-b-4 border-blue-900 hover:bg-[#314783] text-sm'>
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Values;
