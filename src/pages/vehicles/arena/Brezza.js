import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const brezzaSliders = [
  {
    original: require('../../../assets/brezza/new-brezza/ss1.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss1.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/exterior-image-170.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/exterior-image-170.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss3.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss3.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss4.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss4.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss5.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss5.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss6.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss6.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss7.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss7.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss8.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss8.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss9.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss9.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss10.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss10.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss11.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss11.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss12.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss12.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss13.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss13.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss14.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss14.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss15.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss15.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss16.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss16.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss17.jpeg'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss17.jpeg'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss18.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss18.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss19.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss19.webp'),
  },
  {
    original: require('../../../assets/brezza/new-brezza/ss20.webp'),
    thumbnail: require('../../../assets/brezza/new-brezza/ss20.webp'),
  },
];

const brezzaColors = [
  {
    id: 1,
    img: require('../../../assets/brezza/new-brezza/colors/1-brave-khaki.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/brezza/new-brezza/colors/2-exuberant-blue.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/brezza/new-brezza/colors/3-magna-grey.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/brezza/new-brezza/colors/4-pearl-arctic-white-roof.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/brezza/new-brezza/colors/5-pearl-arctic-white.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/brezza/new-brezza/colors/6-sizzling-red.webp'),
  },
  {
    id: 7,
    img: require('../../../assets/brezza/new-brezza/colors/7-sizzling-red-black-roof.webp'),
  },
  {
    id: 8,
    img: require('../../../assets/brezza/new-brezza/colors/8-splendid-silver.webp'),
  },
  {
    id: 9,
    img: require('../../../assets/brezza/new-brezza/colors/9-splendid-silver-black-roof.webp'),
  },
];

const brezzaVariants = [
  {
    id: 1,
    title: 'lxi-petrol',
    transmission: 'manual',
    mileage: '17.03',
    price: 7.99,
  },
  {
    id: 2,
    title: 'vxi-petrol',
    transmission: 'manual',
    mileage: '17.03',
    price: 8.92,
  },
  {
    id: 3,
    title: 'zxi petrol',
    transmission: 'manual',
    mileage: '17.03',
    price: 9.67,
  },
  {
    id: 4,
    title: 'vxi at-petrol',
    transmission: 'automatic',
    mileage: '18.76',
    price: 10.12,
  },
  {
    id: 5,
    title: 'zxi plus-petrol',
    transmission: 'manual',
    mileage: '17.03',
    price: 9.98,
  },
  {
    id: 6,
    title: 'zxi plus dual tone-petrol',
    transmission: 'manual',
    mileage: '17.03',
    price: 10.14,
  },
  {
    id: 7,
    title: 'zxi at-petrol',
    transmission: 'automatic',
    mileage: '18.76',
    price: 10.87,
  },
  {
    id: 8,
    title: 'zxi plus at-petrol',
    transmission: 'automatic',
    mileage: '18.76',
    price: 11.33,
  },
  {
    id: 9,
    title: 'zxi plus at(d)-petrol',
    transmission: 'automatic',
    mileage: '24.7',
    price: 11.49,
  },
];

function Brezza() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Brezza On Road Price in Uttar Pradesh | Smartwheels
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Brezza On Road Price in Uttar Pradesh | Smartwheels'
        />
        <meta
          name='description'
          content='Maruti Suzuki Brezza on road price in Uttar Pradesh starts at ₹7.99 Lakh. Brezza features and specification. For more Maruti Brezza offers & discounts visit Smartwheels showroom today.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#1a3760] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti New Brezza
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 7.99 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <BrezzaSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <BrezzaSlider />
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
      <div className='bg-gray-100 container mx-auto'>
        <img
          src={require('../../../assets/brochures/arena/brezza-brochure.webp')}
          alt='brezza brochure'
        />
      </div>
    </>
  );
}

const BrezzaSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={brezzaSliders}
    />
  );
};

const Details = () => {
  return (
    <div className=' bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Model:</p>
        <p className='text-sm font-normal text-gray-700'>New Brezza</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine:</p>
        <p className='text-sm font-normal text-gray-700'>1462cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Power:</p>
        <p className='text-sm font-normal text-gray-700'>
          103.26bhp @ 6000 rpm
        </p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Max Torque:</p>
        <p className='text-sm font-normal text-gray-700'>138 Nm @ 4400 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Tranmission:</p>
        <p className='text-sm font-normal text-gray-700'>MT / AT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-gray-700'>48 L</p>
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
        <p className='font-semibold text-sm text-[#1a3760]'>Petrol:</p>
        <p className='text-sm font-normal text-gray-700'>17.03* kmpl</p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Boot Space:</p>
        <p className='text-sm font-normal text-gray-700'>328 L</p>
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

            <option value='New Brezza'>New Brezza K15C ISG 5MT LXI</option>
            <option value='New Brezza'>New Brezza K15C ISG 5MT VXI</option>
            <option value='New Brezza'>New Brezza K15C ISG 5MT ZXI</option>
            <option value='New Brezza'>New Brezza K15C ISG 6AT VXI</option>
            <option value='New Brezza'>New Brezza K15C ISG 5MT ZXI+</option>
            <option value='New Brezza'>New Brezza K15C ISG 6AT ZXI</option>
            <option value='New Brezza'>New Brezza K15C ISG 6AT ZXI+</option>
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
          href={require('../../../assets/brochures/arena/Brezza_Product_Brochure.pdf')}
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
      {brezzaColors.map((item) => (
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
              ? 'h-5 rounded-full w-5 animate-bounce bg-[#5d5135]'
              : 'h-5 rounded-full w-5 bg-[#5d5135]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#264b9c] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#264b9c]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#8d8d8d] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#8d8d8d] '
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #ffffff 50%)',
          }}
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300 animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300'
          }
          onClick={(e) => setCurrent(5)}
        ></p>

        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#e62924] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#e62924]'
          }
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #e62924 50%, #3e403f 50%)',
          }}
          onClick={(e) => setCurrent(7)}
        ></p>

        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5 bg-[#c5c5c5] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#c5c5c5]'
          }
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #000 50%)',
          }}
          onClick={(e) => setCurrent(9)}
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
            Mileage
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Ex-Showroom Price
          </th>
        </tr>
      </thead>
      <tbody>
        {brezzaVariants?.map((item) => (
          <tr key={item.id}>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.title}
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.transmission}
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

export default Brezza;
