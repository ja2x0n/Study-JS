// 변수와 자료형
// const는 재할당하지 않는 값, let은 이후 값이 바뀔 수 있는 값에 사용한다. 객체와 배열도 const로 선언할 수 있으며, 이 경우 변수에 다른 객체를 다시 넣을 수 없다는 뜻이다.

// 문법
// const name = "재원";
// let score = 80;
// score = 90;

// 문제 1
const name = "재원";
const age = 18;
const isLoggedIn = true;
let cartCount = 2;

// 템플릿 리터럴을 사용하면 변수 값을 문자열 안에 삽입할 수 있다.
console.log(`${name}은 ${age}세이며 장바구니에는 ${cartCount}개가 있습니다.`);

// typeof 연산자는 변수의 자료형을 확인한다.
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof cartCount);

// API 응답의 username,point,isAdmin을 각각 적절한 변수에 저장하고 출력한다.
