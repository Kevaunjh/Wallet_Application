import React from 'react';
import points from './images/Points.png';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Points = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#88ca92]">
      <Link to="/MyAccount" className="hidden 2xl:block absolute top-10 left-10 text-black text-lg bg-white px-3 py-1 rounded-md shadow-md border-black border-2 z-10">
        &larr; Back
      </Link>

      <div className="relative w-full 2xl:max-w-3xl lg:w-full 2xl:shadow-3xl  2xl:shadow-black  2xl:border-black  2xl:border-2 2xl:rounded-3xl min-h-screen flex flex-col">
        {/* Top - Dark Green */}
        <div className="w-full bg-[#0A9971] 2xl:rounded-t-3xl flex flex-col p-4 z-1 relative">
          {/* Back Button */}
          <Link to="/Main">
            <button className="absolute top-4 left-4 bg-white text-[#0A9971] p-2 rounded-full 2xl:hidden">
              &larr; Back
            </button>
          </Link>
          {/* Title */}
          <div className="flex flex-col items-start mt-16 pl-8 mb-12">
            <h2 className="text-xl font-medium text-white mb-2">Welcome to</h2>
            <h1 className="text-4xl font-bold text-white mb-2">SeeTek Rewards</h1>
          </div>
        </div>

        {/* Bottom - White */}
        <div className="w-full flex-grow bg-[#F9FFFD] 2xl:rounded-b-3xl flex flex-col items-center mx-auto p-4 space-y-8 relative h-full">
          {/* Lifetime Points and Buttons Container */}
          <div className="w-full flex flex-col items-center space-y-8">
            {/* Lifetime Points Container */}
            <div className="relative z-10 bg-white rounded-3xl p-4 sm:p-6 border-2 border-gray-300 mx-3 2xl:w-7/12 h-auto min-h-[12rem] sm:min-h-[16rem] flex flex-col justify-between w-1/2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-4">
                <div className="flex items-center">
                  <img src={points} alt="Points" className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
                  <p className="text-base sm:text-lg font-medium text-gray-600">Lifetime Points:</p>
                </div>
                <p className="text-base sm:text-lg font-medium text-black ml-4 text-center">1652</p>
              </div>
              <div className="p-2 sm:p-4 border-t-2 my-4 sm:my-8 border-dashed border-gray-400 text-left">
                <p className="text-xs sm:text-sm text-black pl-4 sm:pl-8 mt-2 font-semibold">Gold (Level 2)</p>
                <p className="text-xs sm:text-sm text-black pl-4 sm:pl-8 mt-1 font-semibold">500 to reach Level 3</p>
                <div className="w-full bg-gray-200 rounded-full mt-2 sm:mt-4">
                  <div className="bg-green-500 text-[0.5rem] sm:text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-2/3">
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="w-full flex flex-col items-center space-y-4">
              <div className="flex w-full gap-4 justify-center">
                <Link to="/Coupons" className="w-2/5 max-w-72">
                  <button className="w-full h-16 sm:h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Coupons
                  </button>
                </Link>
                <Link to="/QuickServices/GiftService" className="w-2/5 max-w-72">
                  <button className="w-full h-16 sm:h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Gift Cards
                  </button>
                </Link>
              </div>
              <div className="flex w-full gap-4 justify-center">
                <Link to="/PointHistory" className="w-2/5 max-w-72">
                  <button className="w-full h-16 sm:h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Point History
                  </button>
                </Link>
                <Link to="/Cheques" className="w-2/5 max-w-72">
                  <button className="w-full h-16 sm:h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Cheque Deposit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
