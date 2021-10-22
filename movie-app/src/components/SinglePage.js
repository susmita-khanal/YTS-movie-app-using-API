import React, { useState, useEffect } from "react";
import "./SinglePage.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MovieReviews from "./MovieReviews";

// import LatestMovie from "./LatestMovie";

const SinglePage = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  // console.log(id);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://yts.mx/api/v2/movie_details.json/?movie_id=${id}`
    );

    setDetail(res.data.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  });
  return (
    <>
      <div className="singlepage">
        <div className="singlepage-container">
          <div className="leftcontainer">
            <div className="single-image">
              <div className="abc">
                <img
                  className="image-source "
                  src={detail?.medium_cover_image}
                  alt="..."
                />
              </div>
              ;
            </div>

            <div>
              <button className="singlepage-button">Download</button>
            </div>
            <div className="social-icons">
              <a href="https://youtube.com/" target="_blank">
                <i className="social twit fab fa-twitter-square"></i>
              </a>
              <i className="social fb fab fa-facebook"></i>
              <i className="social linkedin fab fa-linkedin-in"></i>
              <i className="social code fas fa-qrcode"></i>
            </div>
          </div>
          <div className="midcontainer">
            <h3 className="single-heading">{detail?.title}</h3>
            <p className="single-year">1998</p>
            <div className="single-genre">Action / Adventure / Crime</div>
            <div className="availiable">
              Availiable in:<button>720p.BluRay</button>
              <button>1080p.BluRay</button>
            </div>
            <button className="download-subtitle">
              <i class="download fas fa-download"></i>Download Subtitle
            </button>
            <div className="rate">
              <div className="first">
                <span>
                  <i className="download far fa-heart"></i>
                </span>
                <span>
                  <i className=" trash fas fa-trash"></i>
                </span>
                <span className="imdb-part">IMDB</span>
              </div>
              <div className="second">
                <span className="num">4</span>
                <span className="numaud">26% audience</span>
                <span className="numdown">
                  5 <i className="download1 fas fa-star"></i>
                </span>
              </div>
            </div>

            <div className="warning-second">
              <h4>Please enable your VPN when downloading torrents</h4>
              <p>
                If you torrent without a VPN, your ISP can see that you're
                torrenting and may throttle your connection and get fined by
                legal action!
              </p>
              <button className="vpn-button">Get Fast VPN</button>
            </div>
          </div>
          <div className="right-container">similar-movies</div>
        </div>
      </div>
      <MovieReviews />
    </>
  );
};

export default SinglePage;
