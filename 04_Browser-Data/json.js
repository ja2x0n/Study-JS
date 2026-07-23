// JSON
// JSON은 객체를 문자열로 저장하거나 전송할 때 사용하는 형식이다. 객체를 문자열로 바꿀 때 JSON.stringify,문자열을 객체로 복원할 때 JSON.parse를 사용한다.

// 문법
// const json = JSON.stringify(user);
// const parsed = JSON.parse(json);

// 문제 1. 사용자 객체를 JSON 문자열로 저장한 뒤 다시 객체로 복원한다.

const user = {
    name: "재원",
    role: "student",
};

const jsonUser = JSON.stringify(user);
console.log(jsonUser);

const parsedUser = JSON.parse(jsonUser);
console.log(parsedUser);

// 문제 2. 잘못된 JSON 문자열을 파싱할 때 프로그램이 종료되지 않도록 처리한다.

const invalidJson = "{ name: 재원 }";

try {
    const data = JSON.parse(invalidJson);
} catch (error) {
    console.log("JSON 형식이 올바르지 않습니다.");
}

// 실무 변형: 서버에서 받은 JSON 문자열을 파싱하고, 실패하면 기본 객체를 반환하는 함수를 작성한다.
