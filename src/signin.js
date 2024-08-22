import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './images/seeteklogo.png';

const Signup = () => {
  const [activeTab, setActiveTab] = useState('google'); // State to track active tab

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="xl:min-h-screen bg-[#88ca92] flex items-center justify-center">
      <div className="bg-white border-2 xl:border-black w-full min-h-screen xl:w-1/2 xl:h-[60vh]  p-8 xl:rounded-3xl flex flex-col xl:flex-row">
        {/* Left Side */}
        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center xl:items-center xl:justify-center xl:border-r-2 xl:border-black">
          {/* Logo Placeholder */}
          <div className="w-full text-center xl:text-center mt-20 xl:mt-0">
            <img src={logo} alt="SeeTek Logo" className="h-28 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-gray-700 mb-2">
              {activeTab === 'google' && 'Sign in with Google'}
              {activeTab === 'username' && 'Sign in with Username'}
              {activeTab === 'create' && 'Create Account'}
            </h2>
          </div>
          <div className="text-center xl:text-center text-blue-600">
            {activeTab === 'google' && (
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleTabSwitch('username')}
                >
                  Sign in with Username
                </span>
              </div>
            )}
            {activeTab === 'username' && (
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleTabSwitch('google')}
                >
                  Use your SeeTek account
                </span>
              </div>
            )}
            {activeTab === 'create' && (
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleTabSwitch('google')}
                >
                  Sign in with SeeTek
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-1/2 flex flex-col justify-between xl:pl-4 xl:items-center xl:justify-center">
          <div className="flex-grow flex flex-col justify-center">
            <form className="flex flex-col w-full max-w-md mx-auto">
              {activeTab === 'google' && (
                <>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
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
                </>
              )}

              {activeTab === 'username' && (
                <>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
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
                </>
              )}

              {activeTab === 'create' && (
                <>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
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
                  <div className="mt-4 xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center"
                      htmlFor="repassword"
                    >
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="repassword"
                      placeholder="Re-enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </>
              )}
            </form>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col gap-4 mt-6 xl:mt-8 max-w-md mx-auto">
            {(activeTab === 'google' || activeTab === 'username') && (
              <>
                <button
                  type="button"
                  className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold mb-4 py-2 px-4 rounded-xl flex items-center justify-center focus:outline-none focus:shadow-outline w-full"
                  onClick={() => handleTabSwitch('create')}
                >
                  Create Account
                </button>
                <Link
                  to="/Main"
                  className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center focus:outline-none focus:shadow-outline w-full"
                >
                  Sign In
                </Link>
              </>
            )}
            {activeTab === 'create' && (
              <>
                <button
                  type="button"
                  className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center focus:outline-none focus:shadow-outline w-full"
                  onClick={() => handleTabSwitch('username')}
                >
                  Sign In with Username
                </button>
                <button
                  type="button"
                  className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl flex items-center justify-center focus:outline-none focus:shadow-outline w-full"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
