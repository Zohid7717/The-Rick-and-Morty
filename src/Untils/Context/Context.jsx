import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  let URL = `https://rickandmortyapi.com/api/character/?page=${itemOffset}`
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
      setInfo(data.info)
    }
    fetchData()
  }, [])
  // const [state, setstate] = useState(initialState);
  return (
    <AppContext.Provider value={{ results, setResults, itemOffset, setItemOffset, info, setInfo }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider };