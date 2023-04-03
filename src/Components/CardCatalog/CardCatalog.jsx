import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { useGlobalContext } from '../../Untils/Context/Context';

const CardCatalog = () => {
  const { results, setResults } = useGlobalContext()
  return (
    <div className="home__main-cards">
      {results ? (results.map(item => <CardItem key={item.id} id={item.id} item={item} />)) : <p> Character is not defined</p>}
    </div>
  );
}

export default CardCatalog;
