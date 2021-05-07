require('./sort');

let insertionSortArray = [5, 2, 4, 6, 1, 3];
console.log('The insertionSortArray ', Object.assign([], insertionSortArray), ' was sort in ', insertionSortArray.insertionSort());

let mergeSortArray = [2, 4, 5, 7, 1, 2, 3, 6];
console.log('The mergeSortArray ', Object.assign([], mergeSortArray), ' was sort in ', mergeSortArray.mergeSort());