import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';

const points = 1652; // Update this value to match the global points

function PersonalDetails() {
  return (
    <div className="PersonalDetails bg-[#88ca92] min-h-screen flex flex-col items-center relative p-8">
      {/* Back Button */}
      <Link to="/MyAccount" className="absolute top-4 left-4 text-white">
        &larr; Back
      </Link>

      {/* Profile Info Container */}
      <div className="w-full lg::w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex items-center justify-between border-black border-2">
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
      <div className="w-full md:w-5/12 mt-8 bg-white p-6 rounded-lg shadow-md border-black border-2">
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
  );
}

export default PersonalDetails;
