// 화살표 함수
// 화살표 함수는 함수를 간결하게 작성하는 문법이다.배열 메서드 콜백과 React 이벤트 핸들러에서 자주 사용한다.

// 문법
// const double = (number) => {
// number * 2;
// }

const user = {
    name: "재원",
    role: "프론트엔드 개발자",
};

const hello = (user) => {
    console.log(
        `안녕하세요. 저는 ${user.role}를 맡고 있는 ${user.name}입니다.`
    );
};

hello(user);

// 실무 변형: 상품 객체를 받아 농구화 - 50,000원 형태로 반환한다
