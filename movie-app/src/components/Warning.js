import React from "react";
import "./Warning.css";
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <>
      <div className="warning">
        <h1 className="warning-heading">Warning! Download only with VPN...</h1>
        <hr />
        <p className="warning-para1">
          Downloading torrents is risky for you: your IP and leaked private data
          being actively tracked by your ISP and Government Agencies. Protect
          yourself from expensive lawsuits and fines NOW! You must use a VPN
          like FAST. It is the only way to download torrents fully anonymous by
          encrypting all traffic with zero logs.
        </p>
        <p className="warning-para2">
          <Link className="warning-link">
            Personal data disclosing your real identity: your IP address,
            <span className="highlight">103.167.232.140</span> is exposed, which
            points directly to your location in . You are browsing with
            <span className="highlight">Chrome 93.0.4577.63 (Windows 10)</span>
            ,monitor res.
            <span className="highlight"> 1280x720px</span> , 4-cores CPU .
          </Link>
        </p>
        <p className="warning-para3">
          ″Do not risk it! Protect yourself right now by downloading FAST VPN″ -
          William
        </p>
        <button className="warning-button">
          <i className="warning-icon fas fa-download"></i>Download Fast
        </button>
      </div>
    </>
  );
};

export default Warning;
