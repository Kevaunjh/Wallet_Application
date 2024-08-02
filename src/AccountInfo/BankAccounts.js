import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';
import moneyLogo from './../images/money.png'; // Add your money logo image
import bankLogo from './../images/bank-building.png'; // Add your bank logo image
import accountLogo from './../images/user.png'; // Add your account logo image
import cardDetails from './../BankingData'; // Import the banking data
import creditcard1 from './../images/card1.png';
import creditcard2 from './../images/card2.png';
import creditcard3 from './../images/card3.png';

const greenColor = '#467a4d'; // Green color for the "Acc #x"
const points = 1652;
// Map credit card images
const creditCardImages = {
  'card1.png': creditcard1,
  'card2.png': creditcard2,
  'card3.png': creditcard3,
};

function BankAccounts() {
  // Create an array of card objects to iterate over
  const cardContainers = Object.values(cardDetails).map((card, index) => (
    <div className='bg-[#FFF3E6] p-4 rounded-lg shadow-md mb-4 w-full text-black border-[#467a4d] border-2 flex flex-col items-center relative' key={index}>
      {/* Card Info Container */}
      <div className='flex flex-col items-start mb-4 w-full p-2'>
        {/* Account Number */}
        <div className='absolute top-4 right-4 bg-[#467a4d] rounded-lg px-2 py-1'>
          <p className='text-md font-semibold text-white'>Acc #{index + 1}</p>
        </div>

        {/* Amount of Money */}
        <div className='flex items-center mb-2'>
          <img src={moneyLogo} alt="Money Logo" className='w-6 h-6 mr-2' />
          <p className='text-2xl font-bold tracking-wider'>{card.total}</p>
        </div>

        {/* Bank Name */}
        <div className='flex items-center mb-2'>
          <img src={bankLogo} alt="Bank Logo" className='w-6 h-6 mr-2' />
          <p className='text-md'>{card.bankName}</p>
        </div>

        {/* Overall Account Number */}
        <div className='flex items-center'>
          <img src={accountLogo} alt="Account Logo" className='w-6 h-6 mr-2' />
          <p className='text-md'>{card.overallAccountNumber}</p>
        </div>
      </div>

      {/* Bank Card Image */}
      <div className='flex justify-center items-center w-full'>
        <img src={creditCardImages[card.creditCardImage]} alt={`Credit Card ${index + 1}`} className='w-64 h-auto p-2' />
      </div>
    </div>
  ));

  return (
    <div className="BankAccounts bg-[#88ca92] min-h-screen flex flex-col items-center relative p-8">
      {/* Back Button */}
      <Link to="/MyAccount" className="absolute top-4 left-4 text-white text-lg">
        &larr; Back
      </Link>

      {/* Profile Info Container */}
      <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex items-center justify-between">
        {/* Profile Picture */}
        <img 
          src={profileplaceholder} 
          alt="Profile Placeholder" 
          className="w-16 h-16 rounded-full mr-4"
        />
        {/* Profile Name */}
        <div className="text-center flex-1">
          <h2 className="text-lg font-bold">John Doe</h2>
        </div>
        {/* Profile Points */}
        <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
          <p className="text-md text-white mr-2">★ Points:</p>
          <p className="text-lg font-semibold text-white">{points}</p>
        </div>
      </div>

      {/* Bank Accounts Container */}
      <div className='w-full md:w-5/12 mt-8 bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>My Bank Accounts</h2>
        <div className='flex flex-col items-center'>
          {/* Card Containers */}
          {cardContainers}
          {/* Add Bank Card Button */}
          <button className='mt-4 bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm'>
            + Add Bank Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default BankAccounts;
