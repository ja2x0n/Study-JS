// Truthy와 Falsy
// 조건문에서는 값이 자동으로 참 또는 거짓처럼 평가된다

// Falsy 값:
// false
// 0
// ""
// null
// undefined
// Nan

const nickname = "아";

// X
if (nickname === false) {
    console.log("익명 사용자");
} else {
    console.log(nickname);
}

// O
const displayName = nickname || "익명 사용자";

console.log(displayName);

// 실무변형: API 응답의 프로필 이미지 주소가 없으면 기본 이미지 주소를 사용한다
