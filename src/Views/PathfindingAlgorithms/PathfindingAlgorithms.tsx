import React, { useEffect, useState } from "react";
import Node from "../../Components/Node/Node";
import {
  dijkstraAlgorithm,
  getNodesInShortestPathOrder,
} from "../../Algorithms/PathfindingAlgorithms/dijkstraAlgorithm";
import { animateDijkstra } from "../../Animations/Animations";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 2;
const FINISH_NODE_COL = 48;

const PathfindingAlgorithms = () => {
  const [grid, setGrid] = useState<any>([]);
  const [algorithm, setAlgorithm] = useState<string>("0");
  const handleChangeAlgorithm = (e: any) => {
    setAlgorithm(e.target.value);
  };
  //   console.log(grid);
  const triggerAlgorithm = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstraAlgorithm(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  useEffect(() => {
    const createNode = (row: number, col: number) => {
      return {
        col: col,
        row: row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
      };
    };
    const getInitialGrid = () => {
      const grid: Object[] = [];
      for (let row = 0; row < 20; row++) {
        const currentRow: Object[] = [];
        for (let col = 0; col < 50; col++) {
          currentRow.push(createNode(row, col));
        }
        grid.push(currentRow);
      }
      return grid;
    };
    setGrid(getInitialGrid());
  }, []);
  return (
    <div className="container">
      <div className="container-navigation-wrapper">
        <section className="container-navigation">
          <select
            className="dropdown-search"
            onChange={handleChangeAlgorithm}
            defaultValue={0}
          >
            <option value="0">Dijkstra's Algorithm</option>
            <option value="1">A* Search Algorithm</option>
          </select>

          <button
            className="secondary-button"
            onClick={() => location.reload()}
          >
            Reset
          </button>
          <button
            className="primary-button"
            //   className={`primary-button ${
            //     disabled ? "primary-button-disabled" : ""
            //   }`}
            onClick={triggerAlgorithm}
          >
            Visualize
          </button>
        </section>
      </div>
      <section className="container-content">
        <table className="table-grid">
          {grid?.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row?.map((node, nodeIndex) => {
                  const { row, col, isWall, isStart, isFinish } = node;
                  return (
                    <td>
                      <Node
                        key={nodeIndex}
                        row={row}
                        col={col}
                        isWall={isWall}
                        isStart={isStart}
                        isFinish={isFinish}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};

export default PathfindingAlgorithms;
