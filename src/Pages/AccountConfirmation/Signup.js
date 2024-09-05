import React, { useState, useRef } from 'react';
import bnwLogo from './../../images/bnwbanx.png';
import { auth, provider, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from './../../firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import checked from './../../images/checked.png'
import { getDatabase, ref, set } from "firebase/database";



const Signup = () => {

  const [currentTab, setCurrentTab] = useState('signup1');
  const navigate = useNavigate();

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const db = getDatabase();

  const handleSignUp = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, mobile, password);
      const user = userCredential.user;

      const userRef = ref(db, 'users/' + user.uid);
      await set(userRef, {
          username: mobile
          
      });

      setIsValid(true);
      handleNextClick();
      setCurrentTab('signup4');
      console.log('Account Successfully Made.');
      
      console.log("User data written to Realtime Database");

    } catch (error) {
      console.error("Error creating user:", error);

      if (error.code === 'auth/weak-password') {
        setIsValid(false);
          alert("Password must be at least 6 characters long.");
          
      } else if (error.code === 'auth/email-already-in-use') {
        setIsValid(false);
          alert("The phone number or email you've chosen is already in use.");;
      } else {
        setIsValid(false);
          alert("Failed to create account. Please try again.");
      }
    }
  };



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
      const input = document.getElementById('number').value.trim();
      const phoneRegex = /^\d{10,11}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!phoneRegex.test(input) && !emailRegex.test(input)) {
        alert('Please enter a valid phone number or email.');
        return false;
      }

      if (!checkbox) {
        alert('Please accept terms and conditions.');
        return false;
      }
    } else if (currentTab === 'signup2') {
      const codeInput = document.getElementById('verificationcode').value.trim();
      const codeRegex = /^\d{6}$/;
  
      if (!codeRegex.test(codeInput)) {
        alert('Please enter a valid 6-digit verification code.');
        return false;
      }
    } else if (currentTab === 'signup3') {
      const passInput = document.getElementById('password').value.trim();
      const confirmPassInput = document.getElementById('repassword').value.trim();
      const passwordRegex = /^.{5,}$/;
  
      if (!passwordRegex.test(passInput)) {
        alert('Please enter a valid password with at least 6 characters.');
        return false;
      }
      if (passInput !== confirmPassInput) {
        alert('Passwords do not match.');
        return false;
      }

      if (!isValid) {
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

  const toggleTerms = (event) => {
    setCheckbox(event.target.checked);
 
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
    <div className="w-screen min-h-screen bg-[#3b8d6e] text-white flex flex-col">
      {currentTab === 'signup1' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />

        
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-sm mt-1">Create an account to enjoy our features</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <form className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-4 2xl:space-y-20 xl:space-y-6 lg:space-y-16">
          <div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">Mobile / Email</legend>
    <input
      type="text"
      id="number"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none number-to-text"
      placeholder="Enter phone number or email"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
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
                onClick={handleSignInWithGoogle}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google logo"
                  className="h-6 w-6 mr-3"
                />
                Continue with Google
              </button>
            </div>
          </form>
          <div className="flex flex-row items-center pt-12 sm:pt-16 md:pt-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-3 leading-tight"
              onChange={toggleTerms}
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

      <div className="flex-none" />
      </>
    )}
    {currentTab === 'signup2' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-sm mt-1">Complete your details to finish signing up</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <form className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-3 2xl:space-y-20 xl:space-y-3 lg:space-y-5">
          <div className="mb-2">
                  <label className="block text-gray-700 text-sm 2xl:text-lg text-center mb-8">
                    Please enter the 6-digit verification code that was sent to xxxx@xxx.com
                  </label>
                </div>

                <div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">Verification Code</legend>
    <input
      type="verificationcode"
      id="verificationcode"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none number-to-text"
      placeholder="XXXXXXXXXXXX"
    />
  </fieldset>
</div>
            <div className="flex flex-col gap-4 pt-5">
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
    {currentTab === 'signup3' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />

        
        <h1 className="text-3xl font-bold">Biometric Setup</h1>
        <p className="text-sm mt-1">Enter a unique PIN number</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <form className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-3 2xl:space-y-20 xl:space-y-3 lg:space-y-5">


          <div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">Password</legend>
    <input
      type="password"
      id="password"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none"
      placeholder="XXXXXXXXXXXX"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </fieldset>
</div>
<div className="relative mb-4">
  <fieldset className="border border-gray-300 rounded-xl p-0">
    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">RePassword</legend>
    <input
      type="password"
      id="repassword"
      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none"
      placeholder="XXXXXXXXXXXX"
    />
  </fieldset>
</div>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                onClick={() => { 
                  handleSignUp(); 

                }}
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

{currentTab === 'signup4' && (
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
          </div>
        </div>
      </div>

      <div className="flex-none" />
      </>
    )}

{currentTab === 'signup5' && (
        <>
      <div className="flex flex-col items-center justify-center flex-none py-4">
        <img src={bnwLogo} alt="Logo" className="h-24 mb-2" />

        
        <h1 className="text-3xl font-bold">Biometric Setup</h1>
        <p className="text-sm mt-1">Please Enter your OTP received on your phone</p>
      </div>

      <div className="flex flex-col w-full max-w-xl p-4 items-center justify-center flex-grow mx-auto">
        <div className="bg-white w-full p-6 rounded-3xl shadow-md flex flex-col items-center justify-center h-full flex-grow">
          <div className="w-full max-w-md space-y-12 sm:space-y-16 md:space-y-3 2xl:space-y-20 xl:space-y-3 lg:space-y-5">

          <div className="flex flex-col items-center">
               <img
                 src={checked} 
                 alt="Success Checkmark"
                 className="w-16 h-16 mb-4 xl:w-8 xl:h-8 2xl:w-24 2xl:h-24 mt-3"
               />
               <p className="text-black text-md font-bold ">Success</p>
               <p className="text-gray-500 text-center">
                 Your Pin Code has been created. Please proceed to login.
               </p>
             </div>
            <div className="flex flex-col gap-4">
              <Link
                type="button"
                className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                to="/Loading"
              >
                Login
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

export default Signup;
