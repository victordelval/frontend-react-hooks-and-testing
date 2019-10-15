import React, { createContext, useContext, useState, useEffect } from "react";

import { getAllData } from "../utils/api";
import { AppConfig } from "../utils/config";

const resources = ["/professors", "/subjects"];
const urls = resources.map(resource => AppConfig.serverDomain + resource)

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [professors, setProffesors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    // to simulate network delay
    setTimeout(async () => {
      try {
        const [professors, subjects] = await getAllData(urls);
        setProffesors(professors.data);
        setSubjects(subjects.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, 2000);
  };

  const getProfessorById = professorId => {
    return professors.find(p => p.id === professorId);
  };

  const getProfessorArea = professorId => {
    const professor = professors.find(p => p.id === professorId);
    return professor.area;
  };

  const getSupportProffessors = professorId => {
    const area = getProfessorArea(professorId);
    return professors.filter(p => p.area === area && p.id !== professorId);
  };

  return (
    <DataContext.Provider
      value={{
        professors,
        subjects,
        loading,
        error,
        getProfessorById,
        getSupportProffessors,
        getProfessorArea
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error(
      "`useData` hook must be used within a `DataProvider` component"
    );
  }
  return context;
};
