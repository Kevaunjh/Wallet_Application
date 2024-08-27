import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import waterImage from './../../../images/waterservice.png'; // Adjust the path to your image file
import fingerprintIcon from './../../../images/fingerprint-scan.png'; // Adjust the path to your image file

function PayWater() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFingerprintClicked, setIsFingerprintClicked] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFingerprintClick = () => {
    setIsFingerprintClicked(true);
    setIsOtpSent(false); // Reset OTP state if fingerprint is clicked
  };

  const handleOtpClick = () => {
    setIsOtpSent(true);
    // No need to change fingerprint state
  };

  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center">
      {/* White Container */}
      <div className="bg-white p-8 w-screen h-screen ">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/QuickServices/WaterService" className=" rounded-full p-2 bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>

        {/* Image at the Top */}
        

        {/* Payment Details Container */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full mt-6 2xl:mx-auto 2xl:w-8/12">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <p className="text-lg">Please review the payment details below.</p>
        </div>

        {/* Customer Information Container */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full mb-6 mt-0 2xl:mx-auto 2xl:w-8/12">
          <div className="flex justify-between mb-4">
            <div>
              <span className="font-semibold">Customer ID:</span>
            </div>
            <div>
              <span className="font-semibold">Initiator:</span>
            </div>
          </div>
          <div className="flex justify-between mb-6">
            <div>123456789</div>
            <div>John Doe</div>
          </div>

          {/* Charges Section */}
          <div className="border-t-2 border-dashed border-gray-400 mt-6 mb-4"></div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Previous Balance:</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Adjustment:</span>
              <span>-$5.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Sewer:</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Service Charge:</span>
              <span>$2.00</span>
            </div>
          </div>
          <div className="border-t-2 border-dashed border-gray-400 mb-4"></div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total Charge:</span>
            <span>$57.00</span>
          </div>
        </div>

        {/* Pay Button */}
        <div className="w-full flex justify-center mt-12">
          <button
            className="px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg"
            onClick={handleOpenModal}
          >
            Pay
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={fingerprintIcon}
                alt="Fingerprint"
                className={`w-16 h-16 ${isFingerprintClicked || isOtpSent ? 'opacity-50 cursor-not-allowed' : 'opacity-50 cursor-pointer'}`}
                onClick={handleFingerprintClick}
              />
            </div>
            <p className="text-center text-lg mb-4">
              Please put your finger on the sensor to complete the transaction
            </p>

            <p className={`text-center text-green-500 cursor-pointer ${isOtpSent ? 'text-opacity-100' : 'text-opacity-50'}`} onClick={handleOtpClick}>
              Send OTP instead
            </p>

            <div className="w-full flex justify-center mt-6">
              <Link to="/AccountInfo/QuickServices/PayYourBill/TransactionResponse">
                <button
                  className={`px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg ${isFingerprintClicked || isOtpSent ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!isFingerprintClicked && !isOtpSent}
                >
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PayWater;
