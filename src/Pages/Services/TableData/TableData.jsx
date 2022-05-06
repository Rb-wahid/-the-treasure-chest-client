/* eslint-disable no-restricted-globals */
import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSWRConfig } from "swr";
import useUserEmail from "../../hooks/useUserEmail";

const TableData = ({
  setLoading,
  item: { _id, name, price, quantity, sold, email },
  index,
}) => {
  const { mutate } = useSWRConfig();
  const [userEmail] = useUserEmail();

  const tData = [index, _id, name, price, quantity, sold];

  const handleDelete = async (_id) => {
    const URL = `https://the-treasure-chest.herokuapp.com/delete/${_id}?email=${userEmail}`;
    let isConfirm = confirm("are you sure?");
    if (isConfirm) {
      setLoading(true);
      try {
        let { data } = await axios.delete(URL, {
          headers: {
            auth: `${localStorage.getItem("token")}`,
          },
        });
        console.log("after delete", data);

        if (data.deletedCount > 0) {
          mutate(`https://the-treasure-chest.herokuapp.com/inventory`);
          mutate(
            `https://the-treasure-chest.herokuapp.com/myinventory?email=${userEmail}`
          );
          console.log("from delete use a toast ", name, _id);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {tData.map((data) => (
        <td
          key={Math.random() + "" + data}
          className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
        >
          {data}
        </td>
      ))}
      <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
        <div className="flex space-x-2 justify-center items-center">
          <button
            type="button"
            title={email === userEmail ? "" : "You Can delete only your Item"}
            className={`px-6 pt-2.5 pb-2  text-white font-semibold text-xs leading-normal uppercase rounded shadow-md  hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex align-center
            ${
              email === userEmail ? "bg-red-600 hover:bg-red-700" : "bg-red-300"
            }
            `}
            disabled={!(email === userEmail)}
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            onClick={() => handleDelete(_id)}
          >
            <AiFillDelete className="  w-[25px] h-[16px]" />
            Delete
          </button>
        </div>
        {/* <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Delete confirmation
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4 px-8">
                Do you really want to delete these records?
                <br /> This process cannot be undone
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="px-6
          py-2.5
          bg-gray-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-700 hover:shadow-lg
          focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-gray-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                  data-bs-dismiss="modal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </td>
    </>
  );
};

export default TableData;
