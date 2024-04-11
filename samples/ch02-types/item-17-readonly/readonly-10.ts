interface Outer {
  inner: {
    x: number;
  };
  [x: string]: any;
}
const o: Readonly<Outer> = { inner: { x: 0 }, a: 10, b: 20 };
o.inner = { x: 1 };
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o.inner.x = 1; // OK
o.a = 30; // readonly이기 때문에 변경이 불가능합니다.
