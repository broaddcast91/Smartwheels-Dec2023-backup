import React from 'react';
import { Helmet } from 'react-helmet';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Header from '../components/header/Header';
import { faqData } from '../constants/faqData';

const FAQs = () => {
  return (
    <>
    <Header />

    <Helmet>
      <title>Maruti Suzuki Smartwheels FAQ's | Saboo Maruti</title>
      <meta name='title' content="Maruti Suzuki Smartwheels FAQ's | Smartwheels Gorakhpur" />
      <meta
        name='description'
        content='Check out the frequently asked questions for Maruti Suzuki Arena cars. Get on road price, Book a test drive, Offers on Maruti cars, Maruti car servicing, Maruti insurance, Maruti finance. Call us'
      />
      {/* <meta name='keywords' content='Maruti FAQ' />
      <meta name='author' content='Broaddcast' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.saboomaruti.in/faq' />
      <meta
        property='og:title'
        content="Maruti Suzuki FAQ's | Saboo Maruti"
      />
      <meta
        property='og:description'
        content='Check out the frequently asked questions for Maruti Suzuki Arena cars. Get on road price, Book a test drive, Offers on Maruti cars, Maruti car servicing, Maruti insurance, Maruti finance. Call us 98488 98488.'
      />
      <meta property='og:image' content='img/og-tags/FAQ.webp' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.saboomaruti.in/faq' />
      <meta
        property='twitter:title'
        content="Maruti Suzuki FAQ's | Saboo Maruti"
      />
      <meta
        property='twitter:description'
        content='Check out the frequently asked questions for Maruti Suzuki Arena cars. Get on road price, Book a test drive, Offers on Maruti cars, Maruti car servicing, Maruti insurance, Maruti finance. Call us 98488 98488.'
      />
      <meta property='twitter:image' content='img/og-tags/FAQ.webp' /> */}
    </Helmet>

    <img src={require('../assets/banners/smartwheels-faq-banner.webp')} alt='1' />

    <p className='lg:text-3xl mb-4 text-xl md:text-2xl text-center font-semibold text-red-500'>
      Frequently Asked Questions
    </p>
    <p className='text-center mx-auto mb-5 max-w-3xl px-5 md:px-0'>
    We at SmartWheels aim to give you the best car-buying and service experience possible at
Smartwheels Pvt Ltd, authorized Maruti Suzuki Dealership of Uttar Pradesh. That means
making sure you have the answers you need when you’re browsing our inventory of New Maruti
Suzuki Cars or need new Maruti Suzuki spare Parts for your vehicle. <br></br><br></br>If you have a question
that’s not answered here, give us a call at 7705809400 or get in touch online on our Website.
We’ll do our best to assist you.
    </p>

    <div className='mx-auto w-full max-w-6xl rounded-2xl bg-white p-2'>
      {faqData?.map((data) => (
        <Disclosure key={data.id}>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full mt-2 justify-between rounded-lg bg-blue-100 px-4 py-3 text-left text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span>{data.question}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                {data.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
    <br></br>
  </>
  );
}

export default FAQs