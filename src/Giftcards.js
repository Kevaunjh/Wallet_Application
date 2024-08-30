import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import giftcardsData from './GiftcardsData';
import points from './images/Points.png';

const pointsnumber = 1652;

function Giftcards() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedBarcode, setSelectedBarcode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const openModal = (barcodeImage) => {
    setSelectedBarcode(barcodeImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBarcode(null);
  };

  const filteredGiftcards = Object.values(giftcardsData).filter(giftcard => 
    selectedFilter === 'All' || giftcard.category.includes(selectedFilter)
  );

  const giftcardContainers = filteredGiftcards.map((giftcard, index) => {
    const giftcardImage = giftcard.image || '';
    const backgroundColor = giftcard.backgroundColor || '#FFF';

    return (
      <button 
        onClick={() => openModal(giftcard.barcodeImage)}
        key={index}
        className="sm:w-64 sm:h-40 h-56 w-96 rounded-3xl shadow-md mb-4 text-black border-[#0A9971] border-2 relative overflow-hidden"
        style={{ backgroundImage: `url(${giftcardImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor }}
      >
        <div className='absolute inset-0 flex items-center justify-center text-white'>
          <p className='text-xl font-bold'>{giftcard.giftcardName}</p>
          <p className='text-2xl font-bold'>{giftcard.giftcardAmount}</p>
        </div>
      </button>
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Top - Dark Green */}
        <div className="w-full bg-[#0A9971] flex flex-col p-4 z-1 relative">
          {/* Back Button */}
          <Link to="/Points">
            <button className="absolute top-8 left-8 bg-white text-[#0A9971] p-2 rounded-full">
              &larr; Back
            </button>
          </Link>
          {/* Title */}
          <div className="flex flex-col mt-16 pl-8 mb-12 2xl:w-8/12 items-center 2xl:mx-auto ">
            <h2 className="text-xl font-medium text-white mb-2 text-left 2xl:w-8/12">Welcome to</h2>
            <h1 className="text-4xl font-bold text-white mb-2 text-left 2xl:w-8/12">SeeTek Gift Cards</h1>
          </div>
        </div>

        {/* Bottom - White */}
        <div className="w-full flex-grow bg-[#F9FFFD] 2xl:rounded-b-3xl flex flex-col items-center mx-auto p-4 space-y-8 relative h-full">
          {/* Life Time Points Container */}
          <div className="relative z-10 bg-white w-5/6 lg:w-2/3 xl:w-7/12 2xl:w-2/5 rounded-3xl p-4 sm:p-6 border-2 border-gray-300 mx-3 h-auto min-h-[8rem] sm:min-h-[8rem] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-4 mt-2 sm:mt-4">
              <div className="flex items-center">
                <img src={points} alt="Points" className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
                <p className="text-base sm:text-lg font-medium text-gray-600">Lifetime Points:</p>
              </div>
              <p className="text-base sm:text-lg font-medium text-black ml-4 text-center">{pointsnumber} Pts</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full mt-2 sm:mt-4">
              <div className="bg-green-500 text-[0.5rem] sm:text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-2/3">
                &nbsp;
              </div>
            </div>
          </div>

          {/* Gift Cards Filters - Centered and Horizontal Scrolling */}
          <div className="w-full flex justify-center mb-4 px-4 custom-scrollbar">
            <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
              {['All', 'PrePaid', 'Education', 'Games', 'Shopping', 'Restaurant'].map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-2 rounded-full border-2 ${
                    selectedFilter === category
                      ? 'bg-[#0A9971] text-white border-[#0A9971]'
                      : 'bg-white text-[#0A9971] border-[#0A9971]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gift Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:mx-auto custom-scrollbar'>
            {giftcardContainers}
          </div>

          {/* Add Gift Card Button */}
          <div className='flex justify-center mt-4'>
            <Link to="../QuickServices/GiftService">
              <button className='bg-white text-[#0A9971] border-[#0A9971] border-2 px-4 py-2 rounded-md text-sm mb-6'>
                + Add Gift Card
              </button>
            </Link>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg relative">
                  <button 
                    onClick={closeModal} 
                    className="absolute top-2 right-2 text-gray-500 hover:text-black">
                    &#10005;
                  </button>
                  <img src={selectedBarcode} alt="Coupon Barcode" className="w-full h-auto" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Giftcards;
