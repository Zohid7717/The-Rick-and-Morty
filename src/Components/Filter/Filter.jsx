import React, { useEffect, useState } from 'react';
import './Filter.scss'
// import FilterStatus from './FilterStatus/filterStatus';
// import FilterSpecies from './FilterSpecies/FilterSpecies';
// import FilterGender from './FilterGender/FilterGender';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import FilterStatus from './FilterStatus/filterStatus';
import chevronDown from "./chevron-down.svg";
import FilterSpecies from './FilterSpecies/FilterSpecies';
import FilterGender from './FilterGender/FilterGender';

const Filter = () => {
  return (
    <div className='filter'>
      <h2>Filter</h2>
      <button>Clear Filter</button>
      <div className="filter__wrapper">
        <Accordion>
          <AccordionItem header="Filter by status">
            <FilterStatus/>
          </AccordionItem>

          <AccordionItem header="Filter by species">
            <FilterSpecies/>
          </AccordionItem>

          <AccordionItem header="Filter by gender">
            <FilterGender/>
          </AccordionItem>
        </Accordion>
        {/* <FilterStatus />
        <FilterSpecies />
        <FilterGender /> */}
      </div>
    </div>
  );
}

export default Filter;
