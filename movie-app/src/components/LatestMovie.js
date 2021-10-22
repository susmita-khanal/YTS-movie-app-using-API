import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router-dom";
import "./LatestMovie.css";
import MovieCard from "./MovieCard";

const LatestMovie = ({ data }) => {
  const [latestMovie, setLatestMovie] = useState([]);

  const getRequest = async () => {
    const res = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?quality=3D"
    );
    setLatestMovie(res.data);
  };
  useEffect(() => {
    getRequest();
  }, []);
  console.log(latestMovie);
  return (
    <>
      <div className="latestmovie">
        <div className="title-line">
          <Link className="latest-link" to="/trending">
            {" "}
            <div className="left-title">Latest YIFY Movies Torrents</div>
          </Link>
          <div className="right-title">
            <Link to="/browse" className="browse">
              Browse All
            </Link>
          </div>
        </div>
        <div className="latest">
          {latestMovie.data?.movies?.map(
            ({ id, title, medium_cover_image, year, rating, genres }) => {
              // console.log(elem.id);
              return (
                <div className="image-latest">
                  <MovieCard
                    data={{
                      id,
                      title,
                      medium_cover_image,
                      year,
                      rating,
                      genres,
                    }}
                  />
                  {/* <div className="mid"> */}
                  <div className="image-overlay">
                    <span className="mid-icon">
                      <i class="mid-icon-star fas fa-star"></i>
                    </span>
                    <span className="ratings">{rating}</span>
                    <span className="genre">{genres}</span>

                    {/* <Link className="datalink" to={`/singlePage/${data.id}`}> */}
                    <Link to={`/singlepage/${id}`} className="datalink">
                      <button className="latest-button">View Details</button>
                    </Link>
                  </div>
                </div>
                // </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default LatestMovie;
