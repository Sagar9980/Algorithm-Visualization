import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="top-nav">
          <a href="#">
            Algorithm <br />
            Visualization
          </a>
          <div className="btns">
            <div className="search-btn">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="search">
                  <path
                    id="Vector"
                    d="M30.2021 28.1313L25.2438 23.1875C26.8435 21.1494 27.7116 18.6326 27.7083 16.0417C27.7083 13.7342 27.0241 11.4786 25.7422 9.56002C24.4602 7.64145 22.6381 6.1461 20.5063 5.26308C18.3745 4.38005 16.0287 4.14902 13.7656 4.59918C11.5025 5.04934 9.42371 6.16048 7.79209 7.79209C6.16048 9.42371 5.04934 11.5025 4.59918 13.7656C4.14902 16.0287 4.38005 18.3745 5.26308 20.5063C6.1461 22.6381 7.64145 24.4602 9.56002 25.7422C11.4786 27.0241 13.7342 27.7083 16.0417 27.7083C18.6326 27.7116 21.1494 26.8435 23.1875 25.2438L28.1313 30.2021C28.2668 30.3388 28.4281 30.4473 28.6058 30.5213C28.7835 30.5953 28.9742 30.6335 29.1667 30.6335C29.3592 30.6335 29.5498 30.5953 29.7275 30.5213C29.9052 30.4473 30.0665 30.3388 30.2021 30.2021C30.3388 30.0665 30.4473 29.9052 30.5213 29.7275C30.5953 29.5498 30.6335 29.3592 30.6335 29.1667C30.6335 28.9742 30.5953 28.7835 30.5213 28.6058C30.4473 28.4281 30.3388 28.2668 30.2021 28.1313ZM7.29167 16.0417C7.29167 14.3111 7.80485 12.6194 8.76631 11.1804C9.72778 9.7415 11.0943 8.61999 12.6932 7.95773C14.292 7.29546 16.0514 7.12218 17.7487 7.4598C19.446 7.79742 21.0051 8.63078 22.2289 9.85449C23.4526 11.0782 24.2859 12.6373 24.6235 14.3346C24.9612 16.032 24.7879 17.7913 24.1256 19.3902C23.4634 20.989 22.3418 22.3556 20.9029 23.317C19.464 24.2785 17.7723 24.7917 16.0417 24.7917C13.721 24.7917 11.4954 23.8698 9.85449 22.2289C8.21354 20.5879 7.29167 18.3623 7.29167 16.0417Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div className="ham-btn">
              <svg
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M2 2H7.04494M28.9064 2H13.7715M28.9064 19.41H23.8614M2 19.41H17.1348M2 10.705H28.9064"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-bottom-nav">
        <div className="bottom-nav">
          <div className="sort">
            <p>Sorting Algorithms</p>
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
            <p>Searching Algorithms</p>
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
            <p>Pathfinding Algorithms</p>
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
    </>
  );
}

export default Navbar;
