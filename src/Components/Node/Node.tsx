import React from "react";
import "./Node.css";

export interface NodeProps {
  row: number;
  col: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
  onMouseUp: any;
  onMouseDown: any;
  onMouseEnter: any;
}

const Node = ({
  row,
  col,
  isFinish,
  isWall,
  isStart,
  onMouseUp,
  onMouseEnter,
  onMouseDown,
}: NodeProps) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={()=> onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
      
    ></div>
  );
};

export default Node;
