import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function CarEnquiry() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
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

        phone: phone,
        model: model,
        timestamp: dateTime,
      });
      toast.success('Form submitted successfully');
      setLoader(false);
      setName('');

      setPhone('');
      setModel('');
      navigate('/thankyou');
    } catch (error) {
      setLoader(false);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className='bg-gray-800 py-10 px-5'>
      <div className='container mx-auto'>
        <h3 className='text-xl font-semibold text-center mb-5 text-white'>
          Car Enquiry
        </h3>

        <form onSubmit={handleSubmit}>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
            <input
              className='border h-10 outline-none px-3 rounded-full w-full'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='border h-10 outline-none px-3 rounded-full w-full focus:outline-none sm:text-sm'
              placeholder='Mobile'
              required
              minLength='10'
              maxLength='10'
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/[^1-9]/g, '') &&
                    e.target.value.replace(/ /g, '')
                )
              }
            />

            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className='border h-10 outline-none px-3 rounded-full w-full focus:outline-none sm:text-sm'
            >
              <option>Select Model</option>
              <optgroup label='Arena'>
                <option value='Maruti Alto K10'>Maruti Alto K10</option>
                <option value='Maruti New Brezza'>Maruti Brezza</option>
                <option value='Maruti Alto 800'>Maruti Alto</option>
                <option value='Maruti Wagon R'>Maruti Wagon R</option>
                <option value='Maruti Celerio'>Maruti New Celerio</option>
                <option value='Maruti Swift'>Maruti Swift</option>
                <option value='Maruti Dzire'>Maruti Dzire</option>
                <option value='Maruti S-Presso'>Maruti S-Presso</option>
                <option value='Maruti Ertiga'>Maruti Ertiga</option>

                <option value='Maruti Eeco'>Maruti Eeco</option>
              </optgroup>

              <optgroup label='Nexa'>
                <option value='Maruti Grand Viatara'>Maruti Fronx</option>
                <option value='Maruti Grand Viatara'>Maruti Jimny</option>
                <option value='Maruti Grand Viatara'>
                  Maruti Grand Vitara
                </option>
                <option value='Maruti Ciaz'>Maruti Ciaz</option>
                <option value='Maruti XL6'>Maruti XL6</option>
                {/* <option value="Maruti s-Cross">
                                    Maruti s-Cross
                                  </option> */}
                <option value='Maruti Baleno'>Maruti Baleno</option>
                <option value='Maruti Ignis'>Maruti Ignis</option>
              </optgroup>

              <optgroup label='CNG'>
                <option value='Maruti Alto CNG'>Maruti Alto CNG</option>
                <option value='Maruti Wagon R CNG'>Maruti Wagon R CNG</option>
                <option value='Maruti Celerio CNG'>
                  Maruti New Celerio CNG
                </option>
                <option value='Maruti Dzire CNG'>Maruti Dzire CNG</option>
                <option value='Maruti S-Presso CNG'>Maruti S-Presso CNG</option>
                <option value='Maruti Ertiga CNG'>Maruti Ertiga CNG</option>
                <option value='Maruti Eeco CNG'>Maruti Eeco CNG</option>
              </optgroup>

              <optgroup label='Passenger Carrier'>
                <option value='Maruti Tour H1'>Maruti Tour H1</option>
                <option value='Maruti Tour H3'>Maruti Tour H3</option>
                <option value='Maruti Tour S'>Maruti Tour S</option>
                <option value='Maruti Tour V'>Maruti Tour V</option>
                <option value='Maruti Tour M'>Maruti Tour M</option>
              </optgroup>
              <optgroup label='Goods Carrier'>
                <option value='Super Carry'>Super Carry</option>
                <option value='Eeco Cargo'>Eeco Cargo</option>
              </optgroup>
            </select>
            <button
              className='bg-red-500 hover:bg-red-400 justify-center text-white px-5 py-1.5 font-bold flex mx-auto mt-1 rounded-full w-64'
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
  );
}

export default CarEnquiry;
