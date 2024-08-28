import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SetupSuccess = () => {
  const [codeResent, setCodeResent] = useState(false);
  const inputRefs = useRef([]);

  const handleResendCode = () => {
    setCodeResent(true);
    // Add any additional logic for resending the code here
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="bg-white w-full max-w-xl h-[60vh] p-10 rounded-lg flex flex-col items-center relative shadow-2xl border border-black">
        {/* Header with Back Button */}
        <div className="w-full mb-8 text-left">
          <Link to="/AccountInfo/BiometricSetup" className="text-green-600 text-lg">← Back</Link>
        </div>
        <h2 className="text-green-600 text-xl font-bold mb-8">Enter the OTP you received</h2>

        {/* OTP Input Section */}
        <div className="flex gap-4 mb-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => inputRefs.current[index] = el}
              onChange={(e) => handleInputChange(e, index)}
              className="w-24 h-36 border border-gray-600 rounded-lg bg-gray-100 text-center text-2xl font-bold focus:outline-none"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>

        {/* Didn't receive the code section */}
        <div className="text-center mb-12">
          <p 
            onClick={handleResendCode} 
            className="text-blue-500 text-sm cursor-pointer"
          >
            Didn't receive the code?
          </p>
          {codeResent && (
            <p className="text-green-600 text-sm mt-2">Code Resent</p>
          )}
        </div>

        {/* Proceed Button */}
        <div className="absolute bottom-10 text-center w-full">
          <Link to="/">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg">Confirm</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SetupSuccess;
