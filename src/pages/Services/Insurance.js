import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import banner from '../../assets/smartwheels-insurance.webp';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { Helmet } from 'react-helmet';

function Insurance() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [comments, setComments] = useState('Insurance');

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  const today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = date + ' ' + time;

  let navigate = useNavigate();
  const dataCollectionRef = collection(db, 'popup');
  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    try {
      await addDoc(dataCollectionRef, {
        name: name,
        email: email,
        phone: phone,
        timestamp: dateTime,
      });
      toast.success('Form submitted successfully');
      setName('');
      setEmail('');
      setPhone('');
      setComments('');
      navigate('/thankyou');
    } catch (error) {
      toast.error('Something went wrong!');
    }
    setLoader(false);
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Insurance For Arena and Nexa Cars | Smartwheels
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Insurance For Arena and Nexa Cars | Smartwheels'
        />
        <meta
          name='description'
          content='Maruti Suzuki Insurance for Arena and Nexa cars. Choose Smartwheels Insurance options with zero claim settlement options designed to suit your convenience and other requirements'
        />
      </Helmet>
      <img src={banner} className='max-w-full w-full' alt='inusrance banner' />

      <div className='container mx-auto py-16 px-5'>
        <p className='uppercase font-bold text-md mb-5'> contact details :</p>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='email'
                value={email}
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
                maxLength='10'
                minLength='10'
                value={phone}
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
            <div className='invisible'>
              <label className='block text-sm font-medium text-gray-700'>
                Comments
              </label>
              <textarea
                className='border h-10 outline-none p-2 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
          </div>
          <p className='text-gray-700'>
            <span className='text-black font-bold'>Disclaimer</span>: I agree
            that by clicking the ‘Submit’ button below, I am explicitly
            soliciting a call / Message from Smartwheels Motor Pvt. Ltd or its
            Representatives on my ‘Mobile’
          </p>
          <div className='flex items-start'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              required
              className='h-4 w-4 rounded'
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                Please agree with following Disclaimer
              </label>
            </div>
          </div>
          <button
            className='bg-black text-white rounded py-2.5 px-5'
            type='submit'
            disabled={pattern.test(phone) && phone.length === 10 ? false : true}
          >
            {loader ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                Loading
              </div>
            ) : (
              'Get Your Insurance Now'
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default Insurance;
