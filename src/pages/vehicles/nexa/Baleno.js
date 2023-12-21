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

const BalenoSlidersdata = [
  {
    original: require('../../../assets/nexa/baleno/ExteriorSideAngle.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/ExteriorSideAngle.jpg'),
  },

  {
    original: require('../../../assets/nexa/baleno/BackSideView.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/BackSideView.jpg'),
  },
  {
    original: require('../../../assets/nexa/baleno/FrontGrioll.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/FrontGrioll.jpg'),
  },
  {
    original: require('../../../assets/nexa/baleno/taillamps.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/taillamps.jpg'),
  },
  {
    original: require('../../../assets/nexa/baleno/Steering.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/Steering.jpg'),
  },
  {
    original: require('../../../assets/nexa/baleno/AC-Vents-And-fast-Charging-Post.jpg'),
    thumbnail: require('../../../assets/nexa/baleno/AC-Vents-And-fast-Charging-Post.jpg'),
  },
];
const balenoColors = [
  {
    id: 1,
    img: require('../../../assets/nexa/baleno/colors/CelestialBlue.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/nexa/baleno/colors/ArticWhite.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/nexa/baleno/colors/SplendidSilver.webp'),
  },

  {
    id: 4,
    img: require('../../../assets/nexa/baleno/colors/GrandeurGrey.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/nexa/baleno/colors/OpulantRed.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/nexa/baleno/colors/LuxeBeige.webp'),
  },
];
const balenoVariants = [
  {
    id: 1,
    title: 'Baleno Sigma Petrol ',

    mileage: '22.0',
    price: '6.49',
  },
  {
    id: 2,
    title: 'Baleno Delta Petrol',

    mileage: '22.0',
    price: '7.33',
  },
  {
    id: 3,
    title: 'Baleno Delta Petrol AGS',

    mileage: '22.0',
    price: '7.83',
  },
  {
    id: 4,
    title: 'Baleno Zeta Petrol',

    mileage: '22.0',
    price: '8.26',
  },
  {
    id: 5,
    title: 'Baleno Zeta Petrol AGS',

    mileage: '31.6',
    price: '8.76',
  },
  {
    id: 6,
    title: 'Baleno Alpha Petrol',

    mileage: '24.7',
    price: '9.21',
  },
  {
    id: 7,
    title: 'Baleno Alpha Petrol AGS',

    mileage: '24.7',
    price: '9.71',
  },
];
function Baleno() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Nexa Baleno On Road Price in Uttar Pradesh | Maruti Suzuki Baleno
          Offers
        </title>
        <meta
          name='title'
          content='Nexa Baleno On Road Price in Uttar Pradesh | Maruti Suzuki Baleno Offers'
        />
        <meta
          name='description'
          content='Nexa Baleno on road price in Uttar Pradesh starts at ₹6.49 Lakh. Maruti Suzuki Baleno comes with BS6 petrol engine. Check out Baleno price, specification, new features. Call us to book a test drive for Maruti Baleno.'
        />
      </Helmet>
      <div className='bg-black py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#FFFFFF] mx-5 lg:mx-0 bg-black'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti BALENO
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 6.49 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <BalenoSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <BalenoSlider />
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
            src={require('../../../assets/brochures/baleno.jpg')}
            alt='baleno brochure'
          />
        </div>
      </div>
    </>
  );
}
const BalenoSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={BalenoSlidersdata}
    />
  );
};
const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container mx-auto bg-gray-300 rounded py-8'>
      <div className='flex justify-end pr-6'>
        <a
          href={require('../../../assets/brochures/nexa/Product-brochures/The New Age Baleno_Brochure.pdf')}
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
      {balenoColors.map((item) => (
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
              ? 'h-5 rounded-full w-5 bg-[#31416d] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#31416d]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#ffffff] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#ffffff]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#afb3b8] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#afb3b8]'
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 bg-[#545454] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#545454]'
          }
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#a31326] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#a31326]'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#704e40] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#704e40]'
          }
          onClick={(e) => setCurrent(6)}
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
        {balenoVariants?.map((item) => (
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
    <div className=' bg-white  text-[#000] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Model:</p>
        <p className='text-sm font-normal text-[#000]'>Baleno</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Engine:</p>
        <p className='text-sm font-normal text-[#000]'>1462cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Power:</p>
        <p className='text-sm font-normal text-[#000]'>75.8 kW @ 6000 RPM</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Max Torque:</p>
        <p className='text-sm font-normal text-[#000]'>136.8 Nm @ 4400 RPM</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Tranmission:</p>
        <p className='text-sm font-normal text-[#000]'>MT / AT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-[#000]'>45 L</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Airbags:</p>
        <p className='text-sm font-normal text-[#000]'>2</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Seating:</p>
        <p className='text-sm font-normal text-[#000]'>5 Persons</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Mileage:</p>
        <p className='text-sm font-normal text-[#000]'>
          {' '}
          22.35 (MT), 22.94 (AGS)
        </p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Boot Space:</p>
        <p className='text-sm font-normal text-[#000]'>209 L</p>
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
            <option value='Baleno Sigma Petrol'>Baleno Sigma Petrol</option>
            <option value='Baleno Delta Petrol'>Baleno Delta Petrol</option>
            <option value='Baleno Delta Petrol AGS'>
              Baleno Delta Petrol AGS
            </option>
            <option value='Baleno Zeta Petrol'>Baleno Zeta Petrol</option>
            <option value='Baleno Zeta Petrol AGS'>
              Baleno Zeta Petrol AGS
            </option>
            <option value='Baleno Alpha Petrol'>Baleno Alpha Petrol</option>
            <option value='Baleno Alpha Petrol AGS'>
              Baleno Alpha Petrol AGS
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
export default Baleno;
