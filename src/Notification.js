import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa'; // Icon for the dropdown

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    today: [
      { id: 1, message: "<strong>Justin</strong> paid <span class='text-green-500'>$78.20</span>", date: "2024-08-02", time: "14:30", amount: 78.20, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, message: "<strong>James Brunswik</strong> requested <span class='text-red-500'>$29.50</span>", date: "2024-08-02", time: "09:15", amount: -29.50, type: 'requested', imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { id: 3, message: "You have been paid <span class='text-green-500'>$3942.64</span> from your <strong>Payroll</strong>", date: "2024-08-02", time: "12:00", amount: 3942.64, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' }
    ],
    yesterday: [
      { id: 4, message: "<strong>Lisa</strong> paid <span class='text-green-500'>$54.30</span>", date: "2024-08-01", time: "16:45", amount: 54.30, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 5, message: "You have been paid <span class='text-green-500'>$123.45</span> from your <strong>Freelance work</strong>", date: "2024-08-01", time: "08:30", amount: 123.45, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' }
    ],
    lastWeek: [
      { id: 6, message: "<strong>James</strong> requested <span class='text-red-500'>$20.00</span>", date: "2024-07-26", time: "18:00", amount: -20.00, type: 'requested', imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { id: 7, message: "<strong>Karen</strong> paid <span class='text-green-500'>$150.00</span>", date: "2024-07-26", time: "10:15", amount: 150.00, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg' }
    ],
    lastMonth: [
      { id: 8, message: "You have been paid <span class='text-green-500'>$500.00</span> from your <strong>Job</strong>", date: "2024-07-15", time: "13:30", amount: 500.00, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { id: 9, message: "<strong>Alex</strong> requested <span class='text-red-500'>$80.00</span>", date: "2024-07-15", time: "17:00", amount: -80.00, type: 'requested', imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg' }
    ],
    older: [
      { id: 10, message: "You have been paid <span class='text-green-500'>$200.00</span> from your <strong>Account</strong>", date: "2024-06-30", time: "14:00", amount: 200.00, type: 'received', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { id: 11, message: "<strong>Alex</strong> requested <span class='text-red-500'>$15.00</span>", date: "2024-06-30", time: "09:00", amount: -15.00, type: 'requested', imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg' }
    ]
  });

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
    <div className="bg-[#88ca92] min-h-screen flex flex-col items-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 overflow-auto" style={{ maxHeight: '93vh', scrollbarWidth: 'none' }}>
        <div className="flex items-center mb-6 relative">
          <Link to="/" className="text-lg text-[#467a4d]">← Back</Link>
          <h1 className="text-3xl font-bold text-[#467a4d] text-center w-full">Notifications</h1>
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

        {filter === 'all' ? (
          <>
            {Object.keys(notifications).map((period) => (
              <React.Fragment key={period}>
                {renderNotificationsForPeriod(period)}
                <hr className="my-6" />
              </React.Fragment>
            ))}
          </>
        ) : (
          renderNotificationsForPeriod(filter)
        )}
      </div>
    </div>
  );
}

export default Notifications;
