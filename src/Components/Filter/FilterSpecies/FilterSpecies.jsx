import React from 'react';
import BTNs from '../../../Untils/BTNs';
import { useGlobalContext } from '../../../Untils/Context/Context';

const FilterSpecies = () => {
  const { species, setSpecies } = useGlobalContext()
  const speciesArr = [
    { id: 0, name: "human" }, { id: 1, name: "alien" }, { id: 3, name: "humanoid" }, { id: 4, name: "poopybutthole" }, { id: 5, name: "mythological" }, { id: 6, name: "unknown" }, {id: 7, name: "animal" }, {id: 8,name: "disease"}, {id: 9,name: "robot"}, {id: 10,name: "cronenberg"}, { id: 11, name: "planet" }
  ]
  const getValue = (e) => {
    setSpecies(e.target.value)
  }
  return (
    <div className='filter__title-w'>
      <div className="filter__items">
        {speciesArr.map(item =>
            <label key={item.id} className={`filter__item-label`}>{item.name}
              <input type="radio" onClick={getValue} value={item.name} className={`filter__item-input`} name='species' />
            </label>
          )
        }
      </div>
    </div>
  );
}

export default FilterSpecies;
