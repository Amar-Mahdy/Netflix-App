import React, { useContext, useEffect } from "react";
import "./Row.css";
import { movieContext } from "../api_connection/movieContext";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const { fetchMovies, rowMovies } = useContext(movieContext);
  const img_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMovies(fetchUrl);
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