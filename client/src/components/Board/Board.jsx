import React from "react";
import "./Board.css";
import { BsFillEyeFill } from "react-icons/Bs";
export default function Board() {
  return (
    <>
      <div className="flex">
        <div>
          <div className="mt-2 ml-2">
            <a className="flex justify-between w-60 h-8 p-1 bg-slate-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-300">
              <p className="font-semibold text-gray-700 dark:text-black ">
                New
              </p>
              <p>82</p>
            </a>
          </div>

          <div
            className="flex flex-col mt-3 ml-2 bg-slate-200 w-60 rounded-lg overflow-y-auto selector"
            style={{ height: "33rem" }}
          >
            <a className="w-56 h-24 my-2 mx-1 p-2 bg-white  border-l-4 border-yellow-200 rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-300">
              <p className="font-semibold text-gray-700 dark:text-black ">
                Ajas
              </p>
              <p className="text-gray-700 dark:text-gray-400">Web Design</p>
              <div className="flex">
                <p className="text-gray-700 dark:text-gray-400">20-04-2023</p>
                <p className="pl-10 text-gray-700 dark:text-gray-400">Web</p>
                <BsFillEyeFill className="mt-1 ml-8 icon-colour" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
