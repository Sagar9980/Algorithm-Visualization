import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="top-nav">
          <Link to="/">
            <a href="#">Algorithm Visualization</a>
          </Link>
        </div>
      </div>
      <div className="outer-bottom-nav">
        <div className="bottom-nav">
          <div className="sort">
            <Link to="/sorting" className="links">
              <p>Sorting Algorithms</p>
            </Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-downward">
                <path
                  id="chevron"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79289 8.29289C6.18342 7.90237 6.81658 7.90237 7.20711 8.29289L12 13.0858L16.7929 8.29289C17.1834 7.90237 17.8166 7.90237 18.2071 8.29289C18.5976 8.68342 18.5976 9.31658 18.2071 9.70711L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L5.79289 9.70711C5.40237 9.31658 5.40237 8.68342 5.79289 8.29289Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="divider"></div>
          <div className="search">
            <Link to="/searching" className="links">
              <p>Searching Algorithms</p>
            </Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-downward">
                <path
                  id="chevron"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79289 8.29289C6.18342 7.90237 6.81658 7.90237 7.20711 8.29289L12 13.0858L16.7929 8.29289C17.1834 7.90237 17.8166 7.90237 18.2071 8.29289C18.5976 8.68342 18.5976 9.31658 18.2071 9.70711L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L5.79289 9.70711C5.40237 9.31658 5.40237 8.68342 5.79289 8.29289Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="divider"></div>
          <div className="pathfinding">
            <Link to="/pathfind" className="links">
              <p>Pathfinding Algorithms</p>
            </Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-downward">
                <path
                  id="chevron"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79289 8.29289C6.18342 7.90237 6.81658 7.90237 7.20711 8.29289L12 13.0858L16.7929 8.29289C17.1834 7.90237 17.8166 7.90237 18.2071 8.29289C18.5976 8.68342 18.5976 9.31658 18.2071 9.70711L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071L5.79289 9.70711C5.40237 9.31658 5.40237 8.68342 5.79289 8.29289Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
