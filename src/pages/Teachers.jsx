import React, { useContext, useEffect, useState } from "react";
import FormTemplate from "../components/FormTemplate";
import { AddStudentContext } from "../context/addStudent";
import { Button, message, Popconfirm } from "antd";

const Teachers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const { isData, setIsData } = useContext(AddStudentContext);
  const [isLoading, setIsLoading] = useState(true);

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
                          <Button type="default" className="text-yellow-600">
                            Edit
                          </Button>
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
