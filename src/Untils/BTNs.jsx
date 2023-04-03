import React from 'react';

const BTNs = ({item}) => {
  return (
    <label key={item.id} className={`filter__item-label`}>{(item).charAt(0).toUpperCase()+(item).slice(1)}
      <input type="radio" className={`filter__item-input`} name='species' />
    </label>
  );
}

export default BTNs;
