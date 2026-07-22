// 배열 핵심 메서드(중요)
// 다음 데이터를 사용한다

const products = [
    { id: 1, name: "농구화", price: 50000, stock: 3 },
    { id: 2, name: "양말", price: 10000, stock: 0 },
    { id: 3, name: "티셔츠", price: 30000, stock: 5 },
];

// map: 각 요소를 변환해 새 배열을 만든다.
// 문제 1. 상품 이름만 배열로 만든다.

const productsName = products.map((products) => products.name);
console.log(productsName);

// filter: 조건에 맞는 요소만 남긴다.
// 문제 2. 재고가 있는 상품만 남긴다.

const productsStock = products.filter((products) => products.stock > 0);
console.log(productsStock);

// find: 조건에 맞는 첫 번째 요소를 찾는다.
// 문제 3. id가 2인 상품을 찾는다.

const productsId = products.find((products) => products.id === 2);
console.log(productsId);

// some,every: 하나라도 조건을 만족하는지, 모두 만족하는지 확인한다.
// 문제 4. 품절 상품이 있는지와 모든 상품 가격이 양수인지 확인한다.

const productsSome = products.some((products) => products.stock > 0);
console.log(productsSome);

const productsEvery = products.every((products) => products.price > 0);
console.log(productsEvery);

// reduce: 배열을 하나의 값으로 누적한다.
// 전체 재고 수와 전체 재고 가치를 계산한다.

// 문제 5. 전체 재고 수와 전체 재고 가치를 계산한다
const productsReduce1 = products.reduce((sum, products) => {
    return sum + products.stock;
}, 0);

console.log(productsReduce1);

const productsReduce2 = products.reduce((sum, products) => {
    return sum + products.price * products.stock;
}, 0);

console.log(productsReduce2);

// sort: sort는 원본을 변경하므로 복사 후 사용한다.
// 문제 6. 가격 오름차순으로 정렬하되 원본은 유지한다.

const productsSort = products.sort((a, b) => a.price - b.price);
console.log(productsSort);
