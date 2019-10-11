import React, { 
  createContext, 
  useContext,
  useState, 
  useEffect 
} from 'react';

import { getAllData } from './api'

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [professors, setProffesors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    try {
      const [professors, subjects] = await getAllData()
      setProffesors(professors.data)
      setSubjects(subjects.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return (
    <DataContext.Provider value={{ professors, subjects, loading, error }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext);
  
  if (context === undefined) {
    throw new Error('`useData` hook must be used within a `DataProvider` component');
  }
  return context;
};