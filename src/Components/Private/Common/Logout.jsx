import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

  let navigate = useNavigate();
  const URL = "http://localhost:8080/api/v1/logout"

  const handleLogout = async() => {
    try {
      console.log("log out");
      const response = await axios.post(URL,null, {
        headers: {
          'Content-Type': 'application/json',
          // Pass cookies in the request headers
        }
      });
      console.log(response);
      console.log("Logged OUT");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mt-20 m-auto bg-slate-200 p-20'>
      <button onClick={handleLogout} className='mt-20  bg-green-500 p-3 rounded-1xl'>Log out</button>
    </div>
  )
}

export default Logout