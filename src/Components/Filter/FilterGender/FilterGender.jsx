import React from 'react';
import BTNs from '../../../Untils/BTNs';

const FilterGender = () => {
  const gender = [{id: 0,name: "female"}, {id: 1,name: "male"}, {id: 2,name: "genderless"}, {id: 3,name: "unknown"}]
  return (
    <div className='filter__title-w'>
      <h2 className='filter__title'>Filter by gender</h2>
      <div className="filter__items">
        {gender.map(item =>
          <BTNs key={item.id} item={item.name} />
        )}
      </div>
    </div>
  );
}

export default FilterGender;
