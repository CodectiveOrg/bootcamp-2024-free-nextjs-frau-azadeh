import React, { ReactElement } from "react";
import styles from "./search.module.css";
import { FilterProvider } from "./context/FilterContext";
import DoctorsList from "./components/result/DoctorsList";
import FilterGender from "./components/filter/FilterGender";
import FilterDegree from "./components/filter/FilterDegree";
export default function page(): ReactElement {
  return (
    <FilterProvider>
      <div className={styles.container}>
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
