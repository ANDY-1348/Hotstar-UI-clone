import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed" }}
      >
        <span className="bar-icon">
          <i className="fad fa-bars"></i>
        </span>
        <a className="navbar-brand" href="/">
          <img src="/disney-hotstar-logo-dark.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                TV
              </a>
            </li>
            <li className="nav-item">Movies</li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Premium
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disney-block" href="/">
                <div>Disney+</div>
                <div>new</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link kids-block" href="/">
                Kids
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
              <span style={{ position: "relative" }}>
                <i
                  className="fas fa-search"
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "6px",
                    color: " rgb(119 119 119)",
                  }}
                ></i>
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link subscribe-block" href="/">
                subscribe
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/login">
                login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
