import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'efbd7234d0msh010ea3c39a1566dp1faf4fjsn6f9d00473956',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData= async () => {
    setIsLoading(true);

    try{
      const dummyData = [
        {
          employer_logo: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          job_title: 'Dummy Job Title',
          employer_name: 'Dummy Company Name',
          employer_country: 'Dummy Location',
        },
      ];

      setData(dummyData);
      setIsLoading(false)
    } catch (error) {
      setError(error);
      alert('There is an error')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };

}

export default useFetch;
