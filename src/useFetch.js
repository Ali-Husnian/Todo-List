import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCount = new AbortController;
    setTimeout(() => {
      fetch(url ,{signal: abortCount.signal})
        .then((result) => {
          if (!result.ok) {
            throw Error("could not fetch data for this response!");
          }
          return result.json();
        })
        .then((data) => {
          setIsPanding(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if(err.name=== "AbortError"){
            console.log("fetch aborted");
          }else{
            setError(err.message);
            setIsPanding(false);
          }
        });
    }, 1000);
    return () => abortCount.abort();
  }, [url]);
  return { data, isPanding, error };
};

export default useFetch;
