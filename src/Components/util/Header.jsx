import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import Logout from "../Private/Common/Logout";
import { useAuth } from "../Context/AuthProvider";

const Header = ({ name, isAuth }) => {
  const handleLogout = Logout();

  const [logout, setLogout] = useState(false);

  const { auth, setAuth } = useAuth();

  const doLogOut = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      handleLogout();
      setLogout(true);
      setAuth({
        userId: "",
        username: "",
        role: "ALL",
        isAuthenticated: false,
        accessExpiration: "",
        refreshExpiration: "",
      });
      console.log("Logged out --. from Header Component");
      Header();
    }
  };

  useEffect(() => {
    console.log(logout);
  }, [logout]);

  return (
    <div className="bg-amber-200 flex justify-between items-center w-full py-2 text-base font-semibold fixed top-0">
      {/* <header> */}
      <nav>
        <Link to="/">
          <img
            className="pl-10 h-10 w-30"
            src="https://ignatisd.gr/eshop/images/logo2.png"
            alt="logo"
          />
        </Link>
      </nav>

      {/* SEARCH BAR */}
      <div className="flex justify-center items-center w-1/3">
        <FaSearch className="text-slate-400 relative left-10" />
        <input
          className="h-9 rounded-xl px-12 w-full"
          type="text"
          placeholder="looking for..."
        />
      </div>
      {/* LINK BLOCK */}
      <div className="flex justify-center items-center space-x-5 px-20">
        {/* Login */}
        <div className="hover:bg-slate-900 py-2 px-3 rounded-xl hover:text-white">
          {console.log(name)}
          <Link to="/login" className="flex justify-center items-center">
            <img
              className="h-5 w-7 pr-2"
              src="https://png2.cleanpng.com/sh/d5a05efbc3d582efd0820a1e5b20cf1a/L0KzQYm3VcE3N5tBfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfdwd5hxfZ9qY3PyhbB7Tflkd58yfNd8aXfxPb32hBlvNWZmftU5MnTkdLa6UcI0Nmk4T6QAN0S1QYa5VsQ3PWM5Sqs6MEGxgLBu/kisspng-computer-icons-google-account-icon-design-login-5afc02dade3123.8372574215264652429101.png"
              alt=""
            />
            {(auth.isAuthenticated && auth.username) || "Login"}
          </Link>
        </div>

        {/* Become a seller */}

        <Link
          to="/seller/register"
          className="flex justify-center items-center"
        >
          <img
            className="h-5 w-7"
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt=""
          />{" "}
          Become a seller
        </Link>

        {/* Cart */}
        <div>
          <Link to="/cart" className="flex justify-center items-center">
            <img
              className="h-5 w-7"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt=""
            />{" "}
            Cart
          </Link>
        </div>

        {auth.isAuthenticated && <button onClick={doLogOut}>Log out</button>}
      </div>
      {/* </header> */}
    </div>
  );
};

export default Header;
