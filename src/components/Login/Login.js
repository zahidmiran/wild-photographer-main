import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { signOut } from 'firebase/auth';



const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        emailPassError,
      ] = useSignInWithEmailAndPassword(auth);

    
    
    // Currently loged user:
    const [logedUser, logedLoading, logedError] = useAuthState(auth);
    console.log(logedUser, logedError);

    
      const emailRef = useRef('');
      const passwordRef = useRef('');

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';


      const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

      if(user || googleUser || fbUser || gitUser){
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
          signInWithEmailAndPassword(email, password);
    }
    console.log(user);


    useEffect(()=>{
        const error = googleError || fbError || gitError || emailPassError;
        if(error){
            console.log(error);
            console.log(error?.code);
            // toast(error?.code);
            toast.error(error?.code, {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
        }
    },[googleError, fbError, gitError,emailPassError ])


   
    return (
        <div className='container mt-5 w-50 mx-auto'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='label-text' >Email address</Form.Label>

                <Form.Control required ref={emailRef} className='formbox' type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='label-text'>Password</Form.Label>
                <Form.Control required ref={passwordRef} className='formbox' type="password" placeholder="Min 8 Character" />
            </Form.Group>
            <button onClick={forgotPassword} className='forgotBtn '>Forgot your password?</button>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            

            <button type='submit' className='btn d-block mx-auto btnStyle login '>
                LOG IN
            </button>

            <div className='mt-2 mb-5'>

            <h6 className='strong text-center'>Don't have an account?</h6>
            <button onClick={()=>{navigate('/registration')}} className='signupbtn btn d-block mx-auto btnStyle googleStyle '>    
        <span className='signupbtn'></span>
        SIGN UP 
    </button>
        </div>
            
        </Form>
        <ToastContainer></ToastContainer>

        <div className='mb-3 d-flex justify-content-center align-items-center text-center mx-auto'>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
                <p className='mt-2 px-3'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-25' ></div>
            </div>

            <h5 className='text-center'>continue with</h5>
            <div className='d-flex justify-content-center'>

            <button onClick={()=>signInWithGithub()} className='   btnStyle p-3'>
                <span className='icon git-icon'><FaGithub /></span>
            </button>

            <button onClick={()=>signInWithFacebook()} className=' p-3  btnStyle '>
                <span className='icon fb-icon'><FaFacebook /></span>
            </button>

            <button onClick={()=>signInWithGoogle()} className='  btnStyle p-3'>
                <span className='icon goo-icon'><FaGoogle /></span>
            </button>
            </div>

            { logedUser ? 
                <button onClick={()=>signOut(auth)} className='btn d-block mx-auto log-btn btnStyle googleStyle '>
                LOG OUT
            </button>
            : ''
            }
            

        
    </div>
    );
};

export default Login;