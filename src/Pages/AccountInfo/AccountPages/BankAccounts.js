import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../../../images/logoplaceholder.png';
import moneyLogo from './../../../images/money.png';
import bankLogo from './../../../images/bank-building.png';
import accountLogo from './../../../images/user.png';
import cardDetails from '../../Datafiles/BankingData';

const points = 1652;

function BankAccounts() {
  const cardContainers = Object.values(cardDetails).map((card, index) => {
    const cardImage = card.creditCardImage || '';

    return (
      <div
        className='bg-[#FFF3E6] p-4 rounded-lg shadow-md mb-4 w-full text-black border-[#467a4d] border-2 flex flex-col items-center relative'
        key={index}
      >
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
    <div className="Profile bg-[#e9f7f2] min-h-screen flex flex-col items-center relative">
      <div className="w-full bg-[#e9f7f2] p-6  flex flex-col items-center  relative min-h-screen h-auto">
        <Link to="/MyAccount" className="absolute top-8 left-8 rounded-full  p-2  bg-[#467a4d] text-white">
          &larr; Back
        </Link>

       
        <div className="flex flex-row items-center justify-between rounded-3xl bg-white border-2 shadow-md 2xl:w-8/12 w-full p-8 gap-6 xl:gap-16 mt-16 py-4">
  <div className="flex items-center gap-6">
    <img 
      src={profileplaceholder} 
      alt="Profile Placeholder" 
      className="2xl:w-24 2xl:h-24 h-16 w-16 rounded-full shadow-md 2xl:border-2 2xl:border-black"
    />
    <div className="text-left">
      <h2 className="text-xl font-bold">John Doe</h2>
    </div>
  </div>
  <div className="bg-[#467a4d] p-1 rounded-lg flex items-center w-[7.6rem]">
    <Link className='flex items-center rounded-lg p-1' to="/Points">
      <p className="text-md font-semibold text-white mr-2">★ {points}</p>
      <p className="text-md text-white">Pts</p>
    </Link>
  </div>
</div>
        <div className="mt-8 flex-grow 2xl:w-8/12 mx-auto rounded-3xl bg-white border-2 justify-center shadow-md w-full p-8 gap-6 xl:gap-16 xl:justify-center xl:px-24">
        <h2 className='text-2xl font-bold mb-8 text-center mt-4'>My Cards</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4  2xl:mx-auto'>
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
</div>

  );
}

export default BankAccounts;
