import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 bg-cover bg-hero-section bg-no-repeat h-full w-full">
      <img src="/murkloader.png" alt="Logo" className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" />
      <div className="text-gray-700 text-2xl font-bold mt-2">         
        <img
            className="w-full mx-auto -m-44"
            src="/loading.png"
            alt="Book MurkTSG"
        />
      </div>

      <Head>
        <title>Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>
    </div>
  );
};

const Enter: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/home');
    }, 1000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
          <img
            src="/logoW.png"
            alt="Logo"
            className="2xl:w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-6 bounce-enter-element"
          />
          <button
            className="bounce-enter-element px-8 py-4 text-white rounded-full font-bold text-2xl hover:bg-red-700 hover:text-black transition duration-300 shadow-bounce-enter-button"
            onClick={handleEnter}
          >
            ENTER
          </button>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Enter />
    </div>
  );
};

export default Home;


