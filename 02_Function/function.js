// 함수
// 함수는 입력값을 받아 작업을 수행하고 결과를 반환한다. 함수 작성 전에는 이름, 입력값, 반환값, 예외 조건을 먼저 정한다.

// 문법
// function calculateTotal(price, count) {
//   return price * count;
// }

function calcuratePrice(count, price) {
    totalPrice = count * price;
    if (count * price >= 100000) {
        totalPrice = count * price;
        totalPrice = totalPrice * 0.9;
    } else {
        totalPrice = count * price;
    }
    console.log(totalPrice);
}

calcuratePrice(11, 10000);

// 실무 변형: 상품 가격, 수량, 할인율을 받아 최종 결제 금액을 계산한다.
