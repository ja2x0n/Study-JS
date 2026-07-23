// 요청 취소
// 컴포넌트가 사라지거나 새 검색 요청이 시작되면 이전 요청을 취소할 수 있다.

// 문법
// const controller = new AbortController();

// fetch("/api/posts", {
//     signal: controller.signal,
// });

// controller.abort();

function fetchUsersWithCancel() {
    const controller = new AbortController();

    const request = fetch("/api/users", {
        signal: controller.signal,
    });

    return {
        request,
        cancel: () => controller.abort(),
    };
}
