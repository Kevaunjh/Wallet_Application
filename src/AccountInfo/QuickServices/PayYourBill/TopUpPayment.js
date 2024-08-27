import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import checkMarkImage from './../../../images/checked.png'; // Add your check mark image path
import fingerprintIcon from './../../../images/fingerprint-scan.png'; // Adjust the path to your image file

// Dummy data to simulate card information
const cardData = {
  cardNumber: '1234 5678 9101 / XXXX',
};

function TopUpPayment() {
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

  const now = new Date();
  const dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

  const getTotalAmount = () => (Math.random() * (299 - 1) + 1).toFixed(2);
  const totalAmount = getTotalAmount();

  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center ">
      {/* White Container */}
      <div className="bg-white p-8  h-screen w-screen">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/QuickServices/TopUpService" className="  rounded-full p-2 bg-[#467a4d] text-white">
            &larr; Back
          </Link>
        </div>

        {/* Check Mark Image at the Top */}
        

        {/* Payment Details Container */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full 2xl:mx-auto 2xl:w-8/12">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <h4>Please review the payment details below.</h4>
        </div>

        {/* Customer Information Container */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full mt-0 2xl:mx-auto 2xl:w-8/12">
          <p className="text-lg mb-2"><strong>Date/Time:</strong> {dateTime}</p>
          <p className="text-lg mb-2"><strong>Total Amount:</strong> ${totalAmount}</p>
          <p className="text-lg mb-2"><strong>Payment Attribute:</strong> {cardData.cardNumber}</p>
          <p className="text-lg mb-2"><strong>Service Name:</strong> Water Service</p>
          <p className="text-lg mb-2"><strong>Mobile Number:</strong> 555-123-4567</p>
          <p className="text-lg mb-2"><strong>Initiator:</strong> {cardData.cardNumber}</p>
          <div className="border-t-2 border-dashed border-gray-400 mt-6 mb-4"></div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total Charge:</span>
            <span>${totalAmount}</span>
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

export default TopUpPayment;
