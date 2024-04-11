//인덱스시크니쳐를 만들어 readonly 속성을 추가할 수 있지만
//값을 추가하는건 안됩니다.
let obj: { readonly [k: string]: number } = {};
// Or Readonly<{[k: string]: number}
//값추가는 안됌
obj.hi = 45;
//  ~~ Index signature in type ... only permits reading
//처음부터 설정하는건 ok
obj = { ...obj, hi: 12 }; // OK
obj = { ...obj, bye: 34 }; // OK
