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
  const [notifications, setNotifications] = useState([
    'New transaction alert: $200 deposited into your account.',
    'Reminder: Your account balance is low.',
    'Security alert: Suspicious login attempt detected.'
  ]);

  const [selectedCardId, setSelectedCardId] = useState(1);

  useEffect(() => {
    handleCardClick(1);
  }, []);

  const handleNotificationClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
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
    <div className="bg-[#88ca92] min-h-screen flex flex-col relative">
      <div className="bg-white p-8 my-4 rounded-3xl w-7/12 mx-auto shadow-2xl shadow-black">
        <div className='flex flex-col items-center p-8'>
          <div className='flex p-8 items-center justify-between w-full h-20 mb-8'>
            <Link to="/MyAccount">
              <div className='flex items-center'>
                <img src={profileplaceholder} alt="Profile Placeholder" className='w-20 h-20 rounded-full' />
                <h2 className='text-black font-bold ml-4 text-2xl'>John Doe</h2>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/Notification">
                <img src={notificationlogo} alt="Notifications" className='w-8 h-8 cursor-pointer' />
              </Link>
              <img src={searchlogo} alt="Search" className='w-8 h-8 cursor-pointer' />
            </div>
          </div>

          {/* Points and Total */}
          <div className='w-full flex mx-auto justify-center'>
            <div className="p-1 rounded-lg mx-2">
              <h3 className="text-lg font-semibold">Available Balance</h3>
              <p className="text-xl">{selectedCard.total}</p>
            </div>
            <Link to="/Points">
            <div className="bg-[#467a4d] px-2 my-2 py-3 rounded-lg flex items-center ml-8">
             
              <p className="text-md text-white mr-2">★ Points:</p>
              <p className="text-lg font-semibold text-white">{points}</p>
              
            </div>
            </Link>
          </div>
        </div>

        {/* My Card and Account Details */}
        <div className='flex'>
          {/* Card */}
          <div className='w-1/2 '>
            <div className={`flex justify-center ${selectedCardId === 1 ? '' : 'opacity-50 grayscale'}`}>
              <img 
                src={creditcard} 
                alt="Bank Card 1" 
                className='w-full h-auto card-image cursor-pointer'
                onClick={() => handleCardClick(1)}
              />
            </div>
            {/* Link Below Card */}
            <div className='mt-4 text-center'>
              <h1 className=' font-semibold text-3xl mb-4'>  My Cards </h1>
              <Link to="/AnotherFile" className="text-blue-500 underline">
                <img src={cardimg} alt='DebitCards'/>
              </Link>
            </div>
          </div>

          {/* Account Details and Recent Transactions */}
          <div className='w-1/2 p-4 flex flex-col'>
            {/* Account Details */}
            <div className="flex flex-col space-y-4">
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
              <div className='flex-grow mt-8'>
                <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
                  {/* Spent This Month Section */}
                  <div className="mb-4 p-4">
                    <h4 className="text-sm text-center">
                      <span className='font-medium text-lg'>${monthlycost}</span> Spent this month
                    </h4>
                    <div className="relative h-8 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="absolute h-full bg-red-500 rounded-full"
                        style={{ width: `${spentPercentage + 9}%`, zIndex: 1 }}
                      ></div>
                      <div 
                        className="absolute h-full bg-green-500 rounded-full"
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
                        <div className="border-t border-gray-300 mt-2"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Services Section */}
        <div className="w-full mt-8">
          <h2 className="text-gray-700 text-4xl font-semibold mb-4 text-center">Quick Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/WaterService">
                <img src={quickservice1} alt="Water Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Water</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/TopUpService">
                <img src={quickservice2} alt="Top Up Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Top Up</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/LightService">
                <img src={quickservice3} alt="Light Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Light</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/InternetService">
                <img src={quickservice4} alt="Internet Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Internet</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/GasService">
                <img src={quickservice5} alt="Gas Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Gas</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/GiftService">
                <img src={quickservice6} alt="Gift Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Gift</span>
            </div>
            <div className="w-24 h-24 flex flex-col items-center justify-center mx-4 my-2 cursor-pointer">
              <Link to="/QuickServices/AirService">
                <img src={quickservice7} alt="Air Service" className="w-16 h-16" />
              </Link>
              <span className="text-sm mt-2">Air</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600">X</button>
            <div className="flex items-center justify-center">
              <img src={quickservice1} alt="Fingerprint Icon" className="w-16 h-16" />
            </div>
            <p className="text-center text-lg mt-4">You have a pending request. Please confirm.</p>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={() => { /* Handle OTP */ }}
            >
              Send OTP Instead
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
