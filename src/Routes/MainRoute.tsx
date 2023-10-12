import{ createBrowserRouter } from 'react-router-dom';
import React from 'react'; 

import Home from '../Views/Homepage/Homepage'
import Sorting from '../Views/SortingAlgorithms/SortingAlgorithms';
import Pathfind from '../Views/PathfindingAlgorithms/PathfindingAlgorithms';
import MainLayout from '../Layouts/MainLayout';

export const MainRoute = createBrowserRouter([
 {
  path: "/",
  element:<MainLayout />,
  children: [
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/pathfind",
      element:<Pathfind />
    },
    {
      path:"/sorting",
      element:<Sorting />
    }
  ]
  
 }
])

export default MainRoute;
