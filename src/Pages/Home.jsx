import React, {useState, useEffect} from 'react';
import Search from '../Components/Search/Search';
import UContainer from '../Untils/UContainer';
import Filter from '../Components/Filter/Filter';
import CardCatalog from '../Components/CardCatalog/CardCatalog';
import Pagination from '../Components/Pagination/Pagination';
import { useGlobalContext } from '../Untils/Context/Context';

const Home = () => {

  const [searchName, setSearchName] = useState('')
  const [results, setResults] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  const [info, setInfo] = useState([]);
  const { status, setStatus } = useGlobalContext()
  const { species, setSpecies } = useGlobalContext()
  const { gender, setGender } = useGlobalContext()

  let URL = `https://rickandmortyapi.com/api/character/?page=${itemOffset}&name=${searchName}&status=${status}&species=${species}&gender=${gender}`
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setResults(data.results)
    }
    fetchData()
  }, [URL]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setInfo(data.info.pages)
    }
    fetchData()
  }, [])

  return (
    <div className='home'>
      <UContainer>
        <div className="home__wrapper">
          <h1>Character</h1>
          <Search setSearchName={setSearchName} setInfo={setInfo} />
          <div className="home__main">
            <Filter />
            <CardCatalog page='/' results={results } />
          </div>
          <Pagination info={info} setItemOffset={setItemOffset} />
        </div>
      </UContainer>
    </div>
  );
}

export default Home;
