import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import couponData from './../../Pages/Datafiles/CouponData';
import points from './../../images/Points.png';

const pointsnumber = 1652;

function Coupons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState(null);

  const openModal = (barcodeImage) => {
    setSelectedBarcode(barcodeImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBarcode(null);
  };

  const couponContainers = Object.values(couponData).map((coupon, index) => {
    const couponImage = coupon.couponImage || '';
    const backgroundColor = coupon.backgroundColor || '#FFF3E6';
    const barcodeImage = coupon.barcodeImage || '';

    return (
      <div
        className='rounded-3xl shadow-md mb-4 w-full text-black border-[#467a4d] border-2 flex flex-col relative overflow-hidden h-40'
        key={index}
        style={{ backgroundColor: '#FFF' }}
      >
        {/* Top Half */}
        <div
          className='flex justify-between gap-6 items-center p-4'
          style={{ backgroundColor, height: '50%' }}
        >
          {/* Left Side: Logo and Card Type */}
          <div className='flex items-center'>
            <img src={couponImage} alt={`Coupon ${index + 1}`} className='w-16 h-16 rounded-full mr-4' />
            <p className='text-xl font-bold'>{coupon.couponName} Card</p>
          </div>

          {/* Right Side: Coupon Amount */}
          <div>
            <p className='text-4xl font-bold'>{coupon.couponAmount}</p>
          </div>
        </div>

        {/* Bottom Half */}
        <div
          className='flex justify-between items-center p-4 bg-white'
          style={{ height: '50%' }}
        >
          {/* Expiration Date */}
          <p className='text-md text-gray-700'>{`Expires on: ${coupon.expiryDate}`}</p>

          {/* Show Barcode Button */}
          <button 
            onClick={() => openModal(barcodeImage)} 
            className='text-[#467a4d] font-semibold underline'>
            Show Barcode
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-white overflow-x-hidden">
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Top - Dark Green */}
        <div className=" bg-[#0A9971] flex flex-col p-4 z-1 relative w-screen">
          {/* Back Button */}
          <Link to="/Points">
            <button className="absolute top-8 left-8 bg-white text-[#0A9971] p-2 rounded-full">
              &larr; Back
            </button>
          </Link>
          {/* Title */}
          <div className="flex flex-col mt-16 pl-8 mb-12 2xl:w-8/12 items-center 2xl:mx-auto ">
            <h2 className="text-xl font-medium text-white mb-2 text-left 2xl:w-8/12">Welcome to</h2>
            <h1 className="text-4xl font-bold text-white mb-2 text-left 2xl:w-8/12">SeeTek Coupons</h1>
          </div>
        </div>

        {/* Bottom - White */}
        <div className="w-screen flex-grow bg-[#F9FFFD] 2xl:rounded-b-3xl flex flex-col items-center mx-auto p-4 space-y-8 relative h-full">

          {/* Life Time Points Container*/}
        <div className="relative z-10 bg-white  w-5/6 lg:w-2/3 xl:w-7/12 2xl:w-2/5 rounded-3xl p-4 sm:p-6 border-2 border-gray-300 mx-3 h-auto min-h-[8rem] sm:min-h-[8rem] flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-4 mt-2 sm:mt-4">
                <div className="flex items-center">
                  <img src={points} alt="Points" className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
                  <p className="text-base sm:text-lg font-medium text-gray-600">Lifetime Points:</p>
                </div>
                <p className="text-base sm:text-lg font-medium text-black ml-4 text-center">{pointsnumber} Pts</p>
              </div>
                <div className="w-full bg-gray-200 rounded-full mt-2 sm:mt-4">
                  <div className="bg-green-500 text-[0.5rem] sm:text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-2/3">
                    &nbsp;
                  </div>

              </div>
            </div>

          {/* Coupons */}
          <h2 className='text-2xl font-semibold mb-8 mt-4'>Coupons</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:mx-auto'>
            {couponContainers}
          </div>
          <div className='flex justify-center mt-4'>
            <Link to="../QuickServices/GiftService">
              <button className='bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm mb-6'>
                + Add Coupon
              </button>
            </Link>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <button 
                  onClick={closeModal} 
                  className="absolute top-2 right-2 text-gray-500 hover:text-black">
                  &#10005;
                </button>
                <img src={selectedBarcode} alt="Coupon Barcode" className="w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coupons;
