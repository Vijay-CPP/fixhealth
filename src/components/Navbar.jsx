import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-screen">
      <nav className="container flex justify-between mx-auto h-14 md:h-20 backdrop-blur-sm">
        <div className="flex justify-center items-center mt-5 ml-3 md:m-2">
          <img src={logo} alt="logo" className="w-36" />
        </div>

        <ul className="hidden md:flex justify-center items-center gap-6 font-bold text-gray-300 ">
          <li className="hover:text-gray-50">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-50">Services</li>
          <li className="hover:text-gray-50">About</li>

          <li className="bg-cyan-700 hover:bg-cyan-900 px-2 py-2 rounded-md">
            <Link to="/booking-form">Book Now</Link>
          </li>
        </ul>

        <div
          className=" md:hidden flex justify-center items-center mr-3 text-3xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <HiMenuAlt3 className="text-white" />
        </div>

        <div
          className={`md:hidden flex transition-all absolute top-0 w-screen h-screen ${
            open ? "right-0" : "right-[-100%]"
          } ease-in-out duration-500`}
        >
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="w-[40vw]"
          ></div>
          <div className="w-[60vw] h-screen bg-neutral-800">
            <div className="flex justify-end">
              <IoClose
                className="text-white text-4xl m-5"
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>

            <ul className="flex flex-col justify-center items-center gap-6 font-bold text-gray-300 ">
              <li className="hover:text-gray-50">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-50">Services</li>

              <li className="hover:text-gray-50">About</li>

              <li className="bg-cyan-700 hover:bg-cyan-900 px-2 py-2 rounded-md">
                <Link to="/booking-form">Book Now</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
