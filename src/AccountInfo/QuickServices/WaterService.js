import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WaterService() {
  const [customerId, setCustomerId] = useState('');
  const [waterSystemName, setWaterSystemName] = useState('');
  const [date, setDate] = useState('');

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

  return (
    <div className="WaterService bg-[#88ca92] min-h-screen flex flex-col justify-center items-center p-8">
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
          Water Bill
        </h1>

        {/* Water Service Form */}
        <form className="w-full">
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
        </form>

        {/* Show Button as Link */}
        <Link
          to="/QuickServices/PayYourBill/PayWater" // Replace with the actual route you want to link to
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

export default WaterService;
