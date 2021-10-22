import React from "react";

const Search = () => {
  const getSearch = async () => {
    const res = await axios.get(
      `https://yts.mx/api/v2/list_movies.json/?query_term`
    );
  };
  return <></>;
};

export default Search;
