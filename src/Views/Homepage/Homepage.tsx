import React from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage-container">
      <div>
        <Navbar />
        <div className="hero-text">
          <p>
            Get better understanding of <br />
            <span>ALGORITHMS</span> through <br />
            <span>VISUALIZATION.</span>
          </p>
        </div>
        <div className="btns">
          <Link to="/sorting">
            <div className="startbtn">Start Visualizing</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
