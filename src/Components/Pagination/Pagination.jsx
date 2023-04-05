import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';


const Pagination = ({ info, setItemOffset }) => {
  
  return <ReactPaginate
    className='pagination'
    pageCount={info}
    previousLabel='Prev'
    nextClassName='pagination__next-btn-wrap'
    previousClassName='pagination__prev-btn-wrap'
    previousLinkClassName='pagination__prev-btn'
    pageClassName='pagination__page'
    pageLinkClassName='pagination__page-link'
    nextLabel='Next'
    nextLinkClassName='pagination__next-btn'
    onPageChange={(data) => {
      setItemOffset(data.selected + 1)
    }}
    activeClassName='pagination__active-page'
    disabledLinkClassName='pagination__dis-page'
  />
}



export default Pagination;
