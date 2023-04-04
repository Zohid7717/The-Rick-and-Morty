import React from 'react';
import { useGlobalContext } from '../../../Untils/Context/Context';

const FilterStatus = () => {
  const { status, setStatus } = useGlobalContext()
  const getValue = (e) => {
    setStatus(e.target.value)
  }
  const statusArr = [
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
      <div className="filter__items">
        {statusArr.map(item =>
          <label key={item.id} className={`filter__item-label`}>{item.name}
            <input type="radio" onClick={getValue} value={item.name} className={`filter__item-input`} name='species' />
          </label>
        )}
      </div>
    </div>
  );
}

export default FilterStatus;
