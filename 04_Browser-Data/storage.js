// localStorage와 sessionStogare
// localStorage는 브라우저를 닫아도 값이 유지되고, sessionStorage는 탭을 닫으면 값이 사라진다. 저장되는 값은 문자열이므로 객체는 JSON으로 변환한다.

// 문법
// localStorage.setItem("theme", "dark");
// const theme = localStorage.getItem("theme");
// localStorage.removeItem("theme");

// 문제 1. 사용자 객체를 localStorage에 저장하고 복원한다. 저장된 값이 없으면 null을 반환한다.

const user = {
    name: "재원",
    role: "학생",
};

localStorage.setItem("user", JSON.stringify(user));
const student = localStorage.getItem("user");
const restoredUser = student ? JSON.parse(student) : null;

console.log(restoredUser);

// 문제 2. 테마 설정이 없으면 light를 기본 값으로 사용한다.
const theme = localStorage.getItem("theme");
const defaultTheme = light;
const themeColor = theme ? JSON.parse(theme) : defaultTheme;

// 실무 변형: 로그인 시 토큰을 저장하고, 로그아웃 시 사용자 정보와 토큰을 모두 제거한다.
