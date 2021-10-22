import React, { useState } from "react";
import Loader from "react-loader-spinner";

const LoaderPage = () => {
  return (
    <div>
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
        ""
      )}
    </div>
  );
};

export default LoaderPage;
