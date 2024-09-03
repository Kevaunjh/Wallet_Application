import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banks from './../images/bank-building.png';
import debitcard from './../images/credit-card.png';
import cardDetails from './../BankingData'; 
import moneyLogo from './../images/money.png';
import bankLogo from './../images/bank-building.png';
import accountLogo from './../images/user.png';


function Loadfrom() {
  const [selectedAmount, setSelectedAmount] = useState(0); 
  const [customAmount, setCustomAmount] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(''); 
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleSaveCustomAmount = () => {
    setSelectedAmount(customAmount);
    setIsModalOpen(false);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleBankClick = (index) => {
    setSelectedBank(index);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const isProceedEnabled = selectedBank !== null && selectedCard !== null;

  const cardContainers = Object.values(cardDetails).map((card, index) => {
    const cardImage = card.creditCardImage || '';

    return (
      <div
        className={`rounded-lg mb-4 w-full text-black flex flex-col items-center relative cursor-pointer ${
          selectedCard === index ? 'border-4 border-[#467a4d]' : ''
        }`}
        key={index}
        onClick={() => handleCardClick(index)}
      >
        {/* Bank Card Image */}
        <div className='flex justify-center items-center w-auto max-w-96 xl:max-w-xl'>
          <img
            src={cardImage}
            alt={`Credit Card ${index + 1}`}
            className='w-full h-auto p-2 rounded-2xl'
          />
        </div>
      </div>
    );
  });

  const bankContainers = Object.values(cardDetails).map((card, index) => {
    return (
      <div
        className={`bg-[#FFF3E6] p-4 rounded-lg shadow-md mb-4 w-full text-black border-2 flex flex-col relative h-48 items-center justify-center max-w-96 xl:max-w-xl mx-auto cursor-pointer ${
          selectedBank === index ? 'border-4 border-[#467a4d]' : 'border-[#467a4d]'
        }`} 
        key={index}
        onClick={() => handleBankClick(index)}
      >
        {/* Card Info Container */}
        <div className='relative w-full p-2'>
          <div className='flex items-center mb-2'>
            <img src={moneyLogo} alt="Money Logo" className='w-6 h-6 mr-2' />
            <p className='text-2xl font-bold tracking-wider'>{card.total}</p>
          </div>
          <div className='flex items-center mb-2'>
            <img src={bankLogo} alt="Bank Logo" className='w-6 h-6 mr-2' />
            <p className='text-md'>{card.bankName}</p>
          </div>
          <div className='flex items-center'>
            <img src={accountLogo} alt="Account Logo" className='w-6 h-6 mr-2' />
            <p className='text-md'>{card.overallAccountNumber}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Profile bg-white min-h-screen flex flex-col items-center relative">
      {/* Combined Container for Small Screens */}
      <div className="w-full bg-[#faf7f7] p-6 flex flex-col items-center relative min-h-screen h-auto">
        {/* Back Button for Smaller Screens */}
        <Link to="/Loadmoney" className="absolute top-8 left-8 rounded-full p-2 bg-[#467a4d] text-white">
          &larr; Back
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center mt-20 mb-8">Load Money</h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mt-2 mb-12">
          You can use SeeTek bank or Debit cards to load your wallet
        </p>

        {/* Amount Information */}
        <div className="text-center mb-6 2xl:w-8/12 mt-10 max-w-lg">
          <div className="text-2xl md:text-3xl font-bold mb-4 text-black">
            ${selectedAmount || customAmount}
          </div>
          <hr className="mb-6 border-gray-400" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[5, 10, 15].map((amount) => (
              <button
                key={amount}
                className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
                  selectedAmount === amount ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
                }`}
                onClick={() => handleAmountClick(amount)}
              >
                ${amount}
              </button>
            ))}
            <button
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
                customAmount !== '' || ![5, 10, 15].includes(selectedAmount) ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
              }`}
              onClick={() => setIsModalOpen(true)}
            >
              Custom
            </button>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-center mt-8">
          {selectedTab === 'Container 1' ? 'Load Via' : 'Load To'}
        </h2>

        <div className="flex gap-4 mt-6 max-w-screen-lg w-full px-4">
          <div
            className={`flex-1 h-44 md:h-56 lg:h-64 bg-white p-4 rounded-lg text-center cursor-pointer flex items-center justify-center shadow-lg ${
              selectedTab === 'Container 1' ? 'border-2 border-[#467a4d]' : ''
            }`}
            onClick={() => handleTabClick('Container 1')}
          >
            <img
              src={banks}
              alt="Icon for Container 1"
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
            />
          </div>
          <div
            className={`flex-1 h-44 md:h-56 lg:h-64 bg-white p-4 rounded-lg text-center cursor-pointer flex items-center justify-center shadow-lg ${
              selectedTab === 'Container 2' ? 'border-2 border-[#467a4d]' : ''
            }`}
            onClick={() => handleTabClick('Container 2')}
          >
            <img
              src={debitcard}
              alt="Icon for Container 2"
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
            />
          </div>
        </div>

        {selectedTab && (
          <div className="mt-6 p-4 w-full 2xl:w-8/12 text-center">
            {selectedTab === 'Container 1' ? (
              <>
                <p className='mb-4 text-xl font-semibold'>From Account</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:mx-auto gap-2 ">
                  {bankContainers}
                </div>
                <div className='flex justify-center mt-4'>
                  <Link to="/AccountInfo/AddCard">
                    <button className='bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm mb-12'>
                      + Add Bank
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className='mb-4 text-xl font-semibold'>To Debit Card</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cardContainers}
                </div>
                <div className='flex justify-center mt-4'>
                  <Link to="/AccountInfo/AddCard">
                    <button className='bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm mb-12'>
                      + Add Card
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}

        <Link
          to="/Loadcallback"
          className={`px-8 py-4 rounded-full text-white mt-6 mb-8 ${
            isProceedEnabled ? 'bg-[#467a4d] hover:bg-[#356039] cursor-pointer' : 'bg-gray-500 cursor-not-allowed'
          }`}
          style={{ pointerEvents: isProceedEnabled ? 'auto' : 'none' }}
        >
          Proceed
        </Link>
      </div>

      {/* Custom Amount Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter Custom Amount</h2>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                className="bg-[#467a4d] text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleSaveCustomAmount}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loadfrom;
