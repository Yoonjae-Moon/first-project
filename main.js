//랜덤 번호 지정
//유저가 번호 입력하고 go 버튼 누름
//맞추면 '맞췄습니다!!'
//작으면 Down!! 크면 Up!!
//Reset 버튼 누르면 리셋
//5번의 기회를 다 쓰면 게임이 끝난다.
//1~100 범위 밖의 숫자를 입력하면 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다.



let randomNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", randomNum);
}

function play(){
    let userValue = userInput.ariaValueMax;
    if (userValue < randomNum){
        resultArea.textContent = "UP!!!"
    } else if (userValue > randomNum){
        resultArea.textContent = "Down!!!"
    } else {
        resultArea.textContent = "정답입니다!!"
    }

    
    console.log(userValue);
}
pickRandomNum();
