// 비교와 조건문
// 조건문은 값에 따라 다른 코드를 실행한다. 일치 비교에는  ===, 불일치 비교에는 !==를 기본으로 사용한다.

// 문법
// if (score >= 60) {
// console.log("합격");
// } else {
//   console.log("불합격");
// }

// 논리 연산자 :
// &&: 모든 조건이 참
// ||: 하나 이상 참
// !: 참과 거짓 반전

// 문제 1
const score = 75;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 문제 2
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("관리자 페이지");
} else {
    console.log("권한이 없습니다.");
}

// 실무 변형: 로그인 여부와 이용권 보유 여부를 확인해 동영상 재생 가능 여부를 출력한다.
