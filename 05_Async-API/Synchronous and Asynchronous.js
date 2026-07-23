// 동기와 비동기
// 동기 코드는 위에서 아래로 순서대로 실행된다.
// 비동기 작업은 결과를 기다리는 동안 다른 작업을 진행할 수 있다.
// 네트워크 요청,타이머,파일 작업이 대표적이다

// 문법
// console.log("시작");

// setTimeout(() => {
//     console.log("비동기 작업 완료");
// }, 1000);
// console.log("다음 작업");

// 문제 1. 실행 순서를 예상한 뒤 확인한다.

console.log("A");
setTimeout(() => {
    console.log("B");
});
console.log("C");

// A -> C -> B
