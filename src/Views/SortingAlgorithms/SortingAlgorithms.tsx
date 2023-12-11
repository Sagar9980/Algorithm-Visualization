import React, { useEffect, useState } from "react";
import "../../App.css";

export const Sorting = () => {
  const [length, setLength] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("0");
  const [array, setArray] = useState<number[]>([]);

  const handleChange = (e: any) => {
    setLength(e.target.value);
  };
  const handleChangeAlgorithm = (e: any) => {
    setAlgorithm(e.target.value);
  };

  const triggerAlgorithm = () => {
    console.log("algo");
  };
  useEffect(() => {
    function generateRandomArray(length: number): number[] {
      const randomArray: number[] = [];
      for (let i = 0; i < length; i++) {
        let randomElement = Math.floor(Math.random() * 100);
        randomArray.push(randomElement);
      }
      return randomArray;
    }
    setArray(generateRandomArray(length));
  }, [length]);
  return (
    <div className="container">
      <div className="container-navigation-wrapper">
        <section className="container-navigation">
          <select
            className="dropdown-search"
            onChange={handleChangeAlgorithm}
            defaultValue={0}
          >
            <option value="0">BubbleSort</option>
            <option value="1">Selection Sort</option>
            <option value="2">Quick Sort</option>
            <option value="3">Merge Sort</option>
          </select>
          <div>
            <label>Enter the length of Array: </label>
            <input type="number" onChange={handleChange} max="20" min="5" />
          </div>
          <button className="secondary-button">Reset</button>
          <button className="primary-button" onClick={triggerAlgorithm}>
            Sort
          </button>
        </section>
      </div>

      <section className="container-content">
        <div className="array-container">
          {array &&
            array.map((item, index) => (
              <span key={index} id={`a-box-${index}`} className="a-box">
                {item}
              </span>
            ))}
          <div className="pointer-container">
            {array?.length > 0 && (
              <span id="a-pointer-lb" className="a-pointer pointer-left">
                lb
              </span>
            )}
            {algorithm === "1" && (
              <span id="a-pointer-mid" className="a-pointer pointer-mid">
                mid
              </span>
            )}
            {algorithm === "1" && array?.length > 1 && (
              <span id="a-pointer-ub" className="a-pointer pointer-right">
                ub
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sorting;
