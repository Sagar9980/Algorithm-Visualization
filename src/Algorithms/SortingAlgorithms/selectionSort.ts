import { animateSwap, changeSortedColor } from "../../Animations/Animations";

export const selectionSort = async (arr: number[], updateArray: any) => {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j <= n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    await new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    await animateSwap(i, minIndex);
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    updateArray(arr);
    changeSortedColor(i);
  }
  changeSortedColor(n);

  return arr;
};
