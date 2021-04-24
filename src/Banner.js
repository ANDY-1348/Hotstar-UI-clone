import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: "25px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        left: "25px",
      }}
      onClick={onClick}
    />
  );
}
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchOriginals);
      console.log(request.data.results);
      setMovie(request.data.results.slice(0, 6));

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="banner">
        <Slider {...settings}>
          {movie.map((movie, i) => {
            return (
              <div className="d-flex main m-auto">
                <div className="banner_contents" style={{ width: "50%" }}>
                  <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                  </h1>

                  <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <h4 className="mt-1">
                      {movie?.first_air_date.slice(0, 4)}
                    </h4>
                  </div>
                  <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                  </h1>
                </div>

                <div className="banner_image" style={{ width: "50%" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title || movie?.name || movie?.original_name}
                    style={{ height: "500px", width: "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Banner;
