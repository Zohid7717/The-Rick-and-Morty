import React, { useEffect, useState } from 'react';
import './Filter.scss'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import FilterStatus from './FilterStatus/filterStatus';
import chevronDown from "./chevron-down.svg";
import FilterSpecies from './FilterSpecies/FilterSpecies';
import FilterGender from './FilterGender/FilterGender';
import { useGlobalContext } from '../../Untils/Context/Context';


const Filter = () => {
  const { gender, setGender } = useGlobalContext()
  const { status, setStatus } = useGlobalContext()
  const { species, setSpecies } = useGlobalContext()


  const clearFilter=()=>{
    setSpecies('')
    setStatus('')
    setGender('')
  }
  return (
    <div className='filter'>
      <h2>Filter</h2>
      <button onClick={clearFilter}>Clear Filter</button>
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
      </div>
    </div>
  );
}

export default Filter;
