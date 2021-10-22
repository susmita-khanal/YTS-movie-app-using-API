import React, { useState, useEffect } from "react";
import axios from "axios";
import Pager from "./Pager";
import Loader from "react-loader-spinner";
import "./Fourk.css";
import MovieCard from "./MovieCard";

const Fourk = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(" ");
  const [movies, setMovies] = useState([]);
  const [moviecount, setMovieCount] = useState([]);
  //
  const [quality, setQuality] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(0);
  const [order, setOrder] = useState("");

  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json/?&query_term=${search}&quality=${quality}&minimum_rating=${rating}&genre=${genre}&page=${pages}`
      );
      console.log(response.data);
      setMovies(response.data?.data?.movies);
      setLoading(false);
    };
    getData();
    console.log(search, quality, rating, genre, pages);
  }, [search, quality, rating, genre, pages]);

  // console.log(search);

  const handleClick = (e) => {
    e.preventDefault();
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
              value={search}
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleClick} className="browse-input-button">
              Search
            </button>
          </div>

          <div className="choose-input">
            <div className="faculty">
              <div className="quality">Quality:</div>
              <div className="select-Quality">
                <select
                  onChange={(e) => setQuality(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
                  <option>1080p</option>
                  <option>720p</option>
                  <option>2160p</option>
                  <option>3D</option>
                </select>
              </div>
            </div>
            <div className="faculty">
              <div className="quality">Genre:</div>
              <div className="select-Genre">
                <select
                  onChange={(e) => setGenre(e.target.value)}
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
                  onChange={(e) => setRating(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option value={0}>All</option>
                  <option value={8}>8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
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
                  onChange={(e) => setYear(e.target.value)}
                  className="select"
                  name="All"
                >
                  <option>All</option>
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
                  onChange={(e) => setLanguage(e.target.value)}
                  className="select"
                  name="------All-----"
                >
                  <option>All</option>
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
                  onChange={(e) => setOrder(e.target.value)}
                  className="select"
                  name="latest"
                >
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
              357{" "}
              <span className="trending-lower-heading-paragraph">
                2160p 4K{" "}
              </span>
              YIFY Movies found (by latest)
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
              {movies &&
                movies.length > 0 &&
                movies?.map(({ id, title, medium_cover_image, year }) => {
                  return (
                    <>
                      <MovieCard
                        data={{ id, title, medium_cover_image, year }}
                      />
                    </>
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

export default Fourk;
