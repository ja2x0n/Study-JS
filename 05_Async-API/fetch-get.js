// fetch GET 요청
// fetch는 네트워크 요청을 보내고 Response 객체를 반환한다. HTTP 오류는 자동으로 예외가 되지 않으므로 response.ok를 직접 확인한다.

// 문법
// const getPosts = async () => {
// const response = await fetch("/api/posts");

// if(!response.ok) {
//   throw new Error("게시글 조회 실패");
// }
// return response.json();
// }

// 문제 1. 사용자 목록을 가져와 반환한다.
const getUsers = async () => {
    const response = await fetch("/api/users");
    return response.json();
};

// 문제 2. 사용자 목록을 가져온 뒤 이름만 반환한다. 오류는 호출한 곳에서 처리할 수 있도록 다시 던진다.

const fetchUsers = async () => {
    try {
        const users = await getUsers();
        return users.map((user) => user.name);
    } catch (error) {
        console.error("사용자 가공 실패");
        throw error;
    }
};
