// Promise
// Promise는 아직 완료되지 않은 비동기 작업의 결과를 표현한다. 상태는 대기,성공,실패 중 하나다.

// 문법
// const promise = new Promise((resolve, reject) => {
//     const isSuccess = true;

//     if (isSuccess) {
//         resolve("성공");
//     } else {
//         reject(new Error("실패"));
//     }
// });

// promise
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error.message));

// 문제 1. 지정한 시간 뒤에 완료를 반환하는 delay 함수를 작성한다

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("완료");
        }, ms);
    });
};

// 문제 2. 이메일과 비밀번호가 맞으면 사용자 객체를 성공 처리하고, 틀리면 실패 처리하는 Promise를 작성한다

const user = {
    email: "test@gmail.com",
    password: "1234",
};

const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        const isSuccess = email === "test@gmail.com" && password === "1234";

        if (isSuccess) {
            resolve({ email });
        } else {
            reject(new Error("이메일 또는 비밀번호가 올바르지 않습니다."));
        }
    });
};

// 실무 변형: 파일 업로드 성공 시 파일 URL을 반환하고 실패 시 오류를 발생시키는 Promise를 작성한다.
