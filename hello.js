function selectionSort(array) {
  let index = 0;
  let change = 0;
  const { length } = array;
  for (let j = 0; j < length - 1; j++) {
    let min = array[j];
    for (let i = j; i < length; i++) {
      if (min > array[i]) {
        min = array[i];
        index = i;
      }
    }
    change = array[j];
    array[j] = array[index];
    array[index] = change;
  }

  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]