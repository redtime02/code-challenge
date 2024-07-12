// Method 1: Using a for loop
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Method 2: Using the formula for the sum of the first n natural numbers
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Method 3: Using recursion
function sum_to_n_c(n: number): number {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_c(n - 1);
}
