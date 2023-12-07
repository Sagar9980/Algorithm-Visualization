import React, { useEffect, useState } from "react";

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

  const checkEquality = (a: number, b: string) => {
    return a === parseInt(b);
  };
  const animatePointers = (pointer: string, pos: number) => {
    const p: any = document.getElementById(pointer);
    p.style.display = "inline-block";
    p.style.transform = `translateX(${pos * 40}px)`;
  };

  const linearSearch = async (arr: number[], k: string) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      await new Promise((resolve: any) => {
        setTimeout(() => {
          if (checkEquality(arr[i], k)) {
            index = i;
            animateArrayElement(i);
          }
          animatePointers("a-pointer-lb", i);
          resolve(); // Resolve the Promise to continue to the next iteration
        }, i * 100);
      });
      if (index !== -1) {
        break; // Exit the loop if the element is found
      }
    }
    return index;
  };
  const binarySearch = async (
    arr: number[],
    k: string,
    lb: number,
    ub: number,
    recursionDepth: number = 0
  ) => {
    await new Promise((resolve: any) => {
      setTimeout(() => {
        if (ub >= lb) {
          let mid = Math.floor((lb + ub) / 2);
          animatePointers("a-pointer-lb", lb);
          animatePointers("a-pointer-mid", mid);
          animatePointers("a-pointer-ub", ub);
          if (checkEquality(arr[mid], k)) {
            animateArrayElement(mid);
            resolve(mid);
            return mid;
          }
          if (arr[mid] > parseInt(k)) {
            return binarySearch(arr, k, lb, mid - 1, recursionDepth + 1);
          } else if (arr[mid] <= parseInt(k))
            return binarySearch(arr, k, mid + 1, ub, recursionDepth + 1);
          else resolve(-1);
        }
      }, 1000 * recursionDepth);
    });
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

  function animateArrayElement(i: number) {
    const arrayElement: any = document.getElementById(`a-box-${i}`);
    arrayElement.className = "a-box standout";
  }

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
