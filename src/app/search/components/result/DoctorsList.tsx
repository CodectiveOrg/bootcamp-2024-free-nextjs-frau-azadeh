"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import DoctorCard from "./DoctorCard";

const DoctorsList: React.FC = () => {
  const { doctors, genderFilter } = useFilterContext();

  // فیلتر کردن دکترها بر اساس جنسیت
  const filteredDoctors = doctors.filter((doctor) =>
    genderFilter ? doctor.gender === genderFilter : true,
  );

  return (
    <div>
      {filteredDoctors.length === 0 ? (
        <p>هیچ دکتری پیدا نشد</p>
      ) : (
        filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
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
