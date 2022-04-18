import React, { useEffect, useRef } from 'react';
import './Login.css'
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle,  } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';



const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        emailPassError,
      ] = useSignInWithEmailAndPassword(auth);

    const [logedUser, logedLoading, logedError] = useAuthState(auth);
    
    console.log(logedUser);
    console.log(logedError)

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

   

    if(user || googleUser || gitUser ){
        navigate(from, {replace: true});
    }

   
   
    const forgotPassword = async () =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Check Your Email')
        }
        else{
            toast('Please Enter Your Email')
        }

    }

    const handleSubmit = event =>{
        event.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }


    useEffect(()=>{
        const error = googleError  || gitError  || emailPassError;
        if(error){
            console.log(error?.code);
            console.log(error);
            toast(error?.code)
        }
    },[googleError, gitError, emailPassError])


    return (
        <div>
            <h5 className='text-center title'>To continue, log in to Wildlife.</h5>

           

            <button onClick={()=>signInWithGoogle()} className='w-50 btn d-block mx-auto btnStyle googleStyle btn-hover '>
                <span className='icon'><FaGoogle /></span>
                CONTINUE WITH GOOGLE
            </button>

            <button onClick={()=>signInWithGithub()} className='w-50 btn d-block mx-auto btnStyle gitStyle'>
                <span className='icon'><FaGithub /></span>
                CONTINUE WITH GITHUB
            </button>

           

            <div className='d-flex justify-content-center align-items-center text-center mx-auto'>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
                <p className='mt-2 px-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
            </div>

            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control required ref={emailRef} className='formbox' type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required ref={passwordRef} className='formbox' type="password" placeholder="Password" />
                    </Form.Group>
                    <button onClick={forgotPassword} className='forgotBtn '>Forgot your password?</button>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <button type='submit' className='btn d-block mx-auto btnStyle login '>
                        LOG IN
                    </button>
                </Form>
                <ToastContainer />

                <div className='mt-5 mb-5'>
                    <hr />
                    <h6 className='strong text-center'>Don't have an account?</h6>
                    <button onClick={()=>{navigate('/signup')}} className='signupbtn hover btn d-block mx-auto btnStyle googleStyle '>    
                <span className='signupbtn hover'></span>
                SIGN UP </button>
                </div>
            </div>

            { logedUser ? 
                <button onClick={()=>signOut(auth)} className='w-25 btn d-block mx-auto btnStyle googleStyle hover'>
                LOG OUT
            </button>
            : ''
            }



        </div>
    );
};

export default Login;