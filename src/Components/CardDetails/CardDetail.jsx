import React, { useEffect, useState } from 'react';
import './CardDetail.scss';
import { useParams } from 'react-router';
import UContainer from '../../Untils/UContainer';

const CardDetail = () => {
 
  let { id } = useParams()
  const [results, setResults] = useState([]);

  const URL = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setResults(data)
    }
    fetchData()
  }, [])

  return (
    <UContainer>
      <div className="cardDetail__wrap">
        <div className='cardDetail'>
          <h2>{results.name}</h2>
          <img src={results.image} alt="" />
          <p className="cardDetail__status">{results.status}</p>
          <div className="cardDetail__content-wrap">
            <div className="cardDetail__content"><p>Gender: </p><span>{results.gender}</span></div>
            <div className="cardDetail__content"><p>Location: </p><span>{results.location?.name}</span></div>
            <div className="cardDetail__content"><p>Origin: </p><span>{results.origin?.name}</span></div>
            <div className="cardDetail__content"><p>Species: </p><span>{results.species}</span></div>
          </div>
        </div>
        <button className="back" onClick={() => hist.goBack()}>Go Back</button>
      </div>
    </UContainer>
  );
}

export default CardDetail;
