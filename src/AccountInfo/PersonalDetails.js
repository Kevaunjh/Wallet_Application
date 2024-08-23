import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';

const points = 1652; // Update this value to match the global points

function PersonalDetails() {
  return (
    <div className="PersonalDetails bg-[#88ca92] h-screen flex flex-col items-center relative 2xl:p-8">
      {/* XL Screens: Separate Containers */}
      <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-center 2xl:w-full relative">
        {/* Back Button for XL Screens */}
        <Link to="/MyAccount" className="absolute top-2 left-2 text-black text-lg bg-white px-3 py-1 rounded-md shadow-md border-black border-2 z-10">
          &larr; Back
        </Link>

        {/* Profile Info Container */}
        <div className="w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex items-center justify-between border-black border-2">
          {/* Profile Picture */}
          <img 
            src={profileplaceholder} 
            alt="Profile Placeholder" 
            className="w-16 h-16 rounded-full mr-4"
          />
          {/* Profile Name */}
          <div className="text-center flex-1">
            <h2 className="text-lg font-bold">John Doe</h2>
          </div>
          {/* Profile Points */}
          <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
            <p className="text-md text-white mr-2">★ Points:</p>
            <p className="text-lg font-semibold text-white">{points}</p>
          </div>
        </div>

        {/* Personal Details Container */}
        <div className="w-5/12 mt-8 bg-white p-6 rounded-lg shadow-md border-black border-2">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <div className="flex flex-col space-y-2">
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

      {/* Smaller than XL Screens: Combined Container */}
      <div className="flex flex-col 2xl:hidden w-screen min-h-screen  bg-white p-6  ">
        {/* Back Button */}
        <Link to="/MyAccount" className="absoulte top-10 left-10 bg-[#467a4d] text-white rounded-full p-2 w-[4.5rem]">
          &larr; Back
        </Link>

        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center">
          <img 
            src={profileplaceholder} 
            alt="Profile Placeholder" 
            className="2xl:w-16 2xl:h-16 h-20 w-20 rounded-full mb-2 border-black border-2"
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
        <div className="mt-8 flex-1">
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
  );
}

export default PersonalDetails;
