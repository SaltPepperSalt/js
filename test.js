function binarySearch(array, target) {
  const { length } = array;
  let start = 0;
  let last = length - 1;
  let mid = 0;
  let result = -1;
  mid = Math.floor((start + last) / 2);
  while (start <= last) {
    if (array[mid] === target) {
      result = mid;
      break;
    }
    if (target > array[mid]) {
      start = mid + 1;
      mid -= start + last;
    } else if (target < array[mid]) {
      last = mid - 1;
      
      mid += last - start;
    }
  }
  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1