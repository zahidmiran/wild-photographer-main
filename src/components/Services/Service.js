import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description, id } = service;
    const navigate = useNavigate();

    const goCheckout = name => {
        navigate(`/checkout/${name}`);
    }
    return (
        <div className='service container '>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Title> $-{price} </Card.Title>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => goCheckout(name)} variant="primary"><Link to='/checkout'></Link> Chekout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;