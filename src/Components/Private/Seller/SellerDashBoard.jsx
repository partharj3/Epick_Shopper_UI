import React, { useEffect, useState } from "react";
import DashboardCards from "../Util/DashboardCards";
import Options from "../Util/Options";
import FetchStore from "./FetchStore";
import AddStore from "./Store/AddStore";
import { Link } from "react-router-dom";

const SellerDashBoard = () => {
  // const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("dashboard rendered");
  }, []);

  return (
    <div className="bg-gray-100 h-full w-full z-0 flex justify-center items-center px-10">
      <div className="w-1/4 border-2 border-solid border-gray-500 rounded-xl px-10 py-30 flex mt-10 gap-2">
        <FetchStore />
      </div>
      <section className="rounded-2xl p-20 border-solid border-green-500 ">
        <div className="p-10 ">
          <h2 className="text-2xl font-bold py-2 ">Revenue</h2>
          <div className="flex flex-wrap gap-4">
            <DashboardCards
              name="Total Revenue"
              rupee="&#8377;"
              count="2346569"
            />
          </div>
        </div>
        <hr className="border-3 border-gray-400" />
        <div className="p-10">
          <h2 className="text-2xl font-bold py-2">Orders</h2>
          <div className="flex flex-wrap gap-4">
            <DashboardCards name="Total Orders" count="84" />
            <DashboardCards name="Completed Orders" count="78" />
            <DashboardCards name="Orders Yet to Dispatch" count="6" />
            <DashboardCards name="Shipped Orders" count="56" />
          </div>
        </div>
        <hr className="border-3 border-gray-400" />
        <div className="p-10">
          <h2 className="text-2xl font-bold py-2 ">Product Listing</h2>
          <div className="flex flex-wrap gap-4">
            <DashboardCards name="Active" count="2035" />
            <DashboardCards name="Out of Stock" count="640" />
            <DashboardCards name="Low stock" count={420} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerDashBoard;
