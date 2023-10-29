import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
         <nav>

<ul>
  <li>
    <Link to="/">Homepage</Link>
  </li>
  <li>
    <Link to="/sorting">Sorting Algorithms</Link>
  </li>
  <li>
    <Link to="/pathfind">Pathfinding Algorithms</Link>
  </li>
</ul>
</nav>
    </div>
  )
}

export default Navbar