import React, { useEffect, useState } from "react";
// import { bubbleSort } from "../../Algorithms/SortingAlgorithms/bubbleSort";
import { animateSwap } from "../../Animations/Animations";

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
    switch (algorithm) {
      case "0":
        bubbleSort(array);
    }
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

  const bubbleSort = async (arr: number[]) => {
    let len = arr.length - 1;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          await new Promise((resolve: any) => {
            setTimeout(() => {
              resolve();
            }, 1020);
          });
          await animateSwap(j, j + 1);
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
          setArray([...arr]);
        }
      }
    }
    return arr;
  };

  return (
    <div className="container">
      <section className="container-navigation">
        <div>
          <label>Enter the length of Array: </label>
          <input type="number" onChange={handleChange} max="20" min="5" />
        </div>
        <select onChange={handleChangeAlgorithm} defaultValue={0}>
          <option value="0">BubbleSort</option>
          <option value="1">Selection Sort</option>
          <option value="2">Quick Sort</option>
          <option value="3">Merge Sort</option>
        </select>
        <button className="primary-button" onClick={triggerAlgorithm}>
          Sort
        </button>
      </section>

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
