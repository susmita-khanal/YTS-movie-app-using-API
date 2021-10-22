import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trending.css";

const Trending = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  const getTrendRequest = async () => {
    const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(response.data);
    setTrendingMovie(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    getTrendRequest();
  }, []);
  return (
    <>
      <div className="trending">
        <div className="trending-heading">24h YIFY Trending Movies</div>
        <div className="trending-container">
          {trendingMovie &&
            trendingMovie.data?.movies?.map((cval) => {
              return (
                <>
                  <div className="trending-group">
                    <div className="trending-image">
                      <img
                        className="trending-img"
                        src={cval.medium_cover_image}
                        alt=""
                      />
                    </div>
                    <div className="trend-infos">
                      <div className="trend-title">{cval.title}</div>
                      <div className="trend-year">{cval.year}</div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Trending;
