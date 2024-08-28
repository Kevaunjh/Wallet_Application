import React, {  useState, useEffect, useRef  } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import profileplaceholder from './images/logoplaceholder.png';
import notificationlogo from './images/notification.png';
import searchlogo from './images/search.png';
import quickservice1 from './images/home.png';
import quickservice2 from './images/topupservice.png';
import quickservice3 from './images/airservice.png';


import { Link } from 'react-router-dom';
import arrowUp from './images/arrowup.png';
import arrowDown from './images/arrowdown.png';
import cardDetails from './BankingData';


const points = 1652;

function Main() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const links = [
    { href: '/Accountinfo/PersonalDetails', label: 'Personal Details' },
    { href: '/Accountinfo/BiometricSetup', label: 'Biometric Setup' },
    { href: '/AccountInfo/BiometricSetups/Pinlock', label: 'Change Password' },
    { href: '/Accountinfo/BankAccounts', label: 'My Bank Accounts' },
    { href: '/Accountinfo/MyBookings', label: 'My Bookings' },
    { href: '/Coupons', label: 'My Coupons' },
    { href: '/AccountInfo/AddCard', label: 'Add New Bank Card' },
    { href: '/QuickServices/GiftService', label: 'Buy a Giftcard' },
    { href: '/RecentTransactions', label: 'Transaction History' },
    { href: '/Cheques', label: 'Cheque Deposit' },
    { href: '/Points', label: 'Points' },
    { href: '/Notification', label: 'Notifications' },
    { href: '/QuickServices/WaterService', label: 'Pay a House Bill' },
    { href: '/QuickServices/TopUpService', label: 'Pay a Phone Bill' },
    { href: '/QuickServices/GasService', label: 'Pay for Travel' },


  ];

  const openSearchModal = () => {
    setIsSearchVisible(true);
  };

  const filteredLinks = links.filter(link =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeSearchModal = () => {
    setIsSearchVisible(false);
  };


  const handleNextImage = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % Object.keys(cardDetails).length);
  };

  const handlePrevImage = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + Object.keys(cardDetails).length) % Object.keys(cardDetails).length);
  };

  const selectedCardId = Object.keys(cardDetails)[carouselIndex];
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
    <div className="min-h-screen flex flex-col ">
      {/* Full Background Container */}
      <div className="flex-grow flex flex-col ">
        <div className="relative flex-grow flex-col flex bg-white z-8">
          {/* Green Top Section */}
          <div className="relative bg-[#0A9971] w-full flex flex-col items-center py-4  mx-auto  ">
            <div className="w-full mx-auto flex flex-col items-center 2xl:w-8/12">
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
                  <div className="relative">
                  <img src={searchlogo} alt="Search" className='w-8 h-8 cursor-pointer' onClick={() => { if (isMobile()) { openSearchModal(); } else { setIsSearchVisible(!isSearchVisible); } }}  />
                  {isSearchVisible && isMobile() && (
      <div className="fixed inset-0 z-50 h-screen w-screen bg-white flex flex-col">
        {/* Search Bar with Back Button */}
        <div className="flex items-center p-4 bg-[#0A9971] ">
          <FaChevronDown className="mr-3 top-1/2 transform rotate-90 text-white ml-2" onClick={closeSearchModal} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <ul>
            {filteredLinks.map((link) => (
              <li key={link.href} className='my-3 text-center'>
                <a href={link.href} className="block p-2 border-b text-centerd  ">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}

        {!isMobile() && isSearchVisible && (
          <input
          type="text"
          placeholder="Search..."
          className="absolute top-full mt-2 p-2 border border-gray-300 rounded right-1"
        />
        )}

                    </div>
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
          <div className="flex-grow bg-[#F9FFFD] mx-auto w-full flex flex-col items-center">
            {/* Card and Account Details */}
            <div className='w-full p-4 flex flex-col lg:flex-row 2xl:w-8/12 '>
              {/* Card */}
              <div className='w-full lg:w-1/2'>
                <div className="flex justify-center items-center relative">
                  <button 
                    onClick={handlePrevImage} 
                    className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md"
                  >
                    &lt;
                  </button>
                  <img 
                    src={selectedCard.creditCardImage} 
                    alt="Bank Card" 
                    className='p-4 h-auto cursor-pointer rounded-3xl'
                  />
                  <button 
                    onClick={handleNextImage} 
                    className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md"
                  >
                    &gt;
                  </button>
                </div>
                <div className="w-full bg-[#F9FFFD] py-4 flex flex-wrap justify-center space-x-4 gap-8 lg:rounded-b-3xl 2xl:h-[22rem] items-center">
              <div className="flex flex-wrap justify-center gap-20 p-4 22xl:mt-4 lg:max-2xl:flex-col  lg:max-2xl:gap-y-12">
              <Link to="/QuickServices/WaterService">
                <img src={quickservice1} alt="Water Service" className="2xl:w-28 2xl:h-28 lg:h-20 lg:w-20 md:h-20 md:w-20  sm:w-12 sm:h-12 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Home</p>
              </Link>
              <Link to="/QuickServices/TopUpService">
                <img src={quickservice2} alt="Top Up Service" className="2xl:w-28 2xl:h-28 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:w-12 sm:h-12 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Retail</p>
              </Link>
              <Link to="/QuickServices/GasService
              ">
                <img src={quickservice3} alt="Light Service" className="2xl:w-28 2xl:h-28 lg:h-20 lg:w-20 md:h-20 md:w-20 sm:w-12 sm:h-12 w-8 h-8 mx-1" />
                <p className="mt-2 text-center text-xs mx-auto font-semibold">Travel</p>
              </Link>
            </div>
            </div>
              </div>

              

              

              {/* Account Details and Recent Transactions */}
              <div className='w-full lg:w-1/2 p-2 flex flex-col'>
                {/* Account Details */}
                <div className="flex flex-col space-y-2 mb-4 ">
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
                            className="absolute h-full bg-red-500"
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
            
            
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Main;
