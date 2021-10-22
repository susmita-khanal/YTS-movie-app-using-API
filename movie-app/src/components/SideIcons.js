import React from "react";
import "./SideIcons.css";

const SideIcons = () => {
  return (
    <>
      <div className="sideicon">
        <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <i className="twitter fab fa-twitter-square"></i>
        </a>
        <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <i className="facebook fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <i className="qrcode fas fa-qrcode"></i>
        </a>
        <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <i className="linkedin fab fa-linkedin-in"></i>
        </a>
      </div>
    </>
  );
};

export default SideIcons;
