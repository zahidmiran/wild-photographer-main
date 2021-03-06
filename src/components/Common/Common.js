import React, { useRef } from 'react';
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init'
import {    useSignInWithFacebook,  useSignInWithGoogle,  } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import './Common.css'

import 'react-toastify/dist/ReactToastify.css';



const Common = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    
    


   

    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleSubmit = event =>{
        event.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

    }

    

    return (
        <div>
            <h5 className='text-center mt-5'>CREATE NEW ACCOUNT</h5>

           

            <button onClick={()=>signInWithGoogle()} className='btn-hover mt-5 mb-5 w-50 btn d-block mx-auto btnStyle googleStyle '>
                <span className='icon'><FaGoogle /></span>
                SIGN UP WITH GOOGLE
            </button>

            

            <div className='d-flex justify-content-center align-items-center text-center mx-auto'>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
                <p className='mt-2 px-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
            </div>

        </div>
    );
};

export default Common;