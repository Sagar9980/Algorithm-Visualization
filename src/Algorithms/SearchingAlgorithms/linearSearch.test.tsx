import { linearSearch } from "./linearSearch";
import { describe, test, expect } from "vitest";

const array = [24, 54, 22, 54, 73, 54];

describe("checking linear search", () => {
  test("testing function", () => {
    expect(linearSearch(array, "54")).toBeTruthy();
  });
  test("testing function index found", () => {
    return linearSearch(array, "54").then((index) => {
      expect(index).toBe(1);
    });
  });
  test("testing function index not found", () => {
    return linearSearch(array, "20").then((index) => {
      expect(index).toBe(-1);
    });
  });
});
