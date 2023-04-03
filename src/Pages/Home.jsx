import React from 'react';
import Search from '../Components/Search/Search';
import UContainer from '../Untils/UContainer';
import Filter from '../Components/Filter/Filter';
import CardCatalog from '../Components/CardCatalog/CardCatalog';
import Pagination from '../Components/Pagination/Pagination';

const Home = () => {
  return (
    <div className='home'>
      <UContainer>
        <div className="home__wrapper">
          <h1>Character</h1>
          <Search />
          <div className="home__main">
              <Filter />
              <CardCatalog />
          </div>
          <Pagination itemsPerPage={4} />
        </div>
      </UContainer>
    </div>
  );
}

export default Home;
