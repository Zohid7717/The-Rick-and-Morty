import React from 'react';
import './Search.scss'
import { useGlobalContext } from '../../Untils/Context/Context';

const Search = () => {
  const { searchName, setSearchName } = useGlobalContext()
  const getSearchName = (e) => {
    
    setSearchName(e.target.value)
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
