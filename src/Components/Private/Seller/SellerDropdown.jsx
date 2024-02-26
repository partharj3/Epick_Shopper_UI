import React from "react";
import Logout from "../Common/Logout";
import { Link } from "react-router-dom";

const SellerDropdown = () => {
  return (
    <div>
      <div>
        <Link to="/account">My Profile</Link>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default SellerDropdown;
