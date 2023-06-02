import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';

const BookingMovieModal = ({ show }) => {

    const addBookingToLocalStorage = (booking) => {
        const existingBooking = localStorage.getItem("Booking");
        if (!existingBooking) {
            const newBooking = [booking];
            localStorage.setItem("Booking", JSON.stringify(newBooking));
        }
        else {
            let parsedBooking;
            try {
                parsedBooking = JSON.parse(existingBooking);
                if (!Array.isArray(parsedBooking)) {
                    parsedBooking = [parsedBooking];
                }
            }
            catch {
                parsedBooking = [];
            }
            parsedBooking.push(booking);
            localStorage.setItem("Booking", JSON.stringify(parsedBooking));
        }
    }

    const submitBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const language = form.language.value;
        const person = form.person.value;
        const date = form.date.value;
        const time = form.time.value;
        const booking = { movieName: name, language: language, person: person, date: date, time: time };
        addBookingToLocalStorage(booking);
    }


    return (
        <Form onSubmit={submitBooking} className='p-4 bg-secondary-subtle'>
            <div>
                <Form.Group className="mb-3 text-center">
                    <Form.Label className='fs-3 fw-semibold text-danger'>Movie Name </Form.Label>
                    <Form.Control name="name" className='text-center fw-semibold fs-5' type="text" defaultValue={show.name} readOnly />
                </Form.Group>
                <div className='d-flex gap-4'>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-5 fw-semibold'>Language </Form.Label>
                        <Form.Control name="language" type="text" defaultValue={show.language} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-5 fw-semibold'>Person <span className='text-danger'>*</span> </Form.Label>
                        <Form.Control name="person" type="number" min={1} required />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-5 fw-semibold'>Date <span className='text-danger'>*</span></Form.Label>
                        <Form.Control name="date" className='px-4' type="date" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fs-5 fw-semibold'>Time <span className='text-danger'>*</span></Form.Label>
                        <Form.Control name="time" className='px-4' type="time" required />
                    </Form.Group>
                </div>
            </div>
            <div className='d-grid'>
                <Button className='fw-semibold' variant="danger" type="submit">
                    Confirm Booking
                </Button>
            </div>
        </Form>
    );
};

export default BookingMovieModal;