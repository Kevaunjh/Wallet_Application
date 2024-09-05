import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../../images/logoplaceholder.png';
import phoneIcon from './../../images/smartphone-call.png';
import fingerprintIcon from './../../images/fingerprint-scan.png';
import bankIcon from './../../images/bank-building.png';
import bookingsIcon from './../../images/booking.png';
import logoutIcon from './../../images/logout.png';

const points = 1652;

function MyAccount() {
  return (
    <div className="Profile bg-[#e9f7f2] min-h-screen flex flex-col items-center relative">
      <div className="w-full bg-[#e9f7f2] p-6  flex flex-col items-center  relative min-h-screen h-auto">
        <Link to="/Main" className="absolute top-8 left-8 rounded-full  p-2  bg-[#467a4d] text-white">
          &larr; Back
        </Link>
        <div className="flex flex-row items-center mt-16 rounded-3xl bg-white border-2 justify-center shadow-md 2xl:w-8/12 w-full p-8 gap-6 xl:gap-16 xl:justify-center py-12">
  <img 
    src={profileplaceholder} 
    alt="Profile Placeholder" 
    className="2xl:w-36 2xl:h-36 h-32 w-32 rounded-full mb-4 shadow-md 2xl:border-2 2xl:border-black"
  />
  <div className="flex flex-col justify-start">
    <div className="text-left mb-1">
      <h2 className="text-xl font-bold">John Doe</h2>
      <p className="text-md text-gray-600">johndoe@example.com</p>
      <p className="text-md text-gray-600">Location: New York</p>
    </div>
    <div className="bg-[#467a4d] p-1 rounded-lg flex items-center w-28 mt-2">
      <Link className='flex items-center rounded-lg p-1' to="/Points">
      <p className="text-md font-semibold text-white mr-2">★ {points}</p>
      <p className="text-md text-white"> Pts </p>
      </Link>
    </div>
  </div>
</div>
        <div className="flex flex-col mt-8 w-full overflow-y-auto text-left md:text-center 2xl:text-center  rounded-3xl bg-white border-2 2xl:w-8/12 shadow-md ">
  <Link to="/Accountinfo/PersonalDetails" className="w-full hover:bg-gray-100 ">
    <div className="flex items-center p-6 border-b border-gray-300 mx-4">
      <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8 mr-4 mx-auto" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">Personal Details</h3>
        <p className="text-sm text-gray-600">Phone Number, Name, Address etc.</p>
      </div>
    </div>
  </Link>

  <Link to="/Accountinfo/BiometricSetup" className="w-full hover:bg-gray-100">
    <div className="flex items-center p-6 border-b border-gray-300 mx-4">
      <img src={fingerprintIcon} alt="Fingerprint Icon" className="w-8 h-8 mr-4 mx-auto" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">KYC Details</h3>
        <p className="text-sm text-gray-600">Fingerprint, PIN Setup</p>
      </div>
    </div>
  </Link>

  <Link to="/Accountinfo/BankAccounts" className="w-full hover:bg-gray-100">
    <div className="flex items-center p-6 border-b border-gray-300 mx-4">
      <img src={bankIcon} alt="Bank Icon" className="w-8 h-8 mr-4 mx-auto" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">My Bank Accounts</h3>
        <p className="text-sm text-gray-600">Account info of saved bank account</p>
      </div>
    </div>
  </Link>

  <Link to="/Accountinfo/MyBookings" className="w-full hover:bg-gray-100">
    <div className="flex items-center p-6 border-b border-gray-300 mx-4">
      <img src={bookingsIcon} alt="Bookings Icon" className="w-8 h-8 mr-4 mx-auto" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">My Bookings</h3>
        <p className="text-sm text-gray-600">See your various bookings</p>
      </div>
    </div>
  </Link>

  <Link to="/AccountManagement" className="w-full hover:bg-gray-100">
    <div className="flex items-center p-6 mx-4">
      <img src={logoutIcon} alt="Logout Icon" className="w-8 h-8 mr-4 mx-auto" />
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-semibold">Logout</h3>
        <p className="text-sm text-gray-600">Logout from this application</p>
      </div>
    </div>
  </Link>
</div>

      </div>
    </div>
  );
}

export default MyAccount; 
