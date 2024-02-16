import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({role}) => {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const URL = "http://localhost:8080/api/v1/register";
  const BODY = {
    email: username,
    password: password,
    userRole: role
  };

  // for configuring the data (BODY)
  const HEADERS = {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(username, password, role);
    sessionStorage.setItem('email', username);
    console.log(sessionStorage.getItem('email')+"----------");
    try {
      console.log("INSIDE");
      const response = await axios.post(URL, BODY, HEADERS);
      window.alert("OTP sent to your email")
      navigate("/verify-otp");
      console.log(response);
    } catch (error) {
      console.log(error); 
    }

  }

  return (
    <div className='h-svh flex items-center justify-center bg-gray-100' >
      <div className='shadow-2xl shadow-gray-600 flex items-center justify-center rounded-2xl'>
        <div className='bg-slate-900 h-96 w-80 rounded-l-2xl text-white flex justify-center p-7'>
        <div>
          <h3 className='font-bold text-2xl pb-5'>Looks like you're new here!</h3>
            <p>Sign up with your mobile number to get started</p>  
            <img className='h-52 m-auto pt-6' src='https://www.like4like.org/img/login/register.png' alt="" />
          </div>
        </div>
      <section className='bg-yellow-200 h-96 p-16 rounded-r-2xl'>
        <form>
          <div className="mb-4">
            <input type="email" placeholder='email address' required onChange={(event) => setUsername(event.target.value)}
                className='pl-3 h-7 mt-1 w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
          </div>
          <div className="mb-4">
            <input type="text" placeholder='password' required onChange={(event) => setPassword(event.target.value)}
            className='pl-3 h-7 mt-1 w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
          </div>
          <div className="mb-4">
              <button onClick={handleRegister} className='bg-yellow-900 px-6 py-1 rounded-md text-white'>Register</button>
          </div>

         <div className=' h-10 mt-9'>
            <Link to='/login'><span className='text-gray-700 font-sans text-xs font-semibold'>Existing user? Login</span></Link>
          </div>

        </form>
      </section>
      </div>
      
    </div>
  )
}

export default Register