import React from 'react';
import { Link } from 'react-router-dom';
import successImage from './../../../images/checked.png'; // Adjust the path to your image file

function TransactionResponse() {
  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-4xl h-[600px] text-center flex flex-col justify-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src={successImage}
            alt="Transaction Successful"
            className="w-32 h-32 mb-6"
          />
          <h2 className="text-4xl font-bold mb-2">Transaction Successful</h2>
          <p className="text-xl text-gray-700">Bill Payment of XXXXX Successfully Made to XXXX</p>
        </div>
        <Link to="/">
          <button className="px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg">
            Back to Main Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionResponse;
