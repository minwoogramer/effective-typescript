function arraySum(arr: number[]) {
  const a = [...arr];
  let sum = 0,
    num;
  while ((num = a.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
//
