"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import { DoctorCard } from "./DoctorCard";

const DoctorsList: React.FC = () => {
  const { doctors, degreeFilter, genderFilter } = useFilterContext();

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDegree = degreeFilter ? doctor.degree === degreeFilter : true;
    const matchesGender = genderFilter ? doctor.gender === genderFilter : true;
    return matchesDegree && matchesGender;
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
            defaultRating={doctor.defaultRating}
          />
        ))
      )}
    </div>
  );
};

export default DoctorsList;
