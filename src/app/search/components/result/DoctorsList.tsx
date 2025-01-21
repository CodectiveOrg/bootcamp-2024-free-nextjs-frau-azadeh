"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import DoctorCard from "./DoctorCard";

const DoctorsList: React.FC = () => {
  const { doctors, genderFilter, degreeFilter } = useFilterContext();

  const filteredDoctors = doctors.filter((doctor) => {
    const genderMatch = genderFilter ? doctor.gender === genderFilter : true;
    const degreeMatch = degreeFilter ? doctor.degree === degreeFilter : true;
    return genderMatch && degreeMatch;
  });

  return (
    <div>
      {filteredDoctors.length === 0 ? (
        <p>هیچ دکتری پیدا نشد</p>
      ) : (
        filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            gender={doctor.gender}
            specialty={doctor.specialty}
            degree={doctor.degree}
            workTime={doctor.workTime}
            image={doctor.image}
          />
        ))
      )}
    </div>
  );
};

export default DoctorsList;
