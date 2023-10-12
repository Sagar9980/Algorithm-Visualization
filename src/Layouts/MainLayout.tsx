import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/SortAlgo">Sorting Algorithms</Link>
            </li>
            <li>
              <Link to="/PathFind">Pathfinding Algorithms</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default MainLayout