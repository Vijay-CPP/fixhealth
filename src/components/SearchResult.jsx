import React, { useState, useEffect } from "react";
import { useFormData } from "../context/FormDataProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import dummyJSON from "../dummy.json";
import { DNA } from "react-loader-spinner";
import DoctorCard from "./DoctorCard";

const SearchResult = () => {
  const { city } = useFormData();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city === "") {
      navigate("/");
    }

    setDoctors(
      dummyJSON["doctors"].filter(
        (ele) => ele.city.toLowerCase() === city.toLowerCase()
      )
    );

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-neutral-800 h-screen container mx-auto">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <DNA
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="pt-24">
          <h1 className="text-xl text-gray-300 font-bold">Doctors in {city}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-5 place-content-center place-items-center w-full mt-10">
            {doctors.map((ele, idx) => {
              return <DoctorCard key={idx} data={ele} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
