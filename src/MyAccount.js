import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './images/logoplaceholder.png';
import phoneIcon from './images/smartphone-call.png';
import fingerprintIcon from './images/fingerprint-scan.png';
import bankIcon from './images/bank-building.png';
import bookingsIcon from './images/booking.png';
import logoutIcon from './images/logout.png';

const points = 1652; // Update this value to match the global points

function MyAccount() {
  return (
    <div className="Profile bg-[#88ca92] min-h-screen flex flex-col items-center relative 2xl:p-8">
      {/* Back Button for Larger Screens */}
      <Link to="/Main" className="hidden 2xl:block absolute top-10 left-10 text-black text-lg bg-white px-3 py-1 rounded-md shadow-md border-black border-2 z-10">
        &larr; Back
      </Link>

      {/* Combined Container for Small Screens */}
      <div className="w-full 2xl:hidden bg-white p-6 2xl:rounded-lg shadow-md flex flex-col items-center border-black border-2 relative min-h-screen h-auto">
        {/* Back Button for Smaller Screens */}
        <Link to="/Main" className="absolute top-4 left-4 rounded-full  p-2  bg-[#467a4d] text-white">
          &larr; Back
        </Link>

        {/* Profile Picture and Details Container */}
        <div className="flex flex-col items-center mt-8">
          {/* Profile Picture */}
          <img 
            src={profileplaceholder} 
            alt="Profile Placeholder" 
            className="2xl:w-36 2xl:h-36 h-28 w-28 rounded-full mb-4 border-black border-2"
          />
          {/* Profile Details and Points */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-md text-gray-600">johndoe@example.com</p>
              <p className="text-md text-gray-600">Location: New York</p>
            </div>
            <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
              <Link className='flex items-center rounded-lg p-1' to="/Points">
                <p className="text-md text-white mr-2">★ Points:</p>
                <p className="text-lg font-semibold text-white">{points}</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Info Section Links */}
        <div className="flex flex-col mt-8 w-full overflow-y-auto text-left md:text-center 2xl:text-left">
          <Link to="/Accountinfo/PersonalDetails" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-4">
            <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8 mr-4 mx-auto" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">Personal Details</h3>
              <p className="text-sm text-gray-600">Phone Number, Name, Address etc.</p>
            </div>
          </Link>

          <Link to="/Accountinfo/BiometricSetup" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-4">
            <img src={fingerprintIcon} alt="Fingerprint Icon" className="w-8 h-8 mr-4 mx-auto" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">KYC Details</h3>
              <p className="text-sm text-gray-600">Fingerprint, PIN Setup</p>
            </div>
          </Link>

          <Link to="/Accountinfo/BankAccounts" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-4">
            <img src={bankIcon} alt="Bank Icon" className="w-8 h-8 mr-4 mx-auto" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">My Bank Accounts</h3>
              <p className="text-sm text-gray-600">Account info of saved bank account</p>
            </div>
          </Link>

          <Link to="/Accountinfo/MyBookings" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-4">
            <img src={bookingsIcon} alt="Bookings Icon" className="w-8 h-8 mr-4 mx-auto" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">My Bookings</h3>
              <p className="text-sm text-gray-600">See your various bookings</p>
            </div>
          </Link>

          <Link to="/" className="flex items-center p-6 hover:bg-gray-100 mx-4">
            <img src={logoutIcon} alt="Logout Icon" className="w-8 h-8 mr-4 mx-auto" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">Logout</h3>
              <p className="text-sm text-gray-600">Logout from this application</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Separated Containers for Large Screens */}
      <div className="hidden 2xl:flex flex-col items-center w-full">
        {/* Profile Header */}
        <div className="w-full 2xl:w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex flex-col items-center border-black border-2">
          {/* Profile Picture and Details Container */}
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <img 
              src={profileplaceholder} 
              alt="Profile Placeholder" 
              className="w-36 h-36 rounded-full mb-4"
            />
            {/* Profile Details and Points */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-md text-gray-600">johndoe@example.com</p>
                <p className="text-md text-gray-600">Location: New York</p>
              </div>
              <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
                <Link className='flex items-center rounded-lg p-1' to="/Points">
                  <p className="text-md text-white mr-2">★ Points:</p>
                  <p className="text-lg font-semibold text-white">{points}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info Container */}
        <div className="w-full 2xl:w-5/12 mt-8 bg-white rounded-lg shadow-md border-black border-2">
          {/* Section Links */}
          <div className="flex flex-col text-left md:text-center 2xl:text-left">
            <Link to="/Accountinfo/PersonalDetails" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-6">
              <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8 mr-4 mx-auto" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">Personal Details</h3>
                <p className="text-sm text-gray-600">Phone Number, Name, Address etc.</p>
              </div>
            </Link>

            <Link to="/Accountinfo/BiometricSetup" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-6">
              <img src={fingerprintIcon} alt="Fingerprint Icon" className="w-8 h-8 mr-4 mx-auto" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">KYC Details</h3>
                <p className="text-sm text-gray-600">Fingerprint, PIN Setup</p>
              </div>
            </Link>

            <Link to="/Accountinfo/BankAccounts" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-6">
              <img src={bankIcon} alt="Bank Icon" className="w-8 h-8 mr-4 mx-auto" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">My Bank Accounts</h3>
                <p className="text-sm text-gray-600">Account info of saved bank account</p>
              </div>
            </Link>

            <Link to="/Accountinfo/MyBookings" className="flex items-center p-6 hover:bg-gray-100 border-b border-gray-300 mx-6">
              <img src={bookingsIcon} alt="Bookings Icon" className="w-8 h-8 mr-4 mx-auto" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">My Bookings</h3>
                <p className="text-sm text-gray-600">See your various bookings</p>
              </div>
            </Link>

            <Link to="/" className="flex items-center p-6 hover:bg-gray-100 mx-6">
              <img src={logoutIcon} alt="Logout Icon" className="w-8 h-8 mr-4 mx-auto" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">Logout</h3>
                <p className="text-sm text-gray-600">Logout from this application</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount; 
