import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../images/logoplaceholder.png';
import flightIcon from './../images/airservice.png';
import bookings from './../Flightinfo.js';

const points = 1652;

function MyBookings() {
  return (
    <div className="MyBookings min-h-screen flex flex-col items-center bg-white  relative w-screen">
      {/* Back Button */}


      {/* Mobile Layout */}
      <div className="w-full min-h-screen  flex flex-col p-8 ">
      <div className=" flex items-center  justify-start">
        <Link to="/MyAccount" className="mr-4 bg-[#467a4d] text-white rounded-full p-2">
          &larr; Back
        </Link>
      </div>
        {/* Profile Info */}
        <div className="w-full mt-8 2xl:w-8/12 2xl:mx-auto">
          <div className="w-full bg-white p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <img 
                src={profileplaceholder} 
                alt="Profile Placeholder" 
                className="w-16 h-16 rounded-full mr-4 border-2 border-black"
              />
              <div className="text-center flex-1">
                <h2 className="text-lg font-bold">John Doe</h2>
              </div>
              <div className="bg-[#467a4d] p-1 rounded-lg flex items-center">
                <p className="text-md text-white mr-2">★ Points:</p>
                <p className="text-lg font-semibold text-white">{points}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Container */}
        <div className='w-full p-6 rounded-lg -mt-6 mb-6 flex flex-col flex-grow overflow-auto 2xl:w-8/12 2xl:mx-auto'>
          <h2 className='text-2xl font-bold mb-4 text-center'>My Bookings</h2>
          <div className='flex flex-col items-center'>
            {/* Fake Booking List */}
            <div className='w-full'>
              {bookings.map((booking, index) => {
                const bookingDate = new Date(booking.date);
                const day = bookingDate.getDate();
                const month = bookingDate.toLocaleString('default', { month: 'long' });
                const year = bookingDate.getFullYear();

                return (
                  <div key={index} className='bg-[#E7F5F1] rounded-2xl shadow-md mb-4 w-full text-black border-[#467a4d] border-2 flex flex-col'>
                    <div className='flex items-start mb-4'>
                      <img src={flightIcon} alt="Flight Icon" className='w-24 h-24 mr-1 p-2 mt-4 ml-4' />
                      <div className='flex flex-col w-full p-4 mx-4'>
                        <div className='flex justify-between items-center'>
                          <p className='text-xl font-bold mt-5'>{booking.airline}</p>
                          <div className='flex flex-col items-end'>
                            <p className='text-5xl font-bold text-[#467a4d]'>{day}</p>
                          </div>
                        </div>
                        <div className='justify-between flex'>
                          <p className='text-md mt-2'>{booking.route}</p>
                          <p className='text-md mt-2'>{month} {year}</p>
                        </div>
                      </div>
                    </div>

                    <div className='bg-[#467a4d] p-4 rounded-lg text-white mt-auto flex justify-between'>
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
    </div>
  );
}

export default MyBookings;
