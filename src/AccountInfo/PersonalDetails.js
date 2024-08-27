import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';

const points = 1652; // Update this value to match the global points

function PersonalDetails() {
  return (
    <body className="bg-white">
    <div className="PersonalDetails min-h-screen flex flex-col items-center relative 2xl:bg-[#88ca92] bg-white 2xl:p-8 p-6">
      {/* XL Screens: Separate Containers */}
      

      {/* Smaller than XL Screens: Combined Container */}
      <div className="flex flex-col w-screen h-screen bg-white p-6 fixed top-0 overflow-hidden">
        {/* Back Button */}
        <Link to="/MyAccount" className="absolute top-8 left-8 bg-[#467a4d] text-white rounded-full p-2 ">
          &larr; Back
        </Link>

        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center 2xl:mt-16">
          <img 
            src={profileplaceholder} 
            alt="Profile Placeholder" 
            className="2xl:w-24 2xl:h-24 h-20 w-20 rounded-full mb-2 border-black border-2"
          />
          <h2 className="text-lg font-bold">John Doe</h2>
        </div>

        <div className="flex justify-center mt-2">
          <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
            <p className="text-md text-white mr-2">★ Points:</p>
            <p className="text-lg font-semibold text-white">{points}</p>
          </div>
        </div>
        
        {/* Personal Details */}
        <div className="mt-8 flex-1 overflow-y-auto w-full 2xl:w-8/12 mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Personal Details</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>johndoe@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Gender:</span>
              <span>Male</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">DOB:</span>
              <span>01/01/1990</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Phone Number:</span>
              <span>+1 234 567 890</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Occupation:</span>
              <span>Software Engineer</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Account Opened:</span>
              <span>01/01/2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
}

export default PersonalDetails;
