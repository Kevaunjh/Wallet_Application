import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function InternetService() {
  const [serviceProvider, setServiceProvider] = useState('');
  const [username, setUsername] = useState('');
  const [date, setDate] = useState('');

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleServiceProviderChange = (e) => {
    const value = e.target.value;
    setServiceProvider(value);
    checkFieldsFilled(value, username, date);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    checkFieldsFilled(serviceProvider, value, date);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    checkFieldsFilled(serviceProvider, username, value);
  };

  const checkFieldsFilled = (serviceProvider, username, date) => {
    setFieldsFilled(serviceProvider && username && date);
  };

  const isShowEnabled = fieldsFilled;

  return (
    <div className="InternetService bg-white min-h-screen flex flex-col justify-center items-center p-8">

      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto shadow-black border-black border-2">
        <div className="w-full flex justify-start mb-4">
          <Link to="/" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
          Internet Service
        </h1>
        <form className="w-full">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="serviceProvider">
              Service Provider
            </label>
            <div className="relative">
              <select
                id="serviceProvider"
                value={serviceProvider}
                onChange={handleServiceProviderChange}
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select a Provider</option>
                <option value="comcast">Comcast</option>
                <option value="verizon">Verizon</option>
                <option value="spectrum">Spectrum</option>
                <option value="att">AT&T</option>
                <option value="centurylink">CenturyLink</option>
                <option value="cox">Cox</option>
                <option value="googlefiber">Google Fiber</option>
                <option value="frontier">Frontier</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="date">
              Date (MM/YYYY)
            </label>
            <input
              type="month"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
        <Link
          to="/QuickServices/PayYourBill/PayInternet"
          className={`px-12 py-4 mt-8 rounded-2xl text-lg text-white ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms]`}
        >
          Show
        </Link>
      </div>
    </div>
  );
}

export default InternetService;
