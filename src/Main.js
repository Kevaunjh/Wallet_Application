import React, { useState, useEffect } from 'react';
import profileplaceholder from './images/logoplaceholder.png';
import notificationlogo from './images/notification.png';
import searchlogo from './images/search.png';
import quickservice1 from './images/waterservice.png';
import quickservice2 from './images/topupservice.png';
import quickservice3 from './images/lightservice.png';
import quickservice4 from './images/internetservice.png';
import quickservice5 from './images/gasservice.png';
import quickservice6 from './images/giftservice.png';
import quickservice7 from './images/airservice.png';
import { Link } from 'react-router-dom';
import arrowUp from './images/arrowup.png';
import arrowDown from './images/arrowdown.png';
import cardDetails from './BankingData';
import morecards from './images/debitcards.png'

const points = 1652;

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(1);

  useEffect(() => {
    handleCardClick(1);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (cardId) => {
    setSelectedCardId(cardId);
  };

  const selectedCard = cardDetails[selectedCardId];

  // Calculate total spent and earned
  const totalSpent = selectedCard.transactions
    .filter(transaction => transaction.amount.startsWith('-'))
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount.replace('$', '').replace('-', '')), 0);

  const totalEarned = selectedCard.transactions
    .filter(transaction => transaction.amount.startsWith('+'))
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount.replace('$', '')), 0);

  const totalAmount = totalSpent + totalEarned;

  // Calculate percentages
  const spentPercentage = totalAmount === 0 ? 0 : (totalSpent / totalAmount) * 100;
  const earnedPercentage = totalAmount === 0 ? 0 : (totalEarned / totalAmount) * 100;
  const monthlycost = totalEarned - totalSpent;

  const getArrowImage = (amount) => {
    return amount.startsWith('+') ? arrowUp : arrowDown;
  };



  return (
    <div className="min-h-screen flex flex-col bg-[#88ca92]">
      {/* Full Background Container */}
      <div className="flex-grow flex flex-col">
        <div className="relative flex-grow bg-[#88ca92] z-0">
          {/* Green Top Section */}
          <div className="relative bg-[#0A9971] w-full lg:rounded-t-3xl flex flex-col items-center py-4 lg:w-8/12 mx-auto ">
            <div className="w-full mx-auto flex flex-col items-center">
              {/* Profile and Header Section */}
              <div className="w-full flex items-center justify-between px-4">
                <Link to="/MyAccount" className='flex items-center space-x-4'>
                  <img src={profileplaceholder} alt="Profile Placeholder" className='w-20 h-20 rounded-full p-2 bg-[#F9FFFD] border-2 border-gray-300 shadow-md ml-2 lg:ml-4' />
                  <h2 className='text-white font-bold text-2xl'>John Doe</h2>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/Notification">
                    <img src={notificationlogo} alt="Notifications" className='w-8 h-8 cursor-pointer' />
                  </Link>
                  <img src={searchlogo} alt="Search" className='w-8 h-8 cursor-pointer' />
                </div>
              </div>

              {/* Points and Balance */}
              <div className='w-full flex mt-4'>
                <div className="p-2 rounded-lg mx-2 ml-8">
                  <h3 className="text-lg font-semibold">Available Balance</h3>
                  <p className="text-xl">{selectedCard.total}</p>
                </div>
                <Link to="/Points">
                  <div className="bg-[#467a4d] px-3 py-2 rounded-lg flex items-center ml-8 mt-4 mr-4 w-32">
                    <p className="text-lg font-semibold text-white mr-2">★ {points}</p>
                    <p className="text-md text-white"> Pts </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* White Container */}
          <div className="relative flex-grow bg-[#F9FFFD] mx-auto w-full lg:w-8/12 flex flex-col lg:rounded-b-3xl">
            {/* Card and Account Details */}
            <div className='w-full p-4 flex flex-col lg:flex-row '>
              {/* Card */}
              <div className='w-full lg:w-1/2  '>
                <div className={`flex justify-center `}>
                  <img 
                    src={selectedCard.creditCardImage} 
                    alt="Bank Card 1" 
                    className='w-full h-auto cursor-pointer'
                  />
                </div>
                <div className="mt- text-center">
                 
                </div>
              </div>

              {/* Account Details and Recent Transactions */}
              <div className='w-full lg:w-1/2 p-2 flex flex-col'>
                {/* Account Details */}
                <div className="flex flex-col space-y-2 mb-4 mt-2">
                  <div className="bg-white border border-black shadow-md p-4 rounded-lg flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Chequing</h3>
                    <p className="text-xl">{selectedCard.chequing}</p>
                    <p className="text-md">Account No: {selectedCard.chequingAccount}</p>
                  </div>
                  <div className="bg-white border border-black shadow-md p-4 rounded-lg flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Savings</h3>
                    <p className="text-xl">{selectedCard.savings}</p>
                    <p className="text-md">Account No: {selectedCard.savingsAccount}</p>
                  </div>
                </div>

                {/* Recent Transactions */}
                <Link to="/RecentTransactions" className="w-full">
                  <div className='flex-grow'>
                    <div className="p-4 rounded-lg border-black border h-full">
                      {/* Spent This Month Section */}
                      <div className="mb-4 p-4">
                        <h4 className="text-sm text-center">
                          <span className='font-medium text-lg'>${monthlycost.toFixed(2)}</span> Made this month
                        </h4>
                        <div className="relative h-8 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="absolute h-full bg-red-500 "
                            style={{ width: `${spentPercentage}%`, zIndex: 1 }}
                          ></div>
                          <div 
                            className="absolute h-full bg-green-500"
                            style={{ width: `${earnedPercentage}%`, left: `${spentPercentage}%`, zIndex: 0 }}
                          ></div>
                        </div>
                        <p className="text-md mt-2">Spent: ${totalSpent.toFixed(2)} | Earned: ${totalEarned.toFixed(2)}</p>
                      </div>
                      <hr className="my-4 border-gray-300" />

                      {/* Transactions */}
                      <ul className="space-y-4">
                        {selectedCard.transactions.map((transaction) => (
                          <li key={transaction.id}>
                            <div className="flex items-center mb-2">
                              <img 
                                src={getArrowImage(transaction.amount)} 
                                alt="Transaction Arrow" 
                                className="w-6 h-6 mr-2"
                              />
                              <div className="flex-grow">
                                <p className="text-sm">{transaction.description}</p>
                                <p className="text-xs text-gray-500">{transaction.date}</p>
                              </div>
                              <div className="flex flex-col items-end">
                                <p className="text-sm">{transaction.amount}</p>
                                <p className="text-xs text-gray-500">{transaction.time}</p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500">{transaction.day}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

              {/* Quick Services */}
              <div className="w-full bg-[#F9FFFD] py-4 flex flex-wrap justify-center space-x-4 gap-8  lg:rounded-b-3xl">
              <div className="flex flex-wrap justify-center gap-20 p-4">
              <Link to="/QuickServices/WaterService">
                <img src={quickservice1} alt="Water Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 lg:w-16 lg:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Water</p>
              </Link>
              <Link to="/QuickServices/TopUpService">
                <img src={quickservice2} alt="Top Up Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 lg:w-16 lg:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Top Up</p>
              </Link>
              <Link to="/QuickServices/GasService
              ">
                <img src={quickservice3} alt="Light Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 lg:w-16 lg:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Electricity</p>
              </Link>
            </div>
            </div>
      </div>

      {/* Modal for Additional Cards */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div
      className="bg-white p-6 rounded-lg relative custom-scrollbar overflow-y-auto lg:w-[100rem] lg:h-[55rem] w-full h-full"
      style={{ maxWidth: '100rem', maxHeight: '55rem' }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center pt-6">Additional Cards</h2>
      <div className="grid grid-cols-2 gap-4 mx-auto lg:grid-cols-3 lg:grid-cols-4">
        {Object.keys(cardDetails).slice(5).map((cardId) => (
          <div key={cardId} className="flex items-center justify-center">
            <img
              src={cardDetails[cardId].creditCardImage}
              alt={`Card ${cardId}`}
              className={`w-full max-w-xs h-auto cursor-pointer hover:opacity-95 ${selectedCardId === parseInt(cardId) ? '' : 'opacity-50'}`}
              onClick={() => {
                handleCardClick(parseInt(cardId));
                handleCloseModal();
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleCloseModal}
        className="absolute top-2 right-2 text-red-500 text-4xl font-bold p-2"
        style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        &times;
      </button>
    </div>
  </div>
)}

      </div>

      </div>
    </div>
  );
}

export default Main;
