import React from "react";

export const Sorting = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-center flex-align-center">
      <div className="array-container">
        {array.map((item, index) => (
          <span key={index} className="a-box">
            {item}
          </span>
        ))}
        <div className="pointer-container">
          <span className="a-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
