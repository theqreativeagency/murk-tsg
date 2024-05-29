import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import HomeFooter from '../components/HomeFooter';

const Home: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col min-h-screen">
      <Head>
        <title>Home - Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="relative flex-grow pb-0 px-6">
        <div className="bg-hero-section bg-no-repeat h-full bg-center bg-cover bg-black rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute opacity-90 top-0 left-0 w-full h-full object-cover video-bg"
          >
            <source src="./keipromo2.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 2xl:gap-x-96 2xl:gap-y-20 2xl:mt-2 text-center text-white">
              <div className="flex items-center justify-center">
                <a className='block max-w-full max-h-fit hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105' href='/shop'>
                  <img src='./1.png' className="h-96" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a className='block max-w-full max-h-fit hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105' href='/services'>
                  <img src='./4.png' className="h-96" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a className='block max-w-full max-h-fit hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105' href='/videos'>
                  <img src='./5.png' className="h-96" />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a className='block max-w-full max-h-fit hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105' href='/bookme'>
                  <img src='./6.png' className="h-96" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;


