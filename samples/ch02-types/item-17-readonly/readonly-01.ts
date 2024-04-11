function arraySum(arr: number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
function printTriangles(n: number) {
  const nums: number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}
//본 기댓값 = 0 ,1 ,3 ,6 ,10
//실행결과 = 0 ,1 ,2 ,3 ,4

/*

1회차:
i = 0
nums = [0]
sum = 0
nums = []

2회차:
i = 1
nums = [1]
sum = 1
nums = []

*/
