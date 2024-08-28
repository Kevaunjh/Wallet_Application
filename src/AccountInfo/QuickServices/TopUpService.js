import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TopUpService() {
  const [selectedAmount, setSelectedAmount] = useState(5); // Default to $5
  const [customAmount, setCustomAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFingerprintModalOpen, setIsFingerprintModalOpen] = useState(false);
  const [isFingerprintDetected, setIsFingerprintDetected] = useState(false);

  const navigate = useNavigate();

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when a predefined amount is selected
    setIsModalOpen(false); // Close the modal if a predefined amount is selected
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleSaveCustomAmount = () => {
    setSelectedAmount(Number(customAmount));
    setIsModalOpen(false);
  };

  const handleCompleteTransaction = () => {
    setIsFingerprintModalOpen(true);
  };

  const handleFingerprintClick = () => {
    setIsFingerprintDetected(true);
  };

  const handleFingerprintOrOtp = () => {
    navigate('/QuickServices/PayYourBill/TopUpPayment'); // Navigate to the TopUpPayment page
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center ">

      {/* Container */}
      <div className="bg-white min-h-screen overflow-hidden p-6 md:p-12  w-full h-screen flex flex-col justify-center relative 2xl:items-center">
        {/* Back Button */}
        <div className="absolute top-10 left-10 ">
          <Link to="/Main" className=" rounded-full p-[0.55rem] bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>

        {/* Set Amount Header */}
        <div className="text-center mb-6 2xl:w-8/12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 xl:mt-10">Set Amount</h2>
          <div className="text-2xl md:text-3xl font-bold mb-4 text-black">
            ${selectedAmount}
          </div>
          <hr className="mb-6 border-gray-400" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
  className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg  ${
    selectedAmount === 5 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
  }`}
  onClick={() => handleAmountClick(5)}
>
  $5
</button>
<button
  className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
    selectedAmount === 10 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
  }`}
  onClick={() => handleAmountClick(10)}
>
  $10
</button>
<button
  className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
    selectedAmount === 15 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
  }`}
  onClick={() => handleAmountClick(15)}
>
  $15
</button>
<button
  className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
    customAmount !== '' || selectedAmount !== 5 && selectedAmount !== 10 && selectedAmount !== 15 ? 'bg-[#d0e8d1] text-[#467a4d]' : 'bg-white text-[#467a4d]'
  }`}
  onClick={() => setIsModalOpen(true)}
>
  Custom
</button>

          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-6 2xl:w-8/12">
          <label className="block text-base md:text-lg font-medium mb-2">Mobile Carrier</label>
          <select className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg">
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
            type="text"
            placeholder="XXXXXXX"
            className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg"
          />
        </div>

        {/* Done Button */}
        <div className="w-full flex justify-center">
          <Link to="/QuickServices/PayYourBill/TopUpPayment">
            <button
              className="px-10 py-4 bg-[#467a4d] text-white rounded-2xl text-base md:text-lg mb-8"
              onClick={handleCompleteTransaction}
            >
              Done
            </button>
          </Link>
        </div>
      </div>

      {/* Custom Amount Modal */}
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
