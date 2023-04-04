import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [searchName, setSearchName] = useState('')
  const [results, setResults] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')

  let URL = `https://rickandmortyapi.com/api/character/?page=${itemOffset}&name=${searchName}&status=${status}&species=${species}&gender=${gender}`
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setResults(data.results)
    }
    fetchData()
  }, [URL]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then(res => res.json())
      setInfo(data.info.pages)
    }
    fetchData()
  }, [])
  return (
    <AppContext.Provider value={{ results, setResults, itemOffset, setItemOffset, info, setInfo, searchName, setSearchName, status, setStatus, species, setSpecies, gender, setGender }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };