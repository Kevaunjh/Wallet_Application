import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import Login from './Login';
import bnwLogo from './../../images/bnwbanx.png';
import { auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AccountManagement = () => {
  const [view, setView] = useState('home');
  const navigate = useNavigate();

  const handleSignUpClick = () => setView('signup');
  const handleLoginClick = () => setView('login');

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          navigate('/Loading');
        }
      } catch (error) {
        console.error("Error handling Google sign-in redirect:", error);
      }
    };

    handleRedirectResult();
  }, [auth, navigate]);

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

  if (view === 'signup') {
    return <Signup />;
  }

  if (view === 'login') {
    return <Login />;
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#1c1c1c] text-white p-8">
      <div className="flex flex-col items-center justify-center w-full max-w-md text-center space-y-6">
        <img src={bnwLogo} alt="Logo" className="h-24 w-auto" />

        <h1 className="text-4xl font-bold">Welcome to OuterBanx</h1>
        <div
          className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold w-full max-w-xs text-center cursor-pointer"
          onClick={handleSignUpClick}
        >
          Sign Up with Mobile Number
        </div>
        <div className="flex items-center w-full max-w-xs">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="mx-4">or</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <button
          type="button"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-lg shadow w-full max-w-xs flex justify-center items-center"
          onClick={handleSignInWithGoogle}
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google logo"
            className="h-6 w-6 mr-2"
          />
          Sign In with Google
        </button>
        <div className="text-white flex flex-row items-center">
          <p>Already have an account?</p>
          <button
            className="text-green-600 underline ml-1"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
