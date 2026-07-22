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

// 사용자 배열에서 활성 상태인 사용자 이름만 출력한다.
