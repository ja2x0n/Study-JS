// URL과 쿼리스트링
// 쿼리스트링은 URL 뒤에 붙는 검색 조건이나 페이지 정보를 표현한다.

// 문법
// const params = new URLSearchParams(location, search);

// const keyword = params.get("keyword") || "";
// const page = Number(params.get("page")) || 1;

// params.set("page", "2");
// const queryString = params.toString();

// 문제 1. ?page=2&keyword=react에서 페이지와 검색어를 읽는다. 페이지가 없으면 1을 사용한다.

const params = new URLSearchParams("?page=2&keyword=react");
const page = Number(params.get("page")) || 1;
const keyword = params.get("keyword") || "";

console.log(page, keyword);

// 상품 목록의 카테고리,정렬 방식, 페이지 번호를 쿼리스트링에서 읽는다
