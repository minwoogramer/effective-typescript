//readonly 선언이 []에만 적용이 되기 때문에 배열 안에 있는 요소들은 변경이 가능합니다.

//데이트 자체를 변경하는것은 가능합니다.
const dates: readonly Date[] = [new Date()];
dates.push(new Date());
// ~~~~ Property 'push' does not exist on type 'readonly Date[]'
dates[0].setFullYear(2037); // OK
