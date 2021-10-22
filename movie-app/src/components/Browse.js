import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fourk.css";
import Pager from "./Pager";
import MovieCard from "./MovieCard";
import Loader from "react-loader-spinner";

const Browse = () => {
  const [browseMovies, setBrowseMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [quality, setQuality] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const [pages, setPages] = useState(1);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage, setItemsPerPage] = useState(5);

  // const indexOfLastItem = currentPage * setItemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentItems = browseMovies.slice(indexOfLastItem, indexOfFirstItem);

  const handlePageClick = (data) => {
    console.log(data);
  };

  const getFourKRequest = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json/?&query_term=${searchTitle}&quality=${quality}&minimum_rating=${rating}&genre=${genre}&page=${pages}`
    );
    console.log(response.data);
    setBrowseMovies(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getFourKRequest();
  }, [pages, searchTitle, quality, rating, genre]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuality("");
    setGenre("");
    setOrder("");
    setRating("");
    setLanguage("");
    setYear("");
    console.log("allData", quality, genre, language, rating, year, order);
  };
  return (
    <>
      <div className="fourk">
        <div className="fourk-container">
          <div className="search-term">Search Term</div>
          <div className="search-line">
            <input
              className="Browse-input"
              type="text"
              onChange={(e) => setSearchTitle(e.target.value)}
            />

            <button className="browse-input-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="choose-input">
            <div className="faculty">
              <div className="quality">Quality:</div>
              <div className="select-Quality">
                <select
                  onClick={(e) => setQuality(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
                  <option>1080p</option>
                  <option>720p</option>
                  <option>2160p</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Genre:</div>
              <div className="select-Genre">
                <select
                  onClick={(e) => setGenre(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Biography</option>
                  <option>Crime</option>
                  <option>Documentry</option>
                  <option>Fantasy</option>
                  <option>Horrer</option>
                  <option>Music</option>
                  <option>Mystry</option>
                  <option>News</option>
                  <option>Family</option>
                  <option>Thriller</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Rating:</div>
              <div className="select-Rating">
                <select
                  onClick={(e) => setRating(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
                  <option>9+</option>
                  <option>8+</option>
                  <option>7+</option>
                  <option>6+</option>
                  <option>5+</option>
                  <option>4+</option>
                  <option>3+</option>
                  <option>2+</option>
                  <option>1+</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Year:</div>
              <div className="select-year">
                <select
                  onClick={(e) => setYear(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
                  <option>1980</option>
                  <option>1982</option>
                  <option>1983</option>
                  <option>1984-1990</option>
                  <option>1990-2000</option>
                  <option>2000-2019</option>
                  <option>2020</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Language:</div>
              <div className="select-language">
                <select
                  onClick={(e) => setLanguage(e.target.value)}
                  className="select"
                  name="------All-----"
                >
                  <option>------All-----</option>
                  <option>english</option>
                  <option>nepali</option>
                  <option>urdu</option>
                  <option>hindi</option>
                  <option>malasiyan</option>
                  <option>chinese</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Order By:</div>
              <div className="select-order">
                <select
                  onClick={(e) => setOrder(e.target.value)}
                  className="select"
                  name="latest"
                >
                  <option>latest</option>
                  <option>old</option>
                  <option>featured</option>
                  <option>seeds</option>
                  <option>peer</option>
                  <option>ratings</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="trending-lowerpart">
          <div className="trending-lower-container">
            <div className="trending-lower-heading">
              34,821 YIFY Movies found
            </div>
          </div>
          {loading ? (
            <h4 className="loader">
              <Loader
                type="Circles"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={2000} //3 secs
              />
            </h4>
          ) : (
            <div className="trending-bottom-part">
              <Pager pages={pages} setPages={setPages} />
              {browseMovies.data?.movies
                ?.filter((value) => {
                  if (searchTitle === " ") {
                    return value;
                  } else if (
                    value.title
                      .toLowerCase()
                      .includes(searchTitle.toLowerCase())
                  ) {
                    return value;
                  }
                })

                .map(({ id, title, medium_cover_image, year }) => {
                  return (
                    // <div className="bottom-box" key={i}>
                    //   <div>
                    //     <img
                    //       className="bottom-image"
                    //       src={cval.large_cover_image}
                    //       alt=""
                    //     ></img>
                    //   </div>
                    //   <div className="bottom-title">{cval.title}</div>
                    //   <div className="bottom-year">{cval.year}</div>
                    // </div>
                    <MovieCard data={{ id, title, medium_cover_image, year }} />
                  );
                })}
              <Pager pages={pages} setPages={setPages} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Browse;
