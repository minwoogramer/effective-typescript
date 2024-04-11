interface Product {
  id: number;
  name: string;
  price: number;
}

//아래 프로덕트 인터페이스를 변경할경우에 아래에서 에러가 날껍니다.
function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
//아래처럼하면 훨씬더 간결해집니다.

function logProduct2({ id, name, price }: Product) {
  console.log(id, name, price);
}
