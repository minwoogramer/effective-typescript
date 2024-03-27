/**
 * @notice ITEM12 - 함수 표현식에 타입 적용하기
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types
 */
//1.자바스크립트와 타입스크립트는 함수 문장(statement)과 함수 표현식(expression)을 다르게 인식합니다.
//more description pls
//desc: 함수 문장은 함수 선언식으로 선언하고 함수 표현식은 함수 표현식으로 선언합니다.
//함수 문장: function rollDice_1(sides: number): number { return 0; } // Statement
//함수 표현식: const rollDice_2 = function (sides: number): number { return 0; }; // Expression

function rollDice_1(sides: number): number {
  /* COMPRESS */ return 0; /* END */
} // Statement
const rollDice_2 = function (sides: number): number {
  /* COMPRESS */ return 0; /* END */
}; // Expression
const rollDice_3 = (sides: number): number => {
  /* COMPRESS */ return 0; /* END */
}; // Also expression

/* 타입스크립트는 함수 표현식 사용을 권장합니다. */
//2.함수 타입으로 선언하면 재사용이 가능합니다.
//- 함수의 매개 변수부터 반환값까지 타입을 선언
// 장점
// 1.불필요한 코드의 반복을 줄여줍니다.
// 2.안정적입니다.
// 3.반복되는 함수 시그니처를 통합할 수 있습니다.
// 단점
// 1.타입스크립트의 타입 추론을 활용하지 못합니다.
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

//Example

declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;

const checkedFetch: typeof fetch = async (input, init) => {
  //실제로는 인자 타입이 추론되지 않음 *
  //각 파라미터별로 선언해줘야함
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};
/**
 * @notice ITEM13 - 타입과 인터페이스 차이점 알기
 */
//명명된 타입을 정의하는 방법은 두가지.
//1. Type
//2  Interface
//두가지의 공통점 및 차이점을 알아보자

//1. Type
type TState = {
  name: string;
  capital: string;
};
//2. Interface
interface IState {
  name: string;
  capital: string;
}
//**********공통점**********
//1. 정의 상태(state)에는 차이가 없습니다.(타입과 인터페이스 모두 객체를 정의할 수 있습니다.)
//2. 인덱스 시그니쳐를 사용할 수 있습니다.(인덱스 시그니쳐란? : description url => https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
// 때로는 유형 속성의 모든 이름을 미리 알지 못하지만 값의 모양은 알고 있는 경우도 있습니다.
// 이러한 경우 인덱스 서명을 사용하여 가능한 값의 유형을 설명할 수 있습니다.
// Books description
// - 단순한 함수 타입은 타입 별칭이 더 나은 선택이지만
// - 추가적인 속성이 있다면 타입이나 인터페이스 어떤 것을 선택하든 상관없습니다.
//Example
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = (x) => "" + x; // OK
const toStrI: IFn = (x) => "" + x; // OK
//Generic
//타입과 인터페이스 모두 제네릭을 사용할 수 있습니다.

type TPair<T> = {
  first: T;
  second: T;
};
interface IPair<T> {
  first: T;
  second: T;
}
//Extending
//타입은 확장할 수 없지만 인터페이스는 확장할 수 있습니다.
//클래스를 Implements 할 시에는 타입과 인터페이스를 모두 사용이 가능합니다.
type TState1 = {
  name: string;
  capital: string;
};

interface IState1 {
  name: string;
  capital: string;
}

interface IStateWithPop extends TState1 {
  population: number;
}

type TStateWithPop = IState1 & { population: number };
//**********차이점**********
//1.인터페이스는 유니온과 같은 복잡한 타입은 확장할 수 없습니다.
//타입은 타입 식별자이다.(타입식별자란? : description url => https://www.typescriptlang.org/docs/handbook/2/objects.html#type-identifiers)
//타입을 확장하고 싶다면, 타입과 & 를 사용해야 합니다.
//아래와 같은 타입은 확장 불가
type Input = {
  /* ... */
};
type Output = {
  /* ... */
};

