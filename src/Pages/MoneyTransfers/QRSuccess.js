import React from 'react';
import { Link } from 'react-router-dom';
import successImage from './../../images/checked.png'; 


function QRSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">

      <img 
        src={successImage} 
        alt="Deposit Successful" 
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-4xl font-bold text-[#467a4d] mb-4">Transfer Successful!</h1>
      <p className="text-lg text-[#467a4d] mb-8 text-center">
        Your transfer from of xxx has been sent to xxx
      </p>
      <Link 
        to="/Main" 
        className="bg-[#467a4d] text-white px-6 py-3 rounded-full text-lg font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default QRSuccess;
