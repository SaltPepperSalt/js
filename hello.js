function insertionSort(array) {
  const { length } = array;
  for (let j = 0; j < length - 1; j++) {
    for (let i = j + 1; i >= 0; i--) {
      if (array[i - 1] > array[i]) {
        let change = 0;
        change = array[i - 1];
        array[i - 1] = array[i];
        array[i] = change;
      }
    }
  }
  return array;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]