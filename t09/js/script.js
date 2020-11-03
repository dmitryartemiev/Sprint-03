"use strict";

let firstPlayer = 1;
let secondPlayer = 0;

//функция смены игрока
function playerChange() {
  if (firstPlayer == 1) {
    firstPlayer--;
    secondPlayer++;
    document.getElementsByClassName("first")[0].style.backgroundColor =
      "#d3d2d3";
    document.getElementsByClassName("second")[0].style.backgroundColor =
      "#db8a26";
  } else if (secondPlayer == 1) {
    firstPlayer++;
    secondPlayer--;
    document.getElementsByClassName("first")[0].style.backgroundColor =
      "#db8a26";
    document.getElementsByClassName("second")[0].style.backgroundColor =
      "#d3d2d3";
  }
  console.log("Player 1 = " + firstPlayer + " and player 2 = " + secondPlayer);
}

//клетки
let dataObj = {};

//функция хода

let counter = 0;
function makeTurn(cellNumber) {
  let cell = document.getElementsByClassName("cell")[cellNumber];
  let mark = document.getElementsByTagName("p")[cellNumber];
  mark.classList.add("mark");

  if (firstPlayer == 1) {
    mark.textContent = "X";
    mark.classList.add("X");
  } else if (secondPlayer == 1) {
    mark.textContent = "O";
    mark.classList.add("O");
  }
  cell.appendChild(mark);
  counter++;
  playerChange();
  document.getElementsByClassName("number")[0].textContent = counter;
  console.log(cell);
}

//функция проверки статуса игры
let draw = document.createElement("div");
let win = Boolean(true);
function statusCheck() {
  if (Object.keys(dataObj).length == 9) {
    document.getElementsByClassName("menu")[0].style.backgroundColor =
      " #db8a26";
    document.getElementsByClassName("menuContainer")[0].style.backgroundColor =
      " #db8a26";
    document.getElementsByClassName("numberOfTurns")[0].style.backgroundColor =
      " #db8a26";
    document.getElementsByClassName("number")[0].style.backgroundColor =
      " #db8a26";
    document.getElementsByClassName("first")[0].style.backgroundColor =
      " #c1c1c1";
    document.getElementsByClassName("second")[0].style.backgroundColor =
      " #c1c1c1";
    let menu = document.getElementsByClassName("menu")[0];
    draw.classList.add("draw");
    draw.textContent = "It's a draw!";
    menu.appendChild(draw);
  }
}

//добавляем on click events на клетки
document.querySelector(".cellContainer").onclick = function (e) {
  let index = [].slice.call(this.children).indexOf(e.target);
  if (!document.getElementsByTagName("p")[index].classList.contains("mark")) {
    makeTurn(index);
    if (firstPlayer == 1) {
      dataObj[index] = "O";
    } else if (secondPlayer == 1) {
      dataObj[index] = "X";
    }
    statusCheck();
    console.log(dataObj);
  }
};

//функция рестарт
function restart() {
  firstPlayer = 1;
  secondPlayer = 0;
  counter = 0;
  document.getElementsByClassName("number")[0].textContent = "0";
  document.getElementsByClassName("first")[0].style.backgroundColor = "#db8a26";
  document.getElementsByClassName("second")[0].style.backgroundColor =
    "#d3d2d3";
  document.getElementsByClassName("menu")[0].style.backgroundColor = "#c1c1c1";
  document.getElementsByClassName("menuContainer")[0].style.backgroundColor =
    "#c1c1c1";
  document.getElementsByClassName("numberOfTurns")[0].style.backgroundColor =
    "#c1c1c1";
  document.getElementsByClassName("number")[0].style.backgroundColor =
    "#c1c1c1";
  draw.textContent = "";
  for (let i = 0; i < 9; i++) {
    let mark = document
      .getElementsByClassName("cell")
      [i].getElementsByTagName("p")[0];
    mark.classList.remove("mark", "X", "O");
    mark.textContent = "";
    delete dataObj[i];
  }

  console.log(dataObj);
}

//добавляем on click events на кнопку play again

document.getElementsByClassName("playAgain")[0].onclick = function () {
  restart();
  statusCheck();
};
