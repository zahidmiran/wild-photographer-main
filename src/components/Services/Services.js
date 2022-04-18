import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'


const Services = () => {
    const [serrvices, setServices] = useState();

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='title mt-5'>My services</h2>
                <h2 className='title mt-2'>What i offer</h2>
                
                <div className='services-containe justify-items-center'>
                    {
                       serrvices?.map(service => <Service key={service.id} service={service}></Service>) 
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;