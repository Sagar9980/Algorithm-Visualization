import React, { useEffect, useState } from "react";

function SearchingAlgorithms() {
  const [length, setLength] = useState<number>(0);
  const [array, setArray] = useState<number[]>([]);

  const handleChange = (e: any) => {
    setLength(e.target.value);
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
  console.log(array, "This is array");
  return (
    <div>
      <div>
        <label>Enter the length of Array:</label>
        <input type="number" onChange={handleChange} max="20" min="5" />

        <div className="array-container">
          {array &&
            array.map((item, index) => (
              <span key={index} className="a-box">
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchingAlgorithms;
