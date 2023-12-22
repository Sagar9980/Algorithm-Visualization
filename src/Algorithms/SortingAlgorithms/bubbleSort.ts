import { animateSwap, changeSortedColor } from "../../Animations/Animations";

export const bubbleSort = async (arr: number[], updateArray: any) => {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    let j = 0;
    for (j; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        await new Promise((resolve: any) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        await animateSwap(j, j + 1);

        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;

        updateArray(arr);
      }
    }
    changeSortedColor(j);
  }
  changeSortedColor(0);
  return arr;
};
