import { useState, useEffect } from "react";
import { getData } from "../services/data";

const useRequestData = (initialState, endpoint) => {
  const[data, setData] = useState(initialState);

  useEffect(() => getData(endpoint, setData), [endpoint]);

  return data;
};

export default useRequestData;