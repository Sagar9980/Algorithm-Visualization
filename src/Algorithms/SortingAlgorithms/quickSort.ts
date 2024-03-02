import { animateSwap } from "../../Animations/Animations";

async function swap(
  arr: number[],
  i: number,
  j: number,
  updateArray: any
): Promise<void> {
  await new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  await animateSwap(i, j);
  const temp: number = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  updateArray(arr);
}

async function partition(
  arr: number[],
  low: number,
  high: number,
  updateArray: any
) {
  const pivot: number = arr[high];
  let i: number = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      await swap(arr, i, j, updateArray);
    }
  }
  await swap(arr, i + 1, high, updateArray);
  return i + 1;
}

export async function quickSortAlogorithm(arr: number[], updateArray: any) {
  const stack: { low: number; high: number }[] = [];
  let low: number = 0;
  let high: number = arr.length - 1;

  stack.push({ low, high });

  while (stack.length) {
    const { low, high } = stack.pop()!;
    if (low < high) {
      const pivotIdx: any = await partition(arr, low, high, updateArray);

      // Push sub-arrays to stack for further partitioning
      if (pivotIdx - 1 > low) {
        stack.push({ low: low, high: pivotIdx - 1 });
      }
      if (pivotIdx + 1 < high) {
        stack.push({ low: pivotIdx + 1, high: high });
      }
    }
  }

  return arr;
}
