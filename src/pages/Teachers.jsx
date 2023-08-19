import React, { useContext, useEffect, useState } from "react";
import FormTemplate from "../components/FormTemplate";
import { AddStudentContext } from "../context/addStudent";
import { Button, message, Popconfirm } from "antd";

const Teachers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const { isData, setIsData } = useContext(AddStudentContext);
  const [isLoading, setIsLoading] = useState(true);
  const [inpValues, setInpValue] = useState({
    phoneNumber: "",
    email: "",
    lastName: "",
    firstName: "",
  });

  const getValues = (id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/teachers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inpValues }),
    })
      .then((res) => res.json())
      .then((json) => {
        json && setIsData(!isData);
        return message.info("User edited successfully!");
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    fetch(`${import.meta.env.VITE_BASE_URL}/teachers`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, [isData]);

  const confirm = (id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/teachers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        json && setIsData(!isData);
        return message.info("User deleted successfully!");
      });
  };

  // const confirmEdit = () => {
  //   editTeachers();
  // };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <>
      {openModal && <FormTemplate openModal={openModal} datas="teacher" />}

      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          All Teachers:
          <span className="text-yellow-600"> {data?.length || 0}</span>
        </h1>
        <button
          className="border px-3 py-1 rounded-md border-black"
          onClick={() => setOpenModal(!openModal)}
        >
          {openModal ? "Close Modal" : "Add Teacher"}
        </button>
      </div>

      <div className="mt-[40px]">
        <div className="relative overflow-x-auto">
          {data.length !== 0 ? (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Teacher name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {!isLoading
                  ? data?.map((teacher) => (
                      <tr
                        key={teacher.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {teacher.firstName + " " + teacher.lastName}
                        </th>
                        <td className="px-6 py-4">{teacher.id}</td>
                        <td className="px-6 py-4">{teacher.email}</td>
                        <td className="px-6 py-4">{teacher.phoneNumber}</td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <Popconfirm
                            title="Delete the user"
                            description="Are you sure to delete this user?"
                            onConfirm={() => confirm(teacher.id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button danger>Delete</Button>
                          </Popconfirm>

                          <Popconfirm
                            title="Edit this user?"
                            description={
                              <div
                                style={{ width: "500px" }}
                                className={`w-full mr-9`}
                              >
                                <div className="relative z-0 w-full mb-6 group">
                                  <input
                                    onChange={(e) =>
                                      setInpValue((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                      }))
                                    }
                                    type="email"
                                    name="email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Email address
                                  </label>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      onChange={(e) =>
                                        setInpValue((prev) => ({
                                          ...prev,
                                          [e.target.name]: e.target.value,
                                        }))
                                      }
                                      type="text"
                                      name="firstName"
                                      id="floating_first_name"
                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" "
                                      required
                                    />
                                    <label
                                      for="floating_first_name"
                                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      First name
                                    </label>
                                  </div>
                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      onChange={(e) =>
                                        setInpValue((prev) => ({
                                          ...prev,
                                          [e.target.name]: e.target.value,
                                        }))
                                      }
                                      type="text"
                                      name="lastName"
                                      id="floating_last_name"
                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" "
                                      required
                                    />
                                    <label
                                      for="floating_last_name"
                                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Last name
                                    </label>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="relative z-0 w-full mb-6">
                                    <input
                                      onChange={(e) =>
                                        setInpValue((prev) => ({
                                          ...prev,
                                          [e.target.name]: e.target.value,
                                        }))
                                      }
                                      type="tel"
                                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                      name="phoneNumber"
                                      id="floating_phone"
                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" "
                                      required
                                    />
                                    <label
                                      for="floating_phone"
                                      className="peer-focus:font-medium absolute w-full text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Phone number (123-456-7890)
                                    </label>
                                  </div>
                                </div>
                              </div>
                            }
                            onConfirm={() => getValues(teacher.id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button type="default" className="text-yellow-600">
                              Edit
                            </Button>
                          </Popconfirm>
                        </td>
                      </tr>
                    ))
                  : "Loading..."}
              </tbody>
            </table>
          ) : (
            "No teachers"
          )}
        </div>
      </div>
    </>
  );
};

export default Teachers;
