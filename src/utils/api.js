import axios from "axios";

// True functions !!
// export const getProfessors = () => axios.get(`http://localhost:3004/professors`)
// export const getSubjects = () => axios.get(`http://localhost:3004/subjects`)


// Simulating network delay

export const getProfessors = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(axios.get(`http://localhost:3004/professors`)), 1000)
  );

export const getSubjects = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(axios.get(`http://localhost:3004/subjects`)), 1000)
  );
