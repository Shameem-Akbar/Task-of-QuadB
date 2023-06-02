import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import Marquee from 'react-fast-marquee';

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
                <Marquee className='fw-bold fs-4 mt-3' speed={50} gradient={true} gradientColor={[255, 255, 255]}>
                    Discover the Must-Watch Movie Series! Immerse Yourself in a World of Adventure, Romance, Mystery, and Heartwarming Moments.
                </Marquee>
                <h1 className='text-center mt-4 fw-bold'>MOVIE SHOWS</h1>
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