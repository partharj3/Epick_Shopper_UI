import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAddress = () => {
  const navigate = useNavigate();
  const addresses = [];
  const [address, setAddress] = useState({
    streetAddress: "",
    streetAddressAdditional: "",
    city: "",
    state: "",
    country: "",
    pincode: 0,
    addressType: "",
  });

  const { storeId, addressId } = useParams();

  const updateAddressData = ({ target: { value, name } }) => {
    setAddress({ ...address, [name]: value });
  };

  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    console.log("-started------------------");
    console.log(address);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/addresses/${addressId}`,
        address,
        HEADERS
      );
      console.log(response);
      window.alert(response.data.message);
      addresses.push(response.data.data);
      console.log(addresses);
      navigate(`/seller-dashboard/stores/${storeId}`);
    } catch ({
      response: {
        data: { message, rootcause },
      },
    }) {
      window.alert(message + ", " + rootcause);
    }
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/addresses/${addressId}`
      );
      setAddress(response.data.data);
      console.log("---INITIAL ADDRESS ---");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(addressId);
    getAddress();
  }, []);

  return (
    <div className=" w-1/2 pt-20 m-auto">
      <div className="h-3/4 bg-slate-900 w-3/4 m-auto p-20 rounded-2xl ">
        <h3 className="text-2xl mb-5 text-white">Address:</h3>
        <form action="" className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              onChange={updateAddressData}
              value={address.streetAddress}
              name="streetAddress"
              placeholder="Street"
              className="h-9 w-1/2 rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <textarea
              onChange={updateAddressData}
              value={address.streetAddressAdditional}
              name="streetAddressAdditional"
              cols={40}
              rows={3}
              placeholder="Address Line 2"
              className="w-full rounded-lg pl-3 pt-2 border border-gray-400 resize-none"
            />
          </div>
          <div>
            <input
              onChange={updateAddressData}
              value={address.city}
              name="city"
              type="text"
              placeholder="City"
              className="h-9 w-full rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <input
              onChange={updateAddressData}
              value={address.state}
              name="state"
              type="text"
              placeholder="state"
              className="h-9 w-full rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <input
              onChange={updateAddressData}
              value={address.country}
              name="country"
              type="text"
              placeholder="Country"
              className="h-9 w-full rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <input
              onChange={updateAddressData}
              value={address.pincode}
              name="pincode"
              type="tel"
              placeholder="pincode"
              className="h-9 w-full rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <input
              onChange={updateAddressData}
              value={address.addressType}
              name="addressType"
              type="text"
              placeholder="Address Type"
              className="h-9 w-full rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <button
            className="h-12 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            onClick={handleAddressSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddress;
