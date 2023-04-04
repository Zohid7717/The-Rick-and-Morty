import React from 'react';
import { useGlobalContext } from './Context/Context';

const BTNs = ({ item }) => {
  
  const { setInfo } = useGlobalContext()
  
  
  const getValue = (e) => {
    setStatus((item).charAt(0).toUpperCase() + (item).slice(1))
  }
  return (
    <label key={item.id} className={`filter__item-label`}>{(item).charAt(0).toUpperCase()+(item).slice(1)}
      <input type="radio" onClick={getValue} className={`filter__item-input`} name='species' />
    </label>
  );
}

export default BTNs;
