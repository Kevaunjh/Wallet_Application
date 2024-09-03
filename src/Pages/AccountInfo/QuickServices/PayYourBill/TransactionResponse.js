import React from 'react';
import { Link } from 'react-router-dom';
import successImage from './../../../../images/checked.png';

function TransactionResponse() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-white p-12 text-center flex flex-col justify-center h-screen w-screen">
        <div className="flex flex-col items-center mb-8">
          <img
            src={successImage}
            alt="Transaction Successful"
            className="w-32 h-32 mb-6"
          />
          <h2 className="text-4xl font-bold mb-2">Transaction Successful</h2>
          <p className="text-xl text-gray-700">Bill Payment of XXXXX Successfully Made to XXXX</p>
        </div>
        <Link to="/Main">
          <button className="px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg">
            Back to Main Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionResponse;
