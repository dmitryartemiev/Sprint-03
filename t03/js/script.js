"use strict";

// функция чистки массива (чистит  undefined, null, 0, false, NaN и "")
// убирает дубликаты

function cleanArray(actual) {
  let newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  let unique = [];
  for (let i = 0; i < newArray.length; i++) {
    let current = newArray[i];
    if (!~unique.indexOf(current)) {
      unique.push(current);
    }
  }
  return unique;
}


function addWords(obj, wrds) {
  let addArr = Object.values(obj); // обращаемся к ключу объекта
  addArr = String(addArr); //возвращаем строковое значение объекта
  addArr = addArr + " " + wrds; // добавляем слова в строку
  addArr = addArr.split(" "); // превращаем строку в массив
  addArr = cleanArray(addArr); // чистим массив
  obj["words"] = addArr.join(" "); // возвращаем объект
  return obj;
}


function removeWords(obj, wrds) {
  let remArr = Object.values(obj); // обращаемся к ключу объекта
  remArr = String(remArr); //возвращаем строковое значение объекта
  remArr = remArr.split(" "); // превращаем строку в массив
  remArr = cleanArray(remArr); // чистим массив
  let rems = cleanArray(wrds.split(" ")); //превращаем строку слов, которые нужно удалить, в массив и чистим его

  //цикл удаления слов, которые находятся в массиве rems из массива remArr

  for (let i = 0; i < rems.length; i++) {
    let element = rems[i];
    let index = remArr.indexOf(element);
    if (index > -1) {
      remArr.splice(index, 1);
    }
  }
  obj["words"] = remArr.join(" "); // возвращаем объект
  return obj;
}


function changeWords(obj, oldWrds, newWrds) {
  let changeArr = Object.values(obj); // обращаемся к ключу объекта
  changeArr = String(changeArr); //возвращаем строковое значение объекта
  changeArr = changeArr.split(" "); // превращаем строку в массив
  changeArr = cleanArray(changeArr); // чистим массив
  let news = cleanArray(newWrds.split(" ")); //превращаем строку новых слов в массив и чистим его
  let olds = cleanArray(oldWrds.split(" ")); //превращаем строку старых слов в массив и чистим его

//цикл, который удаляет старые слова
  
  for (let i = 0; i < olds.length; i++) {
    let element = olds[i];
    let index = changeArr.indexOf(element);
    if (index > -1) {
      changeArr.splice(index, 1);
    }
  }
  
// цикл, который добавляет новые слова

  for (let i = 0; i < news.length; i++) {
    let element = news[i];
    changeArr.push(element);
  }

  obj["words"] = changeArr.join(" "); // возвращаем объект
  return obj;
}


//test cases


const obj = {
  words: "newspapers newspapers  books magazines",
};
console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, "radio newspapers");
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, "newspapers   radio");
console.log(obj); // {words: "books magazines"}

changeWords(obj, "books radio  magazines", "tv internet");
console.log(obj); // {words: "tv internet"}
