// 에러 처리
// 예외가 발생할 수 있는 코드는 try/catch로 처리한다. 직접 오류를 발생시킬 때는 throw new Error()를 사용한다.finally는 성공/실패와 관계없이 실행된다.

// 문법
try {
    if (!isValid) {
        throw new Error("잘못된 값입니다.");
    }
    console.log("성공");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("항상 실행");
}

// 문제 1. 나이가 0 이하이면 오류를 발생시키는 함수를 작성한다.
const validAge = (age) => {
    if (age <= 0) {
        throw new Error("나이는 1살 이상이어야 합니다.");
    }
    return true;
};

// 문제 2. 위 함수를 호출하고 오류 메세지를 안전하게 출력한다.

try {
    validAge(2);
    console.log("검증 성공");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("검증 종료");
}
