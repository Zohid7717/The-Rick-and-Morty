import React from 'react';
import './Search.scss'
import { useGlobalContext } from '../../Untils/Context/Context';

const Search = ({ setSearchName, setInfo }) => {
  const getSearchName = (e) => {
    setSearchName(e.target.value)
    if (e.target.value) {
      setInfo(1)
    }
  }
  return (
    <div className='search'>
      <input
        placeholder='Search...'
        type="text"
        onChange={getSearchName}
      />
    </div>
  );
}

export default Search;
