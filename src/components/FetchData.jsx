import { useEffect, useState } from 'react'

const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
        
      } catch(error) {
        setError(error);
      } finally {
        setLoaded(false);
      }
    }
    fetchData();

  }, [url]);

  return [data, error, loaded]
}

export default FetchData