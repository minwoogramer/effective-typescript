function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
//함수가 매개변수를 변경하지 않는다면 readonly를 사용하는 것이 좋습니다.
