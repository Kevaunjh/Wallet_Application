import React from 'react';
import { Link } from 'react-router-dom';
import profileplaceholder from './../../../images/logoplaceholder.png';
import flightIcon from './../../../images/airservice.png';
import bookings from './../../Datafiles/Flightinfo';

const points = 1652;

function MyBookings() {
  return (
    <div className="Profile bg-[#e9f7f2] min-h-screen flex flex-col items-center relative">

      {/* Combined Container for Small Screens */}
      <div className="w-full bg-[#e9f7f2] p-6  flex flex-col items-center  relative min-h-screen h-auto">
        {/* Back Button for Smaller Screens */}
        <Link to="/MyAccount" className="absolute top-8 left-8 rounded-full  p-2  bg-[#467a4d] text-white">
          &larr; Back
        </Link>

       
        <div className="flex flex-row items-center justify-between rounded-3xl bg-white border-2 shadow-md 2xl:w-8/12 w-full p-8 gap-6 xl:gap-16 mt-16 py-4">
  {/* Profile Picture and Name */}
  <div className="flex items-center gap-6">
    <img 
      src={profileplaceholder} 
      alt="Profile Placeholder" 
      className="2xl:w-24 2xl:h-24 h-16 w-16 rounded-full shadow-md 2xl:border-2 2xl:border-black"
    />
    <div className="text-left">
      <h2 className="text-xl font-bold">John Doe</h2>
    </div>
  </div>
  {/* Points */}
  <div className="bg-[#467a4d] p-1 rounded-lg flex items-center w-[7.6rem]">
    <Link className='flex items-center rounded-lg p-1' to="/Points">
      <p className="text-md font-semibold text-white mr-2">★ {points}</p>
      <p className="text-md text-white">Pts</p>
    </Link>
  </div>
</div>

        {/* Profile Info Section Links */}
        <div className="mt-8 flex-grow 2xl:w-8/12 mx-auto rounded-3xl bg-white border-2 justify-center shadow-md w-full p-8 gap-6 xl:gap-16 xl:justify-center xl:px-24 flex-1">
  <h2 className='text-2xl font-bold mb-4 text-center'>My Bookings</h2>
  <div className='flex flex-col items-center'>
    {/* Fake Booking List */}
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3'>
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
