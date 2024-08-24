import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function GiftService() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    checkFieldsFilled(e.target.value, email, company);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkFieldsFilled(amount, e.target.value, company);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    checkFieldsFilled(amount, email, e.target.value);
  };

  const checkFieldsFilled = (amount, email, company) => {
    setFieldsFilled(amount && email && company);
  };

  const isShowEnabled = fieldsFilled;

  return (
    <div className="GiftService bg-[#88ca92] h-screen flex flex-col justify-center items-center xl:p-8 ">
       <Link
          to="/Main"
          className="hidden xl:block absolute top-10 left-10 2xl:text-black text-lg bg-white px-3 py-1 rounded-md 2xl:shadow-md 2xl:border-black 2xl:border-2 z-10"
        >
          ← Back
        </Link>
      {/* Container for Title, Back Button, Form, and Show Button */}
      <div className="bg-white overflow-auto p-16 xl:rounded-3xl shadow-2xl flex flex-col items-center xl:w-7/12 w-screen min-h-screen xl:min-h-[750px]  xl:h-[750px]  xl:max-w-3xl mx-auto shadow-black border-black border-2 h-full">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/Main" className="text-lg rounded-full  p-2  bg-[#467a4d] text-white xl:hidden">
            &larr; Back
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8 mt-8">
          Gift Card Service
        </h1>

        {/* Gift Service Form */}
        <form className="w-full">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter Amount"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Email Address"
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="company">
              Company
            </label>
            <div className="relative">
              <select
                id="company"
                value={company}
                onChange={handleCompanyChange}
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="">Select a Company</option>
                <option value="amazon">Amazon</option>
                <option value="walmart">Walmart</option>
                <option value="target">Target</option>
                <option value="bestbuy">Best Buy</option>
                <option value="starbucks">Starbucks</option>
                <option value="itunes">iTunes</option>
                <option value="mcdonalds">McDonald's</option>
                <option value="home_depot">Home Depot</option>
                <option value="lowes">Lowe's</option>
                <option value="netflix">Netflix</option>
                <option value="google_play">Google Play</option>
                <option value="sephora">Sephora</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </form>

        {/* Show Button as Link */}
        <Link
          to="/QuickServices/PayYourBill/PayGift" // Replace with the actual route you want to link to
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

export default GiftService;
