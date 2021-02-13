import axios from "axios";
import { baseUrl } from "../constants/urls";

export const getData = (endpoint, setData) => {
  axios
    .get(`${baseUrl}${endpoint}`)
    .then(response => setData(response.data))
    .catch(err => console.log(err.message));
};