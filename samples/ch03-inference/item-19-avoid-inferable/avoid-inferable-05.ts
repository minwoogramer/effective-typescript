function square(nums: number[]) {
  return nums.map((x) => x * x);
}
const squares = square([1, 2, 3, 4]); // Type is number[]
//입력받은 함수가 뭘 반환하는지 정확하게 알 고 있습니다.
