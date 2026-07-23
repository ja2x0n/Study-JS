// 반복문
// 반복 횟수가 명확하면 for, 배열의 값을 순서대로 읽을 때는 for...of를 사용할 수 있다.

// 문법
// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

let sum = 0;
for (let i = 1; i <= 100; i += 1) {
    sum += i;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

// 실무 변형: 사용자 배열에서 활성 상태인 사용자 이름만 출력한다.
