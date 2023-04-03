import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { useGlobalContext } from '../../Untils/Context/Context';

const CardCatalog = () => {
  const { results, setResults } = useGlobalContext()
  // const [updateInstace, setUpdateInstace] = useState([]);
  return (
    <div className="home__main-cards">
      {results.map(item => <CardItem key={item.id} id={item.id} item={item} />)}
    </div>
  );
}

export default CardCatalog;
