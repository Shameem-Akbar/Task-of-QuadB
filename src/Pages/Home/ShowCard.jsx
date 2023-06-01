import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ShowCard = ({ show }) => {

    return (
        <div className='mb-4'>
            <Card className='shadow' style={{ width: '21rem' }}>
                <Card.Img variant="top" src={show.show.image?.medium} alt={show.show.name} />
                <Card.Body>
                    <Card.Title className='mb-1'>Show Name: <span className='fw-normal'>{show.show.name}</span></Card.Title>
                    <Card.Text className='mb-0'>
                        <span className='fw-semibold'>Type:</span> {show.show.type}
                    </Card.Text>
                    <Card.Text className='mb-0'>
                        <span className='fw-semibold'>Language:</span> {show.show.language}
                    </Card.Text>
                    <Card.Text className='mb-0'>
                        <span className='fw-semibold'>Status:</span> {show.show.status}
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-semibold'>Premiered:</span> {show.show.premiered}
                    </Card.Text>
                    <Link to={`/show/${show.show.id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;