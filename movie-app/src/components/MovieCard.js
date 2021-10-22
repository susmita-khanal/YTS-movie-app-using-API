import React from "react";

const MovieCard = ({ data }) => {
  const { id, title, medium_cover_image, year } = data;
  return (
    <>
      <div className="bottom-box">
        <img className="bottom-image" src={medium_cover_image} alt="" />
        <div className="bottom-title">{title}</div>
        <div className="bottom-year">{year}</div>
      </div>
    </>
  );
};

export default MovieCard;
