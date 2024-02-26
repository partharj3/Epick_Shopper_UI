import React, { useEffect, useState } from "react";

const SetStore = ({ update, handle, data }) => {
  const [isUpdation, setUpdation] = useState(update);

  const [store, setStore] = useState({});

  useEffect(() => {
    if (update) {
      setStore({
        storeName: data.storeName,
        about: data.about,
      });
      setUpdation(false);
    }
  }, [isUpdation]);

  const updateStoreForm = ({ target: { value, name } }) => {
    setStore({ ...store, [name]: value });
    console.log(store);
  };
  return (
    <div className="bg-gray-200 h-svh w-svw pt-24">
      <form
        onSubmit={handle}
        className="flex flex-col gap-10 w-1/2 bg-slate-800 py-16 px-20 backdrop-blur-md m-auto shadow-3xl rounded-3xl"
      >
        <h3 className="font-medium text-2xl text-white">
          {(update && "Update") || "Add"} Your Store Information:
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
          {(update && "Update") || "Add"}
        </button>
      </form>
    </div>
  );
};

export default SetStore;
