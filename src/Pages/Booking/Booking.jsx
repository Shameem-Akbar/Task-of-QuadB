import React from 'react';
import Table from 'react-bootstrap/Table';
import BookingRow from './BookingRow';

const Booking = () => {

    const storedBooking = localStorage.getItem("Booking");
    const bookingData = JSON.parse(storedBooking);
    console.log(bookingData);
    return (
        <div>
            <h2 className='my-3 text-center'>My Bookings</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='text-center fs-5'>No.</th>
                        <th className='text-center fs-5'>Movie Name</th>
                        <th className='text-center fs-5'>Language</th>
                        <th className='text-center fs-5'>Booking Date</th>
                        <th className='text-center fs-5'>Booking Time</th>

                    </tr>
                </thead>
                <tbody>
                    {bookingData &&
                        bookingData.map((booking, index) => <BookingRow
                            key={index}
                            booking={booking}
                            index={index}
                        ></BookingRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Booking;