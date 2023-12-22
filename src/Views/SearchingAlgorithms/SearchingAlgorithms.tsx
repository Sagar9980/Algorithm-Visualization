import React, { useEffect, useState } from "react";
import { binarySearch } from "../../Algorithms/SearchingAlgorithms/binarySearch";
import { linearSearch } from "../../Algorithms/SearchingAlgorithms/linearSearch";
import { ToastContainer, toast } from "react-toastify";

function SearchingAlgorithms() {
  const [length, setLength] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("0");
  const [array, setArray] = useState<number[]>([]);
  const [key, setKey] = useState<string>("0");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleChange = (e: any) => {
    if (e.target.value > 20) {
      toast.error("Please enter value less than 20.");
    } else {
      setLength(e.target.value);
    }
  };
  const handleKeyChange = (e: any) => {
    setKey(e.target.value);
  };

  const handleChangeAlgorithm = (e: any) => {
    setAlgorithm(e.target.value);
  };

  const success = () => toast.success("Woohoo, Item found !");
  const fail = () => toast.error("Sorry, Item not found !");

  const triggerAlgorithm = () => {
    setDisabled(true);
    if (algorithm === "0") {
      linearSearch(array, key).then((index: number) => {
        if (index === -1) {
          fail();
        } else {
          success();
        }
      });
    } else {
      binarySearch(array, key, 0, array.length - 1).then((index: number) => {
        if (index === -1) {
          fail();
        } else {
          success();
        }
      });
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
      <section className="container-navigation-wrapper">
        <div className="container-navigation">
          <select
            className="dropdown-search"
            onChange={handleChangeAlgorithm}
            defaultValue={0}
          >
            <option value="0">Linear Search</option>
            <option value="1">Binary Search</option>
          </select>
          <div>
            <label>Length of Array: </label>
            <input type="number" onChange={handleChange} max="20" min="5" />
          </div>
          <div>
            <label>Enter number to search: </label>
            <input type="number" onChange={handleKeyChange} />
          </div>
          <button
            className="secondary-button"
            onClick={() => location.reload()}
          >
            Reset
          </button>
          <button
            className={`primary-button ${
              disabled ? "primary-button-disabled" : ""
            }`}
            onClick={triggerAlgorithm}
            disabled={disabled}
          >
            Search
          </button>
        </div>
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
              <span id="a-pointer-lb" className="a-pointer pointer-left"></span>
            )}
            {algorithm === "1" && (
              <span id="a-pointer-mid" className="a-pointer pointer-mid"></span>
            )}
            {algorithm === "1" && array?.length > 1 && (
              <span
                id="a-pointer-ub"
                className="a-pointer pointer-right"
              ></span>
            )}
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default SearchingAlgorithms;
