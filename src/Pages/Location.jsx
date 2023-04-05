import React, { useState, useEffect } from 'react';
import SelectApp from '../Components/Select/Select';
import UContainer from '../Untils/UContainer';
import CardCatalog from '../Components/CardCatalog/CardCatalog';

const Location = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  const [id, setId] = useState(1);
  const [totelPage, setTotelPage] = useState(0)
  let URL = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setInfo(data)
      let a = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json())
        })
      );
      setResults(a);
    }
    fetchData()
  }, [URL]);
  console.log(info)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/location').then(res => res.json())
      setTotelPage(data.info.count)
    }
    fetchData()
  }, [])
  return (
    <div className='episodes'>
      <UContainer>
        <h2>Location name: {info.name} </h2>
        <h3>Dimension: {info.dimension}</h3>
        <h3>Type: { info.type}</h3>
        <div className="episodes__main">
          <div className="episodes__pick">
            <h4>Pick Episode</h4>
            <SelectApp results={results} totelPage={totelPage} setId={setId} />
          </div>
          <CardCatalog page='/loacation/' results={results} />
        </div>
      </UContainer>
    </div>
  );
}

export default Location;
