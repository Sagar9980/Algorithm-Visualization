import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'; 

import Home from './Homepage'
import Sorting from './SortingAlgorithms';
import Pathfind from './PathfindingAlgorithms';

export const MainRoute = () => {
    return (
        <Router>
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

        <Routes>
          <Route path="/" >
            <Home />
          </Route>
          <Route path="/SortAlgo">
            <Sorting />
          </Route>
          <Route path="/PathFind">
            <Pathfind />
          </Route>
        </Routes>
      </div>

        </Router>

    );
}

export default MainRoute;
