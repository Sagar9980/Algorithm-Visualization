import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Views/Homepage/Homepage";
import Sorting from "../Views/SortingAlgorithms/SortingAlgorithms";
import SearchingAlgorithms from "../Views/SearchingAlgorithms/SearchingAlgorithms";
import PathfindingAlgorithms from "../Views/PathfindingAlgorithms/PathfindingAlgorithms";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pathfind",
    element: <PathfindingAlgorithms />,
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
