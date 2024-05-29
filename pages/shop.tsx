import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function Shop() {
  return (
    <div>
      <Head>
        <title>Shop - Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <div className="bg-black justify-center mx-auto">
        <img
          src="./shopbgm.svg"
          alt="Desktop Image"
          className="w-5/6 block lg:hidden mx-auto"
        />
        <img
          src="./shopbgd.svg"
          alt="Mobile Image"
          className="w-full hidden lg:block mx-auto"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Shop;
