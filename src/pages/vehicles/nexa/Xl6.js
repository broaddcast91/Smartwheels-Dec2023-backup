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

const xl6Colors = [
  {
    id: 1,
    img: require('../../../assets/nexa/xl6/colors/Nexa-Blue.webp'),
  },
  {
    id: 2,
    img: require('../../../assets/nexa/xl6/colors/DUAL_OPPULENT_RED.webp'),
  },
  {
    id: 3,
    img: require('../../../assets/nexa/xl6/colors/DUAL_BRAVE_KHAKI.webp'),
  },
  {
    id: 4,
    img: require('../../../assets/nexa/xl6/colors/Metallic-Magma-Grey.webp'),
  },
  {
    id: 5,
    img: require('../../../assets/nexa/xl6/colors/Metallic-Premium-Silver.webp'),
  },
  {
    id: 6,
    img: require('../../../assets/nexa/xl6/colors/Pearl-Arctic-White.webp'),
  },
  {
    id: 7,
    img: require('../../../assets/nexa/xl6/colors/DUAL_OPPULENT_RED.webp'),
  },
  {
    id: 8,
    img: require('../../../assets/nexa/xl6/colors/DUAL_BRAVE_KHAKI.webp'),
  },
  {
    id: 9,
    img: require('../../../assets/nexa/xl6/colors/DUAL_SPLENDID_SILVER.webp'),
  },
];

const ciazVariants = [
  {
    id: 1,
    title: 'XL6 Zeta',
    transmission: 'manual',
    mileage: '22.0',
    price: '11,29',
  },
  {
    id: 2,
    title: 'XL6 Alpha',
    transmission: 'manual',
    mileage: '22.0',
    price: '12,29',
  },
  {
    id: 3,
    title: 'XL6 Alpha+',
    transmission: 'manual',
    mileage: '22.0',
    price: '12,89',
  },
  {
    id: 4,
    title: 'XL6 Alpha+ (D)',
    transmission: 'manual',
    mileage: '22.0',
    price: '13,05',
  },
  {
    id: 5,
    title: 'XL6 Zeta Automatic',
    transmission: 'manual',
    mileage: '31.6',
    price: '12,79',
  },
  {
    id: 6,
    title: 'XL6 Alpha Automatic',
    transmission: 'manual',
    mileage: '24.7',
    price: '13.79',
  },
  {
    id: 7,
    title: 'XL6 Alpha+ Automatic',
    transmission: 'manual',
    mileage: '24.7',
    price: '14.39',
  },
  {
    id: 8,
    title: 'XL6 Alpha+ (D) Automatic',
    transmission: 'manual',
    mileage: '24.7',
    price: '14.55',
  },
];

const Xl6Slidersdata = [
  {
    original: require('../../../assets/nexa/xl6/XL6_HomePage.webp'),
    thumbnail: require('../../../assets/nexa/xl6/XL6_HomePage.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Front_Grille_.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Front_Grille_.webp'),
  },

  {
    original: require('../../../assets/nexa/xl6/Alloy Wheels.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Alloy Wheels.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Fog_Lights.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Fog_Lights.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Spouiler.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Spouiler.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/UV Cut glass.webp'),
    thumbnail: require('../../../assets/nexa/xl6/UV Cut glass.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Sporty Black Interiors.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Sporty Black Interiors.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Interior Seats.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Interior Seats.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Dashboard.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Dashboard.webp'),
  },
  {
    original: require('../../../assets/nexa/xl6/Exterior376x227.webp'),
    thumbnail: require('../../../assets/nexa/xl6/Exterior376x227.webp'),
  },
];
function Xl6() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Nexa XL6 On Road Price in Uttar Pradesh | Maruti Suzuki XL6 Offers
        </title>
        <meta
          name='title'
          content='Nexa XL6 On Road Price in Uttar Pradesh | Maruti Suzuki XL6 Offers'
        />
        <meta
          name='description'
          content='Nexa XL6 on road price in Uttar Pradesh starts at ₹11.29 Lakh. Maruti Suzuki XL6 comes with BS6 petrol engine. Check out XL6 price, specification, new features. Call us to book a test drive for Maruti XL6.'
        />
      </Helmet>
      <div className='bg-black py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#FFFFFF] mx-5 lg:mx-0 bg-black'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Maruti XL6
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 11.29 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <Xl6Slider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0 '>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <Xl6Slider />
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
            src={require('../../../assets/brochures/xl6.jpg')}
            alt='Xl6 brochure'
          />
        </div>
      </div>
    </>
  );
}
const Xl6Slider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={Xl6Slidersdata}
    />
  );
};

const Details = () => {
  return (
    <div className=' bg-white  text-[#000] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Model:</p>
        <p className='text-sm font-normal text-[#000]'>XL6</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Engine:</p>
        <p className='text-sm font-normal text-[#000]'>1462 cc</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Power:</p>
        <p className='text-sm font-normal text-[#000]'>75.8 @ 6000</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Max Torque:</p>
        <p className='text-sm font-normal text-[#000]'>136.8 Nm @ 4400 RPM</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Tranmission:</p>
        <p className='text-sm font-normal text-[#000]'>5 MT / 6 AGS</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-[#000]'>45 L</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Airbags:</p>
        <p className='text-sm font-normal text-[#000]'>4</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Seating:</p>
        <p className='text-sm font-normal text-[#000]'>6 Persons</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#000]'>Mileage:</p>
        <p className='text-sm font-normal text-[#000]'>
          {' '}
          20.97 (MT), 20.27 (AT)
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
            <option value='XL6 ZETA'>XL6 ZETA</option>
            <option value='XL6 ALPHA'>XL6 ALPHA</option>
            <option value='XL6 ZETA Automatic'>XL6 ZETA Automatic</option>
            <option value='XL6 Alpha+'>XL6 Alpha+</option>
            <option value='XL6 Alpha Automatic'>XL6 Alpha Automatic</option>
            <option value='XL6 Alpha+ Automatic'>XL6 Alpha+ Automatic</option>
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
    <div className='container mx-auto bg-gray-300 rounded py-8'>
      <div className='flex justify-end pr-6'>
        <a
          href={require('../../../assets/brochures/nexa/Product-brochures/THE ALL-NEW XL6 Brochure.pdf')}
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
      {xl6Colors.map((item) => (
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
              ? 'h-5 rounded-full w-5 bg-[#183f66] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#183f66]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#ae314e] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#ae314e]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#4f3f23] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#4f3f23]'
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
              ? 'h-5 rounded-full w-5 bg-[#afb3b8] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#afb3b8]'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 bg-[#eeeff0] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#eeeff0]'
          }
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')] animate-bounce"
              : "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/opulent-red-with-midnight-black-roof.png')]"
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')] animate-bounce"
              : "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/brave-khak-with-midnight-black-roof.png')]"
          }
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')] animate-bounce"
              : "h-5 rounded-full w-5 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/colors/tabs_colors/splendid-silver-with-midnight-black-roof.png')]"
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
        {ciazVariants?.map((item) => (
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
export default Xl6;
