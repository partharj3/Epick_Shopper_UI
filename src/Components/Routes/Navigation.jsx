import React from "react";
import Register from "../Public/Register";
import Login from "../Public/Login";
import Home from "../Public/Home";
import Search from "../Public/Search";
import VerifyOTP from "../Public/VerifyOTP";
import SellerDashBoard from "../Private/Seller/SellerDashBoard";
import Cart from "../Private/Customer/Cart";
import Orders from "../Private/Customer/Orders";
import Wishlist from "../Private/Customer/Wishlist";
import SellerOrders from "../Private/Seller/SellerOrders";
import Account from "../Private/Common/Account";
import EditProfile from "../Private/Common/EditProfile";

const navs = [
  {
    path: "/seller/register",
    element: <Register role={"SELLER"} />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/customer/register",
    element: <Register role={"CUSTOMER"} />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/login",
    element: <Login />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/seller-dashboard",
    element: <SellerDashBoard />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/orders",
    element: <Orders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/seller-orders",
    element: <SellerOrders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/account",
    element: <Account />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
];

export default navs;
