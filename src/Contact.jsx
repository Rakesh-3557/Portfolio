import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from 'react-toastify';


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();

    emailjs.sendForm('service_yq101z9', 'template_hta5d8p', form.current, 'RAb02hVzV1P-IgjUq')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
     
  };

  const notify = ()=> {toast.success("message sent sucessfully");
}

  return (
    <div className='maincontact'>
    <form  className="contactform" ref={form} onSubmit={sendEmail} style={{textAlign:"center"}}>
     <fieldset>
        
            <legend>Enter Your Details, </legend>
      <label >Name : </label>
      <input type="text" name="from_name" /><br /><br />
      <label>Email : </label>
      <input type="email" name="from_name" /><br /><br />
      <label>Message : </label>
      <textarea name="message" /><br /><br />
      <button className='submit1' onClick={notify}> Submit</button>
      
      <ToastContainer/>
      </fieldset>
    </form>
    </div>
  );
};
export default Contact