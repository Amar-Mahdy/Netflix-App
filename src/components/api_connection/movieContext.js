import { useState, createContext } from "react";
import axios from "./axios";

export const movieContext = createContext();

export const MovieProvider = (props) => {
  const [bannerMovies, setBannerMovies] = useState([]);
  const [rowMovies, setRowMovies] = useState([]);
  // errors
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const getMovies = async (movies) => {
    setIsLoading(true);

    try {
      const request = await axios.get(movies);
      // banner movies
      setBannerMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // rows
  async function fetchData(item) {
    const request = await axios.get(item);
    setRowMovies(request.data.results);
    return request;
  }

  // cut the description text in banner page
  function cutDescription(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  return (
    <movieContext.Provider
      value={{
        getMovies,
        cutDescription,
        isLoading,
        setIsLoading,
        errMsg,
        setErrMsg,
        bannerMovies,
        rowMovies,
        fetchData,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};
