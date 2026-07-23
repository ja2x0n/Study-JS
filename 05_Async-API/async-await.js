// async/await
// async 함수는 Promise를 반환한다. await은 Promise가 완료될 때까지 해당 함수의 실행을 잠시 멈춘다.

// 문법
// const loadData = async () => {
//     try {
//         const result = await getData();
//         return result;
//     } catch (error) {
//         console.error(error.message);
//     } finally {
//         console.log("작업 종료");
//     }
// };

// 문제 1. delay를 이용해 1초 후 작업 완료를 반환하는 함수를 작성한다.

const runTask = async () => {
    await delay(1000);
    return "작업 완료";
};

// 문제 2. 가짜 로그인 함수를 try/catch/finally로 호출한다
const login = async () => {
    try {
        const user = await login("test@gmail.com", "12345678");
        console.log(user);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("작업 완료");
    }
};

// 실무 변형: 로딩 상태를 true로 바꾼 뒤 요청하고, 마지막에 다시 false로 바꾸는 흐름을 작성한다.
