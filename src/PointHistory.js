import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import pointHistoryData from './pointHistoryData'; // Import the data

function PointHistory() {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [pointsData, setPointsData] = useState(pointHistoryData); // Use imported data

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterSelect = (e) => {
    setFilter(e.target.value);
    setIsFilterOpen(false); // Close the filter dropdown after selection
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const filterPointsByDate = () => {
    const now = new Date();
    const filteredData = pointsData.filter((transaction) => {
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
    return filteredData;
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
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center p-0 m-0 overflow-hidden w-screen overflow-x-hidden">

      <div className="bg-white w-full h-screen  px-4 pt-4   rounded-none flex flex-col overflow-x-hidden">
        <div className="2xl:sticky top-0 bg-white z-10 p-6 2xl:w-full absolute w-screen">
          <div className="flex justify-between  w-full">
            <Link to="/Points" className="rounded-full p-2 bg-[#467a4d] text-white ">← Back</Link>
            <div className="flex items-center mr-12 2xl:mr-0">
              <span className="text-lg font-bold text-[#467a4d] mr-2">Filter</span>
              <button onClick={handleFilterClick} className="text-[#467a4d] focus:outline-none">
                <FaFilter size={24} />
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48 mr-12 2xl:mr-0">
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
          <h1 className="text-3xl font-bold text-[#467a4d] text-center w-full mt-4">Point History</h1>
        </div>
        <div className="flex-grow overflow-y-auto mt-32 2xl:mt-0 2xl:mx-auto 2xl:w-8/12">
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
                  <hr className="my-6" />
                </React.Fragment>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PointHistory;
