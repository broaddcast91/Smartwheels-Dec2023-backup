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

const wagonrSliders = [
  {
    original: require('../../../assets/wagonr/1.png'),
    thumbnail: require('../../../assets/wagonr/1.png'),
  },
  {
    original: require('../../../assets/wagonr/2.png'),
    thumbnail: require('../../../assets/wagonr/2.png'),
  },
  {
    original: require('../../../assets/wagonr/3.png'),
    thumbnail: require('../../../assets/wagonr/3.png'),
  },
  {
    original: require('../../../assets/wagonr/4.png'),
    thumbnail: require('../../../assets/wagonr/4.png'),
  },
  {
    original: require('../../../assets/wagonr/5.png'),
    thumbnail: require('../../../assets/wagonr/5.png'),
  },
  {
    original: require('../../../assets/wagonr/6.png'),
    thumbnail: require('../../../assets/wagonr/6.png'),
  },
];

const wagonrColors = [
  {
    id: 1,
    img: require('../../../assets/wagonr/colors/SOLID_WHITE.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/wagonr/colors/POOLSIDE_BLUE.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/wagonr/colors/SILKY_SILVER.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/wagonr/colors/NUTMEG_BROWN.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/wagonr/colors/PREMIUM_GALLANT_RED.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/wagonr/colors/PREMIUM_GALLANT RED_Dual.webp'),
  },
  {
    id: 7,
    img: require('../../../assets/wagonr/colors/METALLIC_MAGMA_GREY.webp'),
  },
  {
    id: 8,
    img: require('../../../assets/wagonr/colors/METALLIC_MAGMA_GREY_Dual.webp'),
  },
];

const wagonrVariants = [
  {
    id: 1,
    title: 'lxi 1.0l',
    transmission: 'manual',
    engine: '998cc',
    mileage: 24.35,
    price: 5.47,
  },
  {
    id: 2,
    title: 'vxi 1.0l petrol',
    transmission: 'manual',
    engine: '998cc',
    mileage: 24.35,
    price: 5.91,
  },
  {
    id: 3,
    title: 'zxi 1.2l petrol',
    transmission: 'manual',
    engine: '998cc',
    mileage: 24.56,
    price: 6.09,
  },
  {
    id: 4,
    title: 'Lxi 1.0 l cng',
    transmission: 'automatic',
    engine: '998cc',
    mileage: 34.05,
    price: 6.34,
  },
  {
    id: 5,
    title: 'vxi ags 1.0 l petrol',
    transmission: 'Automatic',
    engine: '998cc',
    mileage: 25.19,
    price: 6.41,
  },
  {
    id: 6,
    title: 'zxi 1.2 l petrol',
    transmission: 'manual',
    engine: '1197cc',
    mileage: 23.56,
    price: 6.09,
  },
  {
    id: 7,
    title: 'zxi ags 1.2 l petrol',
    transmission: 'automatic',
    engine: '1197cc',
    mileage: 24.43,
    price: 6.59,
  },
  {
    id: 8,
    title: 'zxi (D) petrol',
    transmission: 'Manual',
    engine: '998cc',
    mileage: 23.56,
    price: 6.7,
  },
  {
    id: 9,
    title: 'zxi plus petrol',
    transmission: 'manual',
    engine: '1197cc',
    mileage: 23.56,
    price: 6.58,
  },
  {
    id: 10,
    title: 'zxi 1.0 l cng',
    transmission: 'manual',
    engine: '998cc',
    mileage: 34.05,
    price: 6.86,
  },
  {
    id: 11,
    title: 'zxi plus ags (D) petrol',
    transmission: 'Automatic',
    engine: '998cc',
    mileage: 24.43,
    price: 7.2,
  },
  {
    id: 12,
    title: 'zxi plus ags 1.2 l petrol',
    transmission: 'Automatic',
    engine: '1197cc',
    mileage: 24.43,
    price: 7.08,
  },
  // {
  //   id: 13,
  //   title: "Tour h3 1 l",
  //   transmission: "Manual",
  //   engine: "998cc",
  //   mileage: 32.5,
  //   price: 5.44,
  // },
  // {
  //   id: 14,
  //   title: "Tour h3 1 l cng",
  //   transmission: "Automatic",
  //   engine: "998cc",
  //   mileage: 24.43,
  //   price: 6.39,
  // },
];

