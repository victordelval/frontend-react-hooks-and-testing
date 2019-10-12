import axios from "axios";

// True functions!!

// export const getProfessors = () => axios.get(`http://localhost:3004/professors`)
// export const getSubjects = () => axios.get(`http://localhost:3004/subjects`)


// Here, simulating network delay!

export const getProfessors = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(axios.get(`http://localhost:3004/professors`)), 2000)
  );

export const getSubjects = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(axios.get(`http://localhost:3004/subjects`)), 2000)
  );

export const getAllData = () => axios.all([getProfessors(), getSubjects()])
