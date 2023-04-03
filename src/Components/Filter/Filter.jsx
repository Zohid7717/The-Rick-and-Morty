import React, { useEffect, useState } from 'react';
import './Filter.scss'
import FilterStatus from './FilterStatus/filterStatus';
import FilterSpecies from './FilterSpecies/FilterSpecies';
import FilterGender from './FilterGender/FilterGender';

const Filter = () => {
  return (
    <div className='filter'>
      <h2>Filter</h2>
      <button>Clear Filter</button>
      <div className="filter__wrapper">
        <FilterStatus />
        <FilterSpecies />
        <FilterGender />
      </div>
    </div>
  );
}

export default Filter;
