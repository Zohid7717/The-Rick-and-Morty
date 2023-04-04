import React from 'react';
import BTNs from '../../../Untils/BTNs';

const FilterSpecies = () => {
  const species = [
    { id: 0, name: "human" }, { id: 1, name: "alien" }, { id: 3, name: "humanoid" }, { id: 4, name: "poopybutthole" }, { id: 5, name: "mythological" }, { id: 6, name: "unknown" }, {id: 7, name: "animal" }, {id: 8,name: "disease"}, {id: 9,name: "robot"}, {id: 10,name: "cronenberg"}, { id: 11, name: "planet" }
  ]
  
  return (
    <div className='filter__title-w'>
      <div className="filter__items">
        {species.map(item =>
          <BTNs key={item.id} item={item.name} />
        )}
      </div>
    </div>
  );
}

export default FilterSpecies;
