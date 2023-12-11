import { animateSwap } from "../../Animations/Animations";

export const bubbleSort = async (arr: number[], updateArray: any) => {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
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
  }
  return arr;
};
