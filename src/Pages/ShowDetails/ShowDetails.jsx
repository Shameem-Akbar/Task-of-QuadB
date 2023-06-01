import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {

    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const getShowDetails = async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
            setShow(data);
        }
        getShowDetails();
    }, []);

    if (!show) {
        return <div>Loading...</div>;
    }

    const parseHTML = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.documentElement.textContent;
    };

    return (
        <div style={{ width: "60rem" }} className='d-flex gap-4 mt-5 border border-4 shadow py-2  px-2 mx-auto'>
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
            </div>
        </div>
    );
};

export default ShowDetails;