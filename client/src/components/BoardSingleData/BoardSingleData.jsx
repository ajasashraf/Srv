import React from "react";
import { BsFillEyeFill } from "react-icons/Bs";
export default function BoardSingleData({ name, value }) {
  return (
    <>
      <div>
        <div className="mt-2 ml-2">
          <a className="flex justify-between w-60 h-8 p-1 bg-slate-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-300">
            <p className="font-semibold text-gray-700 dark:text-black ">
              {name}
            </p>
            <p>{value.length}</p>
          </a>
        </div>

        <div
          className="flex flex-col mt-3 ml-2 bg-slate-200 w-60 rounded-lg overflow-y-auto selector"
          style={{ height: "33rem" }}
        >
          {value.length !== 0 ? (
            value.map((details) => (
              <a className="w-56 h-26 my-2 mx-1 p-2 bg-white  border-l-4 border-yellow-300 rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-300">
                <p className="font-semibold text-gray-700 dark:text-black ">
                  {details.lead_reg_id.reg_name}
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-xs">
                  {details.crm.companyname}
                </p>
                <div className="flex">
                  <p className="text-gray-700 dark:text-gray-400 whitespace-nowrap text-xs">
                    {details.date}
                  </p>
                  <p className="pl-6 text-gray-700 dark:text-gray-400 whitespace-nowrap text-xs">
                    {details.addedby.firstName}
                  </p>
                  <BsFillEyeFill className="icon-colour ml-auto" />
                </div>
              </a>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div className="text-lg font-semibold">No Data</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
