// 스코프
const value = "전역";

const example = () => {
    const value = "지역";
    console.log(value);
};

example();
console.log(value);

// 클로저
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

// 인증 토큰을 외부에서 직접 수정하지 못하게 숨기고, 저장 조회 함수만 제공한다
