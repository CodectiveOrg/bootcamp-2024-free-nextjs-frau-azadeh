"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import styles from "./filterGender.module.css";

const FilterGender: React.FC = () => {
  const { doctors, genderFilter, setGenderFilter } = useFilterContext();

  const maleDoctorsCount = doctors.filter(
    (doctor) => doctor.gender === "مرد",
  ).length;
  const femaleDoctorsCount = doctors.filter(
    (doctor) => doctor.gender === "زن",
  ).length;

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderFilter(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <p>جنسیت پزشک:</p>
      <form>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value=""
              checked={genderFilter === ""}
              onChange={handleGenderChange}
              className={styles.radioInput}
            />
            همه
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="مرد"
              checked={genderFilter === "مرد"}
              onChange={handleGenderChange}
              className={styles.radioInput}
            />
            آقا <span className={styles.count}>({maleDoctorsCount})</span>
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="زن"
              checked={genderFilter === "زن"}
              onChange={handleGenderChange}
              className={styles.radioInput}
            />
            خانم <span className={styles.count}>({femaleDoctorsCount})</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterGender;
