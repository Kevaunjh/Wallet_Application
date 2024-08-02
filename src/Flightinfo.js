import flightIcon from './images/airservice.png'; // Import flight icon image

const bookings = [
  {
    airline: 'West Jet Canada',
    date: '2024-08-15',
    departureTime: '10:30 AM',
    bookingID: 'AB123456789',
    route: 'DE - LAX',
    flightIcon: flightIcon, // Include the flight icon for each booking
  },
  {
    airline: 'Spirit Air Lines',
    date: '2024-09-20',
    departureTime: '3:45 PM',
    bookingID: 'CD987654321',
    route: 'NY - MIA',
    flightIcon: flightIcon, // Include the flight icon for each booking
  },
  // Add more fake bookings here if needed
];

export default bookings;