import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const Videos: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Videos - Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <main className="flex-grow">
        <VideoPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default Videos;

