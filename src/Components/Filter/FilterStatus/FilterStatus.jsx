import React from 'react';
import BTNs from '../../../Untils/BTNs';

const FilterStatus = () => {
  const status = [
    {
      id: 0,
      name: "alive"
    }, {
      id: 1,
      name: "dead"
    }, {
      id: 2,
      name: "unknown"
    }
  ];
  return (
    <div className='filter__title-w'>
      <h2 className='filter__title filter-active'>Filter by status</h2>
      <div className="filter__items">
        {status.map(item => 
          <BTNs key={item.id} item={item.name}/>
        )}
      </div>
    </div>
  );
}

export default FilterStatus;
