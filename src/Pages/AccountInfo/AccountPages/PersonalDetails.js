import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../../../images/logoplaceholder.png';

const points = 1652; 

function PersonalDetails() {
  return (
    <div className="Profile bg-[#e9f7f2] min-h-screen flex flex-col items-center relative">
      <div className="w-full bg-[#e9f7f2] p-6  flex flex-col items-center  relative min-h-screen h-auto">
        <Link to="/MyAccount" className="absolute top-8 left-8 rounded-full  p-2  bg-[#467a4d] text-white">
          &larr; Back
        </Link>

       
        <div className="flex flex-row items-center justify-between rounded-3xl bg-white border-2 shadow-md 2xl:w-8/12 w-full p-8 gap-6 xl:gap-16 mt-16 py-4">
  <div className="flex items-center gap-6">
    <img 
      src={profileplaceholder} 
      alt="Profile Placeholder" 
      className="2xl:w-24 2xl:h-24 h-16 w-16 rounded-full shadow-md 2xl:border-2 2xl:border-black"
    />
    <div className="text-left">
      <h2 className="text-xl font-bold">John Doe</h2>
    </div>
  </div>
  <div className="bg-[#467a4d] p-1 rounded-lg flex items-center w-[7.6rem]">
    <Link className='flex items-center rounded-lg p-1' to="/Points">
      <p className="text-md font-semibold text-white mr-2">★ {points}</p>
      <p className="text-md text-white">Pts</p>
    </Link>
  </div>
</div>
        <div className="mt-8 flex-grow 2xl:w-8/12 mx-auto rounded-3xl bg-white border-2 justify-center shadow-md w-full p-8 gap-6 xl:gap-16 xl:justify-center xl:px-24">
          <h3 className="text-2xl font-semibold mb-6 xl:text-center text-left">Personal Details</h3>
          <div className="flex flex-col space-y-4 xl:mt-12 mt-4">
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
