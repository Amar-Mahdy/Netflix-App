import React, { useContext, useEffect } from "react";
import "./Banner.css";
import { movieContext } from "../api_connection/movieContext";
import requests from "../api_connection/request";

function Banner() {
  const { bannerMovies, cutDescription, getMovies } = useContext(movieContext);

  useEffect(() => {
    getMovies(requests.fetchNetflixOriginals);
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          bannerMovies && bannerMovies.backdrop_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {(bannerMovies && bannerMovies.title) ||
            (bannerMovies && bannerMovies.name) ||
            (bannerMovies && bannerMovies.original_name)}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {cutDescription(bannerMovies && bannerMovies.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
