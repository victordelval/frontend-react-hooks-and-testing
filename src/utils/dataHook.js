import React, { 
  createContext, 
  useContext,
  useState, 
  useEffect 
} from 'react';

import { getProfessors, getSubjects } from './api'

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
      const professors = await getProfessors()
      const subjects = await getSubjects()
      setProffesors(professors.data)
      setSubjects(subjects.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  // const values = React.useMemo(() => ({ dishes, selected, loading, error, handleClick }), [dishes, loading]);

  return (
    <DataContext.Provider value={{ professors, subjects, loading, error }}>
    {/* <DataContext.Provider value={values}> */}
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