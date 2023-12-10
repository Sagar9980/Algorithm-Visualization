import React, { useEffect, useState } from "react";
import { binarySearch } from "../../Algorithms/SearchingAlgorithms/binarySearch";
import { linearSearch } from "../../Algorithms/SearchingAlgorithms/linearSearch";

function SearchingAlgorithms() {
  const [length, setLength] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("0");
  const [array, setArray] = useState<number[]>([]);
  const [key, setKey] = useState<string>("0");

  const handleChange = (e: any) => {
    setLength(e.target.value);
  };
  const handleKeyChange = (e: any) => {
    setKey(e.target.value);
  };

  const handleChangeAlgorithm = (e: any) => {
    setAlgorithm(e.target.value);
  };

  const triggerAlgorithm = () => {
    if (algorithm === "0") {
      linearSearch(array, key);
    } else {
      binarySearch(array, key, 0, array.length - 1);
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
    if (algorithm === "1") {
      setArray(generateRandomArray(length).sort((a, b) => a - b));
    } else {
      setArray(generateRandomArray(length));
    }
  }, [length, algorithm]);

  return (
    <div className="container">
      <section className="container-navigation">
        <div>
          <label>Enter the length of Array: </label>
          <input type="number" onChange={handleChange} max="20" min="5" />
        </div>
        <select onChange={handleChangeAlgorithm} defaultValue={0}>
          <option value="0">Linear Search</option>
          <option value="1">Binary Search</option>
        </select>
        <div>
          <label>Enter number to search: </label>
          <input type="number" onChange={handleKeyChange} />
        </div>
        <button className="primary-button" onClick={triggerAlgorithm}>
          Search
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
}

export default SearchingAlgorithms;
