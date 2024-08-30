import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';
import moneyLogo from './../images/money.png';
import bankLogo from './../images/bank-building.png';
import accountLogo from './../images/user.png';
import cardDetails from './../BankingData';

const points = 1652;

function BankAccounts() {
  const cardContainers = Object.values(cardDetails).map((card, index) => {
    const cardImage = card.creditCardImage || '';

    return (
      <div
        className='bg-[#FFF3E6] p-4 rounded-lg shadow-md mb-4 w-full text-black border-[#467a4d] border-2 flex flex-col items-center relative'
        key={index}
      >
        {/* Card Info Container */}
        <div className='relative w-full p-2'>
          <div className='absolute top-4 right-4 bg-[#467a4d] rounded-lg px-2 py-1'>
            <p className='text-md font-semibold text-white'>Acc #{index + 1}</p>
          </div>

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

        {/* Bank Card Image */}
        <div className='flex justify-center items-center w-full'>
          <img
            src={cardImage}
            alt={`Credit Card ${index + 1}`}
            className='w-64 h-auto p-2 rounded-2xl'
          />
        </div>
      </div>
    );
  });

  return (
    <div className="BankAccounts min-h-screen flex flex-col items-center justify-center  overflow-auto relative bg-transparent w-screen">
 
      {/* Mobile Layout */}
      <div className="w-full  bg-white p-6  h-screen overflow-auto flex flex-col z-20 ">
      <div className=" flex items-center mb-8 ">
        <Link to="/MyAccount" className="mr-4 bg-[#467a4d] text-white rounded-full p-2 mt-2 ml-2">
          &larr; Back
        </Link>
      </div>
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6 ">
          <img
            src={profileplaceholder}
            alt="Profile Placeholder"
            className=" w-24 h-24 rounded-full mb-2 border-black border-2"
          />
          <div className="text-center mb-2">
            <h2 className="text-lg font-bold">John Doe</h2>
          </div>
          <div className="bg-[#467a4d] p-1 rounded-lg flex items-center h-8">
            <p className="text-md text-white mr-2">★ Points:</p>
            <p className="text-lg font-semibold text-white">{points}</p>
          </div>
        </div>

        {/* Bank Accounts */}
        <h2 className='text-2xl font-bold mb-8 text-center mt-4'>My Cards</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:w-8/12 2xl:mx-auto'>
          {cardContainers}
        </div>
        <div className='flex justify-center mt-4'>
          <Link to="/AccountInfo/AddCard">
            <button className='bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm mb-6'>
              + Add Bank Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BankAccounts;
