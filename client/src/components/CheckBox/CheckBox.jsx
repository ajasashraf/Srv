import React, { useState, useEffect } from "react";
import axios from "axios";
export default function CheckBox() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get("https://crmapi.srvinfotech.com/leads/leadsStatus")
      .then((response) => {
        setStatus(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  });

  return (
    <div>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex px-2 py-2">
        {status.map((statusList) => (
          <li className=" dark:border-gray-600">
            <div className="flex items-center pl-3" key={statusList.id}>
              <input
                id="Status"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="Status-list"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-black whitespace-nowrap"
              >
                {statusList.name}
              </label>
            </div>
          </li>
        ))}
        <div className="flex w-full justify-end ">
          <input
            type="date"
            id="startDate"
            className="me-2 border border-gray-300 p-2 text-gray-900 dark:text-black"
          />
          <input
            type="date"
            id="endDate"
            className=" border border-gray-300 p-2 me-2 text-gray-900 dark:text-black"
          />
        </div>
      </ul>
    </div>
  );
}
