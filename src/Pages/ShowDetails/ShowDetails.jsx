import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import ReactModal from 'react-modal';
import BookingMovieModal from './BookingMovieModal';

const ShowDetails = () => {

    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [bookingModal, setBookingModal] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            borderRadius: '1rem'
        }
    }

    useEffect(() => {
        const getShowDetails = async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
            setShow(data);
        }
        getShowDetails();
    }, []);

    if (!show) {
        return <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }

    const parseHTML = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.documentElement.textContent;
    };

    return (
        <div>
            <Marquee className='fw-bold fs-4 mt-4' speed={50} gradient={true} gradientColor={[255, 255, 255]}>
                Discover the Must-Watch Movie Series! Immerse Yourself in a World of Adventure, Romance, Mystery, and Heartwarming Moments.
            </Marquee>
            <div style={{ width: "60rem" }} className='d-flex gap-4 mt-4 border border-4 shadow p-4 mx-auto'>
                <img src={show.image.medium} alt={show.name} />
                <div className='pe-2 mt-2'>
                    <h2><span className='fw-semibold' >Show Name: </span>{show.name}</h2>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='mb-0'><span className='fw-semibold'>Type:</span> {show.type}</p>
                            <p className='mb-0'><span className='fw-semibold'>Language:</span> {show.language}</p>
                        </div>
                        <div>
                            <p className='mb-0'><span className='fw-semibold'>Status:</span> {show.status}</p>
                            <p className='mb-0'><span className='fw-semibold'>Premiered:</span> {show.premiered}</p>
                        </div>
                    </div>
                    <p><span className='fw-semibold' >Summary:</span> {parseHTML(show.summary)}</p>
                    <div className='d-grid'>
                        <button onClick={() => setBookingModal(true)} className='btn btn-danger fw-semibold'>Book A Ticket</button>
                        <ReactModal
                            isOpen={bookingModal}
                            onRequestClose={() => setBookingModal(false)}
                            style={customStyles}
                            ariaHideApp={false}
                        >
                            <BookingMovieModal
                                setBookingModal={setBookingModal}
                                show={show}
                            >
                            </BookingMovieModal>
                        </ReactModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;