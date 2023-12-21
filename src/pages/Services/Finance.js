import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import banner from '../../assets/smartwheels-finance.webp';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { Helmet } from 'react-helmet';
function Finance() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  const [loader, setLoader] = useState(false);

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
      navigate('/thankyou');
    } catch (error) {
      toast.error('Something went wrong!');
    }
    setLoader(false);
  }

  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');

  function calculateEMI() {
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    //calculate the monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = parseFloat(monthly).toFixed(2);

    //calculate interest
    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);
    const totalPayment = (monthly * calculatePayments).toFixed(2);

    document.getElementById('month').innerHTML = parseFloat(monthlyPayment);
    document.getElementById('interest').innerHTML = totalInterest;
    document.getElementById('total').innerHTML = totalPayment;
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Finance For Arena and Nexa Cars | Lowest Down Payment
        </title>
        <meta
          name='title'
          content='Maruti Finance For Arena and Nexa Cars | Lowest Down Payment'
        />
        <meta
          name='description'
          content='Maruti finance for Arena and Nexa cars. Choose Smartwheels finance options with best rates of interest and low EMI schemes designed to suit your convenience and other requirements.'
        />
      </Helmet>
      <img src={banner} className='max-w-full w-full' alt='finance banner' />
      <hr></hr>
      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-2 gap-4 px-5'>
          {/* new grid column opens */}
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <p className='uppercase font-bold text-md'>my car details :</p>
              <div className='grid md:grid-cols-2 gap-3'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Name
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  value={phone}
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

              <p className='text-gray-700'>
                <span className='text-black font-bold'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call/Message from Smartwheels Motor Pvt.
                Ltd or its Representatives on my ‘Mobile’.
              </p>
              <div className='flex items-start'>
                <input
                  id='disclaimer'
                  name='disclaimer'
                  type='checkbox'
                  className='h-4 w-4 rounded'
                  required
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
                className='bg-black text-white rounded py-2.5 px-5'
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
                  'Get Your Loan Now'
                )}
              </button>
            </div>
          </form>

          {/* new grid column opens */}
          <div>
            <p className='text-2xl font-bold mb-7'>EMI Calculator</p>
            <div className='flex items-center justify-between mt-2'>
              <p>Curreny :</p>
              <select
                disabled
                name='currency'
                className='block py-2 w-full max-w-[75%] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option>Select Curreny</option>
                <option selected>₹ INR</option>
                <option>$ USD</option>
              </select>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Loan Amount :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='100000'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className='flex items-center justify-between mt-2'>
              <p>Interest Rate :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='12%'
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Years :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='5 years'
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className='flex justify-center mt-3'>
              <button
                className='bg-black text-white rounded py-2.5 px-5'
                type='submit'
                onClick={calculateEMI}
              >
                Submit
              </button>
            </div>

            <table class='table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm'>
              <thead class='bg-gray-800 text-white'>
                <tr>
                  <th class='border border-slate-300 font-normal px-3 py-1.5'>
                    EMI per month
                  </th>
                  <th class='border border-slate-300 font-normal px-3 py-1.5'>
                    Interest
                  </th>

                  <th class='border border-slate-300 font-normal px-3 py-1.5'>
                    Payment (Principal + Interest)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class='border border-slate-300 px-3 py-1.5'
                    id='month'
                  ></td>
                  <td
                    class='border border-slate-300 px-3 py-1.5'
                    id='interest'
                  ></td>
                  <td
                    class='border border-slate-300 px-3 py-1.5'
                    id='total'
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
