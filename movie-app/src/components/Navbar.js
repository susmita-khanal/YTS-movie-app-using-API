import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import LatestMovie from "./LatestMovie";
import axios from "axios";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [navbarSearch, setNavbarSearch] = useState("");

  return (
    <>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <LatestMovie
        navbarSearch={navbarSearch}
        setNavbarSearch={setNavbarSearch}
      /> */}
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              alt="..."
            ></img>
          </Link>
          <div className="right-navbar">
            <div>
              <i className="search fas fa-search"></i>
              <Link to={`/4k`}>
                <input
                  // search={search}
                  // onChange={(e) => setSearch(e.target.value)}
                  className="search-bar"
                  type="searchbar"
                  placeholder="quick search"
                />
              </Link>
              {/* {searchTitle.map((c) => {
                return (
                  <>
                    <img src={c.medium_cover_image} />
                    <div>{c.title}</div>
                  </>
                );
              })} */}
            </div>
            <NavLink
              to="/"
              className="class-link"
              activeStyle={{ color: "red" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/4K"
              className="fourk-link"
              activeStyle={{ color: "red" }}
            >
              4K
            </NavLink>
            <NavLink
              to="/trending"
              className="class-link"
              activeStyle={{ color: "red" }}
            >
              Trending
            </NavLink>
            <NavLink
              to="/browse"
              className="class-link"
              activeStyle={{ color: "red" }}
            >
              Browse Movies
            </NavLink>

            <button
              onClick={() => setIsModalOpen(true)}
              className="right valid Login"
            >
              Login
            </button>
            <Link
              // onClick={() => setIsModalOpen(true)}
              className="right valid Register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
