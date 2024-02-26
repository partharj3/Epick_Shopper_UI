import React from "react";
import Logout from "../Common/Logout";
import { Link } from "react-router-dom";

const CustomerDropdown = () => {
  return (
    <div className="bg to-blue-300 py-3 px-2">
      <div className="p-2 hover:bg-slate-400">
        <Link to="/account">My Profile</Link>
      </div>
      <div className="p-2">
        <Link to="/orders">Orders</Link>
      </div>
      <div className="p-2">
        <Link to="/wishlist">Wishlist</Link>
      </div>
      <div className="p-2">
        <Logout />
      </div>
    </div>
  );
};

export default CustomerDropdown;
