import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/login";
    const BODY = {
      email: email,
      password: password,
    };

    // for configuring the data (BODY)
    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      console.log(email, password);
      const response = await axios.post(URL, BODY, HEADERS);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      // console.log("FAILED");
      window.alert("Login Failed.. " + error.response.data.rootcause);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-svh">
      <div className="shadow-2xl shadow-gray-600 flex items-center justify-center rounded-2xl">
        <div className="bg-slate-900 h-96 w-80 rounded-l-2xl text-white flex justify-center p-7">
          <div>
            <p className="font-bold text-2xl pb-5">Login</p>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img
              className="h-52 m-auto mt-5 rounded-2xl"
              src="https://paymize24.com//public/assets/img/login1.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-yellow-200 h-96 px-16 py-16 rounded-r-2xl">
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="email address"
                onChange={(event) => setEmail(event.target.value)}
                className="pl-3 h-7 mt-1 block w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
                className="pl-3 h-7 mt-1 block w-56 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="bg-yellow-900 h-8 w-20 rounded-md text-white"
              >
                {" "}
                Login
              </button>
            </div>

            <div className=" h-10 mt-9">
              <Link to="/customer/register">
                <span className="text-gray-700 font-sans text-xs font-semibold">
                  New to epick ? Create an account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
