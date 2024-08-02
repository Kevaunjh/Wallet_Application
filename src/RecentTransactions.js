import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa'; // Icon for the dropdown
import arrowUp from './images/arrowup.png';
import arrowDown from './images/arrowdown.png';

const RecentTransactions = () => {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const transactions = [
    { id: 1, description: 'Payment from Justin', date: '01 August', amount: '+$78.20' },
    { id: 2, description: 'Payment to Grocery Store', date: '27 July', amount: '-$29.50' },
    { id: 3, description: 'Salary Credit', date: '31 July', amount: '+$3942.64' },
    { id: 4, description: 'Payment from Lisa', date: '22 July', amount: '+$54.30' },
    { id: 5, description: 'Freelance Payment', date: '27 July', amount: '+$123.45' },
    { id: 6, description: 'Payment to James', date: '02 August', amount: '-$20.00' },
    { id: 7, description: 'Payment from Karen', date: '17 May', amount: '+$150.00' },
    { id: 8, description: 'Job Payment', date: '15 June', amount: '+$500.00' },
    { id: 9, description: 'Payment to Alex', date: '07 January', amount: '-$80.00' },
    { id: 10, description: 'Account Credit', date: '18 February', amount: '+$200.00' },
    { id: 11, description: 'Payment to Alex', date: '30 Apr', amount: '-$15.00' },
    { id: 12, description: 'Payment from John', date: '28 Apr', amount: '+$78.20' },
    { id: 13, description: 'Payment to Cafe', date: '27 Apr', amount: '-$12.50' },
    { id: 14, description: 'Online Purchase', date: '26 Apr', amount: '-$29.99' },
    { id: 15, description: 'Payment from Mike', date: '25 Apr', amount: '+$42.64' },
    { id: 16, description: 'Payment to Gym', date: '24 Apr', amount: '-$54.00' },
    { id: 17, description: 'Freelance Payment', date: '23 Apr', amount: '+$323.45' },
    { id: 18, description: 'Payment to Rent', date: '22 Apr', amount: '-$500.00' },
    { id: 19, description: 'Payment from Jane', date: '21 Apr', amount: '+$150.00' },
    { id: 20, description: 'Job Payment', date: '20 Apr', amount: '+$500.00' }
  ];

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
    const transactionsForDate = transactions.filter(
      (transaction) => transaction.date === date
    ).sort((a, b) => new Date(b.date) - new Date(a.date)); // Reverse chronological order

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
                <div className={`text-xl font-medium ${getAmountColor(transaction.amount)}`}>
                  {transaction.amount}
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  };

  const uniqueDates = [...new Set(transactions.map((transaction) => transaction.date))];

  return (
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 overflow-auto shadow-black border-black border-2" style={{ maxHeight: '93vh', scrollbarWidth: 'none' }}>
        <div className="w-full flex justify-between mb-4">
          <Link to="/" className="text-lg text-[#467a4d]">
            &larr; Back
          </Link>
          <div className="relative">
            <div className="absolute right-0 flex items-center">
              <span className="text-lg font-bold text-[#467a4d] mr-2">Filter</span>
              <button onClick={handleFilterClick} className="text-[#467a4d] focus:outline-none">
                <FaFilter size={24} />
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
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
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold text-[#467a4d] text-center w-full">Transaction History</h1>
        </div>
        {filter === 'all' ? (
          uniqueDates
            .sort((a, b) => new Date(b.split(' ')[1] + ' ' + b.split(' ')[0] + ', 2024') - new Date(a.split(' ')[1] + ' ' + a.split(' ')[0] + ', 2024'))
            .map((date) => (
              <React.Fragment key={date}>
                {renderTransactionsForDate(date)}
                <hr className="my-6" />
              </React.Fragment>
            ))
        ) : (
          uniqueDates
            .filter((date) => {
              const now = new Date();
              const transactionDate = new Date(`${date.split(' ')[1]} ${date.split(' ')[0]}, ${now.getFullYear()}`);
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
                  return transactionDate >= lastWeek && transactionDate <= now;
                case 'lastMonth':
                  const lastMonth = new Date();
                  lastMonth.setMonth(now.getMonth() - 1);
                  return transactionDate.getMonth() === lastMonth.getMonth() && transactionDate.getFullYear() === lastMonth.getFullYear();
                case 'older':
                  const older = new Date();
                  older.setMonth(now.getMonth()-1);
                  return transactionDate < older;
                default:
                  return true;
              }
            })
            .sort((a, b) => new Date(b.split(' ')[1] + ' ' + b.split(' ')[0] + ', 2024') - new Date(a.split(' ')[1] + ' ' + a.split(' ')[0] + ', 2024'))
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