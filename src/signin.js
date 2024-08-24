import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/seeteklogo.png';
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from './firebase';
import { getDatabase, ref, set } from 'firebase/database';
const Signup = () => {
  const [activeTab, setActiveTab] = useState('username');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const db = getDatabase();

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setError(''); // Clear error when switching tabs
    setSuccess(''); // Clear success message when switching tabs
  };

  const handleSignInWithGoogle = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
      }

      navigate('/Main');
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError("Error signing in with Google");
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, username + '@example.com', password);
      navigate('/Main');
    } catch (error) {
      console.error("Error signing in with email:", error);
      setError("Error signing in with email");
    }
  };

  const handleSignUp = async () => {
    if (!username || !password || !repassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== repassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username + '@example.com', password);
      const user = userCredential.user;

      const userRef = ref(db, 'users/' + user.uid);
      await set(userRef, {
        username: username
      });

      navigate('/Main');
    } catch (error) {
      console.error("Error creating user:", error);

      if (error.code === 'auth/weak-password') {
        setError("Password must be at least 6 characters long.");
      } else if (error.code === 'auth/email-already-in-use') {
        setError("This username is already taken.");
      } else {
        setError("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <body className='white'>
    <div className="2xl:min-h-screen bg-[#88ca92] flex items-center justify-center">
      <div className="bg-white 2xl:border-2 2xl:border-black w-full 2xl:w-1/2 p-2 2xl:rounded-3xl flex flex-col 2xl:flex-row 2xl:h-[80vh] h-full overflow-auto 2xl:max-h-[60vh] ">
        {/* Left Side */}
        <div className="w-full 2xl:w-1/2 flex flex-col items-center justify-center 2xl:items-center 2xl:justify-center 2xl:border-r-2 2xl:border-black ">
          <div className="w-full text-center 2xl:text-center mt-20 2xl:mt-0">
            <img src={logo} alt="SeeTek Logo" className="h-28 mx-auto mb-4 2xl:mt-0 -mt-16" />
            <h2 className="text-lg font-bold text-gray-700 mb-2 truncate">
              {activeTab === 'username' && 'Sign in with Username'}
              {activeTab === 'create' && 'Create Account'}
            </h2>
          </div>
          <div className="text-center 2xl:text-center text-blue-600">
            {activeTab === 'username' && (
              <div>
                <span
                  className="cursor-pointer truncate"
                  onClick={() => handleTabSwitch('create')}
                >
                  Create Account
                </span>
              </div>
            )}
            {activeTab === 'create' && (
              <div>
                <span
                  className="cursor-pointer truncate"
                  onClick={() => handleTabSwitch('username')}
                >
                  Sign in with Username
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full 2xl:w-1/2 flex flex-col justify-between 2xl:pl-4 2xl:items-center 2xl:justify-center relative overflow-hidden">
          <div className="flex-grow flex flex-col justify-center">
            <form className="flex flex-col w-full max-w-md mx-auto overflow-hidden">
              {activeTab === 'username' && (
                <>
                  <div className="mt-4 2xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center truncate"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 2xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center truncate"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {activeTab === 'create' && (
                <>
                  <div className="mt-4 2xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center truncate"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 2xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center truncate"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 2xl:mt-6">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2 text-center truncate"
                      htmlFor="repassword"
                    >
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="repassword"
                      placeholder="Re-enter your password"
                      className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      value={repassword}
                      onChange={(e) => setRepassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Error and Success Handling */}
              <div className="relative mt-4 2xl:mt-6">
                <div
                  className={`text-red-500 absolute inset-x-0 text-center transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}
                >
                  {error}
                </div>
                <div
                  className={`text-green-500 absolute inset-x-0 text-center transition-opacity duration-300  ${success ? 'opacity-100' : 'opacity-0'}`}
                >
                  {success}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 2xl:mt-12 flex flex-col items-center">
                {activeTab === 'username' && (
                  <>
                    <button
                      type="button"
                      className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full 2xl:w-auto mb-2"
                      onClick={handleSignIn}
                    >
                      SeeTek Sign In
                    </button>
                    <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow w-full 2xl:w-auto mt-2 flex justify-center items-center mb-6 2xl:mb-0"
                  onClick={handleSignInWithGoogle}
                >
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google logo"
                    className="h-6 w-6 mr-2"
                  />
                  Sign in with Google
                </button>
                  </>
                )}
                {activeTab === 'create' && (
                  <button
                    type="button"
                    className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full 2xl:w-auto mb-6 2xl:mb-0"
                    onClick={handleSignUp}
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Signup;
