import { animateSwap, fillArray } from "../../Animations/Animations";
import { selectionSort } from "./selectionSort";

// export function mergeSortAlgorithm(arr: number[], updateArray: any) {
//   async function mergeSort(arr) {
//     const n = arr.length;
//     const sortedArr = arr.slice();

//     let mergeSize = 1;
//     while (mergeSize < n) {
//       let startIdx = 0;

//       while (startIdx < n) {
//         const midIdx = Math.min(startIdx + mergeSize - 1, n - 1);
//         const endIdx = Math.min(startIdx + 2 * mergeSize - 1, n - 1);

//         await merge(sortedArr, startIdx, midIdx, endIdx, updateArray);

//         startIdx += 2 * mergeSize;
//       }

//       mergeSize *= 2;
//     }

//     return sortedArr;
//   }

//   async function merge(arr, startIdx, midIdx, endIdx, updateArray) {
//     const leftHalf = arr.slice(startIdx, midIdx + 1);
//     const rightHalf = arr.slice(midIdx + 1, endIdx + 1);

//     let i = 0,
//       j = 0,
//       k = startIdx;

//     while (i < leftHalf.length && j < rightHalf.length) {
//       if (leftHalf[i] <= rightHalf[j]) {
//         await new Promise((resolve: any) => {
//           setTimeout(() => {
//             resolve();
//           }, 1000);
//         });
//         await animateSwap(k, i);
//         arr[k] = leftHalf[i];
//         updateArray(arr);
//         i++;
//       } else {
//         await new Promise((resolve: any) => {
//           setTimeout(() => {
//             resolve();
//           }, 1000);
//         });
//         await animateSwap(k, j);
//         arr[k] = rightHalf[j];
//         updateArray(arr);
//         j++;
//       }
//       k++;
//     }

//     while (i < leftHalf.length) {
//       arr[k] = leftHalf[i];
//       updateArray(arr);
//       i++;
//       k++;
//     }

//     while (j < rightHalf.length) {
//       arr[k] = rightHalf[j];
//       updateArray(arr);
//       j++;
//       k++;
//     }
//   }

//   return mergeSort(arr);
// }

export function mergeSortAlgorithm(arr: number[], updateArray: any) {
  function mergeSort(arr: number[]) {
    if (arr.length > 1) {
      const mid = Math.floor(arr.length / 2);
      const leftHalf = arr.slice(0, mid);
      const rightHalf = arr.slice(mid);

      mergeSort(leftHalf);
      mergeSort(rightHalf);

      merge(arr, leftHalf, rightHalf);
      return arr;
    }
  }

  async function merge(
    arr: number[],
    leftHalf: number[],
    rightHalf: number[]
  ): Promise<void> {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
      await new Promise((resolve: any) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      if (leftHalf[i] < rightHalf[j]) {
        arr[k] = leftHalf[i];
        fillArray(k, leftHalf[i]);
        i++;
      } else {
        arr[k] = rightHalf[j];
        fillArray(k, rightHalf[j]);
        j++;
      }
      k++;
    }

    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      fillArray(k, leftHalf[i]);
      i++;
      k++;
    }

    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      fillArray(k, rightHalf[j]);
      j++;
      k++;
    }
  }

  return mergeSort(arr);
}
