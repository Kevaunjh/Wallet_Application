import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopUpService() {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileCarrier, setMobileCarrier] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');


  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setIsModalOpen(false);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleSaveCustomAmount = () => {
    setSelectedAmount(Number(customAmount));
    setIsModalOpen(false);
  };


  const isPhoneNumberValid = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
  };

  const allFieldsFilled = mobileCarrier && mobileNumber && isPhoneNumberValid(mobileNumber);

  return (
    <div className="bg-white h-screen flex items-center justify-center">


      <div className="bg-white min-h-screen overflow-hidden p-6  w-full h-screen flex flex-col relative 2xl:items-center">
        <div className="w-full flex justify-start mb-4 mt-3">
          <Link to="/Main" className=" rounded-full  p-2  bg-[#467a4d] text-white -mt-2 ml-2  ">
            &larr; Back
          </Link>
        </div>

        <div className="text-center mb-6 2xl:w-8/12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 xl:mt-10">Set Amount</h2>
          <div className="text-2xl md:text-3xl font-bold mb-4 text-black">
            ${selectedAmount}
          </div>
          <hr className="mb-6 border-gray-400" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${selectedAmount === 5 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
                }`}
              onClick={() => handleAmountClick(5)}
            >
              $5
            </button>
            <button
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${selectedAmount === 10 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
                }`}
              onClick={() => handleAmountClick(10)}
            >
              $10
            </button>
            <button
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${selectedAmount === 15 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
                }`}
              onClick={() => handleAmountClick(15)}
            >
              $15
            </button>
            <button
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${customAmount !== '' || selectedAmount !== 5 && selectedAmount !== 10 && selectedAmount !== 15 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
                }`}
              onClick={() => setIsModalOpen(true)}
            >
              Custom
            </button>
          </div>
        </div>

        <div className="mb-6 2xl:w-8/12">
          <label className="block text-base md:text-lg font-medium mb-2">Mobile Carrier</label>
          <select
            className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg"
            value={mobileCarrier}
            onChange={(e) => setMobileCarrier(e.target.value)}
          >
            <option value="">Select Mobile Carrier</option>
            <option value="verizon">Verizon</option>
            <option value="att">AT&T</option>
            <option value="tmobile">T-Mobile</option>
            <option value="sprint">Sprint</option>
            <option value="uscellular">U.S. Cellular</option>
            <option value="boost">Boost Mobile</option>
            <option value="cricket">Cricket Wireless</option>
            <option value="metro">Metro by T-Mobile</option>
          </select>
        </div>
        <div className="mb-6 2xl:w-8/12">
          <label className="block text-base md:text-lg font-medium mb-2">Mobile Number</label>
          <input
            type="tel"
            placeholder="XXXXXXXXXX"
            className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
            pattern="[0-9]{10}"
          />
        </div>

        <div className="w-full flex justify-center">
          <Link
            to={allFieldsFilled ? "/QuickServices/PayYourBill/TopUpPayment" : "#"}
            className={`px-10 py-4 rounded-2xl text-base md:text-lg mb-8 ${allFieldsFilled ? 'bg-[#467a4d] text-white' : 'bg-[#467a4d] opacity-50 cursor-not-allowed'
              } transition-opacity duration-[1500ms]`}
            onClick={(e) => {
              if (!allFieldsFilled) e.preventDefault();
            }}
          >
            Show
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm">
            <button
              className="absolute top-2 right-2 text-gray-600 text-lg md:text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-lg md:text-xl font-bold mb-4">Enter Custom Amount</h3>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg mb-4"
            />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <button
                className="px-4 md:px-6 py-2 md:py-3 bg-[#467a4d] text-white rounded-lg"
                onClick={handleSaveCustomAmount}
              >
                Save
              </button>
              <button
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-400 text-white rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopUpService;
