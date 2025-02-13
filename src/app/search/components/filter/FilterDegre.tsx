"use client";

import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import styles from "./filterDegre.module.css";

const FilterDegre: React.FC = () => {
  const { degreeFilter, setDegreeFilter } = useFilterContext();

  const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDegreeFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>فیلتر بر اساس درجه علمی:</h3>
      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="degree"
            value=""
            checked={degreeFilter === ""}
            onChange={handleDegreeChange}
            className={styles.radioInput}
          />
          همه
        </label>
        <label>
          <input
            type="radio"
            name="degree"
            value="فوق تخصص"
            checked={degreeFilter === "فوق تخصص"}
            onChange={handleDegreeChange}
            className={styles.radioInput}
          />
          فوق تخصص
        </label>
        <label>
          <input
            type="radio"
            name="degree"
            value="متخصص"
            checked={degreeFilter === "متخصص"}
            onChange={handleDegreeChange}
            className={styles.radioInput}
          />
          متخصص
        </label>
        <label>
          <input
            type="radio"
            name="degree"
            value="دکتری"
            checked={degreeFilter === "دکتری"}
            onChange={handleDegreeChange}
            className={styles.radioInput}
          />
          دکتری
        </label>
      </div>
    </div>
  );
};

export default FilterDegre;
