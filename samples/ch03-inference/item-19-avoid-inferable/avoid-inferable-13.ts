interface Product {
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
const elmo: Product = {
  name: "Tickle Me Elmo",
  id: "048188 627152",
  price: 28.99,
};
//객체리러럴을 사용할때는 타입을 추론할 수 있지만
//잉여속성체크가능
//잉여속성 체크는 오타를 잡는데 용이합니다.
