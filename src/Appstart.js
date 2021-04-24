import React from "react";
import "./Appstart.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function Appstart() {
  return (
    <div className="app" style={{ overflowX: "hidden" }}>
      <Nav />
      <Banner />
      <Row
        title="Hotstar Originals"
        isLargeRow
        styles={{ marginTop: "100px" }}
        fetchUrl={requests.fetchOriginals}
      />
      <Row title="Trending" isLargeRow fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" isLargeRow fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        isLargeRow
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        isLargeRow
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        isLargeRow
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default Appstart;
