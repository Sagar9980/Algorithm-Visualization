import {
  animatePointers,
  animateResultElement,
} from "../../Animations/Animations";
import { checkEquality } from "../../Utils/checkEquality";

export const linearSearch = async (arr: number[], k: string) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve: any) => {
      setTimeout(() => {
        if (checkEquality(arr[i], k)) {
          index = i;
          animateResultElement(i);
        }
        animatePointers("a-pointer-lb", i);
        resolve(); // Resolve the Promise to continue to the next iteration
      }, i * 100);
    });
    if (index !== -1) {
      break; // Exit the loop if the element is found
    }
  }
  return index;
};
