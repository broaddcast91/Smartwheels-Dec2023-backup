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

const eecoSlidersdata = [
  {
    original: require('../../../assets/eeco/breeze blue Eeco color shot-1.webp'),
    thumbnail: require('../../../assets/eeco/breeze blue Eeco color shot-1.webp'),
  },
  {
    original: require('../../../assets/eeco/eceo png-v1.webp'),
    thumbnail: require('../../../assets/eeco/eceo png-v1.webp'),
  },
  {
    original: require('../../../assets/eeco/Exterior image-v1.webp'),
    thumbnail: require('../../../assets/eeco/Exterior image-v1.webp'),
  },
  {
    original: require('../../../assets/eeco/Large-car-comfort.webp'),
    thumbnail: require('../../../assets/eeco/Large-car-comfort.webp'),
  },
  {
    original: require('../../../assets/eeco/interior-v8.webp'),
    thumbnail: require('../../../assets/eeco/interior-v8.webp'),
  },
  {
    original: require('../../../assets/eeco/EE_Int4.webp'),
    thumbnail: require('../../../assets/eeco/EE_Int4.webp'),
  },
];
const eecoColors = [
  {
    id: 1,
    img: require('../../../assets/eeco/colors/Maruti-Suzuki-Ecco-Superior-White.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/eeco/colors/Maruti-Suzuki-Eeco-Breeze-Blue.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/eeco/colors/Maruti-Suzuki-Eeco-Mettalic-Grey.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/eeco/colors/Maruti-Suzuki-Eeco-Midnight-Black.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/eeco/colors/Maruti-Suzuki-Eeco-Silky-Silver.webp'),
  },
];
const eecoVariants = [
  {
    id: 1,
    title: '5 STR STD (O) 1.2L',
    transmission: 'manual',
    mileage: 20.52,
    price: 4.63,
  },
  {
    id: 2,
    title: '5 STR AC (O) 1.2L',
    transmission: 'manual',
    mileage: 20.52,
    price: 4.99,
  },
  {
    id: 3,
    title: '7 STR STD (O) 1.2L',
    transmission: 'automatic',
    mileage: 20.52,
    price: 4.92,
  },
  // {
  //   id: 4,
  //   title: "CARGO - CNG",
  //   transmission: "automatic",
  //   mileage: 16.11,
  //   price: 5.73,
  // },
  // {
  //   id: 5,
  //   title: "CARGO AC - CNG",
  //   transmission: "Automatic",
  //   mileage: 16.11,
  //   price: 6.15,
  // },
  // {
  //   id: 6,
  //   title: "CARGO - petrol",
  //   transmission: "manual",
  //   mileage: 16.11,
  //   price: 4.78,
  // },
  // {
  //   id: 7,
  //   title: "5 STR AC (O) CNG 1.2L",
  //   transmission: "automatic",
  //   mileage: 20.52,
  //   price: 5.94,
  // },
];
function EECO() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Maruti Suzuki Eeco Price in Uttar Pradesh | Smartwheels</title>
        <meta
          name='title'
          content='Maruti Suzuki Eeco Price in Uttar Pradesh | Smartwheels'
        />
        <meta
          name='description'
          content='Maruti Suzuki Eeco  on road price in Uttar Pradesh. Maruti Eeco  is available in Petrol, CNG variants. It offers attractive mileage, and better load capacity. Visit Smartwheels Showroom to know more about Eeco.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#1a3760] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti Eeco
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 4.63 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <EecoSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <EecoSlider />
            </div>
            <Details />
            <CarEnquiry />
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <div className='overflow-x-scroll'>
            <Table />
          </div>
          <Colors />
        </div>
      </div>
      <div className='container mx-auto py-8'>
        <img
          src={require('../../../assets/brochures/arena/eeco-brochure.webp')}
          alt='eeco brochure'
        />
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
      items={eecoSlidersdata}
    />
  );
};

const Details = () => {
  return (
    <div className=' bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Model:</p>
        <p className='text-sm font-normal text-gray-700'>Eeco</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine:</p>
        <p className='text-sm font-normal text-gray-700'>1196cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Power:</p>
        <p className='text-sm font-normal text-gray-700'>72.42 bhp</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Max Torque:</p>
        <p className='text-sm font-normal text-gray-700'>98.0 Nm @ 3000 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Tranmission:</p>
        <p className='text-sm font-normal text-gray-700'>MT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-gray-700'>40 L</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Airbags:</p>
        <p className='text-sm font-normal text-gray-700'>2</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Seating:</p>
        <p className='text-sm font-normal text-gray-700'>5/7 Persons</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Mileage:</p>
        <p className='text-sm font-normal text-gray-700'>
          16.11 kmpl* & 20.88 km/kg*
        </p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Boot Space:</p>
        <p className='text-sm font-normal text-gray-700'>540 L</p>
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

            <option value='Eeco 5 STR STD(O)'>Eeco 5 STR STD(O)</option>
            <option value='Eeco 7 STR STD (O)'>Eeco 7 STR STD (O)</option>
            <option value='Eeco 5 STR AC(O)'>Eeco 5 STR AC(O)</option>
            <option value='Eeco CARE AMBULANCE SHELL'>
              Eeco CARE AMBULANCE SHELL
            </option>
            <option value='Eeco 5 STR AC CNG(O)'>Eeco 5 STR AC CNG(O)</option>
            <option value='Eeco AMBULANCE (O)'>Eeco AMBULANCE (O)</option>
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
          href={require('../../../assets/brochures/arena/Eeco_product_Passenger_2021_Brochure.pdf')}
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
      {eecoColors.map((item) => (
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
              ? 'h-5 rounded-full w-5 bg-[#ffffff] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#ffffff]'
          }
          title='Solid White'
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#02385a] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#02385a]'
          }
          title='Poolside Blue'
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#4a4a4a] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#4a4a4a]'
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#171914] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#171914]'
          }
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#948d87] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#948d87]'
          }
          onClick={(e) => setCurrent(5)}
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
          {/* <th className="border border-slate-300 font-normal px-3 py-1.5">
              Engine
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
        {eecoVariants?.map((item) => (
          <tr key={item.id}>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.title}
            </td>
            <td className='border border-slate-300 px-3 py-1.5'>
              {item.transmission}
            </td>
            {/* <td className="border border-slate-300 px-3 py-1.5">
                {item.engine}
              </td> */}
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
export default EECO;
