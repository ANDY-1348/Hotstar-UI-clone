import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow, styles }) {
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   const handleClick = (movie) => {
  //      return (
  //         <Link  to={`/movie/${movie.id}`}></Link>
  //      )

  //   }
  console.log(movies);
  return (
    <div className="row" style={{ padding: "20px", paddingLeft: "29px" }}>
      <h2 style={{ marginLeft: "20px", marginBottom: "0px" }}>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() =>
                history.push(`/movie/${movie.id}${movie.backdrop_path}`)
              }
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
