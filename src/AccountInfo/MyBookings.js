import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';
import flightIcon from './../images/airservice.png'; // Add your flight icon image
import bookings from './../Flightinfo.js'; // Import flight info from the new file

const points = 1652; // Example points

function MyBookings() {
  return (
    <div className="MyBookings bg-[#88ca92] min-h-screen flex flex-col items-center relative p-8">
      {/* Back Button */}
      <Link to="/MyAccount" className="absolute top-4 left-4 text-white text-lg">
        &larr; Back
      </Link>

      {/* Profile Info Container */}
      <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md mt-8 flex items-center justify-between">
        {/* Profile Picture */}
        <img 
          src={profileplaceholder} 
          alt="Profile Placeholder" 
          className="w-16 h-16 rounded-full mr-4"
        />
        {/* Profile Name */}
        <div className="text-center flex-1">
          <h2 className="text-lg font-bold">John Doe</h2>
        </div>
        {/* Profile Points */}
        <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
          <p className="text-md text-white mr-2">★ Points:</p>
          <p className="text-lg font-semibold text-white">{points}</p>
        </div>
      </div>

      {/* Bookings Container */}
      <div className='w-full md:w-5/12 mt-8 bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>My Bookings</h2>
        <div className='flex flex-col items-center'>
          {/* Fake Booking List */}
          <div className='w-full'>
            {bookings.map((booking, index) => {
              const bookingDate = new Date(booking.date);
              const day = bookingDate.getDate(); // Get the day of the month
              const month = bookingDate.toLocaleString('default', { month: 'long' }); // Get the month name
              const year = bookingDate.getFullYear(); // Get the year

              return (
                <div key={index} className='bg-[#E7F5F1] rounded-2xl shadow-md mb-4 w-full text-black border-[#467a4d] border-2'>
                  <div className='flex items-start mb-4'>
                    {/* Flight Icon */}
                    <img src={flightIcon} alt="Flight Icon" className='w-24 h-24 mr-1 p-2 mt-4 ml-4' />
                    {/* Flight Details */}
                    <div className='flex flex-col w-full p-4 mx-4'>
                      <div className='flex justify-between items-center'>
                        <p className='text-xl font-bold mt-5'>{booking.airline}</p>
                        <div className='flex flex-col items-end'>
                          <p className='text-5xl font-bold text-[#467a4d]'>{day}</p> {/* Bigger day number */}
                          
                        </div>
                      </div>
                      {/* Flight Route */}
                      <div className='justify-between flex'>
                      <p className='text-md mt-2'>{booking.route}</p>
                      <p className='text-md mt-2'>{month} {year}</p> {/* Month and year */}
                      </div>
                    </div>
                  </div>

                  {/* Departure and Booking ID */}
                  <div className='bg-[#467a4d] p-4 rounded-lg text-white flex justify-between items-end -mt-4'>
                    <div className='flex flex-col mx-4'>
                      <p className='text-md font-semibold'>Departure Time</p>
                      <p className='text-md'>{booking.departureTime}</p>
                    </div>
                    <div className='text-right mx-4'>
                      <p className='text-md font-semibold'>Booking ID</p>
                      <p className='text-md'>{booking.bookingID}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
