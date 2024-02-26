import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateStore from "./UpdateStore";
import ShowDetails from "../../Common/ShowDetails";
import Options from "../../Util/Options";

const ShowStore = ({ data }) => {
  return (
    <div className="my-5 shadow-xl">
      <div className="bg-gray-200 p-4 font-medium text-gray-600 rounded-lg text-xl">
        <div>
          <h4>Store Details:</h4>
          <hr className="ml-4 w-3/4 my-2 border-gray-400" />
          <span className="text-sm">Registration Id:</span>
          <div>
            <span className="text-xl">{data.storeId}</span>
          </div>
          <span className="text-sm">Name:</span>
          <div>
            <span>{data.storeName}</span>
          </div>
          <span className="text-sm">about:</span>
          <div>
            <span>{data.about}</span>
          </div>
          {/* <ShowDetails data={data} /> */}
          <Link to={`/seller-dashboard/stores/${data.storeId}`}>
            <button className="bg-blue-600 rounded-xl text-white px-3 py-1 mt-4">
              Open
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowStore;
