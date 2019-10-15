import axios from "axios";

export const getResource = url => axios.get(url)

export const getAllData = urls => {
  const requests = urls.map(url => getResource(url))
  return axios.all(requests)
}
