import React, { useState, useRef } from 'react';
import bnwLogo from './images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect } from './firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import checked from './images/checked.png'
import { getDatabase, ref, set } from 'firebase/database';

const Signup = () => {
  const [view, setView] = useState('home'); // Tracks the current view: 'home', 'signup', or 'login'
  const [currentTab, setCurrentTab] = useState('signup1'); // Tracks the current tab: 'signup1', 'signup2', 'signup3', 'signup4'
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

  const handleLoginClick = () => setView('login');

  const handleBeforeClick = () => {
    if (currentTab === 'signup1') {
      const numberInput = document.getElementById('number').value.trim();
      const numberRegex = /^\d{10,}$/; // Example: Ensuring it's a number between 10 to 15 digits
  
      if (!numberRegex.test(numberInput)) {
        alert('Please enter a valid mobile.');
        return false; // Prevent moving to the next tab if validation fails
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
      // Check if all OTP inputs are filled
      const otpInputs = inputRefs.current;
      const otpComplete = otpInputs.every(input => /^\d$/.test(input.value));
      
      if (!otpComplete) {
        alert('Please enter the complete OTP.');
        return false;
      }
    }
    return true; // Allow moving to the next tab if all checks pass
  };

  const handleNextClick = () => {
    if (!handleBeforeClick()) return; // Only proceed if handleBeforeClick returns true

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
    // Add any additional logic for resending the code here
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) { // Only proceed if input is a digit
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      e.target.value = ''; // Clear the input if it's not a digit
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="w-screen min-h-screen bg-[#3b8d6e] text-white">
      <div className='flex flex-col 2xl:max-w-8/12 2xl:mx-auto p-0.5 h-screen pb-6 items-center w-full'>
        <div className="flex p-6 ml-1">
          <img src={bnwLogo} alt="Logo" className="w-44 h-24" />
        </div>
        
        {/* Render content based on the currentTab state */}
        {currentTab === 'signup1' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full  ">
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

        {currentTab === 'signup2' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
            <h1 className="text-4xl font-bold mb-4 ml-6">Sign Up</h1>
            <p className="text-md mb-6 ml-6">Complete your details to finish signing up</p>
            <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
              <form className="w-full max-w-md">
                <div className="mb-12">
                  <label className="block text-gray-700 text-lg mb-2">
                    Please enter the 6-digit verification code that was sent to xxxx@xxx.com
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="verificationcode" className="block text-gray-700 text-lg font-bold mb-2">
                    Verification code
                  </label>
                  <input
                    type="text"
                    id="verificationcode"
                    className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none max-w-md focus:shadow-outline"
                    placeholder="Enter code"
                  />
                </div>
                <button
                  type="button"
                  className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-4 mb-8"
                  onClick={handleNextClick}
                >
                  Next
                </button>
                <button
                  type="button"
                  className=" hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center "
                  onClick={handleBackClick}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        )}

        {currentTab === 'signup3' && (
          <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
            <h1 className="text-4xl font-bold mb-4 ml-6">Biometric Setup</h1>
            <p className="text-md mb-6 ml-6">Enter a unique PIN number</p>
            <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
              <form className="w-full max-w-md">
              <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2  truncate"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2  truncate"
                      htmlFor="repassword"
                    >
                     Re-enter
                    </label>
                    <input
                      type="repassword"
                      id="repassword"
                      placeholder="Enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline truncate"
                    />
                </div>
                <button
                  type="button"
                  className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-12 mb-8"
                  onClick={handleNextClick}
                >
                  Next
                </button>
                <button
                  type="button"
                  className=" hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center "
                  onClick={handleBackClick}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        )}

        {currentTab === 'signup4' && (
           <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
           <h1 className="text-4xl font-bold mb-4 ml-6">Biometric Setup</h1>
           <p className="text-md mb-6 ml-6">Please Enter your OTP received on your phone</p>
           <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
             <div className="mb-12">
               <label className="block text-gray-700 text-lg mb-2">
                 Enter the OTP you received
               </label>
             </div>
             
             {/* OTP Input Section */}
             <div className="flex gap-2 sm:gap-4 mb-8">
               {[1, 2, 3, 4, 5].map((_, index) => (
                 <input
                   key={index}
                   type="text"
                   maxLength="1"
                   ref={(el) => inputRefs.current[index] = el}
                   onChange={(e) => handleInputChange(e, index)}
                   onKeyDown={(e) => handleKeyDown(e, index)}
                   className="w-12 h-12 sm:w-24 sm:h-24 border border-gray-600 rounded-lg bg-gray-100 text-center text-xl sm:text-2xl font-bold focus:outline-none text-black"
                   aria-label={`OTP digit ${index + 1}`}
                   inputMode="numeric" // Ensure numeric keypad on mobile
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
     
             {/* Action Buttons */}
             <button
                  type="button"
                  className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center mt-6 mb-8 "
                  onClick={handleNextClick}
                >
                  Next
                </button>
                <button
                  type="button"
                  className=" hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-md flex justify-center items-center text-center "
                  onClick={handleBackClick}
                >
                  Back
                </button>
           </div>
         </div>
        )}
        {currentTab === 'signup5' && (
           <div className="flex flex-col px-6 flex-1 2xl:w-5/12 w-full">
           <h1 className="text-4xl font-bold mb-4 ml-6">Biometric Setup</h1>
           <p className="text-md mb-6 ml-6">Please Enter your OTP received on your phone</p>
           <div className="bg-white w-full p-8 rounded-3xl shadow-md flex flex-col items-center flex-1 justify-center">
             {/* Success Message Section */}
             <div className="flex flex-col items-center">
               <img
                 src={checked} // Example checkmark image
                 alt="Success Checkmark"
                 className="w-16 h-16 mb-4"
               />
               <p className="text-black text-xl font-bold mb-2">Success</p>
               <p className="text-gray-500 text-center mt-2">
                 Your Pin Code has been created. Please proceed to login.
               </p>
             </div>
         
             {/* Action Buttons */}
             <div className="w-full max-w-md flex flex-col gap-4 mt-16">
               <Link
                 to="/Loading"
                 type="button"
                 className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow text-center"
               >
                 Login
               </Link>
               <button
                 type="button"
                 className="hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow mt-4"
                 onClick={handleBackClick}
               >
                 Back
               </button>
             </div>
           </div>
         </div>
         
        )}
      </div>
    </div>
  );
};

export default Signup;
