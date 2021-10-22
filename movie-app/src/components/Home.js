import React, { useState, useEffect } from "react";
// import MovieList from "./MovieList";
import Warning from "./Warning";
import axios from "axios";
import "./Home.css";
import LatestMovie from "./LatestMovie";
import MovieCard from "./MovieCard";
import SideIcons from "./SideIcons";

const Home = () => {
  const [suggestedmovie, setSuggestedMovie] = useState([]);

  const getMoviesRequest = async () => {
    const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(response.data);
    setSuggestedMovie(response.data);
  };
  useEffect(() => {
    getMoviesRequest();
  }, []);
  // console.log(suggestedmovie);
  return (
    <>
      <div className="home">
        <div className="home-container">
          <SideIcons />
          <h1 className="head">Download YTS YIFY movies: HD smallest size</h1>
          <p className="para1">
            Welcome to the official YTS.MX (.LT) website. Here you can browse
            and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
            quality, all at the smallest file size. YTS Movies Torrents.
          </p>
          <p className="para2">
            IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
          </p>
          <p className="para3">
            <i className="star-icon fas fa-star"></i>popular Downloads
          </p>
        </div>
        <div className="movie-container">
          {suggestedmovie.data?.movies?.map(
            ({ id, title, medium_cover_image, year }) => {
              return (
                <div className="info">
                  <MovieCard data={{ id, title, medium_cover_image, year }} />
                </div>
              );
            }
          )}
        </div>
        <Warning />
        <LatestMovie />
      </div>
    </>
  );
};

export default Home;
