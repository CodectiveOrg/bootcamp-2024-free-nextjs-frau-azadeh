"use client";

import React, { useState } from "react";
import styles from "./search.module.css";
import { FilterProvider } from "./context/FilterContext";
import DoctorsList from "./components/result/DoctorsList";
import FilterGender from "./components/filter/FilterGender";
import FilterDegree from "./components/filter/FilterDegre";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <FilterProvider>
      <div className={styles.container}>
        <button className={styles.filterButton} onClick={toggleDrawer}>
          فیلتر
        </button>

        {isDrawerOpen && (
          <aside className={`${styles.filterDrawer} ${isDrawerOpen ? styles.active : ""}`}>
            <button className={styles.closeButton} onClick={toggleDrawer}>
              بستن
            </button>
            <FilterGender />
            <FilterDegree />
          </aside>
        )}

        <aside className={styles.filters}>
          <FilterGender />
          <FilterDegree />
        </aside>

        <section className={styles.result}>
          <DoctorsList />
        </section>
      </div>
    </FilterProvider>
  );
}
