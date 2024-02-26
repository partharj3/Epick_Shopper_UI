import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const { addressId } = useParams();

  const contactList = [];

  const [contact, setContact] = useState({});

  const updateContact = ({ target: { value, name } }) => {
    setContact({ ...contact, [name]: value });
  };

  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    console.log("-started------------------");
    console.log(contact);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/addresses/${addressId}/contacts`,
        contact,
        HEADERS
      );
      console.log(response);
      window.alert(response.data.message);
      contactList.push(response.data.data);
      console.log(contactList);
      navigate(`/seller-dashboard`);
    } catch ({
      response: {
        data: { message, rootcause },
      },
    }) {
      window.alert(message + ", " + rootcause);
    }
  };

  return (
    <div className="w-full h-svh pt-40 m-auto bg-slate-100">
      <div className=" bg-slate-900 w-96 backdrop-blur-lg m-auto p-16 rounded-2xl ">
        <form className="flex flex-col gap-4">
          <h3 className="text-2xl text-white">Contact Information:</h3>
          <hr />
          <div>
            <input
              type="text"
              onChange={updateContact}
              name="contactName"
              placeholder="name"
              className="h-9 rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div className="flex gap-1 ">
            <input
              type="tel"
              value="+91"
              readOnly
              className="w-10 h-9 rounded-lg pl-1 border-gray-400"
            />
            <input
              onChange={updateContact}
              name="contactNumber"
              type="tel"
              placeholder="contact number"
              className="h-9 rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <div>
            <input
              onChange={updateContact}
              name="priority"
              type="text"
              placeholder="priority"
              className="h-9 rounded-lg pl-3 border border-gray-400"
            />
          </div>
          <button
            onClick={handleContactSubmit}
            className="text-xl font-medium text-white bg-blue-900 hover:bg-gray-800 w-1/3 rounded-lg p-1"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
