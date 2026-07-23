// 스코프
// 변수는 선언된 위치에 따라 접근 가능한 범위가 결정된다. 함수 내부 변수는 함수 밖에서 접근할 수 없다.

// 문법

// const globalValue = "전역";
// function example() {
//     const localValue = "지역";
//     console.log(globalValue);
//     console.log(localValue);
// }

const value = "전역";

const example = () => {
    const value = "지역";
    console.log(value);
};

example();
console.log(value);

// 클로저
// 클로저는 내부 함수가 외부 함수의 변수를 기억하는 현상이다.

// 문법
// const outer = () => {
// const value = "기억하는 값";
// return const inner = () => return value;
// }

const createCounter = () => {
    let count = 0;

    return function increase() {
        count += 1;
        return count;
    };
};

const counter = createCounter();
console.log(counter());
console.log(counter());

// 실무 변형: 인증 토큰을 외부에서 직접 수정하지 못하게 숨기고, 저장 조회 함수만 제공한다
