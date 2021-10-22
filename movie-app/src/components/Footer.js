import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-1">
          YTS © 2011 - 2021 -<Link className="footer-link">Blog</Link>-
          <Link className="footer-link"> DMCA </Link>-
          <Link className="footer-link"> API </Link>-
          <Link className="footer-link"> RSS </Link>-
          <Link className="footer-link"> Contact </Link>-
          <Link className="footer-link"> Browse Movies </Link>-
          <Link className="footer-link"> Requests </Link>-
          <Link className="footer-link"> Login </Link>
        </div>
        <div className="footer-2">
          <Link className="footer-link"> EZTV </Link>-
          <Link className="footer-link"> YIFY status </Link>-
          <Link className="footer-link"> Yts Proxies </Link>
        </div>

        <div className="footer-paragraph">
          By using this site you agree to and accept our
          <Link className="footer-paragraph-link"> User Agreement</Link>, which
          can be read
          <Link className="footer-paragraph-link"> here</Link>.
        </div>
      </div>
    </>
  );
};

export default Footer;
