import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Header from '../components/header/Header';
import InputField from './EmailService/components/InputField';
import SelectField from './EmailService/components/SelectField';
import TextareaField from './EmailService/components/TextAreaField';
import { CgSpinner } from 'react-icons/cg';
import { db } from '../firebase';
import Brown from '../assets/banners/smartwheels-service-banner.webp';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const BookAService = () => {
  // const [name, setName] = useState();
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  // const [comments, setComments] = useState('');
  // const [pickup, setPickup] = useState();
  // const [loader, setLoader] = useState('');

  // const pattern = /^[6-9][0-9]{6,9}$/;
  // if (phone !== '' && phone.length === 10) {
  //   if (!pattern.test(phone)) {
  //     toast.error('Enter valid phone number', {
  //       theme: 'colored',
  //     });
  //   }
  // }

  // let navigate = useNavigate();

  // const dataCollectionRef = collection(db, 'carenquiries');

  // const today = new Date();
  // var date =
  //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  // var time =
  //   today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  // var dateTime = date + ' ' + time;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoader(true);
  //   try {
  //     await addDoc(dataCollectionRef, {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       pickup: pickup,
  //       model: model,
  //       comments: comments,
  //       timestamp: dateTime,
  //     });
  //     toast.success('Form submitted successfully');
  //     setLoader(false);
  //     setName('');
  //     setEmail('');
  //     setPhone('');
  //     setPickup('');
  //     setModel('');
  //     setComments('');
  //     navigate('/thankyou');
  //   } catch (error) {
  //     setLoader(false);
  //     toast.error('Something went wrong!');
  //   }
  // };

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    model: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('service_j0rly7w', 'template_dn3hfbp', values, 'gcoNowiecV9i2TAuy')
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            fullName: '',
            email: '',
            phone: '',
            model: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Service Center Near Me | Authorized Maruti Service
          Center in Uttar Pradesh
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Service Center Near Me | Authorized Maruti Service Center in Uttar Pradesh'
        />
        <meta
          name='description'
          content='Get in touch with Smartwheels to know more about location of Maruti Suzuki service center for any other queries in Uttar Pradesh Visit Now.'
        />
      </Helmet>
      <img src={Brown} className='w-full' alt='Service Banner' />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          Home / Book Online Maruti Suzuki Car Service
        </p>
      </div>

      <div className='container mx-auto py-16 px-5 lg:px-0'>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
          <h3 className='text-gray-700 mb-7 text-xl font-semibold'>
            Send us message
          </h3>
          <InputField
            value={values.fullName}
            handleChange={handleChange}
            label='Full Name'
            name='fullName'
            type='text'
            placeholder='John Doe'
          />
          <InputField
            value={values.phone}
            handleChange={handleChange}
            label='Phone'
            name='phone'
            type='phone'
            pattern='[6789][0-9]{9}'
            title='Please enter valid phone number'
          />
          <InputField
            value={values.email}
            handleChange={handleChange}
            label='E-Mail'
            name='email'
            type='email'
            placeholder='jphn@example.com'
          />
          <SelectField
            value={values.model}
            handleChange={handleChange}
            name='model'
            label='Choose Vehicle'
          />
          <TextareaField
            value={values.message}
            handleChange={handleChange}
            label='Your message here'
            name='message'
          />
          <button
            type='submit'
            className='mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none'
          >
            Send <ChevronRightIcon className='w-6 ml-2 float-right' />
          </button>
        </form>
      </div>
    </>
  );
};

const renderAlert = () => (
  <div className='px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center'>
    <p>your message submitted successfully</p>
  </div>
);

export default BookAService;
