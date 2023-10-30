import React from 'react'; 
import "../Homepage/Homepage.css";
export const Home = () => {
	return (
        <>
     <body>
        <div className="paragraph">
      <p className="get">Get better understanding of<br /> 
      <span className="algo">ALGORITHMS </span> 
        through <br />
       <span className="algo">VISUALIZATION</span>. </p>
      </div>
      <div className="start">
        <button className="startbtn">Start Visualizing</button>
      </div>
      <div className="compare">
        <button className="comparebtn">Compare</button>
      </div>
     </body>
     
     </>
    );
} 
 
export default Home;