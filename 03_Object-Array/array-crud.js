// 배열 CRUD

const products = [
    { id: 1, name: "농구화", price: 50000, stock: 3 },
    { id: 2, name: "양말", price: 10000, stock: 0 },
    { id: 3, name: "티셔츠", price: 30000, stock: 5 },
];

// 문제 1. 새 상품을 추가한다

const Item = { id: 4, name: "축구화", price: 60000, stock: 2 };

const addItem = {
    ...products,
    Item,
};

console.log(addItem);

// 문제 2. id가 2인 상품을 삭제한다.

const filterItem = products.filter((products) => products.id != 2);
console.log(filterItem);

// 문제 3. id가 3인 상품 가격을 35000원으로 수정한다.

const updateProducts = products.map((products) =>
    products.id === 3 ? { ...products, price: 35000 } : products
);

console.log(updateProducts);
