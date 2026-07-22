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
