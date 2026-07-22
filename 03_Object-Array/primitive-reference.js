// 원시타입과 객체타입
// 객체와 배열은 참조값을 가진다. 같은 객체를 다른 변수에 대입하면 두 변수가 같은 대상을 가리킨다.

// 문제 1. 아래 코드에서 원본까지 바뀌는 이유를 설명하고 원본을 유지하는 코드로 수정한다.

const user = { name: "재원", age: 18 };
console.log(user);
// const copiedUser = user;
// copiedUser.age = 19;

const copiedUser = { ...user, age: 19 };

console.log(copiedUser);

// 실무 변형: 로그인 사용자 객체에서 이름만 변경한 새 객체를 만든다.
