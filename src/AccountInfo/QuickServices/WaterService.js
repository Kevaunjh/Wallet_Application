import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function WaterService() {
  const [serviceProvider, setServiceProvider] = useState('');
  const [selectCounter, setSelectCounter] = useState('');
  const [scNo, setScNo] = useState('');
  const [username, setUsername] = useState('');

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
  const [selectedTab, setSelectedTab] = useState('water');

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
      case 'water':
        return (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="customerId">
                Customer ID
              </label>
              <input
                type="text"
                id="customerId"
                value={customerId}
                onChange={handleCustomerIdChange}
                placeholder="Enter Customer ID"
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="waterSystemName">
                Water System Name
              </label>
              <input
                type="text"
                id="waterSystemName"
                value={waterSystemName}
                onChange={handleWaterSystemNameChange}
                placeholder="Enter Water System Name"
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-center items-center ">
          <Link
          to="/QuickServices/PayYourBill/PayWater" // Replace with the actual route you want to link to
           className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms] flex justify-center items-center`}
          >
          Show
          </Link>
        </div>
          </>
        );
      case 'internet':
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
          to="/QuickServices/PayYourBill/PayInternet" // Replace with the actual route you want to link to
           className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms] flex justify-center items-center`}
          >
          Show
          </Link>
        </div>
          </>
        );
      case 'electricity':
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
          <div className="flex justify-center items-center ">
          <Link
          to="/QuickServices/PayYourBill/PayLight" // Replace with the actual route you want to link to
           className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
            isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
          } transition-opacity duration-[1500ms] flex justify-center items-center`}
          >
          Show
          </Link>
        </div>

          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="WaterService bg-[#88ca92] min-h-screen flex flex-col justify-center items-center xl:p-8">
      <div className="bg-white xl:rounded-3xl shadow-2xl flex flex-col items-center w-full xl:max-w-3xl h-[100vh] mx-auto xl:shadow-black xl:border-black xl:border-2">
        {/* Tabs */}
        <div className="w-full flex justify-between xl:mt-0">
          <button
            className={`w-1/3 py-4 text-center rounded-tl-3xl ${selectedTab === 'water' ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTab('water')}
          >
            Water
          </button>
          <button
            className={`w-1/3 py-4 text-center ${selectedTab === 'internet' ? 'bg-white ' : 'bg-gray-200'}`}
            onClick={() => setSelectedTab('internet')}
          >
            Internet
          </button>
          <button
            className={`w-1/3 py-4 text-center rounded-tr-3xl ${selectedTab === 'electricity' ? 'bg-white ' : 'bg-gray-200'}`}
            onClick={() => setSelectedTab('electricity')}
          >
            Electricity
          </button>
        </div>

        {/* Back Button */}
        <div className="w-full flex justify-start mb-4 mt-12 px-8">
          <Link to="/" className="text-lg rounded-full  p-2  bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Bill
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
