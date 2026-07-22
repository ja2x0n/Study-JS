// 문제 1
const applyOperation = (a, b, operation) => {
    return operation(a, b);
};

const result = applyOperation(10, 5, (a, b) => a - b);
console.log(result);

// 문제 2
const login = (email, password, onSuccess, onFailure) => {
    const valid = email === "test@test.com" && password === "12345678";

    if (valid) {
        onSuccess({ email });
    } else {
        onFailure("아이디 또는 비밀번호가 일치하지 않습니다");
    }
};

login(
    "test@test.com",
    "12345678",
    () => {
        console.log("로그인 성공");
    },
    () => {
        console.log("로그인 실패");
    }
);

// 파일 업로드 성공/실패 콜백을 받는 함수를 작성한다
