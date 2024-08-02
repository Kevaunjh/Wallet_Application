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
    <div className="Profile bg-[#88ca92] min-h-screen flex flex-col items-center relative p-8">
      {/* Back Button */}
      <Link to="/" className="absolute top-4 left-4 text-white">
        &larr; Back
      </Link>
      
      {/* Profile Header */}
      <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex flex-col items-center">
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
          <p className="text-md text-white mr-2">★ Points:</p>
          <p className="text-lg font-semibold text-white">{points}</p>
        </div>
          </div>
        </div>
      </div>

      {/* Profile Info Container */}
      <div className="w-full md:w-5/12 mt-8 bg-white rounded-lg shadow-md">
        {/* Section Links */}
        <div className="flex flex-col">
          <Link to="/Accountinfo/PersonalDetails" className="flex items-center p-6 hover:bg-gray-100">
            <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Personal Details</h3>
              <p className="text-sm text-gray-600">Phone Number, Name, Address etc.</p>
            </div>
          </Link>


          <Link to="/Accountinfo/BiometricSetup" className="flex items-center p-6 hover:bg-gray-100">
            <img src={fingerprintIcon} alt="Fingerprint Icon" className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Biometric Setup</h3>
              <p className="text-sm text-gray-600">Fingerprint, PIN Setup</p>
            </div>
          </Link>


          <Link to="/Accountinfo/BankAccounts" className="flex items-center p-6 hover:bg-gray-100">
            <img src={bankIcon} alt="Bank Icon" className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">My Bank Accounts</h3>
              <p className="text-sm text-gray-600">Account info of saved bank account</p>
            </div>
          </Link>


          <Link to="/Accountinfo/MyBookings" className="flex items-center p-6 hover:bg-gray-100">
            <img src={bookingsIcon} alt="Bookings Icon" className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">My Bookings</h3>
              <p className="text-sm text-gray-600">See your various bookings</p>
            </div>
          </Link>


          <Link to="/Logout" className="flex items-center p-6 hover:bg-gray-100">
            <img src={logoutIcon} alt="Logout Icon" className="w-8 h-8 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Logout</h3>
              <p className="text-sm text-gray-600">Logout from this application</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
