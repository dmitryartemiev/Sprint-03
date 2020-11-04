"use strict";

//переменные
let dataMap = new Map();
let win = Boolean(false);
let firstPlayer = 1;
let secondPlayer = 0;

//функция смены игрока
function playerChange() {
  if (firstPlayer == 1) {
    firstPlayer--;
    secondPlayer++;
    document.getElementsByClassName("first")[0].style.backgroundColor = "#d3d2d3";
    document.getElementsByClassName("second")[0].style.backgroundColor = "#db8a26";
  } else if (secondPlayer == 1) {
    firstPlayer++;
    secondPlayer--;
    document.getElementsByClassName("first")[0].style.backgroundColor = "#db8a26";
    document.getElementsByClassName("second")[0].style.backgroundColor = "#d3d2d3";
  }
  console.log("Player 1 = " + firstPlayer + " and player 2 = " + secondPlayer);
}

//функция хода
let counter = 0;
function makeTurn(cellNumber) {
  if (win == false) {
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
}

//функция проверки статуса игры
let draw = document.createElement("div");
function statusCheck() {
  if (dataMap.size == 9) {
    document.getElementsByClassName("menu")[0].style.backgroundColor = " #db8a26";
    document.getElementsByClassName("menuContainer")[0].style.backgroundColor = " #db8a26";
    document.getElementsByClassName("numberOfTurns")[0].style.backgroundColor = " #db8a26";
    document.getElementsByClassName("number")[0].style.backgroundColor = " #db8a26";
    document.getElementsByClassName("first")[0].style.backgroundColor = " #c1c1c1";
    document.getElementsByClassName("second")[0].style.backgroundColor = " #c1c1c1";
    let menu = document.getElementsByClassName("menu")[0];
    draw.classList.add("draw");
    draw.textContent = "It's a draw!";
    menu.appendChild(draw);
  }

  //функция перекрашивания отметок
  function winColor(x, y, z) {
    document.getElementsByClassName("cell")[x].getElementsByTagName("p")[0].style.color = "#007829";
    document.getElementsByClassName("cell")[x].getElementsByTagName("p")[0].style.fontSize = "80px";
    document.getElementsByClassName("cell")[y].getElementsByTagName("p")[0].style.color = "#007829";
    document.getElementsByClassName("cell")[y].getElementsByTagName("p")[0].style.fontSize = "80px";
    document.getElementsByClassName("cell")[z].getElementsByTagName("p")[0].style.color = "#007829";
    document.getElementsByClassName("cell")[z].getElementsByTagName("p")[0].style.fontSize = "80px";
  }

  //функция проверки победы
  function winCheck(x, y, z) {
    if (
        document.getElementsByClassName("cell")[x].getElementsByTagName("p")[0].textContent ===
        document.getElementsByClassName("cell")[y].getElementsByTagName("p")[0].textContent &&
        document.getElementsByClassName("cell")[z].getElementsByTagName("p")[0].textContent ===
        document.getElementsByClassName("cell")[y].getElementsByTagName("p")[0].textContent &&
        dataMap.get(x) !== undefined && dataMap.get(y) !== undefined && dataMap.get(z) !== undefined
    ) {
      return true;
    }
  }

  if (winCheck(0, 1, 2)) {
    win = true;
    winColor(0, 1, 2);
  }

  if (winCheck(0, 3, 6)) {
    win = true;
    winColor(0, 3, 6);
  }
  if (winCheck(0, 4, 8)) {
    win = true;
    winColor(0, 4, 8);
  }
  if (winCheck(6, 7, 8)) {
    win = true;
    winColor(6, 7, 8);
  }
  if (winCheck(2, 5, 8)) {
    win = true;
    winColor(2, 5, 8);
  }
  if (winCheck(2, 4, 6)) {
    win = true;
    winColor(2, 4, 6);
  }
  if (winCheck(1, 4, 7)) {
    win = true;
    winColor(1, 4, 7);
  }
  if (winCheck(3, 4, 5)) {
    win = true;
    winColor(3, 4, 5);
  }

  if (win == true) {
    document.getElementsByClassName("menu")[0].style.backgroundColor = " #007829";
    document.getElementsByClassName("menu")[0].style.color = " white";
    document.getElementsByClassName("menuContainer")[0].style.backgroundColor = " #007829";
    document.getElementsByClassName("numberOfTurns")[0].style.backgroundColor = " #007829";
    document.getElementsByClassName("numberOfTurns")[0].style.color = " white";
    document.getElementsByClassName("number")[0].style.backgroundColor = " #007829";
    document.getElementsByClassName("number")[0].style.color = " white";
    document.getElementsByClassName("first")[0].style.backgroundColor = " #c1c1c1";
    document.getElementsByClassName("second")[0].style.backgroundColor = " #c1c1c1";
    let menu = document.getElementsByClassName("menu")[0];
    draw.classList.add("draw");
    let winner;
    if (secondPlayer === 0) {
      winner = "Player 2";
    }
    if (secondPlayer === 1) {
      winner = "Player 1";
    }
    draw.textContent = winner + " won!";
    draw.style.color = "white";
    menu.appendChild(draw);
  }
}

//добавляем on click events на клетки
document.querySelector(".cellContainer").onclick = function (e) {
  let index = [].slice.call(this.children).indexOf(e.target);
  if (!document.getElementsByTagName("p")[index].classList.contains("mark")) {
    makeTurn(index);
    if (firstPlayer == 1) {
      dataMap.set(index, "O");
    } else if (secondPlayer == 1) {
      dataMap.set(index, "X");
    }
    statusCheck();
    console.log(dataMap);
  }
};

//функция рестарт
function restart() {
  firstPlayer = 1;
  secondPlayer = 0;
  counter = 0;
  document.getElementsByClassName("number")[0].textContent = "0";
  document.getElementsByClassName("first")[0].style.backgroundColor = "#db8a26";
  document.getElementsByClassName("second")[0].style.backgroundColor ="#d3d2d3";
  document.getElementsByClassName("menu")[0].style.backgroundColor = "#c1c1c1";
  document.getElementsByClassName("menuContainer")[0].style.backgroundColor = "#c1c1c1";
  document.getElementsByClassName("numberOfTurns")[0].style.backgroundColor = "#c1c1c1";
  document.getElementsByClassName("numberOfTurns")[0].style.color = "#3f3f3f";
  document.getElementsByClassName("number")[0].style.backgroundColor = "#c1c1c1";
  document.getElementsByClassName("number")[0].style.color = "#3f3f3f";
  draw.textContent = "";
  draw.style.color = "#3f3f3f";
  for (let i = 0; i < 9; i++) {
    let mark = document.getElementsByClassName("cell")[i].getElementsByTagName("p")[0];
    mark.classList.remove("mark", "X", "O");
    mark.textContent = "";
    mark.style.fontSize = "60px";
    mark.style.color = "#3f3f3f";
    dataMap.delete(i);
    win = false;
  }
}

//добавляем on click events на кнопку play again
document.getElementsByClassName("playAgain")[0].onclick = function () {
  restart();
};
