import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa'; // Icon for the dropdown
import notificationsInfos from './NotificationInfo'; // Import the data

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsInfos); // Use imported data

  const handleDelete = (id) => {
    setNotifications(prevNotifications => {
      const newNotifications = { ...prevNotifications };
      Object.keys(newNotifications).forEach(period => {
        newNotifications[period] = newNotifications[period].filter(notification => notification.id !== id);
      });
      return newNotifications;
    });
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterSelect = (e) => {
    setFilter(e.target.value);
    setIsFilterOpen(false); // Close the filter dropdown after selection
  };

  const formatPeriod = (period) => {
    switch (period) {
      case 'today':
        return 'Today';
      case 'yesterday':
        return 'Yesterday';
      case 'lastWeek':
        return 'Last Week';
      case 'lastMonth':
        return 'Last Month';
      case 'older':
        return 'Older';
      default:
        return period;
    }
  };

  const renderNotificationsForPeriod = (period) => {
    const notificationsForPeriod = notifications[period];
    
    return (
      <div className="space-y-4 text-black">
        <h2 className="text-2xl font-bold text-gray-600 mb-2 capitalize">{formatPeriod(period)}</h2>
        {notificationsForPeriod.length === 0 ? (
          <p className="text-lg text-gray-500">No Notifications</p>
        ) : (
          notificationsForPeriod.map((notification, index) => (
            <React.Fragment key={notification.id}>
              {index > 0 && <hr className="my-4 border-gray-300" />} {/* Line before each notification */}
              
              <div className="flex items-center py-2">
                <img src={notification.imageUrl} alt="Notification" className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-grow text-left">
                  <div dangerouslySetInnerHTML={{ __html: notification.message }} />
                  <p className="text-sm text-gray-500">{notification.date}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <button onClick={() => handleDelete(notification.id)} className="text-red-500 flex items-center justify-center w-8 h-8">
                  X
                </button>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-0 m-0 overflow-hidden w-screen overflow-x-hidden">

      <div className="bg-white w-full h-screen px-4 pt-4 rounded-none flex flex-col overflow-x-hidden">
        <div className="2xl:sticky top-0 bg-white z-10 p-6 2xl:w-full absolute w-screen">
          <div className="flex justify-between  w-full">
            <Link to="/Main" className=" rounded-full p-2 bg-[#467a4d] text-white ">← Back</Link>
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
          <h1 className="text-3xl font-bold text-[#467a4d] text-center w-full mt-4">Notifications</h1>
        </div>
        <div className="flex-grow overflow-y-auto custom-scrollbar mt-32 2xl:mt-0 2xl:w-8/12 2xl:mx-auto">
          {filter === 'all' ? (
            Object.keys(notifications).map(period => renderNotificationsForPeriod(period))
          ) : (
            renderNotificationsForPeriod(filter)
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
