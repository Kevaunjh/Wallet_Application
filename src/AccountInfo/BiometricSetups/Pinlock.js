import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pinlock() {
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [reEnterNewPin, setReEnterNewPin] = useState('');
  const [pinsMatch, setPinsMatch] = useState(true);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [pinValid, setPinValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [touched, setTouched] = useState({
    newPin: false,
    reEnterNewPin: false,
  });

  useEffect(() => {
    const checkValidity = () => {
      let error = '';

      // Check if PINs are filled and valid
      if (newPin.length > 0 || reEnterNewPin.length > 0) {
        if (newPin.length < 6) {
          error = 'PIN must be at least 6 characters long.';
        } else if (newPin !== reEnterNewPin) {
          error = 'PINs do not match.';
        }
      }

      setErrorMessage(error);

      const allFieldsFilled = oldPin.length > 0 && newPin.length > 0 && reEnterNewPin.length > 0;
      setPinValid(newPin.length >= 6);
      setPinsMatch(newPin === reEnterNewPin);
      setFieldsFilled(allFieldsFilled && pinValid && pinsMatch);
    };

    checkValidity();
  }, [oldPin, newPin, reEnterNewPin, pinValid, pinsMatch]);

  const handleNewPinChange = (e) => {
    setNewPin(e.target.value);
    setTouched({ ...touched, newPin: true });
  };

  const handleReEnterNewPinChange = (e) => {
    setReEnterNewPin(e.target.value);
    setTouched({ ...touched, reEnterNewPin: true });
  };

  const handleOldPinChange = (e) => {
    setOldPin(e.target.value);
  };

  // Determine if error message should be displayed
  const showError = touched.newPin || touched.reEnterNewPin;

  return (
    <div className="Pinlock bg-white min-h-screen flex flex-col justify-center items-center">


      <div className="bg-white p-8  flex flex-col items-center w-screen mx-auto flex-grow ">
        <div className="w-full flex justify-start mb-12">
          <Link to="/MyAccount" className=" rounded-full p-2 bg-[#467a4d] text-white ">
            &larr; Back
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
          PIN Lock Setup
        </h1>

        <p className="text-lg text-center mb-8 font-semibold">
          Enter a unique combination of characters for your PIN (6 or more characters).
        </p>

        <form className="w-full flex-grow 2xl:w-8/12">
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
          </div>

          {/* Combined Error Message */}
          <p
            className={`text-red-500 text-sm mt-2 ${showError && errorMessage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          >
            {errorMessage}
          </p>
        </form>

        <Link
          to={fieldsFilled ? "/AccountInfo/BiometricSetups/Pinlockconfirmation/SetupSuccess" : "#"}
          className={`px-12 py-4 mt-8 rounded-2xl text-lg text-white ${
            fieldsFilled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms]`}
          onClick={(e) => {
            if (!fieldsFilled) e.preventDefault();
          }}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default Pinlock;