function WagonR() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Wagon R On Road Price in Uttar Pradesh | Smartwheels
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Wagon R On Road Price in Uttar Pradesh | Smartwheels'
        />
        <meta
          name='description'
          content='Maruti Suzuki Wagon R on road price in Uttar Pradesh starts at ₹5.47 Lakh. Wagon R features and specification. For more Maruti Wagon R offers & discounts visit Smartwheels showroom today.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#1a3760] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti WagonR
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 5.44 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <WagonRSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <WagonRSlider />
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
          src={require('../../../assets/brochures/arena/wagon-r-brochure.webp')}
          alt='wagonr brochure'
        />
      </div>
    </>
  );
}

const WagonRSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={wagonrSliders}
    />
  );
};

const Details = () => {
  return (
    <div className=' bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Model:</p>
        <p className='text-sm font-normal text-gray-700'>WagonR</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine:</p>
        <p className='text-sm font-normal text-gray-700'>1197cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Power:</p>
        <p className='text-sm font-normal text-gray-700'>88.5 bhp</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Max Torque:</p>
        <p className='text-sm font-normal text-gray-700'>113.0 Nm @ 4400 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Tranmission:</p>
        <p className='text-sm font-normal text-gray-700'>MT / AT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-gray-700'>32 L</p>
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
        <p className='text-sm font-normal text-gray-700'>24.43 kmpl*</p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Boot Space:</p>
        <p className='text-sm font-normal text-gray-700'>341 L</p>
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
            <option value='TOUR H3 PETROL'>TOUR H3 PETROL</option>
            <option value='WagonR LXI 1.0L'>WagonR LXI 1.0L</option>
            <option value='WagonR VXI 1.0L'>WagonR VXI 1.0L</option>
            <option value='WagonR ZXI 1.2L'>WagonR ZXI 1.2L</option>
            <option value='WagonR VXI AGS 1.0L'>WagonR VXI AGS 1.0L</option>
            <option value='WagonR LXI CNG 1.0L'>WagonR LXI CNG 1.0L</option>
            <option value='WagonR ZXI+ 1.2L'>WagonR ZXI+ 1.2L</option>
            <option value='WagonR ZXI AGS 1.2L'>WagonR ZXI AGS 1.2L</option>
            <option value='WagonR VXI CNG 1.0L'>WagonR VXI CNG 1.0L</option>
            <option value='WagonR ZXI+ AGS 1.2L'>WagonR ZXI+ AGS 1.2L</option>
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
          href={require('../../../assets/brochures/arena/WagonR_Brand_Broucher.pdf')}
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
      {wagonrColors.map((item) => (
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
              ? 'h-5 rounded-full w-5 bg-[#fff] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#fff]'
          }
          title='Solid White'
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#68afe4] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#68afe4]'
          }
          title='Poolside Blue'
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#b3b5b0] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#b3b5b0]'
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#7c6f5f] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#7c6f5f]'
          }
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#bd0a10] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#bd0a10]'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background:
              'linear-gradient(61deg, rgba(228,41,34,1) 50%, rgba(15,15,15,1) 50%)',
          }}
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? 'h-5 rounded-full w-5 bg-[#656563]  animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#656563]'
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(228deg, #212529 50%, #6c757d 50%)',
          }}
          onClick={(e) => setCurrent(8)}
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
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Transmission
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Engine
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Mileage
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Ex-Showroom Price
          </th>
        </tr>
      </thead>
      <tbody>
        {wagonrVariants?.map((item) => (
          <tr key={item.id}>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.title}
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.transmission}
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.engine}
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.mileage}&nbsp;KM/L
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

export default WagonR;
