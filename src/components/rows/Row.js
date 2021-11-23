import React, { useState, useEffect } from "react";
import axios from "../api_connection/axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [rowMovies, setRowMovies] = useState([]);
  const img_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setRowMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {rowMovies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
              key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${img_base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
