import React from 'react';

const BookingRow = ({ booking, index }) => {
    return (
        <tr>
            <td className='text-center'>{index + 1}</td>
            <td className='text-center'>{booking.movieName}</td>
            <td className='text-center'>{booking.language}</td>
            <td className='text-center'>{booking.date}</td>
            <td className='text-center'>{booking.time}</td>
        </tr>
    );
};

export default BookingRow;