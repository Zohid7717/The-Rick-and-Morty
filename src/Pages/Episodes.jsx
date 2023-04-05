import React, { useState, useEffect } from 'react';
import SelectApp from '../Components/Select/Select';
import UContainer from '../Untils/UContainer';
import CardCatalog from '../Components/CardCatalog/CardCatalog';
import Search from '../Components/Search/Search';


const Episodes = () => {
  const [searchName, setSearchName] = useState('');
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  const [id, setId] = useState(1);
  const [totelPage, setTotelPage]=useState(0)
  let URL = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setInfo(data)
      let a = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json())
        })
      );
      setResults(a);
    }
    fetchData()
  }, [URL]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/episode').then(res => res.json())
      setTotelPage(data.info.count)
    }
    fetchData()
  }, [])
  return (
    <div className='episodes'>
      <UContainer>
        <h2>Episodes name: {info.name} </h2>
        <h3>Air Date: {info.air_date}</h3>
        <div className="episodes__main">
          <div className="episodes__pick">
            <h4>Pick Episode</h4>
            <SelectApp results={results} totelPage={totelPage} setId={setId} />
          </div>
          <CardCatalog page='/episodes/' results={results} />
        </div>
      </UContainer>
    </div>
  );
}

export default Episodes;
