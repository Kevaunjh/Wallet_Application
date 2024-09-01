import React, { useState, useRef } from 'react';
import bnwLogo from './images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect } from './firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import checked from './images/checked.png'
import { getDatabase, ref, set } from 'firebase/database';

const Signup = () => {
  const [view, setView] = useState('home'); 
  const [currentTab, setCurrentTab] = useState('signup1'); 
  const navigate = useNavigate();
  const db = getDatabase();

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

  const handleBeforeClick = () => {
    if (currentTab === 'signup1') {
      const numberInput = document.getElementById('number').value.trim();
      const numberRegex = /^\d{10,}$/; 
      if (!numberRegex.test(numberInput)) {
        alert('Please enter a valid mobile.');
        return false;
      }
    } else if (currentTab === 'signup2') {
      const codeInput = document.getElementById('verificationcode').value.trim();
      const codeRegex = /^\d{6,}$/;
      if (!codeRegex.test(codeInput)) {
        alert('Please enter a valid 6-digit verification code.');
        return false;
      }
    } else if (currentTab === 'signup3') {
      const passInput = document.getElementById('password').value.trim();
      const confirmPassInput = document.getElementById('repassword').value.trim();
      const passwordRegex = /^\d{6,}$/;
      if (!passwordRegex.test(passInput)) {
        alert('Please enter a valid password with at least 6 characters.');
        return false;
      }
      if (passInput !== confirmPassInput) {
        alert('Passwords do not match.');
        return false;
      }
    } else if (currentTab === 'signup4') {
      const otpInputs = inputRefs.current;
      const otpComplete = otpInputs.every(input => /^\d$/.test(input.value));
      if (!otpComplete) {
        alert('Please enter the complete OTP.');
        return false;
      }
    }
    return true;
  };

  const handleNextClick = () => {
    if (!handleBeforeClick()) return;

    if (currentTab === 'signup1') {
      setCurrentTab('signup2');
    } else if (currentTab === 'signup2') {
      setCurrentTab('signup3');
    } else if (currentTab === 'signup3') {
      setCurrentTab('signup4');
    } else if (currentTab === 'signup4') {
      setCurrentTab('signup5');
    }
  };

  const handleBackClick = () => {
    if (currentTab === 'signup2') {
      setCurrentTab('signup1');
    } else if (currentTab === 'signup3') {
      setCurrentTab('signup2');
    } else if (currentTab === 'signup4') {
      setCurrentTab('signup3');
    } else if (currentTab === 'signup5') {
        setCurrentTab('signup4');
    }
  };

  const [codeResent, setCodeResent] = useState(false);
  const inputRefs = useRef([]);

  const handleResendCode = () => {
    setCodeResent(true);
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

  return (
    <div className="w-screen min-h-screen bg-[#3b8d6e] text-white flex justify-center items-center">
      <div className="flex flex-col 2xl:max-w-8/12 2xl:mx-auto p-0.5 h-screen pb-6 items-center w-full">
        <div className="flex p-6 ml-1">
          <img src={bnwLogo} alt="Logo" className="w-44 h-24" />
        </div>
        
        {currentTab === 'signup1' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
            <h1 className="text-4xl font-bold mb-4 ml-6">Sign Up</h1>
            <p className="text-md mb-6 ml-6">Create an account to enjoy our features</p>
            <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center justify-center flex-grow">
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="number" className="block text-gray-700 text-lg font-bold mb-2">Mobile Number</label>
                  <input
                    type="number"
                    id="number"
                    className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none max-w-md focus:shadow-outline number-to-text"
                    placeholder="XXXXXXXXXXXX"
                    min="0"
                  />
                </div>
                <button
                  type="button"
                  className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-16"
                  onClick={handleNextClick}
                >
                  Next
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
                <div className="flex items-center mt-12">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2 leading-tight"
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    By creating an account I agree to{' '}
                    <span className="text-green-600">SeeTek's</span> {' '}
                    <span className="text-green-600">Terms of Service</span> {' '}
                    and{' '}
                    <span className="text-green-600">Privacy Policy</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
