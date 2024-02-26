import { binarySearch } from "./binarySearch";
import { describe, test, expect, it } from "vitest";

const array = [24, 54, 22, 54, 73, 54];

describe("checking linear search", () => {
  test("testing function", () => {
    expect(binarySearch(array, "54", 0, 5)).toBeTruthy();
  });
  test(
    "testing function index found",
    () => {
      return binarySearch(array, "54", 0, 5).then((index) => {
        expect(index).toBe(1);
      });
    },
    { timeout: 10000 }
  );
  test(
    "testing function index not found",
    () => {
      return binarySearch(array, "20", 0, 5).then((index) => {
        expect(index).toBe(-1);
      });
    },
    { timeout: 10000 }
  );
});