type NamedVariable = (Input | Output) & { name: string };
/** 일반적으로 type 키워드가 쓰임새가 많습니다.
type 은 유니온이 될 수도 있습니다.
매핑된 타입과 조건부 타입과 같은 고급 기능 활용이 가능합니다. */
//2.인터페이스는 선언 병합(declaration merging)이 가능합니다.
//인터페이스는 같은 이름으로 여러 번 선언할 수 있습니다.(보강)
interface IState {
  name: string;
  capital: string;
}
interface IState {
  population: number;
}
const hanam: IState = {
  name: "hanam",
  capital: "hanam",
  population: 500_000,
};
/**ITEM 14 - 연산과 제너릭 사용으로 반복 줄이기 */
//1. DRY 원칙을 따르는 것이 좋습니다.
//2. 타입에 이름을 붙여 반복을 피하고, 인터페이스에 필드 반복을 피합시다.
//3. typeof, keyof, 인덱싱, 매핑 타입을 학습하여 줄일 수 있습니다.
//4. 제너릭 타입을 함수와 같습니다.
//5. extends 를 사용하여 타입을 지정하여 좁힐 수 있습니다.(https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

/**ITEM 15 - 동적 데이터에 인덱스 시그니처 사용하기 */
//1. 자바스크립트 객체는 문자열 키를 타입 값에 관계 없이 매핑합니다.(more description: https://www.typescriptlang.org/docs/handbook/2/objects.html#indexable-types)
//- 인덱스 시그니처로 유연하게 매핑 할 수 있습니다.
type Rocket = { [property: string]: string }; // 인덱스 시그니처
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1.0",
  thrust: "4,940 kN",
}; // OK
//단점
// 모든 키를 허용합니다.
// 특정 키가 필요하지 않습니다.
// ‘키’마다 다른 타입이 됩니다.
// 키는 an엇이든 가능하므로 자동 완성 기능이 동작하지 않습니다. ⇒ 즉, 부정확합니다.

//대안 1 - Interface 활용
interface Row1 {
  [column: string]: number;
} // Too broad
interface Row2 {
  a: number;
  b?: number;
  c?: number;
  d?: number;
} // Better
type Row3 =
  | { a: number }
  | { a: number; b: number }
  | { a: number; b: number; c: number }
  | { a: number; b: number; c: number; d: number };
//대안 2 - Record 활용
type Vec3D = Record<"x" | "y" | "z", number>;
// Type Vec3D = {
// x: number;
// y: number;
// z: number;
// }
//대안 3 - Mapping된 타입 사용하기
type Vec3D2 = { [k in "x" | "y" | "z"]: number };
// Same as above
type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };
// Type ABC = {
// a: number;
// b: string;
// c: number;
// }
/**ITEM 16 - number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기 */
//자바스크립트는 암시적 타입 강제로 악명 높습니다.
// → 대부분 === , ≠= 를 사용해서 해결 가능합니다.
//배열의 인덱스
//배열은 string 타입의 인덱스로 접근 가능합니다. → Object.keys를 이용하면 키자 문자열로 출력됩니다!
//Declare Array Type
//인덱스 시그니처가 number 표현된다면 입력 값이 number 여야함을 의미합니다.
// 하지만 실제 런타임에서 사용되는 키는 string 입니다.
// 실제 런타입에서 사용되는 키와 인덱스 시그니처가 다른이유는 무엇일까요?
// → 배열은 객체이기 때문입니다.
//출처 : https://pozafly.github.io/javascript/array-is-object/
// 객체이기 때문에 배열의 인덱스는 문자열로 변환됩니다.
// 객체에서 배열의 인덱스가 문자열로 변환되는 이유는 무엇일까요?
// → 객체의 키는 문자열이기 때문입니다.
// 출처:https://ko.javascript.info/object

interface Array<T> {
  // ...
  [n: number]: T;
}
// 배열은 객체이므로 키는 숫자가 아니라 문자열
// 인덱스 시그니처는 number보다 Array, 튜플, ArrayLike 타입 사용하기
//Array
type TArr = string[];
//Tuple
type TTuple = [string, number];
//ArrayLike
type TArrLike = { length: number; [n: number]: string };
