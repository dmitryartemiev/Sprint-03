"use strict";

//массив заголовков
let headingArr = ["Name", "Strength", "Age"];

//массив данных
let dataArr = [
  { name: "Black Panther", strength: 66, age: 53 },
  { name: "Captain America", strength: 79, age: 137 },
  { name: "Captain Marvel", strength: 97, age: 26 },
  { name: "Hulk", strength: 80, age: 49 },
  { name: "Iron Man", strength: 88, age: 48 },
  { name: "Spider-man", strength: 78, age: 16 },
  { name: "Thanos", strength: 99, age: 1000 },
  { name: "Thor", strength: 95, age: 1000 },
  { name: "Yon-Rogg", strength: 73, age: 52 },
];

//функция-сортировщик массивов
let propertyCounter = 0;
function tSort(arr, property) {
  function ASC(field) {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }
  function DESC(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  if (propertyCounter === 0) {
    arr.sort(ASC(property));
    propertyCounter++;
  } else {
    arr.sort(DESC(property));
    propertyCounter--;
  }
}

//добавляем service message
let sortValue = "Name",
  orderValue = 'ASC';
  let main = document.getElementsByTagName("main")[0];
  let serviceDiv = document.createElement("div");
  main.appendChild(serviceDiv);
  document.getElementsByTagName("div")[2].classList.add("sort");
  serviceDiv.textContent = "Sorting by " + sortValue + ", order: " + orderValue;

function serviceMessage() {
  if (propertyCounter === 0) {
    orderValue = "ASC";
  }
  if (propertyCounter === 1) {
    orderValue = "DESC";
  }
  serviceDiv.textContent = "Sorting by " + sortValue + ", order: " + orderValue;
}

//функция-строитель таблиц
function tableAdd(row, cell, parrent) {
  let parrentVar = document.getElementsByTagName(parrent)[0];
  let tbl = document.createElement("table");
  let tblHead = document.createElement("thead");
  let tblBody = document.createElement("tbody");
  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
  let trHead = document.createElement("tr");
  tblHead.appendChild(trHead);

  for (let i = 0; i < cell; i++) {
    let th = document.createElement("th");
    trHead.appendChild(th);
  }
  for (let j = 0; j < row - 1; j++) {
    let tr = document.createElement("tr");
    tblBody.appendChild(tr);
    for (let k = 0; k < cell; k++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  parrentVar.appendChild(tbl);
}

tableAdd(10, 3, "main");

//добавляем заголовки и идентификторы к ним
let th = document.getElementsByTagName("th");
for (let i = 0; i < th.length; i++) {
  document.getElementsByTagName("th")[i].id = "h" + i;
  document.getElementsByTagName("th")[i].textContent += headingArr[i];
}

//добвляем on click events
document.getElementById("h0").onclick = function () {
  tSort(dataArr, "name");
  tableFill();
  sortValue = "Name";
  serviceMessage();
};
document.getElementById("h1").onclick = function () {
  tSort(dataArr, "strength");
  tableFill();
  sortValue = "Strength";
  serviceMessage();
};
document.getElementById("h2").onclick = function () {
  tSort(dataArr, "age");
  tableFill();
  sortValue = "Age";
  serviceMessage();
};

//добавляем классы ячейкам
let td = document.getElementsByTagName("td");
for (let k = 0; k < td.length; k = k + 3) {
  document.getElementsByTagName("td")[k].classList.add("name");
}
for (let k = 1; k < td.length; k = k + 3) {
  document.getElementsByTagName("td")[k].classList.add("strength");
}
for (let k = 2; k < td.length; k = k + 3) {
  document.getElementsByTagName("td")[k].classList.add("age");
}

//заполняем таблицу
function tableFill() {
  for (let j = 0; j < td.length / 3; j++) {
    document.getElementsByClassName("name")[j].textContent = dataArr[j].name;
    document.getElementsByClassName("strength")[j].textContent =
      dataArr[j].strength;
    document.getElementsByClassName("age")[j].textContent = dataArr[j].age;
  }
}

tableFill();
