// 1. Event 실습1

document.getElementById("myTA").addEventListener("click", function(){
    document.getElementById("myTAnlc").innerText = "취소";
    document.getElementById("myTAnlc").addEventListener("click", function(){
    	document.getElementById("myTAnlc").innerText = "메뉴";
    });
});



// 2. Event 실습2

// document.getElementById("headTA").addEventListener("onkeyup", function(){
// 	var getText = document.getElementById("headTA"); //검색창영역을 변수 'getText'로 가져온다
//     var string = getText.value; //검색창영역에 입력된 값을 변수 'string'에 넣는다
//     if(string.length >= 20) {
//     	document.getElementById("warningText").innerText = "20글자 이상입니다!!";
//     }
//     else
//     	document.getElementById("warningText").innerText = "";
// });

// 위의 코드처럼 getElementById를 사용하여 만들려고 했으나 실패하여 아래 코드로 대체합니다.
// html에 'headTA'안에 onkeyup="letterCount()"를 추가하였습니다.

function letterCount() {
    var getText = document.getElementById("headTA"); //검색창영역을 변수 'getText'로 가져온다
    var string = getText.value; //검색창영역에 입력된 값을 변수 'string'에 넣는다
    if(string.length >= 20) {
    	document.getElementById("warningText").innerText = "20글자 이상입니다!!";
    }
    else
    	document.getElementById("warningText").innerText = "";
}