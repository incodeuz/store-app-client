import React, { useContext, useEffect, useState } from "react";
import { AddStudentContext } from "../context/addStudent";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const { isData } = useContext(AddStudentContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/students`)
      .then((res) => res.json())
      .then((json) => {
        setStudents(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    fetch(`${import.meta.env.VITE_BASE_URL}/teachers`)
      .then((res) => res.json())
      .then((json) => {
        setTeachers(json);
      })
      .catch((err) => console.log(err));
  }, [isData]);

  const datas = [
    ["Students", students?.length],
    ["Teachers", teachers?.length],
  ];

  if (!students) {
    return "Loading...";
  }

  return (
    <div className="flex items-center flex-col justify-center mx-auto">
      <h1 className="text-2xl mb-5">All Statistics:</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {datas.map((a, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td
                  scope="row"
                  class="px-6 text-xl py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {a[0]}
                </td>
                <td
                  scope="row"
                  class="px-6 text-2xl py-4 font-medium text-white whitespace-nowrap bg-black"
                >
                  {a[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
