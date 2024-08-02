import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function GasService() {
  const [state, setState] = useState('');
  const [gasStation, setGasStation] = useState('');
  const [price, setPrice] = useState('');

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
                <option value="mid-grade">$4.99 - Mid-Grade</option>
                <option value="premium">$5.99 - Premium</option>
                <option value="diesel">$6.99 - Diesel</option>
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
    </div>
  );
}

export default GasService;
