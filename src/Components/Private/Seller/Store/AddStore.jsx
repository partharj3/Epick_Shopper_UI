import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStore = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState({ storeName: "", about: "" });

  const ADD_STORE = "http://localhost:8080/api/v1/stores";
  // for configuring the data (BODY)
  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const updateStoreForm = ({ target: { value, name } }) => {
    setStore({ ...store, [name]: value });
    console.log(store);
  };

  const addStore = async (event) => {
    event.preventDefault();
    try {
      console.log(store);
      const response = await axios.post(
        ADD_STORE,
        store,
        HEADERS // Passing options object directly here
      );
      // localStorage.setItem("store", JSON.stringify(response.data.data));
      console.log(response);
      window.alert(response.data.message);
      navigate("/seller-dashboard");
    } catch ({
      response: {
        data: { message, rootcause },
      },
    }) {
      window.alert(message + ", " + rootcause);
    }
  };

  // useEffect(() => {
  //   FetchStore();
  // }, []);

  return (
    <div>
      <div className="bg-gray-200 h-svh w-svw pt-24">
        <form
          onSubmit={addStore}
          className="flex flex-col gap-10 w-1/2 bg-slate-800 py-16 px-20 backdrop-blur-md m-auto shadow-3xl rounded-3xl"
        >
          <h3 className="font-medium text-2xl text-white">
            Add Your Store Information:
          </h3>
          <div>
            <input
              onChange={updateStoreForm}
              // value={store.storeName}
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
              // value={store.about}
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStore;
