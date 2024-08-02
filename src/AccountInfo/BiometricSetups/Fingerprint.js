import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fingerprintIcon from './../../images/fingerprint-scan.png'; // Add your fingerprint icon image
import successIcon from './../../images/checked.png'; // Add your success checkmark image

function BiometricSetup() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = () => {
    setSelectedOption('fingerprint');
  };

  return (
    <div className="BiometricSetup bg-[#88ca92] min-h-screen flex flex-col items-center p-8">
      {/* Container for Instructions, Image, and Proceed Button */}
      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto relative">
        {/* Back Button */}
        <Link to="/MyAccount" className="absolute top-4 left-4 text-lg text-[#467a4d]">
          &larr; Back
        </Link>

        {/* Setup Instructions */}
        <p className="text-md text-center mb-8 font-semibold text-lg">
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
            className={`w-80 h-80 transition-opacity mt-12 mb-12 duration-[3000ms] ${
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
            Place your finger on the sensor.
          </p>
        )}

        {/* Proceed Button */}
        <Link
          to="/AccountInfo/BiometricSetup"
          className={`px-8 py-4 rounded-md text-lg text-white w-72 text-center ${
            selectedOption ? 'bg-[#467a4d] opacity-100' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms]`}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default BiometricSetup;
