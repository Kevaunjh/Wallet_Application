import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import pointHistoryData from './pointHistoryData'; // Import the data
import points from './images/Points.png';
const pointsnumber = 1652;
function PointHistory() {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleFilterClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to document
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterSelect = (e) => {
    e.stopPropagation(); // Prevent click event from propagating to document
    setFilter(e.target.value);
    setIsFilterOpen(false); // Close the filter dropdown after selection
  };

  const handleClickOutside = (e) => {
    if (
      filterButtonRef.current &&
      !filterButtonRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsFilterOpen(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const filterPointsByDate = () => {
    const now = new Date();
    return pointHistoryData.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      switch (filter) {
        case 'today':
          return transactionDate.toDateString() === now.toDateString();
        case 'yesterday':
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);
          return transactionDate.toDateString() === yesterday.toDateString();
        case 'lastWeek':
          const lastWeek = new Date(now);
          lastWeek.setDate(now.getDate() - 7);
          return transactionDate >= lastWeek && transactionDate <= now;
        case 'lastMonth':
          const lastMonth = new Date(now);
          lastMonth.setMonth(now.getMonth() - 1);
          return transactionDate >= lastMonth && transactionDate <= now;
        case 'older':
          return transactionDate < now;
        default:
          return true; // Show all transactions
      }
    });
  };

  const renderPointsForDate = (date) => {
    const pointsForDate = filterPointsByDate()
      .filter((transaction) => formatDate(transaction.date) === date)
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in reverse chronological order

    return (
      <div className="space-y-4 text-black">
        <h2 className="text-2xl font-bold text-gray-600 mb-2">{date}</h2>
        {pointsForDate.length === 0 ? (
          <p className="text-lg text-gray-500">No Transactions</p>
        ) : (
          pointsForDate.map((transaction, index) => (
            <React.Fragment key={transaction.id}>
              {index > 0 && <hr className="my-4 border-gray-300" />} {/* Horizontal line between transactions */}
              <div className={`flex items-center py-2 px-4 bg-white ${transaction.points >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                <div className="flex-grow text-left">
                  <div className="text-xl font-medium">{transaction.description}</div>
                  <p className="text-sm">{transaction.points} Points</p>
                  <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  };

  // Extract unique dates from the points data
  const uniqueDates = [
    ...new Set(filterPointsByDate().map((transaction) => formatDate(transaction.date))),
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white overflow-x-hidden">
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Top - Dark Green */}
        <div className="w-screen bg-[#0A9971] flex flex-col p-4 z-1 relative">
          {/* Back Button */}
          <Link to="/Points">
            <button className="absolute top-8 left-8 bg-white text-[#0A9971] p-2 rounded-full">
              &larr; Back
            </button>
          </Link>
          {/* Title */}
          <div className="flex flex-col mt-16 pl-8 mb-12 2xl:w-8/12 items-center 2xl:mx-auto ">
            <h2 className="text-xl font-medium text-white mb-2 text-left 2xl:w-8/12">Welcome to</h2>
            <h1 className="text-4xl font-bold text-white mb-2 text-left 2xl:w-8/12">SeeTek Point History</h1>
          </div>
        </div>

        {/* Bottom - White */}
        <div className="w-screen flex-grow bg-[#F9FFFD] 2xl:rounded-b-3xl flex flex-col items-center mx-auto p-4 space-y-8 relative h-full">

        <div className="relative z-10 bg-white  w-5/6 lg:w-2/3 xl:w-7/12 2xl:w-2/5 rounded-3xl p-4 sm:p-6 border-2 border-gray-300 mx-3 h-auto min-h-[8rem] sm:min-h-[8rem] flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-4 mt-2 sm:mt-4">
                <div className="flex items-center">
                  <img src={points} alt="Points" className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
                  <p className="text-base sm:text-lg font-medium text-gray-600">Lifetime Points:</p>
                </div>
                <p className="text-base sm:text-lg font-medium text-black ml-4 text-center">{pointsnumber} Pts</p>
              </div>
                <div className="w-full bg-gray-200 rounded-full mt-2 sm:mt-4">
                  <div className="bg-green-500 text-[0.5rem] sm:text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-2/3">
                    &nbsp;
                  </div>

              </div>
            </div>


          {/* Filter and Point History Container*/}
          <h1 className="text-3xl font-bold text-[#467a4d]">Point History</h1>
          <div className=" bg-white border-2 border-gray-300 p-4 rounded-3xl max-w-4xl  relative 2xl:w-5/12 w-full mx-3">
            <div className="relative flex justify-end items-center mb-4">

              <div className="flex items-center">
                <span className="text-lg font-bold text-[#467a4d] mr-2">Filter</span>
                <button
                  onClick={handleFilterClick}
                  className="text-[#467a4d] focus:outline-none relative"
                  ref={filterButtonRef}
                >
                  <FaFilter size={24} />
                </button>
                {isFilterOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-48 max-h-[calc(100vh-8rem)] overflow-y-auto z-10"
                    ref={dropdownRef}
                    onClick={(e) => e.stopPropagation()} // Prevent click events from closing dropdown
                  >
                    <select
                      id="filter"
                      value={filter}
                      onChange={handleFilterSelect}
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    >
                      <option value="all">All</option>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="lastWeek">Last Week</option>
                      <option value="lastMonth">Last Month</option>
                      <option value="older">Older</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Display Points History */}
            <div className="flex-grow overflow-y-auto custom-scrollbar 2xl:max-h-[49vh] max-h-[70vh] ">
              {uniqueDates.length === 0 ? (
                <p className="text-lg text-gray-500 text-center mt-4">
                  No points history from this time period
                </p>
              ) : (
                uniqueDates
                  .sort((a, b) => new Date(b) - new Date(a))
                  .map((date) => (
                    <React.Fragment key={date}>
                      {renderPointsForDate(date)}
                    </React.Fragment>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointHistory;
