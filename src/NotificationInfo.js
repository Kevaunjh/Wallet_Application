const notificationInfos = { 
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
  };
  
  export default notificationInfos;
  