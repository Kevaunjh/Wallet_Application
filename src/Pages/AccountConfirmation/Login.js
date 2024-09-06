import React, { useState, useRef } from 'react';
import bnwLogo from './../../images/bnwbanx.png';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, provider, signInWithPopup, signInWithRedirect } from './../../firebase';
import { auth } from './../../firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [currentTab, setCurrentTab] = useState('login1');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const inputRefs = useRef([]);
  const [codeResent, setCodeResent] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      handleNextClick();
    } catch {
      alert("Username and Password Combination Doesn't Exist");
    }
  };

  const handleBeforeClick = () => {
    if (currentTab === 'login1') {
      const phoneRegex = /^[0-9]{10,11}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!phoneRegex.test(username) && !emailRegex.test(username)) {
        alert('Please enter a valid 10-digit phone number or a valid email address.');
        return false;
      }


      if (password === '') {
        alert('Password is not valid');
        return false;
      }
    } else if (currentTab === 'login2') {
      const codeInput = inputRefs.current.map(input => input.value).join('');
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


  const handleBackClick = () => {
    if (currentTab === 'login2') {
      setCurrentTab('login1');
    }
  };

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
                    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">
                      Mobile / Email
                    </legend>
                    <input
                      type="text"
                      id="mobile"
                      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none number-to-text"
                      placeholder="XXXXXXXXXX"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </fieldset>
                </div>

                <div className="relative mb-4">
                  <fieldset className="border border-gray-300 rounded-xl p-0">
                    <legend className="absolute top-0 left-4 transform -translate-y-1/2 bg-white px-2 text-gray-700 text-md font-bold">
                      Password
                    </legend>
                    <input
                      type="password"
                      id="password"
                      className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl border-none"
                      placeholder="XXXXXXXX"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
                    onClick={handleSignIn}
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
                  <Link
                    type="button"
                    to="/Loading"
                    className="bg-green-600 hover:bg-gray-100 text-white font-semibold py-3 px-10 border border-gray-400 rounded-lg shadow w-full flex justify-center items-center text-center"
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

export default Login;
