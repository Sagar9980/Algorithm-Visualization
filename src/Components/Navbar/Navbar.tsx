import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
         <nav>
          <div className="top">
          <Link to="/" className='home'><p className="av">Algorithm <br />Visualization</p></Link>
          </div>
          <div className="search">
            <button className='searchbtn'>Sea</button>
          </div>
          <div className="settings">
            <button className='settingsbtn'>Set</button>
          </div>

<ul className="navbar" >
  <li>
    <Link to="/sorting" className='link'>Sorting Algorithms</Link>
  </li>
  <li className='link'>Searching Algorithms</li>
  <li>
    <Link to="/pathfind" className='link'>Pathfinding Algorithms</Link>
  </li>
</ul>

</nav>
    </div>
  )
}

export default Navbar