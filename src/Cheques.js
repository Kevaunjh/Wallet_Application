import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './images/logoplaceholder.png';

const points = 1652; // Update this value to match the global points

function Cheques() {
  const [chequeFront, setChequeFront] = useState(null);
  const [chequeBack, setChequeBack] = useState(null);

  const handleChequeFrontUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setChequeFront(URL.createObjectURL(file));
    }
  };

  const handleChequeBackUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setChequeBack(URL.createObjectURL(file));
    }
  };

  return (
    <body className="bg-white">
      <div className="Cheques min-h-screen flex flex-col items-center relative 2xl:bg-[#88ca92] bg-white 2xl:p-8 p-6">
        {/* XL Screens: Separate Containers */}
        <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-center 2xl:w-full relative">
          {/* Back Button for XL Screens */}
          <Link to="/Points" className="absolute top-2 left-2 text-black text-lg bg-white px-3 py-1 rounded-md 2xl:shadow-md 2xl:border-black 2xl:border-2 z-10">
            &larr; Back
          </Link>

          {/* Profile Info Container */}
          <div className="w-5/12 bg-white p-6 rounded-lg 2xl:shadow-md mt-8 flex items-center justify-between 2xl:border-black 2xl:border-2">
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

          {/* Cheque Images and Proceed Button */}
          <div className="w-5/12 mt-8 bg-white p-6 rounded-lg shadow-md border-black border-2 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Upload Cheque Images</h3>

            {/* Front Cheque Image Upload */}
            <label className="w-full mb-4 cursor-pointer">
              <span className="block text-center font-semibold mb-2">Front of Cheque</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChequeFrontUpload} 
                className="hidden"
              />
              {chequeFront ? (
                <img 
                  src={chequeFront} 
                  alt="Front of Cheque" 
                  className="w-full border-black border-2 rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center border-dashed border-2 border-gray-400 rounded-md">
                  <span className="text-gray-400">Click to upload</span>
                </div>
              )}
            </label>

            {/* Back Cheque Image Upload */}
            <label className="w-full mb-6 cursor-pointer">
              <span className="block text-center font-semibold mb-2">Back of Cheque</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChequeBackUpload} 
                className="hidden"
              />
              {chequeBack ? (
                <img 
                  src={chequeBack} 
                  alt="Back of Cheque" 
                  className="w-full border-black border-2 rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center border-dashed border-2 border-gray-400 rounded-md">
                  <span className="text-gray-400">Click to upload</span>
                </div>
              )}
            </label>

            <Link
              to="/ProceedChequeDeposit"
              className={`bg-[#467a4d] text-white px-4 py-2 rounded-md text-lg ${
                chequeFront && chequeBack ? '' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Proceed
            </Link>
          </div>
        </div>

        {/* Smaller than XL Screens: Combined Container */}
        <div className="flex flex-col 2xl:hidden w-screen h-screen bg-white p-6 fixed top-0 overflow-hidden">
          {/* Back Button */}
          <Link to="/Points" className="absolute top-8 left-8 bg-[#467a4d] text-white rounded-full p-2">
            &larr; Back
          </Link>

          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center">
            <img
              src={profileplaceholder}
              alt="Profile Placeholder"
              className="2xl:w-16 2xl:h-16 h-20 w-20 rounded-full mb-2 border-black border-2"
            />
            <h2 className="text-lg font-bold">John Doe</h2>
          </div>

          <div className="flex justify-center mt-2">
            <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
              <p className="text-md text-white mr-2">★ Points:</p>
              <p className="text-lg font-semibold text-white">{points}</p>
            </div>
          </div>

          {/* Cheque Images and Proceed Button */}
          <div className="mt-8 flex-1 overflow-y-auto flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">Upload Cheque Images</h3>

            {/* Front Cheque Image Upload */}
            <label className="w-10/12 mb-4 cursor-pointer">
              <span className="block text-center font-semibold mb-2">Front of Cheque</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChequeFrontUpload} 
                className="hidden"
              />
              {chequeFront ? (
                <img 
                  src={chequeFront} 
                  alt="Front of Cheque" 
                  className="w-full border-black border-2 rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center border-dashed border-2 border-gray-400 rounded-md">
                  <span className="text-gray-400">Click to upload</span>
                </div>
              )}
            </label>

            {/* Back Cheque Image Upload */}
            <label className="w-10/12 mb-6 cursor-pointer">
              <span className="block text-center font-semibold mb-2">Back of Cheque</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleChequeBackUpload} 
                className="hidden"
              />
              {chequeBack ? (
                <img 
                  src={chequeBack} 
                  alt="Back of Cheque" 
                  className="w-full border-black border-2 rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center border-dashed border-2 border-gray-400 rounded-md">
                  <span className="text-gray-400">Click to upload</span>
                </div>
              )}
            </label>

            <Link
              to="/ProceedChequeDeposit"
              className={`bg-[#467a4d] text-white px-4 py-2 rounded-md text-lg ${
                chequeFront && chequeBack ? '' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Cheques;
