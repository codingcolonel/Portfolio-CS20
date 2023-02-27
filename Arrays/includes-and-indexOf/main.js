function myIncludes(array, item) {
  // Test if the provided item is in the provided array
  for (i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return true;
    }
  }
  return false;
}

function myIndexOf(array, item) {
  // Test if the provided item is in the provided array and determine the index position of the provided item
  for (i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
}
