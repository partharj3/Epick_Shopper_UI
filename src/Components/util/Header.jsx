import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../Context/AuthProvider";
import CustomerDropdown from "../Private/Customer/CustomerDropdown";
import TryHover from "../Public/TryHover";
import SellerDropdown from "../Private/Seller/SellerDropdown";

const Header = () => {
  const { auth } = useAuth();
  const [isClosed, setIsClosed] = useState(false);

  const updateDropdown = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="bg-amber-200 flex justify-between items-center w-full py-2 text-base font-semibold fixed top-0 z-">
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

      {auth.role}

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
        <div>
          {(auth.isAuthenticated && (
            <>
              <div>
                <button
                  onClick={updateDropdown}
                  className="hover:bg-slate-900 py-2 px-3 rounded-xl hover:text-white main flex items-center justify-center hover:opacity-75 transition duration-300 relative group"
                >
                  {auth.username}
                </button>
                <div className="py-2 px-3 rounded-xl ">
                  {
                    (auth.role === "SELLER" &&
                      (!isClosed || (
                        <SellerDropdown className="hidden bg-yellow-200 w-36 text-black rounded-xl relative top-30 left-0 p-2  group:block border-2 border-gray-500" />
                      ))) ||
                      (auth.role === "CUSTOMER" && (
                        // (!isClosed || (
                        <CustomerDropdown className="hidden absolute bg-yellow-200 w-36 text-black rounded-xl top-0 left-0 p-2  group:block border-2 border-gray-500" />
                      ))
                    // ))
                  }
                </div>
              </div>
            </>
          )) || (
            <Link to="/login" className="flex justify-center items-center">
              {/* <img
                className="h-5 w-7 pr-2"
                src="https://png2.cleanpng.com/sh/d5a05efbc3d582efd0820a1e5b20cf1a/L0KzQYm3VcE3N5tBfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfdwd5hxfZ9qY3PyhbB7Tflkd58yfNd8aXfxPb32hBlvNWZmftU5MnTkdLa6UcI0Nmk4T6QAN0S1QYa5VsQ3PWM5Sqs6MEGxgLBu/kisspng-computer-icons-google-account-icon-design-login-5afc02dade3123.8372574215264652429101.png"
                alt=""
              /> */}
              Login
            </Link>
          )}
        </div>

        {/* Become a seller */}

        {(auth.isAuthenticated && auth.role === "SELLER" && (
          <Link to="/seller-dashboard">Dashboard</Link>
        )) || (
          <Link
            to="/seller/register"
            className="flex justify-center items-center"
          >
            <img
              className="h-5 w-7"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt=""
            />
            Become a seller
          </Link>
        )}

        {/* <TryHover hover={auth.username} content={<SellerDropdown />} /> */}

        {/* Cart */}
        <div>
          <Link to="/cart" className="flex justify-center items-center">
            <img
              className="h-5 w-7"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
              alt=""
            />
            Cart
          </Link>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
};

export default Header;
