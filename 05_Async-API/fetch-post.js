// fetch POST 요청

// 문법
// const createPost = async () => {
//     const response = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//     });

//     if (!response.of) {
//         throw new Error("게시글 작성 실패");
//     }
//     return response.json();
// };

// 문제 1. 회원가입 정보를 JSON으로 전송하고 생성된 사용자를 반환한다.
const createUser = async (user) => {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("회원가입 실패");
    }

    return response.json();
};

// 실무 변형: 게시글 작성, 상품 수정, 회원 탈퇴 요청 함수를 각각 작성한다.
