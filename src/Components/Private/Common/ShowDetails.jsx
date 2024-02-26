import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowDetails = () => {
  const [store, setStore] = useState({});
  const [address, setAddress] = useState({}); // State to hold the list of address
  const { storeId } = useParams();
  const [contacts, setContacts] = useState([
    {
      contactId: 0,
      contactName: "",
      contactNumber: 0,
      priority: 0,
    },
  ]);

  const findStoreBySeller = async () => {
    const URL = `http://localhost:8080/api/v1/stores/${storeId}`;
    try {
      console.log("---- FETCH------");
      const response = await axios.get(URL);
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

  const findAddressByStore = async () => {
    const URL = `http://localhost:8080/api/v1/stores/${storeId}/addresses`;
    try {
      console.log("---- FETCH------");
      const response = await axios.get(URL);
      console.log(response);
      console.log("fetching");
      let contactList = [];
      if (response.status === 200) {
        const address = response.data.data; // Assuming this is an array of address
        console.log(address);
        const addressFound = {
          addressId: address.addressId,
          streetAddress: address.streetAddress,
          streetAddressAdditional: address.streetAddressAdditional,
          city: address.city,
          state: address.state,
          country: address.country,
          pincode: address.pincode,
          addressType: address.addressType,
          contacts: address.contacts,
        };
        setAddress(addressFound); // Set the state with the array of address
        console.log(addressFound.contacts);
        addressFound.contacts.map((contact) => {
          contactList.push({
            contactId: contact.contactId,
            contactName: contact.contactName,
            contactNumber: contact.contactNumber,
            priority: contact.priority,
          });
        });
        console.log(contactList);
        setContacts(contactList);
        console.log("Addresses Fetched");
        console.log(addressFound); // Ensure address are added to the list
        console.log(contacts);
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  // const findContactByAddress = async () => {
  //   console.log(address.addressId);
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/v1/addresses/${address.addressId}/contacts`
  //     );
  //     console.log(response);
  //     setContacts(response.data.data);
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // };

  useEffect(() => {
    findAddressByStore();
    findStoreBySeller();
    // findContactByAddress();
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="h-full w-svw pt-40 bg-gray-200">
      <div className="m-auto p-4 w-2/3 border-2 border-gray-900 rounded-2xl">
        <div className="p-10">
          <span className="text-2xl font-sans">Store Details:</span>
          <hr className="mx-10 my-3 border-gray-400" />
          <div className="flex gap-2 p-2 items-end">
            <span className="text-sm">Registration Id:</span>
            <span className="text-xl font-bold">{storeId}</span>
          </div>

          <div className="flex gap-2 p-2 items-end">
            <span className="text-sm">Name:</span>
            <span className="font-bold">{store.storeName}</span>
          </div>

          <div className="flex gap-2 p-2 items-start">
            <span className="text-sm">about:</span>
            <span className="font-bold">{store.about}</span>
          </div>
          {/* Fetching address */}

          <div className="">
            {console.log("Address " + address)}
            {(address === undefined && (
              <Link to={`/seller-dashboard/store/${storeId}/address`}>
                <div className="bg-gray-700 m-3 w-24 p-1.5 text-center rounded-full">
                  <button>add address</button>
                </div>
              </Link>
            )) || (
              <div>
                <div className="text-black flex gap-3 pt-10">
                  <h2 className="text-lg font-semibold">Address:</h2>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                      <span className="text-sm"> Address Type:</span>
                      <span className="font-bold">{address.addressType}</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-sm"> id:</span>
                      <span className="font-bold">{address.addressId}</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Area:</span>
                      <span className="font-bold">
                        {address.streetAddress}
                        {", "}
                        {address.streetAddressAdditional}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">City:</span>
                      <span className="font-bold">{address.city}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">State:</span>
                      <span className="font-bold"> {address.state}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Country:</span>
                      <span className="font-bold">{address.country}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Pincode:</span>
                      <span className="font-bold">{address.pincode}</span>
                    </div>
                    <Link
                      to={`/seller-dashboard/stores/${storeId}/addresses/${address.addressId}`}
                    >
                      <button className="bg-blue-300 w-1/4 p-1.5 rounded-lg font-semibold">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="text-black flex flex-wrap gap-3 pt-3">
              <div>
                <h4 className="text-lg font-semibold">Contacts:</h4>
                {contacts.map((contact, index) => (
                  <div key={index} className="p-3">
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Priority: </span>
                      <span className="font-bold">{contact.priority}</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Name:</span>
                      <span className="font-bold">{contact.contactName}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm">Number:</span>
                      <span className="font-bold">{contact.contactNumber}</span>
                    </div>
                    <Link
                      to={`/seller-dashboard/stores/${storeId}/addresses/${address.addressId}/contacts/${contact.contactId}}`}
                    >
                      <button className="bg-blue-300 my-2 p-1.5 rounded-lg font-semibold">
                        Update
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" text-white font-semibold text-xs flex flex-wrap">
          {contacts.length < 2 && (
            <Link
              to={`/seller-dashboard/stores/${storeId}/addresses/${address.addressId}/contact`}
            >
              <div className="bg-gray-700 m-3 w-24 p-1.5 text-center rounded-full">
                <button>add contact</button>
              </div>
            </Link>
          )}
          <Link to={`/seller-dashboard/update-store/${storeId}`}>
            <div className="bg-gray-700 m-3 w-24 p-1.5 text-center rounded-full">
              <button>update store</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
