import { animateSwap } from "../../Animations/Animations";

// export const bubbleSort = async (arr: number[]) => {
//   let len = arr.length - 1;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i; j++) {
//       await new Promise((resolve: any) => {
//         setTimeout(() => {
//           if (arr[j] > arr[j + 1]) {
//             console.log(arr[j], arr[j + 1], "swap array");
//             let temp = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = temp;
//             animateSwap(j, j + 1);
//           }
//         }, j * 1100); // Use a constant delay for each animation step
//       });
//     }
//   }
//   return arr;
// };

