const a: number[] = [1, 2, 3];
//readonly number[]는 일반 number[]에 할당할 수 있습니다
const b: readonly number[] = a;
// 일반 number[]는 readonly number[]에 할당할 수 없습니다
const c: number[] = b;
// ~ Type 'readonly number[]' is 'readonly' and cannot be
//   assigned to the mutable type 'number[]'
