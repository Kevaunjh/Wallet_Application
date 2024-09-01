import React, { useState } from 'react';
import bnwLogo from './images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect } from './firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [currentTab, setCurrentTab] = useState('signup1');
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
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleNextClick = () => {
    if (currentTab === 'signup1') {
      setCurrentTab('signup2');
    }
  };

  return (
    <div className="w-screen h-screen bg-[#3b8d6e] text-white flex justify-center items-center">
      <div className="flex flex-col max-w-xl w-full h-full max-h-screen p-4 items-center justify-between">
        <div className="flex justify-center p-4">
          <img src={bnwLogo} alt="Logo" className="w-24 h-16" />
        </div>

        <div className="flex flex-col flex-1 justify-between w-full">
          <div className="bg-white w-full max-h-[80%] p-6 rounded-3xl shadow-md flex flex-col items-center justify-between">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h1>
              <p className="text-sm text-gray-700 mb-4">Create an account to enjoy our features</p>
            </div>
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="number" className="block text-gray-700 text-lg font-bold mb-2">Mobile Number</label>
                <input
                  type="number"
                  id="number"
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline number-to-text"
                  placeholder="XXXXXXXXXXXX"
                  min="0"
                />
              </div>
              <button
                type="button"
                className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-2 px-8 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center mt-6"
                onClick={handleNextClick}
              >
                Next
              </button>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center mt-4"
                onClick={handleSignInWithGoogle}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google logo"
                  className="h-5 w-5 mr-2"
                />
                Continue with Google
              </button>
            </form>
            <div className="flex flex-col items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 leading-tight"
              />
              <label htmlFor="terms" className="text-gray-700 text-xs text-center">
                By creating an account, I agree to{' '}
                <span className="text-green-600">SeeTek's</span> {' '}
                <span className="text-green-600">Terms of Service</span> {' '}
                and{' '}
                <span className="text-green-600">Privacy Policy</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
