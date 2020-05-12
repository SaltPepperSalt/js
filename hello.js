function bubbleSort(array) {
  const { length } = array;
  let change = 0;
  for (let j = 0; j < length - 1; j++) {
    for (let i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        change = array[i];
        array[i] = array[i + 1];
        array[i + 1] = change;
      }
    }
  }
  return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3]));// [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));// [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
