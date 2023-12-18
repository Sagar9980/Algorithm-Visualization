import React from "react";
import "./Node.css";

export interface NodeProps {
  row: number;
  col: number;
  isFinish: boolean;
  isStart: boolean;
  isWall: boolean;
}

const Node = ({ row, col, isFinish, isWall, isStart }: NodeProps) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}></div>
  );
};

export default Node;
