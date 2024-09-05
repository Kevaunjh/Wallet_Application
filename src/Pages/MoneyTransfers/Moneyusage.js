import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import loadarrow from'./../../images/money-transfer.png';
import loading from './../../images/loading.png';

function Moneyusage() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className=" bg-white min-h-screen flex flex-col items-center p-8 relative">
      {/* Back Button for XL Screens */}

      {/* Back Button for smaller screens */}
      <div className="w-full flex items-center mb-8">
        <Link to="/Main" className="mr-4 bg-[#467a4d] text-white rounded-full p-2">
          &larr; Back
        </Link>
      </div>

      {/* Setup Instructions */}
      <h1 className="text-2xl font-bold justify-center text-center mt-12">Money usage</h1>
      <p className="text-md mb-8 text-center">
        How would you like to handle your money?
      </p>

      {/* Biometric Options */}
      <div className="flex justify-center md:gap-12 gap-4 w-full">
        {/* Fingerprint Setup */}
        <Link
          to="/Transfermoney"
          className={`relative bg-white border rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center w-[48%] h-[400px] sm:w-[300px] sm:h-[500px] cursor-pointer transition-transform transform ${
            selectedOption === 'fingerprint' ? 'border-[#467a4d] bg-[#E7F5F1] shadow-3xl scale-110' : 'border-[#467a4d] hover:bg-[#E7F5F1] hover:scale-105'
          }`}
        >
          <img src={loadarrow} alt="Fingerprint Icon" className={`w-20 sm:w-24 h-20 sm:h-24 mb-4 transition-transform  ${selectedOption === 'fingerprint' ? 'scale-125' : ''}`} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#467a4d] h-10 sm:h-12 flex items-center justify-center rounded-b-lg">
            <p className='text-md sm:text-lg font-semibold text-white'>Transfer Money</p>
          </div>
        </Link>

        {/* PIN Lock Setup */}
        <Link
          to="/Loadmoney"
          className={`relative bg-white border rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center w-[48%] h-[400px] sm:w-[300px] sm:h-[500px] cursor-pointer transition-transform transform ${
            selectedOption === 'pinLock' ? 'border-[#467a4d] bg-[#E7F5F1] shadow-3xl scale-110' : 'border-[#467a4d] hover:bg-[#E7F5F1] hover:scale-105'
          }`}
        >
          <img src={loading} alt="PIN Lock Icon" className={`w-20 sm:w-24 h-20 sm:h-24 mb-4 transition-transform ${selectedOption === 'pinLock' ? 'scale-125' : ''}`} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#467a4d] h-10 sm:h-12 flex items-center justify-center rounded-b-lg">
            <p className='text-md sm:text-lg font-semibold text-white'>Load Money</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Moneyusage;
