import React from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";

export const Home = () => {
  return (
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
        <div className="startbtn">Start Visualizing</div>
        <div className="comparebtn">Compare</div>
      </div>
    </div>
  );
};

export default Home;
