import React from "react";

const StoreForm = (update, updateStoreForm, store) => {
  return (
    <div>
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
    </div>
  );
};

export default StoreForm;
