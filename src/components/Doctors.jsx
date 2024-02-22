import React from "react";
import { useEffect, useRef } from "react";
import dummyJSON from "../dummy.json";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const doctors = dummyJSON["doctors"];

  return (
    <div className="container mx-auto bg-neutral-800">
      <div className="py-14">
        <h1 className="text-2xl font-bold text-cyan-400 text-center">
          Meet Our Experts
        </h1>
        <p className="text-gray-200 text-center">
          Experience the Benefits of Advanced Technology and Expert Care
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-3 md:gap-5 place-content-center place-items-center w-full">
        {doctors.slice(0,10).map((ele, idx) => {
          return <DoctorCard key={idx} data={ele} />;
        })}
      </div>
    </div>
  );
};

export default Doctors;
