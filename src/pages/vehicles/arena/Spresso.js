import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const spressoSlidersdata = [
  {
    original: require('../../../assets/spresso/1.webp'),
    thumbnail: require('../../../assets/spresso/1.webp'),
  },
  {
    original: require('../../../assets/spresso/2.webp'),
    thumbnail: require('../../../assets/spresso/2.webp'),
  },
  {
    original: require('../../../assets/spresso/3.webp'),
    thumbnail: require('../../../assets/spresso/3.webp'),
  },
  {
    original: require('../../../assets/spresso/4.webp'),
    thumbnail: require('../../../assets/spresso/4.webp'),
  },
  {
    original: require('../../../assets/spresso/5.webp'),
    thumbnail: require('../../../assets/spresso/5.webp'),
  },
  {
    original: require('../../../assets/spresso/6.webp'),
    thumbnail: require('../../../assets/spresso/6.webp'),
  },
  {
    original: require('../../../assets/spresso/7.webp'),
    thumbnail: require('../../../assets/spresso/7.webp'),
  },
  {
    original: require('../../../assets/spresso/8.webp'),
    thumbnail: require('../../../assets/spresso/8.webp'),
  },
  {
    original: require('../../../assets/spresso/9.webp'),
    thumbnail: require('../../../assets/spresso/9.webp'),
  },
  {
    original: require('../../../assets/spresso/10.webp'),
    thumbnail: require('../../../assets/spresso/10.webp'),
  },
];

const spressoColors = [
  {
    id: 1,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-Orange.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-White.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-Red.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-Silver.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-Grey.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/spresso/colors/Maruti-Suzuki-Spresso-Blue.webp'),
  },
];

const spressoVariants = [
  {
    id: 1,
    title: 'lxi (o) Petrol',
    transmission: 'manual',
    mileage: '21.4 km/l',
    price: 4.43,
  },

  {
    id: 2,
    title: 'vxi (o) petrol',
    transmission: 'manual',
    mileage: '21.7 km/l',
    price: 4.69,
  },
  {
    id: 3,
    title: 'std (o) petrol',
    transmission: 'manual',
    mileage: '21.4 km/l',
    price: 3.99,
  },
  // {
  //   id: 4,
  //   title: "lxi (o) cng",
  //   transmission: "manual",
  //   mileage: "21.4 km/kg",
  //   price: 5.38,
  // },
  // {
  //   id: 5,
  //   title: "vxi (o) cng",
  //   transmission: "manual",
  //   mileage: "21.4 km/kg",
  //   price: 5.64,
  // },
  {
    id: 6,
    title: 'vxi (o) ags petrol',
    transmission: 'manual',
    mileage: '21.7 km/l',
    price: 5.19,
  },
  {
    id: 7,
    title: 'vxi plus petrol',
    transmission: 'manual',
    mileage: '21.7 km/l',
    price: 4.79,
  },

  {
    id: 8,
    title: 'vxi plus ags petrol',
    transmission: 'automatic',
    mileage: '21.7 km/l',
    price: 5.29,
  },
];

function Spresso() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Spresso On Road Price in Uttar Pradesh | Smartwheels
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Spresso On Road Price in Uttar Pradesh | Smartwheels'
        />
        <meta
          name='description'
          content='Maruti Suzuki Spresso on road price in Uttar Pradesh starts at ₹4.25 Lakh. Spresso features and specification. For more Maruti Spresso offers & discounts visit Smartwheels showroom today.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#1a3760] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti S-Presso
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 4.25 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <SpressoSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <SpressoSlider />
            </div>
            <Details />
            <CarEnquiry />
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <Table />
          <Colors />
        </div>
      </div>
      <div className='container mx-auto py-8'>
        <img
          src={require('../../../assets/brochures/arena/spresso-brochure.webp')}
          alt='spresso brochure'
        />
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
      items={spressoSlidersdata}
    />
  );
};

const Details = () => {
  return (
    <div className=' bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Model:</p>
        <p className='text-sm font-normal text-gray-700'>S-Presso</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine:</p>
        <p className='text-sm font-normal text-gray-700'>998cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Power:</p>
        <p className='text-sm font-normal text-gray-700'>58.33 bhp</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Max Torque:</p>
        <p className='text-sm font-normal text-gray-700'>78 Nm @ 3500 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Tranmission:</p>
        <p className='text-sm font-normal text-gray-700'>MT / AT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-gray-700'>55 L</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Airbags:</p>
        <p className='text-sm font-normal text-gray-700'>2</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Seating:</p>
        <p className='text-sm font-normal text-gray-700'>5 Persons</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Mileage:</p>
        <p className='text-sm font-normal text-gray-700'>21.7 kmpl*</p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Boot Space:</p>
        <p className='text-sm font-normal text-gray-700'>240 L</p>
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
            <option value='Spresso STD'>Spresso STD</option>
            <option value='Spresso LXI'>Spresso LXI</option>
            <option value='Spresso VXI'>Spresso VXI</option>
            <option value='Spresso VXI+'>Spresso VXI+</option>
            <option value='Spresso VXI(O) AGS'>Spresso VXI(O) AGS</option>
            <option value='Spresso LXI CNG'>Spresso LXI CNG</option>
            <option value='Spresso VXI+ (O) AGS'>Spresso VXI+ (O) AGS</option>
            <option value='Spresso VXI CNG'>Spresso VXI CNG</option>
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

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container mx-auto bg-gray-200 rounded py-8'>
      <div className='flex justify-end pr-6'>
        <a
          href={require('../../../assets/brochures/arena/S-Presso_product_brochure.pdf')}
          className='p-3 bg-blue-800 hover:bg-red-600 text-gray-200 flex rounded-lg max-w-[200px] border-b-4 border-blue-700 hover:border-red-500'
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
      {spressoColors.map((item) => (
        <img
          key={item.id}
          src={item.img}
          className={
            item.id === current ? 'mx-auto lg:max-h-80 h-auto' : 'hidden'
          }
          alt={item.id}
        />
      ))}
      <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 bg-[#ec6904] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#ec6904]'
          }
          title='Solid White'
          onClick={() => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#fff] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#fff]'
          }
          title='Poolside Blue'
          onClick={() => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#AB0F13] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#AB0F13]'
          }
          onClick={() => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#2a2967] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#2a2967]'
          }
          onClick={() => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#909090] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#909090]'
          }
          onClick={() => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#004eba] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#004eba]'
          }
          onClick={() => setCurrent(6)}
        ></p>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <table className='table-auto border-collapse border border-slate-400 rounded  uppercase w-full container mx-auto text-center text-sm'>
      <thead className='bg-blue-800 text-white'>
        <tr>
          <th className='border border-slate-300 font-normal px-3 py-2.5'>
            Variants
          </th>
          {/* <th className="border border-slate-300 font-normal px-3 py-1.5">
            Transmission
          </th> */}
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Mileage
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Ex-Showroom
          </th>
        </tr>
      </thead>
      <tbody>
        {spressoVariants?.map((item) => (
          <tr key={item.id}>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.title}
            </td>
            {/* <td className="border border-slate-300 px-3 py-1.5">
              {item.transmission}
            </td> */}
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.mileage}&nbsp;
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              ₹&nbsp;{item.price} Lakh*
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Spresso;
