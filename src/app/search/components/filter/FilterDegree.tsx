'use client';

import React from 'react';
import { useFilterContext } from '../../context/FilterContext';
import styles from './FilterDegree.module.css';

const FilterDegree: React.FC = () => {
  const { degreeFilter, setDegreeFilter } = useFilterContext();

  const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDegreeFilter(event.target.value); 
  };

  return (
    <div className={styles.filterContainer}>
      <p>درجه علمی:</p>
      <form>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="degree"
              value=""
              checked={degreeFilter === ''}
              onChange={handleDegreeChange}
            />
            همه
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="degree"
              value="فوق تخصص"
              checked={degreeFilter === 'فوق تخصص'}
              onChange={handleDegreeChange}
            />
            فوق تخصص
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="degree"
              value="متخصص"
              checked={degreeFilter === 'متخصص'}
              onChange={handleDegreeChange}
            />
            متخصص
          </label>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="degree"
              value="دکتری"
              checked={degreeFilter === 'دکتری'}
              onChange={handleDegreeChange}
            />
            دکتری
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterDegree;
