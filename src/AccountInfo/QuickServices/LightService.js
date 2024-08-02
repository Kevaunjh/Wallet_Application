import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Add an indicator for the dropdown

function LightService() {
  const [serviceProvider, setServiceProvider] = useState('');
  const [selectCounter, setSelectCounter] = useState('');
  const [scNo, setScNo] = useState('');
  const [customerId, setCustomerId] = useState('');

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleServiceProviderChange = (e) => {
    const value = e.target.value;
    setServiceProvider(value);
    checkFieldsFilled(value, selectCounter, scNo, customerId);
  };

  const handleSelectCounterChange = (e) => {
    const value = e.target.value;
    setSelectCounter(value);
    checkFieldsFilled(serviceProvider, value, scNo, customerId);
  };

  const handleScNoChange = (e) => {
    const value = e.target.value;
    setScNo(value);
    checkFieldsFilled(serviceProvider, selectCounter, value, customerId);
  };

  const handleCustomerIdChange = (e) => {
    const value = e.target.value;
    setCustomerId(value);
    checkFieldsFilled(serviceProvider, selectCounter, scNo, value);
  };

  const checkFieldsFilled = (serviceProvider, selectCounter, scNo, customerId) => {
    setFieldsFilled(serviceProvider && selectCounter && scNo && customerId);
  };

  const isShowEnabled = fieldsFilled;

  return (
    <div className="LightService bg-[#88ca92] min-h-screen flex flex-col justify-center items-center p-8">
      {/* Container for Title, Back Button, Form, and Show Button */}
      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto shadow-black border-black border-2">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
          Electricity
        </h1>

        {/* Light Service Form */}
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
                <option value="provider1">Provider 1</option>
                <option value="provider2">Provider 2</option>
                <option value="provider3">Provider 3</option>
                <option value="provider4">Provider 4</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="selectCounter">
              Select Counter
            </label>
            <div className="relative">
              <select
                id="selectCounter"
                value={selectCounter}
                onChange={handleSelectCounterChange}
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select a Counter</option>
                <option value="counter1">Counter 1</option>
                <option value="counter2">Counter 2</option>
                <option value="counter3">Counter 3</option>
                <option value="counter4">Counter 4</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="scNo">
              SC No.
            </label>
            <input
              type="text"
              id="scNo"
              value={scNo}
              onChange={handleScNoChange}
              placeholder="XXXXXXXXXX"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="customerId">
              Customer ID
            </label>
            <input
              type="text"
              id="customerId"
              value={customerId}
              onChange={handleCustomerIdChange}
              placeholder="XXXXXXXXXX"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>

        {/* Show Button as Link */}
        <Link
          to="/QuickServices/PayYourBill/PayLight" // Replace with the actual route you want to link to
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

export default LightService;
