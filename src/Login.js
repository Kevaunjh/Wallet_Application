import React, { useState, useRef } from 'react';
import bnwLogo from './images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect } from './firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import fingerprint from './images/fingerprint-scan.png'
import LogoAnimation from './LogoAnimation';


const Login = () => {
  const [view, setView] = useState('home');
  const [currentTab, setCurrentTab] = useState('login1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFingerprintClicked, setIsFingerprintClicked] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const inputRefs = useRef([]);
  const [isCodeResent, setIsCodeResent] = useState(false);
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }

      navigate('/Loading');
      // Navigate to Main page or other functionality
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLoginClick = () => setView('login');

  const handleBeforeClick = () => {
    if (currentTab === 'login1') {
      const numberInput = document.getElementById('number').value;
      if (numberInput === '') {
        alert('Please enter a valid phone number.');
        return false;
      }
    } else if (currentTab === 'login2') {
      const codeInput = document.getElementById('verificationcode').value;
      if (codeInput.length !== 6 || isNaN(codeInput)) {
        alert('Please enter a valid 6-digit verification code.');
        return false;
      }
    } else if (currentTab === 'login3') {
      const passInput = document.getElementById('password').value;
      if (passInput.trim === '') {
        alert('Please enter your full name.');
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
    <>
    <div className="w-screen h-screen bg-[#3b8d6e] text-white">
      <div className='flex flex-col 2xl:max-w-8/12 2xl:mx-auto p-0.5 h-full pb-6 items-center w-full'>
        <div className="flex p-6 ml-1">
          <img src={bnwLogo} alt="Logo" className="w-44 h-24" />
        </div>
        
        {currentTab === 'login1' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
            
            <h1 className="text-4xl font-bold mb-4 ml-6">Log in</h1>
            <p className="text-md mb-6 ml-6">Log in to proceed</p>
            <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
              <form className="w-full max-w-md">
                <div className="mb-4 mt-8">
                  <label htmlFor="number" className="block text-gray-700 text-lg font-bold mb-2">Mobile Number</label>
                  <input
                    type="number"
                    id="number"
                    className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none max-w-md focus:shadow-outline"
                    placeholder="XXXXXXXXXXXX"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mpin" className="block text-gray-700 text-lg font-bold mb-2">MPIN</label>
                  <input
                    type="password"
                    id="mpin"
                    className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none max-w-md focus:shadow-outline"
                    placeholder="XXXXXXXXXXXX"
                  />
                </div>
                <button
                  type="button"
                  className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-16"
                  onClick={handleNextClick}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-8"
                  onClick={handleSignInWithGoogle}
                  
                >
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google logo"
                    className="h-6 w-6 mr-2"
                  />
                  Continue with Google
                </button>
                <div className="flex flex-row justify-center mt-20 items-center">
                  <img
                    src={fingerprint}
                    alt="Fingerprint icon"
                    className="h-12 w-12 mb-2 cursor-pointer"
                    onClick={handleOpenModal}
                  />
                  <p onClick={handleOpenModal} className=" text-md mb-1 text-green-600">
                    Use Biometric to Login
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {currentTab === 'login2' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
            <h1 className="text-4xl font-bold mb-4 ml-6">Enter OTP</h1>
            <p className="text-md mb-6 ml-6">PLease enter your OTP to proceed</p>
            <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
              <div className="mb-12">
                <label className="block text-gray-700 text-lg mb-2">
                  Enter the OTP you received
                </label>
              </div>
              <div className="flex gap-2 sm:gap-4 mb-8">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={(el) => inputRefs.current[index] = el}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-16 h-24 border border-gray-600 rounded-lg bg-gray-100 text-center text-xl sm:text-2xl font-bold focus:outline-none text-black"
                    aria-label={`OTP digit ${index + 1}`}
                    inputMode="numeric"
                  />
                ))}
              </div>
              <div className="w-full max-w-md flex flex-col gap-4 mt-32">
               <Link to="/Loading"
                 type="button"
                 className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow text-center"
               >
                 Login
               </Link>
                <button
                 type="button"
                 className=" hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow"
                 onClick={handleBackClick}
               >
                 Back
               </button>
             </div>
            </div>
          </div>
        )}

        
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={fingerprint}
                alt="Fingerprint"
                className={`w-16 h-16 ${isFingerprintClicked || isOtpSent ? 'opacity-50 cursor-not-allowed' : 'opacity-50 cursor-pointer'}`}
                onClick={handleFingerprintClick}
              />
            </div>
            <p className="text-center text-lg mb-4 text-black">
              Please put your finger on the sensor to complete the transaction
            </p>

   

            <div className="w-full flex justify-center mt-6">
              <Link to="/Loading">
                <button
                  className={`px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg ${isFingerprintClicked || isOtpSent ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!isFingerprintClicked && !isOtpSent}
                >
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Login;
