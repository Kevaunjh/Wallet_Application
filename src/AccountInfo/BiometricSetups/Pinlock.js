import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Pinlock() {
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [reEnterNewPin, setReEnterNewPin] = useState('');
  const [pinsMatch, setPinsMatch] = useState(true);
  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleNewPinChange = (e) => {
    const value = e.target.value;
    setNewPin(value);
    checkValidity(value, reEnterNewPin);
  };

  const handleReEnterNewPinChange = (e) => {
    const value = e.target.value;
    setReEnterNewPin(value);
    checkValidity(newPin, value);
  };

  const handleOldPinChange = (e) => {
    const value = e.target.value;
    setOldPin(value);
    checkValidity(newPin, reEnterNewPin, value);
  };

  const checkValidity = (newPin, reEnterNewPin, oldPin = '') => {
    setPinsMatch(newPin === reEnterNewPin);
    setFieldsFilled(oldPin && newPin && reEnterNewPin);
  };

  const isProceedEnabled = pinsMatch && fieldsFilled && oldPin.trim() !== '';

  return (
    <div className="Pinlock bg-[#88ca92] min-h-screen flex flex-col justify-center items-center p-8">
      {/* Container for Title, Back Button, Form, and Proceed Button */}
      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/MyAccount" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
          PIN Lock Setup
        </h1>

        {/* Setup Instructions */}
        <p className="text-lg text-center mb-8 font-semibold">
          Enter a unique combination of digits for your PIN.
        </p>

        {/* PIN Form */}
        <form className="w-full">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="oldPin">
              Old PIN
            </label>
            <input
              type="password"
              id="oldPin"
              value={oldPin}
              onChange={handleOldPinChange}
              placeholder="xxxxxxxxxxx"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="newPin">
              New PIN
            </label>
            <input
              type="password"
              id="newPin"
              value={newPin}
              onChange={handleNewPinChange}
              placeholder="xxxxxxxxxxx"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="reEnterNewPin">
              Re-Enter New PIN
            </label>
            <input
              type="password"
              id="reEnterNewPin"
              value={reEnterNewPin}
              onChange={handleReEnterNewPinChange}
              placeholder="xxxxxxxxxxx"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {!pinsMatch && newPin && reEnterNewPin && (
              <p className="text-red-500 text-sm mt-2">PINs do not match.</p>
            )}
          </div>
        </form>

        {/* Proceed Button */}
        <Link
          to={isProceedEnabled ? "/AccountInfo/BiometricSetups/Pinlockconfirmation/SetupSuccess" : "#"}
          className={`px-12 py-4 mt-8 rounded-2xl text-lg text-white ${
            isProceedEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms]`}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default Pinlock;
