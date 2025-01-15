let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "purple"];

let score = document.querySelector(".score")
let hiScore = document.querySelector(".high-score");
let title = document.querySelector("#game-over");
let rMsg = document.querySelector("#rMsg");
let levalmsg = document.querySelector(".level");
let redirect = document.querySelector(".redirect-btn");

let srtared = false;
let leval = 0;

let btn12 = document.getElementById("start");
let restart = document.querySelector("#restart");

btn12.addEventListener("click", function () {
  if (srtared == false) {
    console.log("key press");
    srtared = true;
    btn12.style.display = "none";
    redirect.style.display = "none";
    restart.style.display = "inline-block"
    score.innerHTML = ``;
    hiScore.innerHTML = ``;
    title.innerHTML = ``
    rMsg.innerHTML = "Click Restart to begin a new game and reset the score."

    setTimeout(() => {
      levalUp(); levalmsg.style.display = "inline-block";
    }, 900);
   
  }
});

function btnFlesh(btn) {
  if (srtared === true) {
    btn.classList.add("flesh");
    setTimeout(() => {
      btn.classList.remove("flesh");
    }, 250);
  }
}

function levalUp() {
  userSeq = [];
  leval++;
  levalmsg.innerText = `level ${leval}`;

  let rendInx = Math.floor(Math.random() * 3);
  let rendColor = btns[rendInx];
  let rendBtn = document.querySelector(`.${rendColor}`);

  gameSeq.push(rendColor);

  btnFlesh(rendBtn);
}

function checkAns(idx) {
  if (srtared === true) {
    if (userSeq[idx] == gameSeq[idx]) {
      if (userSeq.length == gameSeq.length) {
        setTimeout(levalUp, 1000);
      }
    } else {
      title.innerHTML = `Game Over`;
      levalmsg.style.display = "none";
      score.innerHTML = `Your score: ${leval}`;
      hiScore.innerHTML = `Highscore : ${hScore()}`;
      rMsg.innerHTML = `Click start to play again`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "#121212";
      }, 150);

      reset();
    }
  } else {
    rMsg.innerText = `Click the Start button to play the game`;
  }
}
let highScore = 0;

function hScore() {
  if (highScore < leval) {
    highScore = leval;
    return leval;
  } else {
    return highScore;
  }
}

function btnPress() {
  //  console.log(this)  // click btn value
  let btn = this;
  btnFlesh(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  srtared = false;
  gameSeq = [];
  userSeq = [];
  leval = 0;
  btn12.style.display = "inline-block";

}

let button = document.querySelector("button");

button.addEventListener("click", function () {
  window.location.reload();
});
