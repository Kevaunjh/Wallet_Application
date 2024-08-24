import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import arrowUp from './images/arrowup.png';
import arrowDown from './images/arrowdown.png';
import transactions from './Transactiondata';

const RecentTransactions = () => {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getArrowImage = (amount) => {
    return amount.startsWith('+') ? arrowUp : arrowDown;
  };

  const getAmountColor = (amount) => {
    return amount.startsWith('+') ? 'text-green-500' : 'text-red-500';
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterSelect = (e) => {
    setFilter(e.target.value);
    setIsFilterOpen(false); // Close the filter dropdown after selection
  };

  const renderTransactionsForDate = (date) => {
    const transactionsForDate = transactions
      .filter((transaction) => transaction.date === date)
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Reverse chronological order

    return (
      <div className="space-y-4 text-black">
        <h2 className="text-3xl font-bold text-gray-600 mb-2">{date}</h2>
        {transactionsForDate.length === 0 ? (
          <p className="text-lg text-gray-500">No Transactions</p>
        ) : (
          transactionsForDate.map((transaction, index) => (
            <React.Fragment key={transaction.id}>
              {index > 0 && <hr className="my-4 border-gray-300" />}
              <div className="flex items-center py-2">
                <img
                  src={getArrowImage(transaction.amount)}
                  alt="Transaction Arrow"
                  className="w-12 h-12 mr-4"
                />
                <div className="flex-grow text-left">
                  <div className="text-xl font-medium">{transaction.description}</div>
                  <p className="text-sm text-gray-500">{transaction.date}, 2024</p>
                </div>
                <div
                  className={`text-xl font-medium ${getAmountColor(transaction.amount)}`}
                >
                  {transaction.amount}
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  };

  const uniqueDates = [
    ...new Set(transactions.map((transaction) => transaction.date)),
  ];

  const filteredTransactions = uniqueDates.filter((date) => {
    const now = new Date();
    const transactionDate = new Date(
      `${date.split(' ')[1]} ${date.split(' ')[0]}, ${now.getFullYear()}`
    );
    switch (filter) {
      case 'today':
        return transactionDate.toDateString() === now.toDateString();
      case 'yesterday':
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        return transactionDate.toDateString() === yesterday.toDateString();
      case 'lastWeek':
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        return (
          transactionDate >= lastWeek && transactionDate <= now
        );
      case 'lastMonth':
        const lastMonth = new Date();
        lastMonth.setMonth(now.getMonth() - 1);
        return (
          transactionDate.getMonth() === lastMonth.getMonth() &&
          transactionDate.getFullYear() === lastMonth.getFullYear()
        );
      case 'older':
        const older = new Date();
        older.setMonth(now.getMonth() - 1);
        return transactionDate < older;
      default:
        return true;
    }
  });

  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center 2xl:p-2 overflow-hidden"> {/* Prevent main container from scrolling */}
      <Link
        to="/Main"
        className="hidden 2xl:block absolute top-10 left-10 text-black text-lg bg-white px-3 py-1 rounded-md shadow-md border-black border-2 z-10"
      >
        ← Back
      </Link>
      <div
        className="bg-white 2xl:shadow-2xl w-full 2xl:min-h-[700px] h-screen p-8 overflow-auto 2xl:shadow-black 2xl:border-black 2xl:border-2 
        2xl:rounded-3xl 
        rounded-none
        2xl:max-w-3xl
        2xl:max-h-[96vh] relative"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="w-full flex justify-between md:mb-4">
          <Link
            to="/Main"
            className="text-lg rounded-full p-2 bg-[#467a4d] text-white 2xl:hidden"
          >
            &larr; Back
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#467a4d] text-center w-full mt-6 mb-8">
            Transaction History
          </h1>
          <div className="absolute right-8 top-8">
            <div className="relative">
              <div className="flex items-center">
                <span className="text-lg font-bold text-[#467a4d] mr-2">
                  Filter
                </span>
                <button
                  onClick={handleFilterClick}
                  className="text-[#467a4d] focus:outline-none"
                >
                  <FaFilter size={24} />
                </button>
                {isFilterOpen && (
                  <div className="absolute right-0 bg-white border rounded-lg shadow-lg w-48 mt-2 z-20">
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
          </div>
        </div>

        {filteredTransactions.length === 0 ? (
          <p className="text-lg text-gray-500 text-center mt-4">
            No recent transactions from this time period
          </p>
        ) : (
          filteredTransactions
            .sort(
              (a, b) =>
                new Date(
                  b.split(' ')[1] + ' ' + b.split(' ')[0] + ', 2024'
                ) -
                new Date(
                  a.split(' ')[1] + ' ' + a.split(' ')[0] + ', 2024'
                )
            )
            .map((date) => (
              <React.Fragment key={date}>
                {renderTransactionsForDate(date)}
                <hr className="my-6" />
              </React.Fragment>
            ))
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
