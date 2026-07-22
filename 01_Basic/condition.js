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

// 로그인 여부와 이용권 보유 여부를 확인해 동영상 재생 가능 여부를 출력한다.
