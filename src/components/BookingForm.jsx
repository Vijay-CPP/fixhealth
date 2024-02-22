import React, { useState } from "react";
import Navbar from "./Navbar";
import doctor from "../assets/doctor.jpg";
import { useFormData } from "../context/FormDataProvider";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [age, setAge] = useState("");
  const { city, setCity } = useFormData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search-result");
  }

  return (
    <div className="h-screen bg-neutral-800">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-5">
        <div className="flex justify-center items-center h-[40%] md:w-[25%] md:h-[50%]">
          <img
            src={doctor}
            alt="doctor"
            className="mt-16 md:mt-0 w-[80%] object-cover rounded-md"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[90%] md:w-[40%] bg-neutral-900 p-5 flex flex-col gap-4 rounded-md text-gray-200"
        >
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-neutral-700 p-2 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bg-neutral-700 p-2 rounded-md"
              required
            />
            <input
              type="number"
              placeholder="Age"
              min={1}
              max={150}
              className="bg-neutral-700 p-2 rounded-md"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              className="bg-neutral-700 p-2 rounded-md"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <textarea
            rows="5"
            placeholder="Issues"
            className="bg-neutral-700 p-2 rounded-md w-full"
            required
          ></textarea>
          <div className="flex gap-5">
            <input
              type="checkbox"
              id="prev"
              disabled={age > 40 ? true : false}
              defaultValue={false}
            />
            <label htmlFor="prev" className="text-gray-100 ">
              Any previous experience with physiotherapy
            </label>
          </div>

          <button className="bg-cyan-900 py-3 rounded-md text-lg text-white">
            Find Doctors
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
