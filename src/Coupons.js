import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './images/logoplaceholder.png';
import couponData from './CouponData';

const points = 1652;

function Coupons() {
  const couponContainers = Object.values(couponData).map((coupon, index) => {
    const couponImage = coupon.couponImage || '';
    const backgroundColor = coupon.backgroundColor || '#FFF3E6';

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

          {/* Shop Now Button */}
          <Link to="../QuickServices/GiftService" className='text-[#467a4d] font-semibold underline'>
            Buy More
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="Coupons 2xl:bg-[#88ca92] min-h-screen flex flex-col items-center justify-center 2xl:gap-8 overflow-auto relative bg-transparent w-screen">


      {/* Mobile Layout */}
      <div className="w-full  bg-white p-6  h-screen overflow-auto flex flex-col z-20">
        <div className="flex items-center mb-8 ">
          <Link to="/Points" className="mr-4 bg-[#467a4d] text-white rounded-full p-2 mt-2 ml-2">
            &larr; Back
          </Link>
        </div>
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profileplaceholder}
            alt="Profile Placeholder"
            className="2xl:w-16 2xl:h-16 w-24 h-24 rounded-full mb-2 border-black border-2"
          />
          <div className="text-center mb-2">
            <h2 className="text-lg font-bold">John Doe</h2>
          </div>
          <div className="bg-[#467a4d] p-1 rounded-lg flex items-center h-8">
            <p className="text-md text-white mr-2">★ Points:</p>
            <p className="text-lg font-semibold text-white">{points}</p>
          </div>
        </div>

        {/* Coupons */}
        <h2 className='text-2xl font-bold mb-8 text-center mt-4'>My Coupons</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:w-8/12 2xl:mx-auto'>
          {couponContainers}
        </div>
        <div className='flex justify-center mt-4'>
          <Link to="../QuickServices/GiftService">
            <button className='bg-white text-[#467a4d] border-[#467a4d] border-2 px-4 py-2 rounded-md text-sm mb-6'>
              + Add Coupon
            </button>
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default Coupons;
