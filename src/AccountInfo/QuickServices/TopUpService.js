import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fingerprintIcon from './../../images/fingerprint-scan.png'; // Adjust the path to your image file

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
    <div className="bg-[#88ca92] min-h-screen flex items-center justify-center p-8">
      {/* Container */}
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col justify-center">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>

        {/* Set Amount Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">Set Amount</h2>
          <div className="text-3xl font-bold mb-4 text-black">
            ${selectedAmount}
          </div>
          <hr className="mb-6 border-gray-400" />
          <div className="flex justify-center gap-4 mb-6">
            <button
              className="px-6 py-3 bg-white border-2 border-[#467a4d] text-[#467a4d] rounded-lg text-lg"
              onClick={() => handleAmountClick(5)}
            >
              $5
            </button>
            <button
              className="px-6 py-3 bg-white border-2 border-[#467a4d] text-[#467a4d] rounded-lg text-lg"
              onClick={() => handleAmountClick(10)}
            >
              $10
            </button>
            <button
              className="px-6 py-3 bg-white border-2 border-[#467a4d] text-[#467a4d] rounded-lg text-lg"
              onClick={() => handleAmountClick(15)}
            >
              $15
            </button>
            <button
              className="px-6 py-3 bg-white border-2 border-[#467a4d] text-[#467a4d] rounded-lg text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Custom
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Mobile Carrier</label>
          <select className="w-full px-4 py-3 border rounded-lg text-lg">
            <option value="">Select Mobile Carrier</option>
            <option value="carrier1">Fido</option>
            <option value="carrier2">Bell</option>
            <option value="carrier3">Rogers</option>
            <option value="carrier4">T Mobile</option>
            <option value="carrier5">Freedom</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            placeholder="XXXXXXX"
            className="w-full px-4 py-3 border rounded-lg text-lg"
          />
        </div>

        {/* Done Button */}
        <div className="w-full flex justify-center">
          <Link to="/QuickServices/PayYourBill/TopUpPayment">
          <button
            className="px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg"
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
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Enter Custom Amount</h3>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              className="w-full px-4 py-3 border rounded-lg text-lg mb-4"
            />
            <div className="flex justify-between">
              <button
                className="px-6 py-3 bg-[#467a4d] text-white rounded-lg"
                onClick={handleSaveCustomAmount}
              >
                Save
              </button>
              <button
                className="px-6 py-3 bg-gray-400 text-white rounded-lg"
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
