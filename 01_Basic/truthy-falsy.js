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

// API 응답의 프로필 이미지 주소가 없으면 기본 이미지 주소를 사용한다
