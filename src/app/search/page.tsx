import React, { ReactElement } from "react";
import styles from "./search.module.css";
import { FilterProvider } from "./context/FilterContext";
import DoctorsList from "./components/result/DoctorsList";
import FilterGender from "./components/filter/FilterGende";
export default function page(): ReactElement {
  return (
    <FilterProvider>
      <div className={styles.container}>
        <aside className={styles.filters}>
          <FilterGender />
        </aside>
        <section className={styles.result}>
          <DoctorsList />
        </section>
      </div>
    </FilterProvider>
  );
}
