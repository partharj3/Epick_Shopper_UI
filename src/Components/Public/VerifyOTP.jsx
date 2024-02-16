import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {

  const navigate = useNavigate();

  const [OTP, setOTP] = useState("");
  const email = sessionStorage.getItem('email');
  const URL = "http://localhost:8080/api/v1/verify-otp";
  const BODY = {
    
    email: email,
    otp:OTP
  }

  const HEADERS = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const handleVerification = async (event) => {
    event.preventDefault();
   console.log(BODY.email, OTP);
    if (email != null) {
      let response;
        try {
        response = await axios.post(URL, BODY, HEADERS);
          console.log(response);
          sessionStorage.removeItem('email');
          window.alert("Verification Successful !")
          navigate('/login')
      } catch (error) {
          window.alert(error.response.data.message);
      }
    }
    else {
      console.log("NO EMAIL FOUND");
    }
    
  }

  return (
    // shadow-2xl shadow-gray-600
    <div className='flex justify-center items-center p-7 h-svh'>
      <div className='shadow-2xl shadow-gray-600 flex justify-center items-center rounded-2xl'>
        <div className='bg-slate-900 h-96 w-80 rounded-l-2xl text-white flex justify-center p-7'>
        <div>
          <h3 className='font-bold text-2xl pb-5'>Verify your email here!</h3>
            <p>Enter the otp which is sent to your entered email id.</p>  
            <img className='h-48 m-auto mt-5' src="https://www.meritto.com/wp-content/uploads/2021/11/Banner-lImage.png" alt="" />
          </div>
        </div>
      <form className='bg-yellow-200 h-96 px-16 py-10 rounded-r-2xl flex-col items-center'>
        <div>
          <input type="tel" placeholder='Enter your OTP' onChange={(event) => setOTP(event.target.value)} className='w-64 h-10 rounded-2xl pl-10'/>
        </div>
        <div className='mt-10'>
          <button type='submit' className='bg-yellow-900 w-56 rounded-3xl text-white px-5 py-2' onClick={handleVerification}>Verify OTP</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default VerifyOTP