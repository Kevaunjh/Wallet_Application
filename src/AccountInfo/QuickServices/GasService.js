import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function GasService() {
  const [state, setState] = useState('');
  const [gasStation, setGasStation] = useState('');
  const [price, setPrice] = useState('');
  const [activeTab, setActiveTab] = useState('form'); // New state for tab navigation

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
    checkFieldsFilled(value, gasStation, price);
  };

  const handleGasStationChange = (e) => {
    const value = e.target.value;
    setGasStation(value);
    checkFieldsFilled(state, value, price);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    checkFieldsFilled(state, gasStation, value);
  };

  const checkFieldsFilled = (state, gasStation, price) => {
    setFieldsFilled(state && gasStation && price);
  };

  const isShowEnabled = fieldsFilled;

  return (
    <div className="GasService bg-[#88ca92] min-h-screen flex flex-col justify-center items-center p-8">
      
      {/* Container for Tabs */}
      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto shadow-black border-black border-2">
      <div className="w-full flex justify-start mb-4">
              <Link to="/" className="text-lg text-[#467a4d]">
                &larr; Back
              </Link>
            </div>
        {/* Tabs Navigation */}
        <div className="w-full flex mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 text-lg py-2 text-center ${activeTab === 'form' ? 'border-b-2 border-[#467a4d] font-bold' : 'text-gray-600'}`}
          >
            Form
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 text-lg py-2 text-center ${activeTab === 'info' ? 'border-b-2 border-[#467a4d] font-bold' : 'text-gray-600'}`}
          >
            Info
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'form' && (
          <div className="w-full">
            {/* Back Button */}
            

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
              Gas Service
            </h1>

            {/* Gas Service Form */}
            <form className="w-full">
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="state">
                  State
                </label>
                <div className="relative">
                  <select
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
                  >
                    <option value="">Select a State</option>
                    <option value="alabama">Alabama</option>
                    {/* other options */}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="gasStation">
                  Gas Station
                </label>
                <input
                  type="text"
                  id="gasStation"
                  value={gasStation}
                  onChange={handleGasStationChange}
                  placeholder="Enter Gas Station"
                  className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <div className="relative">
                  <select
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
                  >
                    <option value="">Select a Price</option>
                    <option value="regular">$3.99 - Regular</option>
                    {/* other options */}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </form>

            {/* Show Button as Link */}
            <Link
              to="/QuickServices/PayYourBill/PayGas" // Replace with the actual route you want to link to
              className={`px-12 py-4 mt-8 rounded-2xl text-lg text-white ${
                isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
              } transition-opacity duration-[1500ms]`}
            >
              Show
            </Link>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="w-full">
            {/* Info Tab Content */}
            <h2 className="text-2xl font-bold text-[#467a4d] mb-6">
              Information
            </h2>
            <p className="text-lg text-gray-700">
              This is the information tab where you can provide additional details about the gas service or any other relevant information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GasService;
