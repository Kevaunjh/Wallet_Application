import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function GiftService() {
  const [amount, setAmount] = useState('');
  const [purchase, setPurchase] = useState('Coupon');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const [fieldsFilled, setFieldsFilled] = useState(true);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    checkFieldsFilled(purchase, e.target.value, email, company);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkFieldsFilled(purchase, amount, e.target.value, company);
  };

  const handlePurchaseChange = (e) => {
    setPurchase(e.target.value);
    checkFieldsFilled(e.target.value, amount, email, company);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    checkFieldsFilled(purchase, amount, email, e.target.value);
  };

  const checkFieldsFilled = (amount, email, company) => {
    setFieldsFilled(purchase, amount && email && company);
  };

  const isShowEnabled = fieldsFilled;

  return (
    <div className="GiftService bg-white h-screen flex flex-col justify-center items-center  ">
      <div className="bg-white overflow-auto p-16  flex flex-col items-center w-screen min-h-screen  mx-auto border-2 h-full">
        <div className="w-full flex justify-start mb-4 mr-20 -mt-9">
          <Link to="/Points" className="rounded-full  p-2  bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-[#467a4d] mb-8 mt-8">
          Point Purchase
        </h1>
        <form className="w-full 2xl:w-8/12 2xl:mx-auto">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="company">
              Type Of Purchase
            </label>
            <div className="relative">
              <select
                id="purchase"
                value={purchase}
                onChange={handlePurchaseChange}
                className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
              >
                <option value="amazon">Coupon</option>
                <option value="walmart">Giftcard</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
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
        <Link
          to="/QuickServices/PayYourBill/PayGift"
          className={`px-12 py-4 mt-8 rounded-2xl text-lg text-white ${isShowEnabled ? 'bg-[#467a4d]' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
            } transition-opacity duration-[1500ms]`}
        >
          Show
        </Link>
      </div>
    </div>
  );
}

export default GiftService;
