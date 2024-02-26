import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UpdateStore = () => {
  const navigate = useNavigate();
  let tryingToFetchData = false;
  const { id } = useParams();
  const [store, setStore] = useState({ storeId: 0, storeName: "", about: "" });

  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const UPDATE_STORE = `http://localhost:8080/api/v1/stores/${store.storeId}`;
  const updateStore = async (event) => {
    event.preventDefault();
    try {
      console.log(store);
      const response = await axios.put(UPDATE_STORE, store, HEADERS);
      setStore({
        storeName: response.data.data.storeName,
        about: response.data.data.about,
      });
      console.log("Updated" + response);
      window.alert(response.data.message);
      localStorage.setItem("store", JSON.stringify(store));
      navigate("/seller-dashboard");
    } catch ({
      response: {
        data: { message, rootcause },
      },
    }) {
      window.alert(message + ", " + rootcause);
    }
  };

  const updateStoreForm = ({ target: { value, name } }) => {
    setStore({ ...store, [name]: value });
  };

  const getStore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/stores/${id}`
      );
      setStore(response.data.data);
      console.log("---INITIAL STORE ---");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(id);
    getStore();
  }, []);

  useEffect(() => {
    console.log(store);
  }, [store]);

  return (
    <div className="bg-gray-200 h-full w-full pt-24">
      <form
        onSubmit={updateStore}
        className="flex flex-col gap-10 w-1/2 bg-slate-800 py-16 px-20 backdrop-blur-md m-auto shadow-3xl rounded-3xl"
      >
        <h3 className="font-medium text-2xl text-white">
          Update Your Store Information:
        </h3>
        <div>
          <input
            onChange={updateStoreForm}
            value={store.storeName}
            name="storeName"
            type="text"
            required
            placeholder="your store name"
            className="w-2/4 h-10 rounded-2xl pl-5"
          />
        </div>
        <div>
          <textarea
            onChange={updateStoreForm}
            value={store.about}
            name="about"
            className="w-3/4 p-4 rounded-2xl"
            cols="30"
            rows="5"
            placeholder="Tell about your Store..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="h-12 px-4 text-white bg-slate-400 w-24 rounded-2xl text-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStore;
