// tests/merge_sort.test.js

const mergeSort = require('../merge_sort');

describe('Merge Sort Tests', () => {

  test('Empty array should return empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('Single element array should return same array', () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test('Already sorted array should return same array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Reverse sorted array should return sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Array with duplicates should return sorted array', () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  test('Large array should be sorted correctly', () => {
    const largeArray = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000)
    );

    const sortedArray = [...largeArray].sort((a, b) => a - b);

    expect(mergeSort(largeArray)).toEqual(sortedArray);
  });

});