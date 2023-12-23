import React, { useEffect, useState } from "react";
import Node from "../../Components/Node/Node";
import {
  dijkstraAlgorithm,
  getNodesInShortestPathOrder,
} from "../../Algorithms/PathfindingAlgorithms/dijkstraAlgorithm";
import { animateDijkstra } from "../../Animations/Animations";

const PathfindingAlgorithms = () => {
  const [grid, setGrid] = useState<any>([]);
  const [algorithm, setAlgorithm] = useState<string>("0");
  const [startNode, setstartNode] = useState([10, 15]);
  const [finishNode, setfinishNode] = useState([2, 48]);
  const [mouseDown, setMouseDown] = useState(false);
  const [onMouseDouleClick, setMouseDoubleClick] = useState<number>()
  const handleChangeAlgorithm = (e: any) => {
    setAlgorithm(e.target.value);
  };
  //   console.log(grid);
  const triggerAlgorithm = () => {
    const stNode = grid[startNode[0]][startNode[1]];
    const fshNode = grid[finishNode[0]][finishNode[1]];
    const visitedNodesInOrder = dijkstraAlgorithm(grid, stNode, fshNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(fshNode);
    
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };
  const handleMouseDown = (row: number, col: number) => {
   
  const node = grid[row][col];
  if (node?.isStart) {
    setMouseDoubleClick(0);
    return;
  }
  if(node?.isFinish){
    setMouseDoubleClick(1);
    return
  }
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseDown(true);
   
  };
  const handleMouseEnter =(row:number, col: number) => {
    if(!mouseDown) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }
  const handleMouseUp = (row:number, col: number) => {
    if(onMouseDouleClick === 0) {
      setstartNode([row, col]);
      setMouseDoubleClick(2)
    }
    if(onMouseDouleClick ===1 ) {
      setfinishNode([row, col])
      setMouseDoubleClick(2)
    }
    setMouseDown(false)
  };

 const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node, 
    isWall: node.isStart || node.isFinish ? false : !node.isWall,
  }
  newGrid[row][col] = newNode;
  return newGrid;
 }


  useEffect(() => {
    const createNode = (row: number, col: number) => {
      return {
        col: col,
        row: row,
        isStart: row === startNode[0] && col === startNode[1],
        isFinish: row === finishNode[0] && col === finishNode[1],
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
  }, [startNode, finishNode]);

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
                        onMouseDown={handleMouseDown}
                        onMouseEnter={ handleMouseEnter}
                        onMouseUp={handleMouseUp}
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
