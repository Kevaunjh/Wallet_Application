import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      cardNumber,
      cardHolder,
      expiryDate,
      cvv,
      bankName,
    });
  };

  return (
    <div className="bg-[#88ca92] h-screen flex items-center justify-center">
      <div className="bg-white p-8 lg:rounded-xl w-full 2xl:max-w-2xl shadow-2xl 2xl:shadow-black 2xl:border-black 2xl:border-2 2xl:h-auto flex flex-col justify-between min-h-screen relative">
        {/* Back Button visible on XL screens and larger */}
        <Link
          to="/Accountinfo/BankAccounts"
          className="hidden 2xl:block absolute top-10 left-10 text-black text-lg bg-white px-3 py-1 rounded-md shadow-md border-black border-2 z-10"
        >
          &larr; Back
        </Link>

        {/* Mobile Back Button with absolute positioning */}
        <Link
          to="/Accountinfo/BankAccounts"
          className="block 2xl:hidden absolute mt-[3.55rem]  text-white bg-[#467a4d] p-2 rounded-full z-20"
        >
          &larr; Back
        </Link>

        <h2 className="text-3xl font-bold mb-6 text-center text-[#467a4d] mt-44 2xl:mt-0">Add a Bank Card</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="text-gray-700 text-lg font-bold block">Card Number</label>
            <input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="cardHolder" className="text-gray-700 text-lg font-bold block">Card Holder</label>
            <input
              id="cardHolder"
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="text-gray-700 text-lg font-bold block">Expiry Date</label>
            <input
              id="expiryDate"
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="text-gray-700 text-lg font-bold block">CVV</label>
            <input
              id="cvv"
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="bankName" className="text-gray-700 text-lg font-bold block">Bank Name</label>
            <input
              id="bankName"
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 mt-4 rounded-3xl text-white bg-[#467a4d] hover:bg-[#356638] transition duration-300 w-36 h-16 mb-8"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
