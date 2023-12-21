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

const supercarrySlidersdata = [
  {
    original: require('../../../assets/commercial/supercarry/super-carry.jpg'),
    thumbnail: require('../../../assets/commercial/supercarry/super-carry.jpg'),
  },

  {
    original: require('../../../assets/commercial/supercarry/super-carry2.jpg'),
    thumbnail: require('../../../assets/commercial/supercarry/super-carry2.jpg'),
  },

  {
    original: require('../../../assets/commercial/supercarry/super-carry3.jpg'),
    thumbnail: require('../../../assets/commercial/supercarry/super-carry3.jpg'),
  },
];
const supercarryVariants = [
  {
    id: 1,
    title: 'Spuer Carry Petrol',
    transmission: '5 MT',
    KeySpecifications: 'Bumper corner Protection',
    price: 4.88,
  },
  {
    id: 2,
    title: 'Spuer Carry CNG',
    transmission: '5  MT',
    KeySpecifications:
      'The Super Carry provides you with a powerful engine for a stronger stride ahead, packed with 4 cylinders & an all-new 1.2L Petrol & CNG engine variant!',
    price: 5.93,
  },
  {
    id: 3,
    title: 'Spuer Carry Petrol CAB CHASSIS',
    transmission: '5 MT',
    KeySpecifications:
      'Introducing, the new Super Carry Cab-Chassis. This new variant will give you unmatched freedom of customizing this powerful mini truck, basis your diverse business needs.',
    price: 4.73,
  },
];
function SuperCarry() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Super Carry Price in Uttar Pradesh | Petrol, CNG Mini
          Pickup Truck
        </title>
        <meta
          name='title'
          content=' Maruti Suzuki Super Carry Price in Uttar Pradesh | Petrol, CNG Mini
          Pickup Truck'
        />
        <meta
          name='description'
          content='Maruti Suzuki Super Carry on road price in Uttar Pradesh. Maruti Super Carry is a mini truck available in Petrol, CNG variants. It offers attractive mileage, good cabin size, and better load capacity. Visit Smartwheels Commercial Showrom to know more about Super Carry.'
        />
      </Helmet>
      <div className='bg-gray-50 py-8'>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#1a3760] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              Super Carry
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 4.88 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-5'>
            <SuperCarrySlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-4 gap-9 mt-3 mx-5 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <SuperCarrySlider />
            </div>
            <Details />
            <CarEnquiry />
          </div>
        </div>

        <div className='container mx-auto py-5'>
          <div className='overflow-x-scroll'>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
const SuperCarrySlider = () => {
  return (
    <>
      <ImageGallery
        lazyLoad={true}
        autoPlay={true}
        loop={true}
        thumbnailPosition='bottom'
        showPlayButton={false}
        items={supercarrySlidersdata}
      />
    </>
  );
};

const Details = () => {
  return (
    <div className=' bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide'>Details</p>

      <div className='flex items-center justify-between mt-8 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Model:</p>
        <p className='text-sm font-normal text-gray-700'>Super Carry</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine:</p>
        <p className='text-sm font-normal text-gray-700'>1196 CC</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Power:</p>
        <p className='text-sm font-normal text-gray-700'>54 kW @ 6000 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Max Torque:</p>
        <p className='text-sm font-normal text-gray-700'>98 NM @ 3000 rpm</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Tranmission:</p>
        <p className='text-sm font-normal text-gray-700'>5 SPEED MT</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Fuel Tank:</p>
        <p className='text-sm font-normal text-gray-700'>30 L (Petrol)</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Engine Type:</p>
        <p className='text-sm font-normal text-gray-700'>
          Multi Point Fuel Injection G12B BS-VI
        </p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Seating:</p>
        <p className='text-sm font-normal text-gray-700'>Driver + 1</p>
      </div>

      <div className='flex items-center justify-between mt-5 border-b pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Mileage:</p>
        <p className='text-sm font-normal text-gray-700'>
          {' '}
          18.08* km/l & 23.24* km/kg
        </p>
      </div>

      <div className='flex items-center justify-between mt-5 pb-2'>
        <p className='font-semibold text-sm text-[#1a3760]'>Kerb Weight:</p>
        <p className='text-sm font-normal text-gray-700'>757 KG</p>
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
            <option value='Super Carry'>Super Carry</option>
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
const Table = () => {
  return (
    <table className='table-auto border-collapse border border-slate-400 rounded  uppercase w-full container mx-auto text-center text-sm'>
      <thead className='bg-red-600 text-white'>
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
            Key Specifications
          </th>
          <th className='border border-slate-300 font-normal px-3 py-1.5'>
            Ex-Showroom
          </th>
        </tr>
      </thead>
      <tbody>
        {supercarryVariants?.map((item) => (
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
            <td className=' border text-center border-slate-300 px-3 py-1.5'>
              {item.KeySpecifications}
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
export default SuperCarry;
