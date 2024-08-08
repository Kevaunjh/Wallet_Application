import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function WaterService() {
  const [serviceProvider, setServiceProvider] = useState('');
  const [selectCounter, setSelectCounter] = useState('');
  const [scNo, setScNo] = useState('');
  const [username, setUsername] = useState('');
  const [state, setState] = useState('');
  const [gasStation, setGasStation] = useState('');
  const [price, setPrice] = useState('');

  const handleGasStationChange = (e) => {
    const value = e.target.value;
    setGasStation(value);
    checkFieldsFilled(state, value, price);
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
    checkFieldsFilled(value, gasStation, price);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    checkFieldsFilled(state, gasStation, value);
  };

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

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    checkFieldsFilled(serviceProvider, value, date);
  };




  const [customerId, setCustomerId] = useState('');
  const [waterSystemName, setWaterSystemName] = useState('');
  const [date, setDate] = useState('');
  const [selectedTab, setSelectedTab] = useState('gas');

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleCustomerIdChange = (e) => {
    const value = e.target.value;
    setCustomerId(value);
    checkFieldsFilled(value, waterSystemName, date);
  };

  const handleWaterSystemNameChange = (e) => {
    const value = e.target.value;
    setWaterSystemName(value);
    checkFieldsFilled(customerId, value, date);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    checkFieldsFilled(customerId, waterSystemName, value);
  };

  const checkFieldsFilled = (customerId, waterSystemName, date) => {
    setFieldsFilled(customerId && waterSystemName && date);
  };

  const isShowEnabled = fieldsFilled;

  const renderForm = () => {
    switch (selectedTab) {
      case 'gas':
        return (
          <>
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
            <div className="flex justify-center items-center ">
          <Link
          to="/QuickServices/PayYourBill/PayGas" // Replace with the actual route you want to link to
           className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms] flex justify-center items-center`}
          >
          Show
          </Link>
        </div>
          </>
        );
      case 'air':
        return (
          <>
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
          <div className="flex justify-center items-center ">
          <Link
          to="/QuickServices/PayYourBill/PayGas" // Replace with the actual route you want to link to
           className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms] flex justify-center items-center`}
          >
          Show
          </Link>
        </div>
          </>
        );
    }
  };

  return (
    <div className="WaterService bg-[#88ca92] min-h-screen flex flex-col justify-center items-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-3xl mx-auto shadow-black border-black border-2">
        {/* Tabs */}
        <div className="w-full flex justify-between">
          <button
            className={`w-1/2 py-4 text-center rounded-tl-3xl ${selectedTab === 'gas' ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTab('gas')}
          >
            Gas
          </button>
          <button
            className={`w-1/2 py-4 text-center rounded-tr-3xl ${selectedTab === 'air' ? 'bg-white ' : 'bg-gray-200'}`}
            onClick={() => setSelectedTab('air')}
          >
            Air
          </button>

        </div>

        {/* Back Button */}
        <div className="w-full flex justify-start mb-4 mt-8 px-16">
          <Link to="/" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8 mt-8">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </h1>

        {/* Service Form */}
        <form className="w-full px-16">
          {renderForm()}
        </form>

        {/* Show Button as Link */}
        
      </div>
    </div>
  );
}

export default WaterService;
