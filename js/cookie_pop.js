/*
문자열.index0f('찾을문자열') : 전체문자열에서 찾을 문자열이 위치해있는 순서값 반환, 만약 전체문자열에서 찾을 문자열이 없으면 -1을 반환

1.모달의 닫기 버튼 클릭시 모달 안보이게 하기
2. 체크박스 선택하 뒤 닫기버튼 클릭시 모달 안보이게 함과 동시에 today=done쿠키를 하루 만료 기한 생성
3.스크립트가 처음 로딩될 때 조건문으로 today=done이라는 쿠키가 있으면 팝업 안보이게 처리 없으면 보기에 처리
*/

const [btnView, btnSet, btnDel] = document.querySelectorAll("button");
const modal = document.querySelector('aside');
const btnClose = modal.querySelector('button')
const ck = modal.querySelector('#ck')

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
});

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
});

//단기 버튼 클릭시 모달 안보이게 처리
btnClose.addEventListener('click',()=>{
	modal.style.display = 'none';
})

//쿠키 생성 함수
function setCookie(name, value, day) {
	let now = new Date();
	//아래와 같이 getTime으로 현재 시간값을 가져와서 초단위로 값을 변경하면, 잘못된 날짜 정보로 만료일 설정을 예방
	let duedate = now.getTime() + day * 1000 * 60 * 60 * 24;
	//쿠키값은 화면 새로고침되어야지만 갱신된값이 반영
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}
