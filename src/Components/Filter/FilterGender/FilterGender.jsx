import React from 'react';
import { useGlobalContext } from '../../../Untils/Context/Context';


const FilterGender = () => {
  const { gender, setGender } = useGlobalContext()
  const genderArr = [{ id: 0, name: "female" }, { id: 1, name: "male" }, { id: 2, name: "genderless" }, { id: 3, name: "unknown" }]
  const getValue = (e) => {
    setGender(e.target.value)
  }
  return (
    <div className='filter__title-w'>
      <div className="filter__items">
        {genderArr.map(item =>
          <label key={item.id} className={`filter__item-label`}>{item.name}
            <input type="radio" onClick={getValue} value={item.name} className={`filter__item-input`} name='species' />
          </label>
        )}
      </div>
    </div>
  );
}

export default FilterGender;
