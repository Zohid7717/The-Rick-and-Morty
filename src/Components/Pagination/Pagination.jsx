import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../../Untils/Context/Context';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';


const Pagination = () => {
  const { itemOffset, setItemOffset } = useGlobalContext()
  const { info, setInfo } = useGlobalContext()
  let pageCount = info.pages;
  const currentItems = [];
  for (let i = 1; i <= pageCount; i++){
    currentItems.push({id: i, value: i})
  }
  const handleDageClick = (e) => {
    const newOffset = (e.target.value);
    setItemOffset(newOffset);
  };
  return (
    <div className='pagination' id='container'>
      {currentItems.map(item =>
        <button onClick={handleDageClick} key={item.id} className='pagination__item' value={item.value}>{item.value}</button>)}
    </div>
  );
}



export default Pagination;
