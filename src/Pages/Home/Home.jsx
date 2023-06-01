import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowCard from './ShowCard';

const Home = () => {
    const [shows, setShows] = useState([]);


    useEffect(() => {
        const getShows = async () => {
            const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=all')
            setShows(data);
        }
        getShows();
    }, []);



    return (
        <div>
            <div>
                <h1 className='text-center mt-4 fw-bold'>TV SHOWS</h1>
                <div className='row row-cols-4 mx-auto mt-4'>
                    {shows.map((show) => <ShowCard
                        key={show.show.id}
                        show={show}
                    ></ShowCard>)}
                </div>
            </div>
        </div>
    );
};

export default Home;