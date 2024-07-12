// Method 1: Using a for loop
var sum_to_n_a1 = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Method 2: Using the formula for the sum of the first n natural numbers
var sum_to_n_b2 = function (n) {
  return (n * (n + 1)) / 2;
};

// Method 3: Using recursion
var sum_to_n_c3 = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_c3(n - 1);
};
