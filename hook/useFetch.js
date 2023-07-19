import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {

        const response = await axios.get(`http://localhost:8080/api/v1/${endpoint}`, {
          params: query,
        });

        setData(response.data);

       };

    fetchData();

  }, [ ]);

  return { data };
};

export default useFetch;
