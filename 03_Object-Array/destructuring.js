// 구조 분해 할당
// 객체나 배열에서 필요한 값을 변수로 꺼내는 문법이다.

// 문제 1. 사용자 객체에서 이름과 이메일을 꺼내고, 함수 매개변수에서도 구조분해를 사용한다.

const user = {
    name: "재원",
    email: "javascript@gmail.com",
    password: "12345678",
};

const { name, email } = user;
console.log(user);

const user1 = ({ name, email }) => {
    console.log(`${name}님의 이메일은 ${email}입니다.`);
};

user1(user);

// 실무 변형: API 응답에서 data,message,status를 구조 분해한다.
