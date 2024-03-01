import { animateSwap } from "../../Animations/Animations";

export function mergeSortAlgorithm(arr: number[], updateArray: any) {
  async function mergeSort(arr) {
    const n = arr.length;
    const sortedArr = arr.slice(); // Create a copy of the array to preserve the original

    // Initialize variables for merge size, starting index, and merging process
    let mergeSize = 1;
    while (mergeSize < n) {
      let startIdx = 0;

      // Merge subarrays of size mergeSize
      while (startIdx < n) {
        // Calculate mid and end indices for the subarrays to merge
        const midIdx = Math.min(startIdx + mergeSize - 1, n - 1);
        const endIdx = Math.min(startIdx + 2 * mergeSize - 1, n - 1);

        // Merge the subarrays
        await merge(sortedArr, startIdx, midIdx, endIdx, updateArray);

        // Move to the next subarray
        startIdx += 2 * mergeSize;
      }

      // Double the merge size for the next iteration
      mergeSize *= 2;
    }

    return sortedArr;
  }

  async function merge(arr, startIdx, midIdx, endIdx, updateArray) {
    const leftHalf = arr.slice(startIdx, midIdx + 1);
    const rightHalf = arr.slice(midIdx + 1, endIdx + 1);

    let i = 0,
      j = 0,
      k = startIdx;

    // Merge the left and right halves into the original array
    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] <= rightHalf[j]) {
        await new Promise((resolve: any) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        await animateSwap(k, i);
        arr[k] = leftHalf[i];
        updateArray(arr);
        i++;
      } else {
        await new Promise((resolve: any) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        await animateSwap(k, j);
        arr[k] = rightHalf[j];
        updateArray(arr);
        j++;
      }
      k++;
    }

    // Copy the remaining elements of leftHalf, if any
    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      updateArray(arr);
      i++;
      k++;
    }

    // Copy the remaining elements of rightHalf, if any
    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      updateArray(arr);
      j++;
      k++;
    }
  }

  return mergeSort(arr);
}
