import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fingerprintIcon from './../images/fingerprint-scan.png'; // Add your fingerprint icon image
import pinLockIcon from './../images/unlock.png'; // Add your pin lock icon image

function BiometricSetup() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="BiometricSetup bg-[#88ca92] min-h-screen flex flex-col items-center p-8">
      {/* Back Button and Title */}
      <div className="w-full flex items-center mb-8">
        <Link to="/MyAccount" className="text-lg text-[#467a4d] mr-4">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold">Biometric Setup</h1>
      </div>

      {/* Setup Instructions */}
      <p className="text-md mb-8 text-center">
        Tap on the security feature to set up.
      </p>

      {/* Biometric Options */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Fingerprint Setup */}
        <Link
          to="/AccountInfo/BiometricSetups/Fingerprint" // Path to the fingerprint setup page
          className={`relative bg-white border rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center w-[300px] h-[500px] cursor-pointer transition-transform transform ${
            selectedOption === 'fingerprint' ? 'border-[#467a4d] bg-[#E7F5F1] shadow-3xl scale-110' : 'border-[#467a4d] hover:bg-[#E7F5F1] hover:scale-105'
          }`}
          onClick={() => setSelectedOption('fingerprint')}
        >
          <img src={fingerprintIcon} alt="Fingerprint Icon" className={`w-24 h-24 mb-4 transition-transform ${selectedOption === 'fingerprint' ? 'scale-125' : ''}`} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#467a4d] h-12 flex items-center justify-center rounded-b-lg">
            <p className='text-lg font-semibold text-white'>Fingerprint</p>
          </div>
        </Link>

        {/* PIN Lock Setup */}
        <Link
          to="/AccountInfo/BiometricSetups/Pinlock" // Path to the PIN lock setup page
          className={`relative bg-white border rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center w-[300px] h-[500px] cursor-pointer transition-transform transform ${
            selectedOption === 'pinLock' ? 'border-[#467a4d] bg-[#E7F5F1] shadow-3xl scale-110' : 'border-[#467a4d] hover:bg-[#E7F5F1] hover:scale-105'
          }`}
          onClick={() => setSelectedOption('pinLock')}
        >
          <img src={pinLockIcon} alt="PIN Lock Icon" className={`w-24 h-24 mb-4 transition-transform ${selectedOption === 'pinLock' ? 'scale-125' : ''}`} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#467a4d] h-12 flex items-center justify-center rounded-b-lg">
            <p className='text-lg font-semibold text-white'>PIN Lock</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BiometricSetup;
