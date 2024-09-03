import React, { useState, useRef } from 'react';
import bnwLogo from './images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect } from './firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, set } from 'firebase/database';

const Login = () => {
  const [view, setView] = useState('home');
  const [currentTab, setCurrentTab] = useState('login1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFingerprintClicked, setIsFingerprintClicked] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const inputRefs = useRef([]);
  const [isCodeResent, setIsCodeResent] = useState(false);
  const navigate = useNavigate();
  const db = getDatabase();
  const [codeResent, setCodeResent] = useState(false);

  const handleSignInWithGoogle = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }

      navigate('/Loading');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLoginClick = () => setView('login');

  const handleBeforeClick = () => {
    if (currentTab === 'login1') {
      const numberInput = document.getElementById('number').value;
      const passwordInput = document.getElementById('password').value
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(numberInput)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
      }

      if(passwordInput === '') {
        alert('Password is not Valid');
        return false;
      }
    } else if (currentTab === 'login2') {
      const codeInput = document.getElementById('verificationcode').value;
      const codeRegex = /^[0-9]{6}$/;
      if (!codeRegex.test(codeInput)) {
        alert('Please enter a valid 6-digit verification code.');
        return false;
      }
    } 
    return true;
  };

  const handleNextClick = () => {
    if (!handleBeforeClick()) return;

    if (currentTab === 'login1') {
      setCurrentTab('login2');
    }
  };

  const handleBackClick = () => {
    if (currentTab === 'login2') {
      setCurrentTab('login1');
    }
  };

  const handleResendCode = () => {
    setIsCodeResent(true);
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFingerprintClick = () => {
    setIsFingerprintClicked(true);
    setIsOtpSent(false);
  };

  const handleOtpClick = () => {
    setIsOtpSent(true);
  };
  return (
    <div className="w-screen min-h-screen bg-[#3b8d6e] text-white flex flex-col">
{currentTab === 'login1' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />

        
        <h1 className="text-3xl font-bold">Log in</h1>
        <p className="text-sm mt-1">Log in to proceed</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <form className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-3 2xl:space-y-20 xl:space-y-3 lg:space-y-5">


          <div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold ">Mobile Number</legend>
    <input
      type="number"
      id="number"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none number-to-text"
      placeholder="XXXXXXXXXXXX"
    />
  </fieldset>
</div>
<div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">Password</legend>
    <input
      type="password"
      id="password"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none"
      placeholder="XXXXXXXXXXXX"
    />
  </fieldset>
</div>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                onClick={handleNextClick}
              >
                Next
              </button>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                onClick={handleBackClick}
              > 
                Back
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-none" />
      </>
    )}
  {currentTab === 'login2' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />

        
        <h1 className="text-3xl font-bold">Biometric Setup</h1>
        <p className="text-sm mt-1">Please Enter your OTP received on your phone</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <div className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-3 2xl:space-y-20 xl:space-y-3 lg:space-y-5">

          <div className="flex flex-col items-center justify-center w-full">
  <label className="block text-gray-700 text-sm mb-8 text-center 2xl:mb-24 xl:mb-2">
    Enter the OTP you received
  </label>

  {/* OTP Input Section */}
  <div className="flex justify-center gap-2 sm:gap-4  w-full">
    {[1, 2, 3, 4, 5].map((_, index) => (
      <input
        key={index}
        type="text"
        maxLength="1"
        ref={(el) => (inputRefs.current[index] = el)}
        onChange={(e) => handleInputChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:h-12 xl:w-12 border border-gray-600 rounded-lg bg-gray-100 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold focus:outline-none text-black"
        aria-label={`OTP digit ${index + 1}`}
        inputMode="numeric" 
      />
    ))}
  </div>
</div>
     
             {/* Didn't receive the code section */}
             <div className="text-center mb-2 ">
               <p 
                 onClick={handleResendCode} 
                 className="text-blue-500 text-sm cursor-pointer "
               >
                 Didn't receive the code?
               </p>
               {!codeResent && (
              <p className="text-[#467a4d] text-sm mt-2 opacity-0">Code Resent</p>
            )}
            {codeResent && (
              <p className="text-[#467a4d] text-sm mt-2">Code Resent</p>
            )} 
             </div>
          
            <div className="flex flex-col gap-4">
              <Link
                type="button"
                to="/Loading"
                className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
              >
                Next
              </Link>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                onClick={handleBackClick}
              > 
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-none" />
      </>
    )}
    
    </div>
  );
};

export default Login;
