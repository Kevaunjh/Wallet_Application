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
  },
  3: { 
    chequing: '$4000', 
    savings: '$3000', 
    total: '$7000',
    chequingAccount: '112233445',
    savingsAccount: '58430123',
    overallAccountNumber: '3003-4567-8901',
    bankName: 'Bank of Montreal',
    creditCardImage: require('./images/bankcards/card3.png'),
    transactions: [
      { id: 'T009', time: '07:00 AM', day: 'Monday, 1st', description: 'Electronics Store', amount: '-$200' },
      { id: 'T010', time: '09:30 AM', day: 'Wednesday, 3rd', description: 'Gym Membership', amount: '-$60' },
      { id: 'T011', time: '12:00 PM', day: 'Saturday, 6th', description: 'Bonus', amount: '+$1000' },
      { id: 'T012', time: '04:00 PM', day: 'Sunday, 7th', description: 'Gift Purchase', amount: '-$80' }
    ]
  },
  4: { 
    chequing: '$2500', 
    savings: '$1800', 
    total: '$4300',
    chequingAccount: '223344556',
    savingsAccount: '76490123',
    overallAccountNumber: '4004-5678-9012',
    bankName: 'Scotiabank',
    creditCardImage: require('./images/bankcards/card4.png'),
    transactions: [
      { id: 'T013', time: '06:30 AM', day: 'Tuesday, 2nd', description: 'Coffee Shop', amount: '-$10' },
      { id: 'T014', time: '11:00 AM', day: 'Thursday, 4th', description: 'Lunch', amount: '-$25' },
      { id: 'T015', time: '03:00 PM', day: 'Friday, 5th', description: 'Bonus', amount: '+$1200' },
      { id: 'T016', time: '07:00 PM', day: 'Saturday, 6th', description: 'Grocery Store', amount: '-$80' }
    ]
  },
  5: { 
    chequing: '$3200', 
    savings: '$2500', 
    total: '$5700',
    chequingAccount: '334455667',
    savingsAccount: '98401234',
    overallAccountNumber: '5005-6789-0123',
    bankName: 'TD Canada Trust',
    creditCardImage: require('./images/bankcards/card5.png'),
    transactions: [
      { id: 'T017', time: '08:30 AM', day: 'Wednesday, 3rd', description: 'Taxi', amount: '-$20' },
      { id: 'T018', time: '12:00 PM', day: 'Friday, 5th', description: 'Dinner', amount: '-$50' },
      { id: 'T019', time: '04:00 PM', day: 'Saturday, 6th', description: 'Freelance Work', amount: '+$900' },
      { id: 'T020', time: '09:00 PM', day: 'Sunday, 7th', description: 'Streaming Service', amount: '-$15' }
    ]
  },
  6: { 
    chequing: '$2800', 
    savings: '$2200', 
    total: '$5000',
    chequingAccount: '445566778',
    savingsAccount: '12530123',
    overallAccountNumber: '6006-7890-1234',
    bankName: 'National Bank of Canada',
    creditCardImage: require('./images/bankcards/card6.png'),
    transactions: [
      { id: 'T021', time: '10:00 AM', day: 'Monday, 1st', description: 'Gym Membership', amount: '-$50' },
      { id: 'T022', time: '02:30 PM', day: 'Wednesday, 3rd', description: 'Concert Tickets', amount: '-$100' },
      { id: 'T023', time: '05:00 PM', day: 'Friday, 5th', description: 'Project Payment', amount: '+$1800' },
      { id: 'T024', time: '08:00 PM', day: 'Saturday, 6th', description: 'Gift Purchase', amount: '-$40' }
    ]
  },
  7: { 
    chequing: '$3400', 
    savings: '$2800', 
    total: '$6200',
    chequingAccount: '556677889',
    savingsAccount: '65781234',
    overallAccountNumber: '7007-8901-2345',
    bankName: 'HSBC Canada',
    creditCardImage: require('./images/bankcards/card7.png'),
    transactions: [
      { id: 'T025', time: '09:00 AM', day: 'Tuesday, 2nd', description: 'Library Fee', amount: '-$10' },
      { id: 'T026', time: '01:00 PM', day: 'Thursday, 4th', description: 'Utility Bill', amount: '-$100' },
      { id: 'T027', time: '04:00 PM', day: 'Friday, 5th', description: 'Freelance Payment', amount: '+$1300' },
      { id: 'T028', time: '07:00 PM', day: 'Sunday, 7th', description: 'Shopping', amount: '-$60' }
    ]
  },
  8: { 
    chequing: '$3600', 
    savings: '$3000', 
    total: '$6600',
    chequingAccount: '667788990',
    savingsAccount: '78901234',
    overallAccountNumber: '8008-9012-3456',
    bankName: 'ATB Financial',
    creditCardImage: require('./images/bankcards/card8.png'),
    transactions: [
      { id: 'T029', time: '10:00 AM', day: 'Wednesday, 3rd', description: 'Doctor Visit', amount: '-$100' },
      { id: 'T030', time: '02:00 PM', day: 'Friday, 5th', description: 'Lunch', amount: '-$25' },
      { id: 'T031', time: '05:00 PM', day: 'Saturday, 6th', description: 'Bonus', amount: '+$2000' },
      { id: 'T032', time: '08:00 PM', day: 'Sunday, 7th', description: 'Online Shopping', amount: '-$70' }
    ]
  },
  9: { 
    chequing: '$4000', 
    savings: '$3500', 
    total: '$7500',
    chequingAccount: '778899001',
    savingsAccount: '19012345',
    overallAccountNumber: '9009-0123-4567',
    bankName: 'Laurentian Bank of Canada',
    creditCardImage: require('./images/bankcards/card9.png'),
    transactions: [
      { id: 'T033', time: '11:00 AM', day: 'Thursday, 4th', description: 'Hospital Bill', amount: '-$300' },
      { id: 'T034', time: '03:00 PM', day: 'Saturday, 6th', description: 'Taxi', amount: '-$20' },
      { id: 'T035', time: '06:00 PM', day: 'Sunday, 7th', description: 'Project Payment', amount: '+$2500' },
      { id: 'T036', time: '09:00 PM', day: 'Monday, 8th', description: 'Dinner', amount: '-$50' }
    ]
  },
  10: { 
    chequing: '$3800', 
    savings: '$3200', 
    total: '$7000',
    chequingAccount: '889900112',
    savingsAccount: '23451234',
    overallAccountNumber: '1010-1234-5678',
    bankName: 'Desjardins Group',
    creditCardImage: require('./images/bankcards/card10.png'),
    transactions: [
      { id: 'T037', time: '07:30 AM', day: 'Friday, 5th', description: 'Café', amount: '-$15' },
      { id: 'T038', time: '11:30 AM', day: 'Sunday, 7th', description: 'Groceries', amount: '-$70' },
      { id: 'T039', time: '02:30 PM', day: 'Monday, 8th', description: 'Bonus', amount: '+$1500' },
      { id: 'T040', time: '06:30 PM', day: 'Tuesday, 9th', description: 'Subscription', amount: '-$10' }
    ]
  },
  11: { 
    chequing: '$3100', 
    savings: '$2500', 
    total: '$5600',
    chequingAccount: '990011223',
    savingsAccount: '98761234',
    overallAccountNumber: '1111-2345-6789',
    bankName: 'Coast Capital Savings',
    creditCardImage: require('./images/bankcards/card11.png'),
    transactions: [
      { id: 'T041', time: '08:30 AM', day: 'Saturday, 6th', description: 'Bus Ticket', amount: '-$5' },
      { id: 'T042', time: '12:30 PM', day: 'Monday, 8th', description: 'Concert Tickets', amount: '-$120' },
      { id: 'T043', time: '04:30 PM', day: 'Tuesday, 9th', description: 'Freelance Payment', amount: '+$800' },
      { id: 'T044', time: '07:30 PM', day: 'Wednesday, 10th', description: 'Dinner', amount: '-$45' }
    ]
  },
  12: { 
    chequing: '$3300', 
    savings: '$2700', 
    total: '$6000',
    chequingAccount: '110022334',
    savingsAccount: '11231234',
    overallAccountNumber: '1212-3456-7890',
    bankName: 'Manulife Bank of Canada',
    creditCardImage: require('./images/bankcards/card12.png'),
    transactions: [
      { id: 'T045', time: '09:00 AM', day: 'Sunday, 7th', description: 'Coffee Shop', amount: '-$10' },
      { id: 'T046', time: '01:00 PM', day: 'Tuesday, 9th', description: 'Lunch', amount: '-$30' },
      { id: 'T047', time: '05:00 PM', day: 'Wednesday, 10th', description: 'Bonus', amount: '+$1000' },
      { id: 'T048', time: '08:00 PM', day: 'Thursday, 11th', description: 'Online Purchase', amount: '-$40' }
    ]
  },
  13: { 
    chequing: '$2900', 
    savings: '$2300', 
    total: '$5200',
    chequingAccount: '220033445',
    savingsAccount: '34561234',
    overallAccountNumber: '1313-4567-8901',
    bankName: 'Equitable Bank',
    creditCardImage: require('./images/bankcards/card13.png'),
    transactions: [
      { id: 'T049', time: '10:30 AM', day: 'Monday, 8th', description: 'Gym Membership', amount: '-$50' },
      { id: 'T050', time: '02:30 PM', day: 'Wednesday, 10th', description: 'Concert Tickets', amount: '-$80' },
      { id: 'T051', time: '06:00 PM', day: 'Thursday, 11th', description: 'Freelance Work', amount: '+$1500' },
      { id: 'T052', time: '09:00 PM', day: 'Friday, 12th', description: 'Gift Purchase', amount: '-$30' }
    ]
  },
  14: { 
    chequing: '$3100', 
    savings: '$2400', 
    total: '$5500',
    chequingAccount: '330044556',
    savingsAccount: '67891234',
    overallAccountNumber: '1414-5678-9012',
    bankName: 'First West Credit Union',
    creditCardImage: require('./images/bankcards/card14.png'),
    transactions: [
      { id: 'T053', time: '07:30 AM', day: 'Tuesday, 9th', description: 'Taxi', amount: '-$15' },
      { id: 'T054', time: '11:30 AM', day: 'Thursday, 11th', description: 'Lunch', amount: '-$25' },
      { id: 'T055', time: '03:30 PM', day: 'Friday, 12th', description: 'Project Payment', amount: '+$1200' },
      { id: 'T056', time: '07:30 PM', day: 'Saturday, 13th', description: 'Shopping', amount: '-$50' }
    ]
  },
  15: { 
    chequing: '$3600', 
    savings: '$2800', 
    total: '$6400',
    chequingAccount: '440055667',
    savingsAccount: '89011234',
    overallAccountNumber: '1515-6789-0123',
    bankName: 'Canadian Western Bank',
    creditCardImage: require('./images/bankcards/card15.png'),
    transactions: [
      { id: 'T057', time: '08:00 AM', day: 'Wednesday, 10th', description: 'Bus Ticket', amount: '-$5' },
      { id: 'T058', time: '12:00 PM', day: 'Friday, 12th', description: 'Groceries', amount: '-$50' },
      { id: 'T059', time: '04:00 PM', day: 'Saturday, 13th', description: 'Freelance Payment', amount: '+$900' },
      { id: 'T060', time: '08:00 PM', day: 'Sunday, 14th', description: 'Subscription', amount: '-$15' }
    ]
  },
  16: { 
    chequing: '$3000', 
    savings: '$2600', 
    total: '$5600',
    chequingAccount: '550066778',
    savingsAccount: '12341234',
    overallAccountNumber: '1616-7890-1234',
    bankName: 'Canadian Tire Bank',
    creditCardImage: require('./images/bankcards/card16.png'),
    transactions: [
      { id: 'T061', time: '09:30 AM', day: 'Thursday, 11th', description: 'Library Fee', amount: '-$5' },
      { id: 'T062', time: '01:30 PM', day: 'Saturday, 13th', description: 'Utility Bill', amount: '-$100' },
      { id: 'T063', time: '05:30 PM', day: 'Sunday, 14th', description: 'Freelance Payment', amount: '+$800' },
      { id: 'T064', time: '09:30 PM', day: 'Monday, 15th', description: 'Dinner', amount: '-$45' }
    ]
  },
  17: { 
    chequing: '$3200', 
    savings: '$2700', 
    total: '$5900',
    chequingAccount: '660077889',
    savingsAccount: '34521234',
    overallAccountNumber: '1717-8901-2345',
    bankName: 'Fairstone Bank of Canada',
    creditCardImage: require('./images/bankcards/card17.png'),
    transactions: [
      { id: 'T065', time: '07:00 AM', day: 'Friday, 12th', description: 'Gym Membership', amount: '-$50' },
      { id: 'T066', time: '11:00 AM', day: 'Sunday, 14th', description: 'Concert Tickets', amount: '-$100' },
      { id: 'T067', time: '03:00 PM', day: 'Monday, 15th', description: 'Freelance Work', amount: '+$1500' },
      { id: 'T068', time: '07:00 PM', day: 'Tuesday, 16th', description: 'Gift Purchase', amount: '-$40' }
    ]
  },
  18: { 
    chequing: '$3400', 
    savings: '$2900', 
    total: '$6300',
    chequingAccount: '770088990',
    savingsAccount: '67811234',
    overallAccountNumber: '1818-9012-3456',
    bankName: 'Conexus Credit Union',
    creditCardImage: require('./images/bankcards/card18.png'),
    transactions: [
      { id: 'T069', time: '08:30 AM', day: 'Saturday, 13th', description: 'Online Course', amount: '-$50' },
      { id: 'T070', time: '12:30 PM', day: 'Monday, 15th', description: 'Concert Tickets', amount: '-$120' },
      { id: 'T071', time: '04:30 PM', day: 'Tuesday, 16th', description: 'Freelance Payment', amount: '+$1500' },
      { id: 'T072', time: '08:30 PM', day: 'Wednesday, 17th', description: 'Dinner', amount: '-$60' }
    ]
  },
  19: { 
    chequing: '$3600', 
    savings: '$3100', 
    total: '$6700',
    chequingAccount: '880099001',
    savingsAccount: '78901234',
    overallAccountNumber: '1919-0123-4567',
    bankName: 'Kindred Credit Union',
    creditCardImage: require('./images/bankcards/card19.png'),
    transactions: [
      { id: 'T073', time: '07:30 AM', day: 'Sunday, 14th', description: 'Taxi', amount: '-$15' },
      { id: 'T074', time: '11:30 AM', day: 'Tuesday, 16th', description: 'Groceries', amount: '-$70' },
      { id: 'T075', time: '03:30 PM', day: 'Wednesday, 17th', description: 'Project Payment', amount: '+$1200' },
      { id: 'T076', time: '07:30 PM', day: 'Thursday, 18th', description: 'Shopping', amount: '-$50' }
    ]
  },
  20: { 
    chequing: '$3800', 
    savings: '$3300', 
    total: '$7100',
    chequingAccount: '990011223',
    savingsAccount: '89021234',
    overallAccountNumber: '2020-1234-5678',
    bankName: 'Servus Credit Union',
    creditCardImage: require('./images/bankcards/card20.png'),
    transactions: [
      { id: 'T077', time: '09:00 AM', day: 'Monday, 15th', description: 'Bus Ticket', amount: '-$5' },
      { id: 'T078', time: '01:00 PM', day: 'Wednesday, 17th', description: 'Groceries', amount: '-$70' },
      { id: 'T079', time: '05:00 PM', day: 'Thursday, 18th', description: 'Freelance Payment', amount: '+$1200' },
      { id: 'T080', time: '09:00 PM', day: 'Friday, 19th', description: 'Gift Purchase', amount: '-$30' }
    ]
  }
}

export default cardDetails;
