import React from "react";

const DoctorCard = ({ data }) => {
  return (
    <div className="bg-neutral-950 rounded-md p-5 w-[70%]">
      <img src={"https://via.placeholder.com/"} alt="" className="h-32 w-full"/>
      <h1 className="text-gray-300 py-1 text-xl font-bold">{data.name}</h1>
      <p className="text-gray-400">Physiotherapy</p>
      <p className="text-gray-400">{data.city}</p>
      <button className="text-white bg-cyan-800 py-1 mt-2 px-2 rounded-md">Book Now!</button>
    </div>
  );
};

export default DoctorCard;
