import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/seeteklogo.png';
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase';
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
      await signInWithPopup(auth, provider);
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
    // Add error handling and regex validation
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
        // Create a new user with a dummy email
        const userCredential = await createUserWithEmailAndPassword(auth, username + '@example.com', password);
        const user = userCredential.user;

        // Push user data to Firebase Realtime Database
        const userRef = ref(db, 'users/' + user.uid);
        await set(userRef, {
            username: username
        });

        console.log("User data written to Realtime Database");
        
        // Redirect to /Main after successful sign-up
        navigate('/Main');
    } catch (error) {
        console.error("Error creating user:", error);

        // Check for specific Firebase error codes
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
    <div className="xl:min-h-screen bg-[#88ca92] flex items-center justify-center">
      <div className="bg-white border-2 xl:border-black w-full min-h-screen xl:w-1/2 xl:h-[65vh] xl:max-h-[65vh] xl:min-h-[65vh] p-8 xl:rounded-3xl flex flex-col xl:flex-row">
        {/* Left Side */}
        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center xl:items-center xl:justify-center xl:border-r-2 xl:border-black">
          <div className="w-full text-center xl:text-center mt-20 xl:mt-0">
            <img src={logo} alt="SeeTek Logo" className="h-28 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-gray-700 mb-2">
              {activeTab === 'username' && 'Sign in with Username'}
              {activeTab === 'create' && 'Create Account'}
            </h2>
          </div>
          <div className="text-center xl:text-center text-blue-600">
            {activeTab === 'username' && (
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleTabSwitch('create')}
                >
                  Create Account
                </span>
              </div>
            )}
            {activeTab === 'create' && (
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => handleTabSwitch('username')}
                >
                  Sign in with Username
                </span>
              </div>
            )}
          </div>
          {activeTab === 'username' && (
            <button
              type="button"
              className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4"
              onClick={handleSignInWithGoogle}
            >
              Sign in with Google
            </button>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-1/2 flex flex-col justify-between xl:pl-4 xl:items-center xl:justify-center relative">
          <div className="flex-grow flex flex-col justify-center">
            <form className="flex flex-col w-full max-w-md mx-auto">
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      value={repassword}
                      onChange={(e) => setRepassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Error and Success Handling */}
              <div className="relative mt-4 xl:mt-6">
                <div
                  className={`text-red-500 absolute inset-x-0 text-center transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}
                >
                  {error}
                </div>
                <div
                  className={`text-green-500 absolute inset-x-0 text-center transition-opacity duration-300 ${success ? 'opacity-100' : 'opacity-0'}`}
                >
                  {success}
                </div>
              </div>

              <div className="flex items-center justify-center mt-8">
                {activeTab === 'username' && (
                  <button
                    type="button"
                    className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                )}
                {activeTab === 'create' && (
                  <button
                    type="button"
                    className="bg-[#467a4d] hover:bg-[#3a643e] text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mt-8"
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
  );
};

export default Signup;
