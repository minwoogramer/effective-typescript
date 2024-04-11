function arraySum(arr: readonly number[]) {
  const a = [...arr];
  let sum = 0,
    num;
  while ((num = a.pop()) !== undefined) {
    // ~~~ 'pop' does not exist on type 'readonly number[]'
    sum += num;
  }
  return sum;
}
