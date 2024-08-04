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
import creditcard from './images/card1.png';
import arrowUp from './images/arrowup.png';
import arrowDown from './images/arrowdown.png';
import cardDetails from './BankingData';
import cardimg from './images/debitcards.png';

const points = 1652;

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(1);

  useEffect(() => {
    handleCardClick(1);
  }, []);

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
          <div className="relative bg-[#0A9971] w-full md:rounded-t-3xl flex flex-col items-center py-4 md:w-8/12 mx-auto ">
            <div className="w-full mx-auto flex flex-col items-center">
              {/* Profile and Header Section */}
              <div className="w-full flex items-center justify-between px-4">
                <Link to="/MyAccount" className='flex items-center space-x-4'>
                  <img src={profileplaceholder} alt="Profile Placeholder" className='w-20 h-20 rounded-full p-2 bg-[#F9FFFD] border-2 border-gray-300 shadow-md ml-12' />
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
                <div className="p-2 rounded-lg mx-2 ml-12">
                  <h3 className="text-lg font-semibold">Available Balance</h3>
                  <p className="text-xl">{selectedCard.total}</p>
                </div>
                <Link to="/Points">
                  <div className="bg-[#467a4d] px-3 py-2 rounded-lg flex items-center ml-8 mt-4">
                    <p className="text-lg font-semibold text-white mr-2">★ {points}</p>
                    <p className="text-md text-white"> Pts </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* White Container */}
          <div className="relative flex-grow bg-[#F9FFFD] mx-auto w-full md:w-8/12 flex flex-col md:rounded-b-3xl">
            {/* Card and Account Details */}
            <div className='w-full p-4 flex flex-col md:flex-row '>
              {/* Card */}
              <div className='w-full md:w-1/2 mt-8'>
                <div className={`flex justify-center ${selectedCardId === 1 ? '' : 'opacity-50 grayscale'}`}>
                  <img 
                    src={creditcard} 
                    alt="Bank Card 1" 
                    className='w-full h-auto cursor-pointer'
                    onClick={() => handleCardClick(1)}
                  />
                </div>
              </div>

              {/* Account Details and Recent Transactions */}
              <div className='w-full md:w-1/2 p-4 flex flex-col'>
                {/* Account Details */}
                <div className="flex flex-col space-y-4 mb-4 mt-8">
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
                    <div className="p-4 rounded-lg border-black border">
                      {/* Spent This Month Section */}
                      <div className="mb-4 p-4">
                        <h4 className="text-sm text-center">
                          <span className='font-medium text-lg'>${monthlycost.toFixed(2)}</span> Made this month
                        </h4>
                        <div className="relative h-8 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="absolute h-full bg-red-500 rounded-full"
                            style={{ width: `${spentPercentage + 14}vh`, zIndex: 1 }}
                          ></div>
                          <div 
                            className="absolute h-full bg-green-500 rounded-full"
                            style={{ width: `${earnedPercentage}vh`, left: `${spentPercentage}vh`, zIndex: 0 }}
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
                                <div className="flex justify-between">
                                  <span className="text-md font-medium">{transaction.description}</span>
                                  <span className="text-md font-medium">{transaction.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm">{transaction.time}</span>
                                  <span className="text-sm">{transaction.day}</span>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-px bg-gray-200"></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

             {/* Buttons Section */}
        <div className="flex flex-col gap-4 mr-12 ml-12">
          <div className="flex gap-4">
            <button className="flex-1 border border-black bg-white text-black py-3 rounded-lg text-lg">
              Send Money
            </button>
            <button className="flex-1 border border-black bg-white text-black py-3 rounded-lg text-lg">
              Pay A Bill
            </button>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 border border-black bg-white text-black py-3 rounded-lg text-lg">
              My Cards
            </button>
            <button className="flex-1 border border-black bg-white text-black py-3 rounded-lg text-lg">
              Load Money
            </button>
          </div>
        </div>

            {/* Quick Services */}
            <div className="w-full bg-[#F9FFFD] py-4 flex flex-wrap justify-center space-x-4 gap-8  md:rounded-b-3xl">
              <h2 className="text-2xl font-semibold mt-12 text-center text-gray-800 -mb-4">Quick Services</h2>
              <div className="flex flex-wrap justify-center gap-20 p-4">
              <Link to="/QuickServices/WaterService">
                <img src={quickservice1} alt="Water Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Water</p>
              </Link>
              <Link to="/QuickServices/TopUpService">
                <img src={quickservice2} alt="Top Up Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Top Up</p>
              </Link>
              <Link to="/QuickServices/LightService">
                <img src={quickservice3} alt="Light Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Electricity</p>
              </Link>
              <Link to="/QuickServices/InternetService">
                <img src={quickservice4} alt="Internet Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Internet</p>
              </Link>
              <Link to="/QuickServices/GasService">
                <img src={quickservice5} alt="Gas Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Gas</p>
              </Link>
              <Link to="/QuickServices/GiftService">
                <img src={quickservice6} alt="Gift Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Gift</p>
              </Link>
              <Link to="/QuickServices/AirService">
                <img src={quickservice7} alt="Air Service" className="lg:w-20 lg:h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Air Service</p>
              </Link>
            </div>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
