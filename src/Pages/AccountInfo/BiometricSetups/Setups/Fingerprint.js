import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fingerprintIcon from './../../../../images/fingerprint-scan.png'; 
import successIcon from './../../../../images/checked.png'; 

function BiometricSetup() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = () => {
    setSelectedOption('fingerprint');
  };


  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  return (
    <div className="BiometricSetup bg-white min-h-screen flex items-center justify-center">
      {/* Container for Instructions, Image, and Proceed Button */}
      
      <div className="bg-white p-8 2xl:p-16 flex flex-col items-center mx-auto relative h-screen z-10 w-screen">
        {/* Back Button */}
        <Link to="/MyAccount" className="absolute top-8 left-8 bg-[#467a4d] text-white rounded-full p-2">
          &larr; Back
        </Link>

        {/* Conditional Message for Non-Mobile Devices */}
        {!isMobile() && (
          <div className="absolute inset-0 flex items-center justify-center bg-white w-screen">
            <Link to="/MyAccount" className="absolute top-8 left-8 bg-[#467a4d] text-white rounded-full p-2 ">
          &larr; Back
        </Link>
            <p className="text-md text-center text-red-500 font-semibold">
              This feature is not available on web. Please use a mobile device to complete the setup.
            </p>
          </div>
        )}

        {/* Setup Instructions */}
        {isMobile() && (
          <div className="flex flex-col items-center justify-center flex-grow">
            <p className="text-md text-center mb-8 font-semibold text-lg mt-24">
              Tap on the security feature to set up.
            </p>

            {/* Fingerprint Setup */}
            <div
              onClick={handleOptionClick}
              className="cursor-pointer transition-transform transform hover:scale-105 mb-8"
            >
              <img
                src={fingerprintIcon}
                alt="Fingerprint Icon"
                className={`w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 max-w-full max-h-full object-contain transition-opacity duration-[3000ms] ${
                  selectedOption ? 'opacity-100' : 'opacity-50'
                }`}
              />
            </div>

            {/* New Instruction or Success Message */}
            {selectedOption === 'fingerprint' ? (
              <div className="flex items-center mb-8">
                <img
                  src={successIcon}
                  alt="Success Icon"
                  className="w-12 h-12 mr-4"
                />
                <p className="text-md text-center text-green-500 font-semibold">
                  Success!
                </p>
              </div>
            ) : (
              <p className="text-md text-center mb-8">
                Place your finger tip on the sensor.
              </p>
            )}

            {/* Proceed Button */}
            <Link
              to="/AccountInfo/BiometricSetup"
              className={`px-8 py-4 rounded-md text-lg text-white w-72 text-center mb-12 2xl:mb-6 ${
                selectedOption ? 'bg-[#467a4d] opacity-100' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
              } transition-opacity duration-[1500ms]`}
            >
              Proceed
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BiometricSetup;
