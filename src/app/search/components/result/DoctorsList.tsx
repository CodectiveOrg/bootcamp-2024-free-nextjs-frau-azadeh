"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import DoctorCard from "./DoctorCard";

const DoctorsList: React.FC = () => {
  const { doctors } = useFilterContext();

  return (
    <div>
      {doctors.length === 0 ? (
        <p>هیچ دکتری پیدا نشد</p>
      ) : (
        doctors.map((doctor) => (
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
