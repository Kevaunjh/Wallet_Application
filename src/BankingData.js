const cardDetails = {
  1: { 
    chequing: '$3000', 
    savings: '$2000', 
    total: '$5000',
    chequingAccount: '123456789',
    savingsAccount: '543897123',
    overallAccountNumber: '1001-2345-6789',
    bankName: 'Canadian Imperial Bank of Commerce',
    creditCardImage: require('./images/bankcards/card1.png'),
    transactions: [
      { id: 'T001', time: '08:00 AM', day: 'Monday, 1st', description: 'Grocery Store', amount: '-$50' },
      { id: 'T002', time: '10:00 AM', day: 'Wednesday, 3rd', description: 'Gas Station', amount: '-$40' },
      { id: 'T003', time: '02:00 PM', day: 'Thursday, 4th', description: 'Salary', amount: '+$2000' },
      { id: 'T004', time: '06:00 PM', day: 'Friday, 5th', description: 'Online Purchase', amount: '-$100' }
    ]
  },
  2: { 
    chequing: '$2000', 
    savings: '$1500', 
    total: '$3500',
    chequingAccount: '987654321',
    savingsAccount: '37219012',
    overallAccountNumber: '2002-3456-7890',
    bankName: 'Royal Bank of Canada',
    creditCardImage: require('./images/bankcards/card2.png'),
    transactions: [
      { id: 'T005', time: '09:00 AM', day: 'Tuesday, 2nd', description: 'Restaurant', amount: '-$30' },
      { id: 'T006', time: '11:00 AM', day: 'Thursday, 4th', description: 'Movie Theater', amount: '-$20' },
      { id: 'T007', time: '01:00 PM', day: 'Friday, 5th', description: 'Freelance Work', amount: '+$1500' },
      { id: 'T008', time: '05:00 PM', day: 'Saturday, 6th', description: 'Book Purchase', amount: '-$15' }
    ]
  }
}

export default cardDetails;
