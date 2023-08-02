import React from "react";
import "./Navbar.css";
import { MdDownload } from "react-icons/Md";
import { SlGrid } from "react-icons/Sl";
import { PiIntersectSquareDuotone } from "react-icons/Pi";
import { TiBell } from "react-icons/Ti";
import { RiAccountCircleFill } from "react-icons/Ri";
import { MdKeyboardArrowDown } from "react-icons/Md";
import { TbPower } from "react-icons/Tb";

export default function Navbar() {
  const notificationCount = 6;
  return (
    <nav className="flex justify-between px-4 py-5 items-center bg-white shadow-md">
      <div className="flex items-center border-2 rounded border-slate-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 h-7 w-7 pt-0.5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="py-1 px-1 outline-none bg-transparent w-80 "
          type="text"
          name="search"
          id="search"
          placeholder="Search Client name,Client mobile,Projects"
        />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 mr-3 flex items-center h-8">
            <MdDownload className="w-5 h-5 mr-1 mt-1 fill-current " />
            Download
          </button>
          <SlGrid className="h-5 w-5 cursor-pointer" />
          <PiIntersectSquareDuotone className="h-6 w-6 cursor-pointer" />
          <div className="notification-bell-container">
            <TiBell className="bell-icon h-6 w-6 cursor-pointer" />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </div>
          <div className="flex items-center cursor-pointer">
            <RiAccountCircleFill className="account-icon h-7 w-7 mr-1" />
            <a>Amrutha </a>
            <MdKeyboardArrowDown className="mt-1" />
          </div>
          <TbPower className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
