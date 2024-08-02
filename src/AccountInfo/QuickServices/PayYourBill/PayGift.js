import React from 'react';
import { Link } from 'react-router-dom';
import checkMarkImage from './../../../images/checked.png'; // Add your check mark image path

// Dummy data to simulate card information
const cardData = {
  cardNumber: '1234 5678 9101 / XXXX',
};

function PayGift() {
  // Get current date and time
  const now = new Date();
  const dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

  const getTotalAmount = () => (Math.random() * (299 - 1) + 1).toFixed(2);
  const totalAmount = getTotalAmount();

  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center p-8">
      {/* White Container */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
        {/* Back Button */}
        <div className="w-full flex justify-start mb-4">
          <Link to="/QuickServices/WaterService" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
        </div>

        {/* Check Mark Image at the Top */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={checkMarkImage}
            alt="Transaction Successful"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Transaction Successful</h2>
          <p className="text-lg text-center">Your payment has successfully been completed.</p>
        </div>

        {/* Payment Details Container */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <h4>Please review the payment details below.</h4>
        </div>

        {/* Customer Information Container */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-full mt-0">
          <p className="text-lg mb-2"><strong>Date/Time:</strong> {dateTime}</p>
          <p className="text-lg mb-2"><strong>Total Amount:</strong> ${totalAmount}</p>
          <p className="text-lg mb-2"><strong>Payment Attribute:</strong> {cardData.cardNumber}</p>
          <p className="text-lg mb-2"><strong>Service Name:</strong> Gift Card</p>
          <p className="text-lg mb-2"><strong>Mobile Number:</strong> 555-123-4567</p>
          <p className="text-lg mb-2"><strong>Initiator:</strong> {cardData.cardNumber}</p>
          <div className="border-t-2 border-dashed border-gray-400 mt-6 mb-4"></div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total Charge:</span>
            <span>${totalAmount}</span>
          </div>
        </div>

        {/* Pay Button */}
        <div className="w-full flex justify-center mt-6">
            <Link to="/">
          <button
            className="px-12 py-4 bg-[#467a4d] text-white rounded-2xl text-lg"
          >
            Finish
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PayGift;
