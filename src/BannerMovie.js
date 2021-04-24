import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./BannerMovie.css";

import Nav from "./Nav";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const BannerMovie = () => {
  const [movie, setMovie] = useState();
  const _params = useParams();


async function fetchData() {
    try{
  const request = await axios.get(
    `api.themoviedb.org/3/movie/${_params.id}?api_key=6b4136a866bdbe8f8b1de99467ade419&language=en-US`
  );
  console.log(request.data);

  setMovie(request.data);
  return request;

}catch(error){
console.log(error)
}
}
  useEffect(() => {

    fetchData();
  }, []);

  console.log(_params.imgid);
  return (
    <div className="app">
      <Nav />
      <div className="banner">
        <div className="d-flex main m-auto">
          <div className="banner_contents" style={{ width: "50%" }}>
            <h1 className="banner_title">{movie?.original_title}</h1>

            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <h4 className="mt-1">
                {" "}
                Released on {movie?.release_date.slice(0, 4)}
              </h4>
            </div>
            <h1 className="banner_description">{movie?.overview}</h1>
          </div>

          <div className="banner_image" style={{ width: "50%" }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${_params.imgid}`}
              alt={movie?.title || movie?.name || movie?.original_name}
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMovie;
