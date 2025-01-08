'use client';

import React from 'react';
import { useFilterContext } from '../../context/FilterContext';

const FilterGender: React.FC = () => {
  const { genderFilter, setGenderFilter } = useFilterContext();

  const handleGenderChange = (gender: string) => {
    setGenderFilter(gender);
  };

  return (
    <div>
      <h3>فیلتر بر اساس جنسیت:</h3>
      <button
        onClick={() => handleGenderChange('زن')}
        style={{
          backgroundColor: genderFilter === 'زن' ? '#4CAF50' : '#f0f0f0',
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
        }}
      >
        زن
      </button>
      <button
        onClick={() => handleGenderChange('مرد')}
        style={{
          backgroundColor: genderFilter === 'مرد' ? '#4CAF50' : '#f0f0f0',
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
        }}
      >
        مرد
      </button>
      <button
        onClick={() => handleGenderChange('')}
        style={{
          backgroundColor: genderFilter === '' ? '#4CAF50' : '#f0f0f0',
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
        }}
      >
        همه
      </button>
    </div>
  );
};

export default FilterGender;
