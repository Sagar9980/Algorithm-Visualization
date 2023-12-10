import {
  animatePointers,
  animateResultElement,
} from "../../Animations/Animations";
import { checkEquality } from "../../Utils/checkEquality";

export const binarySearch = async (
  arr: number[],
  k: string,
  lb: number,
  ub: number,
  recursionDepth: number = 0
) => {
  await new Promise((resolve: any) => {
    setTimeout(() => {
      if (ub >= lb) {
        let mid = Math.floor((lb + ub) / 2);
        animatePointers("a-pointer-lb", lb);
        animatePointers("a-pointer-mid", mid);
        animatePointers("a-pointer-ub", ub);
        if (checkEquality(arr[mid], k)) {
          animateResultElement(mid);
          resolve(mid);
          return mid;
        }
        if (arr[mid] > parseInt(k)) {
          return binarySearch(arr, k, lb, mid - 1, recursionDepth + 1);
        } else if (arr[mid] <= parseInt(k))
          return binarySearch(arr, k, mid + 1, ub, recursionDepth + 1);
        else resolve(-1);
      }
    }, 1000 * recursionDepth);
  });
};
