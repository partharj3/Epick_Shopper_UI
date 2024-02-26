import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProvider";
import ShowStore from "./Store/ShowStore";
import { Link } from "react-router-dom";
import Options from "../Util/Options";

const FetchStore = () => {
  const {
    auth: { userId },
  } = useAuth();
  const [store, setStore] = useState({ storeId: 0, storeName: "", about: "" });

  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const findStoreBySeller = async () => {
    const URL = `http://localhost:8080/api/v1/sellers/${userId}/stores`;
    try {
      console.log("---- FETCH------");
      const response = await axios.get(URL, {}, HEADERS);
      console.log(response);
      console.log("fetching");
      if (response.status === 200) {
        const found = {
          storeId: response.data.data.storeId,
          storeName: response.data.data.storeName,
          about: response.data.data.about,
        };
        setStore(found);
        console.log("Store Fetched");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    findStoreBySeller();
  }, []);

  // useEffect(() => {
  //   console.log(store);
  // }, [store]);

  return (
    <div className="">
      {(store.storeId === 0 && (
        <Link to="/seller-dashboard/add-store">
          <Options option="Add Store" />
        </Link>
      )) || <ShowStore data={store} />}
    </div>
  );
};

export default FetchStore;

//!----------------------------------------------------
