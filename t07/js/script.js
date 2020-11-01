"use strict";

let arr = document.getElementsByTagName("li");

// цикл, добавляющий атрибут class='unknown'
// если у элемента списка нет атрибутов или class != good, evil или unknown
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  if (
    current.hasAttributes() === false ||
    (current.getAttribute("class") !== "good" &&
      current.getAttribute("class") !== "evil" &&
      current.getAttribute("class") !== "unknown")
  ) {
    current.setAttribute("class", "unknown");
  }

  //проверяем отсутствие атрибута data-element
  //если нету, то добавляем и data-element='none'
  let attrs = current.attributes;
  if (!attrs["data-element"]) {
    current.setAttribute("data-element", "none");
  }

  //apend

  //создаём массив
  let dataElement = current.getAttribute("data-element").split(" ");

  //добавляем абзац после имени
  let mybr = document.createElement("br");
  current.appendChild(mybr);

  //объявляем переменную для классов круга
  let circleClass;

  //функция, которая создает див, присваивает ему класс elem
  //и добавляет его после textContent в li
  //если class dataElement содержит none, то
  //добавляет еще один див после него и присваивает класс line
  function myAppend() {
    let divCircle = document.createElement("div");
    circleClass = document.createAttribute("class");
    current.appendChild(divCircle);
    divCircle.setAttributeNode(circleClass);
    circleClass.value = "elem";

    if (dataElement.includes("none")) {
      let divLine = document.createElement("div");
      let lineClass = document.createAttribute("class");
      divLine.setAttributeNode(lineClass);
      divCircle.appendChild(divLine);
      lineClass.value = "line";
    }
  }

  //цикл, выполняющий функцию длинамассива раз и дополнительно
  //добавляет пробел и цвет кружка
  for (let j = 0; j < dataElement.length; j++) {
    myAppend();
    circleClass.value += " " + dataElement[j];
  }

  console.log(current);
}
