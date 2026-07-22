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

// 상품 가격, 수량, 할인율을 받아 최종 결제 금액을 계산한다.
