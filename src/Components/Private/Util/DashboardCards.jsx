import React from "react";
import Count from "./Count";

const DashboardCards = ({ name, count, rupee }) => {
  return (
    <div>
      <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-md p-6 rounded-lg shadow-lg block z-0">
        <h3>{name}</h3>
        <div className="font-bold text-4xl p-4">
          <div className="flex gap-2">
            {rupee}
            <Count start="0" end={count} suffix="+" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
