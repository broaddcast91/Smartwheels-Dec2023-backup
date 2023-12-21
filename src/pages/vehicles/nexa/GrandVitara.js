import React, { useState } from 'react';
import Header from '../../../components/header/Header';
import { Helmet } from 'react-helmet';

import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { db } from '../../../firebase';

const GrandVitara = () => {
  return (
    <div>
      <Header />
      <Helmet>
        <title>
          Nexa Grand Vitara On Road Price in Uttar Pradesh | Maruti Suzuki Grand
          Vitara Offers
        </title>
        <meta
          name='title'
          content=' Nexa Grand Vitara On Road Price in Uttar Pradesh | Maruti Suzuki Grand
          Vitara Offers'
        />
        <meta
          name='description'
          content='Nexa Grand Vitara on road price in Uttar Pradesh starts at ₹10.45 Lakh. Maruti Suzuki Grand Vitara comes with BS6 petrol engine. Check out Grand Vitara price, specification, new features. Call us to book a test drive for Maruti Grand Vitara.'
        />
      </Helmet>
      <div className='bg-black py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#FFFFFF] mx-5 lg:mx-0 bg-black'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti Grand Vitara
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> 10.45 Lakh
                <sup>*</sup>
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <IgnisSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0 '>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <IgnisSlider />
            </div>
            <div className='bg-black'>
              <Details />
            </div>
            <CarEnquiry />
          </div>
        </div>
      </div>
      <div className='bg-[#d0d0d0]'>
        <div className='container bg-[#d0d0d0] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  px-5 py-5 gap-9'>
          <Table />

          <Colors />
        </div>
      </div>
      <div className='bg-[#d0d0d0]'>
        <div className='container mx-auto pb-5'>
          <img
            src={require('../../../assets/brochures/9061_S_GV Brochure_11.75x8.25_19.7.22_pages-to-jpg-0006.webp')}
            alt='vitara brochure'
          />
        </div>
      </div>
    </div>
  );
};

const IgnisSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={IgnisSlidersdata}
    />
  );
};
const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container mx-auto bg-gray-300 rounded py-8'>
      <div className='flex justify-end pr-6'>
        <a
          href={require('../../../assets/brochures/nexa/9061_S_GV Brochure_11.75x8.25_19.7.22.pdf')}
          className='p-3 bg-black hover:bg-red-600 text-gray-200 flex rounded-lg max-w-[200px] border-b-4 border-gray-700 hover:border-red-500'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z'></path>
          </svg>
          &nbsp;Brochure
        </a>
      </div>
      {ignisColors.map((item) => (
        <img
          key={item.id}
          src={item.img}
          className={item.id === current ? 'mx-auto max-h-80' : 'hidden'}
          alt={item.id}
        />
      ))}
      <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 bg-[#163472] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#163472]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#f9f9f9] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#f9f9f9]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] animate-bounce"
              : "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')]"
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#282828] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#282828]'
          }
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#464848] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#464848]'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#AC0F0F] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#AC0F0F]'
          }
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? "h-5 rounded-full w-5  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] animate-bounce"
              : "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')]"
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5  bg-[#B6BABD] animate-bounce'
              : 'h-5 rounded-full w-5  bg-[#B6BABD]'
          }
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? "h-5 rounded-full w-5  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] animate-bounce"
              : "h-5  rounded-full w-5  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')]"
          }
          onClick={(e) => setCurrent(9)}
        ></p>
      </div>
    </div>
  );
};
const Table = () => {
  return (
    <table className='table-auto border-collapse border border-slate-400 rounded  uppercase w-full container mx-auto text-center text-sm'>
      <thead className='bg-black text-white'>
        <tr>
          <th className='border border-slate-300 font-normal px-3 py-4'>
            Variants
          </th>

          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Ex-Showroom Price
          </th>
        </tr>
      </thead>
      <tbody>
        {ignisVariants?.map((item) => (
          <tr key={item.id}>
            <td className='border border-black px-3 py-1.5'>{item.title}</td>

            <td className='border border-black px-3 py-1.5'>
              ₹&nbsp;{item.price} Lakh*
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Details = () => {
  return (
    <div className='bg-white  text-[#000] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Model:</p>
        <p className='text-sm font-normal text-[#000]'>Grand Vitara</p>
      </div>
      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Engine:</p>
        <p className='text-sm font-normal text-[#000]'>Smart / Electric</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Displacement:</p>
        <p className='text-sm font-normal text-[#000]'>1462 cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Power:</p>
        <p className='text-sm font-normal text-[#000]'>103.06</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Max Torque:</p>
        <p className='text-sm font-normal text-[#000]'>136.8</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Tranmission:</p>
        <p className='text-sm font-normal text-[#000]'>5MT / 6AT, e-CVT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-[#000]'>45 L</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Airbags:</p>
        <p className='text-sm font-normal text-[#000]'>6</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Seating:</p>
        <p className='text-sm font-normal text-[#000]'>5 Persons</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Mileage:</p>
        <p className='text-sm font-normal text-[#000]'> 27.97 (e-CVT)</p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Boot Space:</p>
        <p className='text-sm font-normal text-[#000]'>300 L</p>
      </div>
    </div>
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
            <option value='Grand Vitara SMART HYBRID Sigma 1.5L 5MT'>
              Grand Vitara SMART HYBRID Sigma 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID Delta 1.5L 5MT'>
              Grand Vitara SMART HYBRID Delta 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID Delta 1.5L 6AT'>
              Grand Vitara SMART HYBRID Delta 1.5L 6AT
            </option>
            <option value='Grand Vitara SMART HYBRID Zeta 1.5L 5MT'>
              Grand Vitara SMART HYBRID Zeta 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID Alpha 1.5L 5MT'>
              Grand Vitara SMART HYBRID Alpha 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID AllGrip (4WD) 1.5L 5MT'>
              Grand Vitara SMART HYBRID AllGrip (4WD) 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID AllGrip (4WD) 1.5L 5MT'>
              Grand Vitara SMART HYBRID AllGrip (4WD) 1.5L 5MT
            </option>
            <option value='Grand Vitara SMART HYBRID 1.5L 6AT'>
              Grand Vitara SMART HYBRID 1.5L 6AT
            </option>
            <option value='Grand Vitara Intelligent Electric Hybrid Zeta+ 1.5L CVT'>
              Grand Vitara Intelligent Electric Hybrid Zeta+ 1.5L CVT
            </option>
            <option value='Grand Vitara Intelligent Hybrid Electric Alpha+ 1.5L CVT'>
              Grand Vitara Intelligent Hybrid Electric Alpha+ 1.5L CVT
            </option>
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

const IgnisSlidersdata = [
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/1.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/1.webp'),
  },

  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/2.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/2.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/3.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/3.webp'),
  },

  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/4.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/4.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/2.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/2.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/3.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/3.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/4.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/4.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/3.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/3.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/4.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/4.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/5.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/5.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/6.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/6.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/7.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/7.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/8.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/8.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/9.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/9.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/10.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/10.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/11.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/11.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/12.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/12.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/13.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/13.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/14.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/14.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/15.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/15.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/16.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/16.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/17.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/17.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/18.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/18.webp'),
  },
  {
    original: require('../../../assets/nexa/grand-vitara/slide-show/new/19.webp'),
    thumbnail: require('../../../assets/nexa/grand-vitara/slide-show/new/19.webp'),
  },
];
const ignisColors = [
  {
    id: 1,
    img: require('../../../assets/nexa/grand-vitara/colors/4-rangeman_celestial_blue.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/nexa/grand-vitara/colors/2-rangeman_arctic_white.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/nexa/grand-vitara/colors/1-rangeman_arctic_white_midnight_black.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/nexa/grand-vitara/colors/3-rangeman_cave_black.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/nexa/grand-vitara/colors/5-rangeman_grandeur_grey.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/nexa/grand-vitara/colors/7-rangeman_oppulent_red.webp'),
  },
  {
    id: 7,
    img: require('../../../assets/nexa/grand-vitara/colors/6-rangeman_oppulent_red_midnight_black.webp'),
  },
  {
    id: 8,
    img: require('../../../assets/nexa/grand-vitara/colors/9-rangeman_splendid_silver.webp'),
  },
  {
    id: 9,
    img: require('../../../assets/nexa/grand-vitara/colors/8-rangeman_splendid_silver_midnight_black.webp'),
  },
];
const ignisVariants = [
  {
    id: 1,
    title: 'Smart Hybrid Sigma 1.5L 5MT',

    mileage: '22.0',
    price: '10.45',
  },
  {
    id: 2,
    title: 'Smart Hybrid Delta 1.5L 5MT',

    mileage: '22.0',
    price: '11.90',
  },
  {
    id: 3,
    title: 'Smart Hybrid Delta 1.5L 6AT',

    mileage: '22.0',
    price: '13.40',
  },

  {
    id: 5,
    title: 'Smart Hybrid Zeta 1.5L 5MT',

    mileage: '31.6',
    price: '13.89',
  },
  {
    id: 6,
    title: 'Smart Hybrid Alpha 1.5L 5MT',

    mileage: '24.7',
    price: '15.39',
  },
  {
    id: 7,
    title: 'Smart Hybrid Zeta 1.5L 6AT',

    mileage: '24.7',
    price: '15.39',
  },
  {
    id: 8,
    title: 'Smart Hybrid Alpha AllGrip (4WD) 1.5L 5MT',

    mileage: '24.7',
    price: '16.89',
  },
  {
    id: 9,
    title: 'Smart Hybrid Alpha 1.5L 6AT',

    mileage: '24.7',
    price: '16.89',
  },
  {
    id: 10,
    title: 'Intelligent Electric Hybrid Zeta+ 1.5L CVT',

    mileage: '24.7',
    price: '17.99',
  },

  {
    id: 10,
    title: 'Intelligent Electric Hybrid Zeta+ DUAL TONE 1.5L CVT',

    mileage: '24.7',
    price: '18.15',
  },
  {
    id: 11,
    title: 'Intelligent Electric Hybrid Alpha+ 1.5L CVT',

    mileage: '24.7',
    price: '19.49',
  },
  {
    id: 11,
    title: 'Intelligent Electric Hybrid Alpha+ DUAL TONE 1.5L CVT',

    mileage: '24.7',
    price: '19.65',
  },
];

export default GrandVitara;
