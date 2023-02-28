function myMax(array) {
  let max;

  for (i = 0; i < array.length; i++) {
    if (array[i] > max || max === undefined) {
      max = array[i];
    }
  }

  return max;
}

function myMin(array) {
  let min;

  for (i = 0; i < array.length; i++) {
    if (array[i] < min || min === undefined) {
      min = array[i];
    }
  }

  return min;
}

function myAverage(array) {
  let total = 0;

  for (i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length;
}
