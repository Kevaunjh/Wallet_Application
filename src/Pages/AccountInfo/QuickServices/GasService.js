import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function GasService() {
  const [serviceProvider, setServiceProvider] = useState('');
  const selectCounter = useState('');
  const scNo = useState('');
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




  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    checkFieldsFilled(serviceProvider, value, date);
  };




  const customerId = useState('');
  const waterSystemName = useState('');
  const [date, setDate] = useState('');
  const [selectedTab, setSelectedTab] = useState('gas');

  const [fieldsFilled, setFieldsFilled] = useState(true);


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
    if (selectedTab === 'gas') {
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
                  <option value="alaska">Alaska</option>
                  <option value="arizona">Arizona</option>
                  <option value="arkansas">Arkansas</option>
                  <option value="california">California</option>
                  <option value="colorado">Colorado</option>
                  <option value="connecticut">Connecticut</option>
                  <option value="delaware">Delaware</option>
                  <option value="florida">Florida</option>
                  <option value="georgia">Georgia</option>
                  <option value="hawaii">Hawaii</option>
                  <option value="idaho">Idaho</option>
                  <option value="illinois">Illinois</option>
                  <option value="indiana">Indiana</option>
                  <option value="iowa">Iowa</option>
                  <option value="kansas">Kansas</option>
                  <option value="kentucky">Kentucky</option>
                  <option value="louisiana">Louisiana</option>
                  <option value="maine">Maine</option>
                  <option value="maryland">Maryland</option>
                  <option value="massachusetts">Massachusetts</option>
                  <option value="michigan">Michigan</option>
                  <option value="minnesota">Minnesota</option>
                  <option value="mississippi">Mississippi</option>
                  <option value="missouri">Missouri</option>
                  <option value="montana">Montana</option>
                  <option value="nebraska">Nebraska</option>
                  <option value="nevada">Nevada</option>
                  <option value="new-hampshire">New Hampshire</option>
                  <option value="new-jersey">New Jersey</option>
                  <option value="new-mexico">New Mexico</option>
                  <option value="new-york">New York</option>
                  <option value="north-carolina">North Carolina</option>
                  <option value="north-dakota">North Dakota</option>
                  <option value="ohio">Ohio</option>
                  <option value="oklahoma">Oklahoma</option>
                  <option value="oregon">Oregon</option>
                  <option value="pennsylvania">Pennsylvania</option>
                  <option value="rhode-island">Rhode Island</option>
                  <option value="south-carolina">South Carolina</option>
                  <option value="south-dakota">South Dakota</option>
                  <option value="tennessee">Tennessee</option>
                  <option value="texas">Texas</option>
                  <option value="utah">Utah</option>
                  <option value="vermont">Vermont</option>
                  <option value="virginia">Virginia</option>
                  <option value="washington">Washington</option>
                  <option value="west-virginia">West Virginia</option>
                  <option value="wisconsin">Wisconsin</option>
                  <option value="wyoming">Wyoming</option>
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
                  <option value="midgrade">$4.99 - midgrade</option>
                  <option value="premium">$5.99 - Premium/Super</option>
                  <option value="diesel">$6.99 - Diesel</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center ">
            <Link
              to="/QuickServices/PayYourBill/PayGas"
              className={`px-12 py-4 mt-8 mb-8 rounded-2xl text-lg text-white w-36 ${
                isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
              } transition-opacity duration-[1500ms] flex justify-center items-center`}
            >
              Show
            </Link>
          </div>
        </>
      );
    } else if (selectedTab === 'air') {
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
                <option value="">Select an Airline</option>
                <option value="delta">Delta Air Lines</option>
                <option value="american">American Airlines</option>
                <option value="united">United Airlines</option>
                <option value="southwest">Southwest Airlines</option>
                <option value="jetblue">JetBlue Airways</option>
                <option value="alaska">Alaska Airlines</option>
                <option value="spirit">Spirit Airlines</option>
                <option value="frontier">Frontier Airlines</option>
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
              to="/QuickServices/PayYourBill/PayGas"
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
    <div className="WaterService bg-white min-h-screen flex flex-col justify-center items-center w-screen overflow-x-hidden">

      <div className="bg-white  flex flex-col items-center w-screen min-h-screen   mx-auto overflow-x-hidden">
        <div className="w-screen flex justify-between">
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


        <div className="w-screen flex justify-start mb-4 mt-12 ml-16">
          <Link to="/Main" className=" rounded-full  p-2  bg-[#467a4d] text-white ">
            &larr; Back
          </Link>
        </div>


        <h1 className="text-3xl font-bold text-[#467a4d] mb-8 mt-8">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </h1>


        <form className="w-screen px-16 2xl:w-8/12">
          {renderForm()}
        </form>
      </div>
    </div>
  );
}

export default GasService;
