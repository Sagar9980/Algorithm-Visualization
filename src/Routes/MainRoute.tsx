import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Views/Homepage/Homepage";
import Sorting from "../Views/SortingAlgorithms/SortingAlgorithms";
import Pathfind from "../Views/PathfindingAlgorithms/PathfindingAlgorithms";
import SearchingAlgorithms from "../Views/SearchingAlgorithms/SearchingAlgorithms";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pathfind",
    element: <Pathfind />,
  },
  {
    path: "/sorting",
    element: <Sorting />,
  },
  {
    path: "/searching",
    element: <SearchingAlgorithms />,
  },
]);

export default MainRoute;


