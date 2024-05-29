import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const Services: React.FC = () => {
  const servicesData = [
    { id: 1, name: 'Event Videography', description: 'A $50 deposit is required to lock in the shoot date. You will receive full video coverage. Footage will be sent out once payment is complete.', price1: 75 + '/hr', price2: 400 + '/day' },
    { id: 2, name: 'Event Photography', description: 'A $50 deposit is required to lock in the shoot date. You will receive full photo coverage. Footage will be sent out once payment is complete.', price1: 75 + '/hr', price2: 400 + '/day' },
    { id: 3, name: 'Full Event Coverage', description: 'A $50 deposit is required to lock in the shoot date. You will receive full video and photo coverage. Footage will be sent out once payment is complete.', price1: 75 + '/hr', price2: 400 + '/day' },
    { id: 4, name: 'Video Editing', price1: 75 + '/min', price2: 400 + '/min', description: 'Recaps will be returned within one (1) week of the shoot or receiving footage. Music videos will be returned within two (2) weeks of the shoot or upon receiving footage. Fifteen (15) second preview videos will be shared before payment. Once payment is completed, revisions can be made.' },
    { id: 5, name: 'Photo Editing', price1: 50, price2: 25, description: 'Edits will be returned within 1 week of the shoot or the time the photos are received. Three (3) preview images will be shared before payment. Once payment is complete, revisions can be made.' },
    // Add more service objects as needed
  ];

  const videosData = [
    { id: 1, name: 'The Sauce', tier: 'Bronze', timeline: 'After Day Of Shoot: 2nd Week - 1st Edit;3rd week - Final Draft; 4th Week - Official MV & Promo', price: 500, priceBreakdown: 'A $100 deposit is required to lock in the shoot date. A $200 payment is due on the day of the shoot. The remaining $200 payment is due before the final edit will be returned.', description: 'A $50 deposit is required to lock in the shoot date. You will receive full photo coverage. Footage will be sent out once payment is complete.', bgColorClass: 'bg-amber-800' },
    { id: 2, name: 'Secret Sauce', tier: 'Silver', timeline: 'After Day Of Shoot: 1st Week - 1st Edit; 2nd week - Final Draft; 3rd Week - Official MV & Promo', price: 750, priceBreakdown: 'A $150 deposit is required to lock in the shoot date. A $300 payment is due on the day of the shoot. The remaining $300 payment is due before the final edit will be returned.', description: 'A $50 deposit is required to lock in the shoot date. You will receive full photo coverage. Footage will be sent out once payment is complete.', bgColorClass: 'bg-stone-300' },
    { id: 3, name: 'Extra Secret Sauce', tier: 'Gold', timeline: 'After Day Of Shoot: 1st Week - 1st Edit/Final Draft; 2nd Week - Official MV & Promo', price: 1000, priceBreakdown: 'A $200 deposit is required to lock in the shoot date. A $400 payment is due on the day of the shoot. The remaining $400 payment is due before the final edit will be returned.', description: 'A $50 deposit is required to lock in the shoot date. You will receive full photo coverage. Footage will be sent out once payment is complete.', bgColorClass: 'bg-yellow-500' },
    { id: 4, name: 'Pre-Production Package', tier: 'Add-On', timeline: 'Two Weeks Prior To Shoot: 1st Week - Treatment, StoryBoard/Shot List;  2nd week - Pre-production meeting(s), Acquire Equipment; 4th Week - Official MV & Promo', price: 250, priceBreakdown: 'Full payment is due at the time of initial deposit.', description: 'A $50 deposit is required to lock in the shoot date. You will receive full photo coverage. Footage will be sent out once payment is complete.', bgColorClass: 'bg-blue-300' },
    // Add more service objects as needed
  ];

  return (
    <div className="font-thunderous-one">
      <Head>
        <title>Services - Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header />
      <div className="container mx-auto px-4 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='mb-8'>
            <h2 className="text-4xl font-bold mb-2 text-black">All Services</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {servicesData.map((service) => (
                <div key={service.id} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
                  <div className="text-2xl font-bold mb-2 text-black">{service.name}</div>
                  <div className="text-red-600 mb-2">
                    <span className="font-semibold">Price:</span> {service.price1}, {service.price2}
                  </div>
                  <div className="text-black">{service.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl italic font-bold mb-2 text-black">Music Videos</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {videosData.map((video) => (
                <div key={video.id} className={`px-6 py-4 border-b border-gray-200 last:border-b-0 ${video.bgColorClass}`}>
                  <div className="text-2xl font-bold italic mb-2 text-black">{video.name}</div>
                  <div className="mb-2">
                    <span className="font-bold">Tier:</span> {video.tier}
                  </div>
                  <div className="text-red-600 mb-2">
                    <span className="font-bold">Price:</span> ${video.price}
                  </div>
                  <div className="text-black mb-2">
                    <span className="font-bold">Timeline:</span> {video.timeline}
                  </div>
                  <div className="text-red-600 mb-2">
                    <span className="font-bold">Price Breakdown:</span> {video.priceBreakdown}
                  </div>
                  <div className="text-black">{video.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
