import React from 'react';
import Details from './Details';

const BookingDetails = () => (
  <Details
    title="Booking Details"
    data={{
      ID: ['PD-0351512224'],
      Date: ['Mon, 26 Jul 2024'],
      Time: ['09:00 AM'],
      Duration: ['30 Minutes'],
      Status: [
        'Upcoming',
        {
          backgroundColor: 'lavender',
          color: 'purple',
          width: 70,
          paddingLeft: 'none',
          marginLeft: 20,
          borderRadius: 5,
        },
      ],
    }}
  />
);

export default BookingDetails;
