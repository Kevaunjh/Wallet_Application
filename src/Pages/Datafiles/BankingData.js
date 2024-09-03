const cardDetails = {
  1: { 
    chequing: '$300', 
    savings: '$200', 
    total: '$500',
    chequingAccount: '123456789',
    savingsAccount: '543897123',
    overallAccountNumber: '1001-2345-6789',
    bankName: 'JPMorgan Chase',
    creditCardImage: require('./../../images/bankcards/acutalcard1.jpg'),
    transactions: [
      { id: 'T001', time: '08:00 AM', day: 'Monday, 1st', description: 'Grocery Store', amount: '-$50' },
      { id: 'T002', time: '10:00 AM', day: 'Wednesday, 3rd', description: 'Gas Station', amount: '-$40' },
      { id: 'T003', time: '02:00 PM', day: 'Thursday, 4th', description: 'Salary', amount: '+$690' },
      { id: 'T004', time: '06:00 PM', day: 'Friday, 5th', description: 'Online Purchase', amount: '-$100' }
    ]
  },
  2: { 
    chequing: '$200', 
    savings: '$150', 
    total: '$350',
    chequingAccount: '987654321',
    savingsAccount: '37219012',
    overallAccountNumber: '2002-3456-7890',
    bankName: 'Bank of America',
    creditCardImage: require('./../../images/bankcards/actualcard2.jpg'),
    transactions: [
      { id: 'T005', time: '09:00 AM', day: 'Tuesday, 2nd', description: 'Restaurant', amount: '-$30' },
      { id: 'T006', time: '11:00 AM', day: 'Thursday, 4th', description: 'Movie Theater', amount: '-$20' },
      { id: 'T007', time: '01:00 PM', day: 'Friday, 5th', description: 'Freelance Work', amount: '+$415' },
      { id: 'T008', time: '05:00 PM', day: 'Saturday, 6th', description: 'Book Purchase', amount: '-$15' }
    ]
  }
}

export default cardDetails;
