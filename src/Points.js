import React from 'react';
import points from './images/Points.png';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Points = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 "  style={{ backgroundColor: '#88ca92' }}>
      <div className="relative w-full max-w-3xl shadow-3xl shadow-black border-black border-2 rounded-3xl" style={{ height: '95vh' }}>
        {/* Top 2/5 - Dark Green */}
        <div className="absolute top-0 left-0 w-full h-2/5 bg-[#0A9971] rounded-t-3xl flex flex-col p-8">
          {/* Back Button */}
          <Link to="/">
            <button 
              className="absolute top-4 left-4 bg-white text-[#0A9971] p-2 rounded-full"
            >
              &larr; Back
            </button>
          </Link>
          {/* Title */}
          <div className="flex flex-col items-start mt-16 pl-8">
            <h2 className="text-xl font-medium text-white mb-2">Welcome to</h2>
            <h1 className="text-4xl font-bold text-white">SeeTek Rewards</h1>
          </div>
        </div>

        {/* Bottom 3/5 - White */}
        <div className="absolute bottom-0 left-0 w-full h-3/5 bg-[#F9FFFD] rounded-b-3xl">
          <div className="flex flex-col items-center w-full max-w-3xl p-8">
            {/* Lifetime Points Container */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-300 -top-20 mx-auto" style={{ boxShadow: 'none', marginTop: '-10%', width: '40rem' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={points} alt="Points" className="w-12 h-12 mr-4" />
                  <p className="text-lg font-medium text-gray-600">Lifetime Points:</p>
                </div>
                <p className="text-lg font-medium text-black">1652</p>
              </div>
              <div className="p-4 border-t-2 my-8 border-dashed border-gray-400 text-left">
                <p className="text-sm text-black pl-8 mt-2 font-semibold">Gold (Level 2)</p>
                <p className="text-sm text-black pl-8 mt-1 font-semibold">500 to reach Level 3</p>
                <div className="w-full bg-gray-200 rounded-full mt-4 -mb-8">
                  <div
                    className="bg-green-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                    style={{ width: '66%' }} // 2/3 full
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col items-center w-full -mt-16 space-y-2 bg-[#F9FFFD] p-4 rounded-lg" style={{ boxShadow: 'none' }}>
              <div className="flex w-full gap-20 space-x-2 justify-center">
                <Link to="/coupons" className="w-2/5">
                  <button className="w-full h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Coupons
                  </button>
                </Link>
                <Link to="/gift-cards" className="w-2/5">
                  <button className="w-full h-20 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500">
                    Gift Cards
                  </button>
                </Link>
              </div>
              <Link to="/point-history" className="w-full">
                <button className=" h-20 mt-4 ml-6 bg-white text-black p-4 rounded-lg border border-transparent hover:bg-gray-100 shadow-md border-gray-500" style={{ width: '16.8rem' }}>
                  Point History
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
