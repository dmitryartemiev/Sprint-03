"use strict";

let count = 1;

function transformation() {
  if (count % 2) {
    let lab = document.getElementById("lab");
    lab.style.background = "#70964b";

    let hero = document.getElementById("hero");
    hero.style.fontSize = "130px";
    hero.textContent = "Hulk";
    hero.style.letterSpacing = '6px';

    count++;
  }else {
    let lab = document.getElementById("lab");
    lab.style.background = "#ffb300";

    let hero = document.getElementById("hero");
    hero.style.fontSize = "60px";
    hero.style.letterSpacing = '2px';
    hero.textContent = "Bruce Banner";

    count--;
  }
  console.log(count);
}
