import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/header/Header';
import { db } from '../firebase';

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [loader, setLoader] = useState('');

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  let navigate = useNavigate();

  const dataCollectionRef = collection(db, 'popup');

  const today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = date + ' ' + time;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await addDoc(dataCollectionRef, {
        name: name,
        email: email,
        phone: phone,
        comments: comments,
        timestamp: dateTime,
      });
      toast.success('Form submitted successfully');
      setLoader(false);
      setName('');
      setEmail('');
      setPhone('');
      setComments('');
      navigate('/thankyou');
    } catch (error) {
      setLoader(false);
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <Header />
      <div className='bg-[#15151e] py-20'>
        <p className='text-center text-white uppercase text-3xl font-semibold'>
          Contact us
        </p>
      </div>

      <div className='grid grid-cols-2 container gap-7 mx-auto px-5 py-16 '>
        <img
          src='https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='h-[400px] w-full object-cover rounded'
          alt='contact page telephone booth photo'
        />
        <div className='m-auto'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-3'>
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
                    <small className='text-red-500'>
                      phone number is invalid
                    </small>
                  ) : (
                    ''
                  )}
                </div>
                <div className=''>
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
                <span className='text-black font-bold'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call/Message from Smartwheels Pvt. Ltd
                or its Representatives on my ‘Mobile’.
              </p>
              <div className='flex items-start'>
                <input
                  id='disclaimer'
                  name='disclaimer'
                  type='checkbox'
                  className='h-4 w-4 rounded'
                />
                <div className='ml-2 text-sm'>
                  <label
                    htmlFor='disclaimer'
                    className='font-medium text-gray-700'
                  >
                    Please agree with following Disclaimer
                  </label>
                </div>
              </div>
              <button
                className='text-white bg-black rounded py-2.5 px-10'
                type='submit'
                disabled={
                  pattern.test(phone) && phone.length === 10 ? false : true
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
