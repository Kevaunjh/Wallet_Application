import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../../images/logoplaceholder.png';

const points = 1652; 

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
      <div className="Cheques min-h-screen flex flex-col items-center relative bg-white 2xl:p-8 p-6">
        {/* XL Screens: Separate Containers */}
       

        {/* Smaller than XL Screens: Combined Container */}
        <div className="flex flex-col w-screen h-screen bg-white p-6 fixed top-0 overflow-y-auto">
          {/* Back Button */}
          <Link to="/Points" className="absolute top-8 left-8 bg-[#467a4d] text-white rounded-full p-2">
            &larr; Back
          </Link>

          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center mt-8">
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
          <div className="mt-8 flex-1 flex flex-col items-center 2xl:w-8/12 2xl:mx-auto">
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
              to="/Depositcallback"
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
