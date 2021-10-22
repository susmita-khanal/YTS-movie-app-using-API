import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const getReview = async () => {
    const res = await axios.get("https://yts.mx/api/v2/movie_reviews.json");
    console.log(res.data);
  };
  useEffect(() => {
    getReview();
  }, []);
  return <>jsasaj</>;
};

export default MovieReviews;
