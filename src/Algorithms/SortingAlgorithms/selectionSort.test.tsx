import { describe, test, expect } from "vitest";
import { selectionSort } from "./selectionSort";

let array = [2, 3, 1, 5, 4];
let sortedArray = [1, 2, 3, 4, 5];

describe("checking selction sort", () => {
  test("testing sorted array", () => {
    const sorted = selectionSort(array);
    expect(sorted).toEqual(sortedArray);
  });
});
