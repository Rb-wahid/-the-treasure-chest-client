import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSWRConfig } from "swr";
import auth from "../../../Firebase.init";
import useUserEmail from "../../hooks/useUserEmail";
import Spinner from "../../Shared/Spinner/Spinner";
import { toast } from "react-toastify";

const AddInventory = () => {
  const { mutate } = useSWRConfig();
  const [email] = useUserEmail();
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      description: e.target.description.value,
      supplier: e.target.supplier.value,
      img: e.target.imgurl.value,
      email: e.target.email.value,
      sold: 0,
    };
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://the-treasure-chest.herokuapp.com/addinventory?email=${email}`,
        userData,
        {
          headers: {
            auth: `${localStorage.getItem("token")}`,
          },
        }
      );
      if (data.insertedId) {
        mutate(`https://the-treasure-chest.herokuapp.com/inventory`);
        mutate(
          `https://the-treasure-chest.herokuapp.com/myinventory?email=${email}`
        );
        toast.success("Added Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {loadingUser || loading ? (
        <Spinner />
      ) : (
        <>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto my-10">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Book name"
                  name="name"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input
                    type="number"
                    step={"any"}
                    min={1}
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="price"
                    placeholder="Price"
                    required
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="number"
                    step={"any"}
                    min={1}
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="quantity"
                    placeholder="Quantity"
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-6">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Description"
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-500
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput126"
                  placeholder="Supplier name"
                  name="supplier"
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="url"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Image url"
                  name="imgurl"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-500
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput126"
                  placeholder="your email"
                  name="email"
                  defaultValue={user.email}
                  disabled
                />
              </div>
              <button
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Add Inventory
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default AddInventory;
