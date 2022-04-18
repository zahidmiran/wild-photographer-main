import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Common from '../Common/Common';
import { ToastContainer, toast } from 'react-toastify';



const Signup = () => {
    const emailRef = useRef('');
    const confirmemailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    // console.log('agree', agree)
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    console.log(user);
    let errorElement;


    const handleSignUp = async  (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = event.target.name.value;
        const confirmEmail = confirmemailRef.current.value;

        if(email == confirmEmail){
            createUserWithEmailAndPassword(email, password);
            await updateProfile({displayName: name})
        }
        else{
            errorElement = <p className='text-danger'>Email Dont Matched</p>;
            toast('Email Dont Matched')
        }
    }
    useEffect(()=>{
        const errors = error ;
        if(errors){
            console.log(errors);
            console.log(errors?.code);
            // toast(error?.code);
            toast(errors?.code) 
        }
    },[error])


    return (
        <div>
            <Common></Common>
            <h5 className='text-center mt-5 mb-5'>Sign up with your email address</h5>

            <div className='container w-50 mx-auto'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>What's your email?</Form.Label>
                        <Form.Control required ref={emailRef} className='formbox' type="required" placeholder="Enter Your email." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Confirm your email</Form.Label>
                        <Form.Control required ref={confirmemailRef} className='formbox' type="email" placeholder="Enter Your email again." />
                    </Form.Group>
                    {errorElement}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create a password</Form.Label>
                        <Form.Control required ref={passwordRef} className='formbox' type="password" placeholder="Create a password"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>What should we call you?</Form.Label>

                        <Form.Control className='formbox' name='name' type="text" placeholder="Enter a profile name" />
                    </Form.Group>
                    <ToastContainer></ToastContainer>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="Accept Terms & condition" />

                        <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Contact Me For Business</label>
                    </Form.Group>

                    <button disabled={!agree} type='submit' className='btn d-block mx-auto btnStyle login '>
                        Sign Up
                    </button>
                </Form>

                <div className='mt-5 mb-5'>
                    <hr />


                    <p className='text-center'>Have an account?
                        <button onClick={()=>navigate('/login')} className='btn btn-link  mx-auto'>
                            log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;