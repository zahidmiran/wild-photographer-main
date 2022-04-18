import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';



import "./styles.css";

function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    toast('thank you for the booking.! We appreciate you contacting us/ [Your Company]. One of our colleagues will get back in touch with you soon!Have a great day!')

  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form className="hook-forms" onSubmit={handleSubmit(onSubmit)}>
      <label className="lavel ">User Name</label>
      <input required className="namefield field-label"
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p className="">First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label className="lavel">Your Email</label>
      <input required className="field-label" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      
      <label className="lavel">Mobile</label>
      <input className="field-label" {...register("age", { min: 18, max: 99 })} />

      <label className="lavel">Description</label>
      <input  placeholder="Why you Choose My Services.." className="field-label placeholder-text" {...register("age", { min: 18, max: 99 })} />
      <input className="hook-btn field-label" type="submit" />
      <ToastContainer></ToastContainer>

    </form>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default HookForm;
