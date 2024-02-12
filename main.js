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
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

function pickRandomNum(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", randomNum);
}

function play(){
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100 사이의 숫자를 입력해 주세요"
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return;
    }

    chances--;
    chanceArea.textContent= `남은 기회: ${chances}번`

    if (userValue < randomNum){
        resultArea.textContent = "UP!!!"
    } else if (userValue > randomNum){
        resultArea.textContent = "Down!!!"
    } else {
        resultArea.textContent = "정답입니다!!"
        gameOver=true
    }
    history.push(userValue)
    console.log(history)

    
    if (chances < 1){
        gameOver = true
    }
    if (gameOver == true){
        playButton.disabled = true
    }
}

function reset(){
    //user input 깨끗하게 정리
    userInput.value = ""
    chances = 5;
    //새로운 번호 생성
    pickRandomNum();
    
    resultArea.textContent="결과값이 여기 나옵니다!"


}


pickRandomNum();
