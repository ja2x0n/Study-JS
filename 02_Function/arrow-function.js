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

// 상품 객체를 받아 농구화 - 50,000원 형태로 반환한다
