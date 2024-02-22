import React from "react";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className="bg-cyan-800 w-[70%] md:w-[25%] ml-6 md:ml-20 text-gray-100 p-5 rounded-md flex flex-col gap-5 justify-center">
      <h1 className="text-center font-xl">
        Book Your Appointment now! for{" "}
        <span className="font-bold line-through">Rs 1000</span> FREE
      </h1>

      <p className="text-gray-300 text-sm text-center">
        60+ Expert Physiotherapists for 200+ Conditions
      </p>

      <p className="bg-gray-100 text-cyan-800 font-bold text-center rounded-md py-2">
        <Link to={"/booking-form"}>Start Your Recovery</Link>
      </p>

      <p className="text-center font-bold text-lg">
        1000+ Patients Trust us!
      </p>
    </div>
  );
};

export default Advertisement;
