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
    <div className="bg-[#88ca92] h-screen flex items-center justify-center xl:p-8">
      {/* Container */}
      <div className="bg-white p-6 md:p-12 xl:rounded-3xl shadow-2xl w-full xl:max-w-4xl min-h-screen  xl:h-[80vh] flex flex-col justify-center shadow-black border-black border-2 relative">
        {/* Back Button */}
        <div className="absolute top-12 left-12">
          <Link to="/Main" className="text-lg rounded-full  p-2  bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>

        {/* Set Amount Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Set Amount</h2>
          <div className="text-2xl md:text-3xl font-bold mb-4 text-black">
            ${selectedAmount}
          </div>
          <hr className="mb-6 border-gray-400" />
          <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
  className={`px-4 md:px-6 py-2 md:py-3 border-2 border-[#467a4d] text-base md:text-lg rounded-lg ${
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
        <div className="mb-6">
          <label className="block text-base md:text-lg font-medium mb-2">Mobile Carrier</label>
          <select className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-base md:text-lg">
            <option value="">Select Mobile Carrier</option>
            <option value="carrier1">Fido</option>
            <option value="carrier2">Bell</option>
            <option value="carrier3">Rogers</option>
            <option value="carrier4">T Mobile</option>
            <option value="carrier5">Freedom</option>
          </select>
        </div>
        <div className="mb-6">
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
              className="px-8 md:px-12 py-2 md:py-4 bg-[#467a4d] text-white rounded-2xl text-base md:text-lg"
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
