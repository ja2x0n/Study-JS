// Spread와 Rest
// Spread는 객체/배열을 펼쳐 새 값을 만들고, Rest는 나머지 값을 모은다.

// 문제 1. 중첩 객체의 도서만 서울로 변경하되 원본은 유지한다.

const user = {
    id: 1,
    name: "재원",
    profile: {
        city: "구미",
        school: "경북소프트웨어마이스터고",
    },
};

const user1 = { ...user, profile: { ...user.profile, city: "서울" } };

console.log(user1);

// 문제 2. 사용자 객체에서 비밀번호를 제외한 공개 정보만 만든다.

const person = {
    name: "재원",
    city: "구미",
    email: "js@gmail.com",
    password: "1234",
};

const { password, ...publicUser } = person;

console.log(publicUser);
