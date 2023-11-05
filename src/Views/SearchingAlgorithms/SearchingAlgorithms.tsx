import React, { useEffect, useState } from "react";

function SearchingAlgorithms() {
  const [length, setLength] = useState<number>(0);
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

  const findIndex = async (arr: number[], k: string) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      await new Promise((resolve: any) => {
        setTimeout(() => {
          if (checkEquality(arr[i], k)) {
            index = i;
            animateArrayElement(i);
          }
          animatePointer();
          resolve(); // Resolve the Promise to continue to the next iteration
        }, i * 100);
      });
      if (index !== -1) {
        break; // Exit the loop if the element is found
      }
    }
    return index;
  };

  const triggerAlgorithm = () => {
    findIndex(array, key);
  };

  function animatePointer() {
    const pointer: any = document.getElementById("a-pointer");
    const currentTransform = window.getComputedStyle(pointer).transform;
    const currentTranslateX = parseFloat(currentTransform.split(",")[4]) || 0;
    const newTranslateX = currentTranslateX + 40;
    pointer.style.transform = `translateX(${newTranslateX}px)`;
  }

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
    setArray(generateRandomArray(length));
  }, [length]);
  return (
    <div className="container">
      <section className="container-navigation">
        <div>
          <label>Enter the length of Array: </label>
          <input type="number" onChange={handleChange} max="20" min="5" />
        </div>
        <select>
          <option>Linear Search</option>
          <option>Binary Search</option>
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
          {array?.length > 0 && (
            <span id="a-pointer" className="a-pointer"></span>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchingAlgorithms;
