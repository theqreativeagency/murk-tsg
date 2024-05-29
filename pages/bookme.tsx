import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';

function BookMe() {
  return (
    <div>
      <Head>
        <title>Book Me - Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>


      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default BookMe;

