import React from "react";

const Options = ({ option, className }) => {
  return (
    <div>
      <div className="p-3">
        <button className={className}>
          <h3 className="text-xl font-medium text-gray-800 bg-opacity-25 backdrop-filter backdrop-blur-md rounded-xl shadow-lg p-3">
            {option}
          </h3>
        </button>
      </div>
    </div>
  );
};

export default Options;
