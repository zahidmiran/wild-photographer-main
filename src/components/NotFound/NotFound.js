import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
       <div>
            <div>
            <img className='pic' src="404.jpg" alt="" />
        </div>
        <div className='mx-auto div'>
            <Link className='btn btn-danger mx-auto' to='/'>Go to Home Page</Link>
        </div>
       </div>
    );
}

export default NotFound;