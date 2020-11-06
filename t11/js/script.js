"use strict";

let textInput = document.getElementById("text__input").value;
let notes = document.getElementsByClassName("notes")[0];
let contentContainer = document.getElementsByClassName("content__container")[1];
let count = document.cookie.split(";").length;
let date = new Date(); // Now
date.setDate(date.getDate() + 30); // Set now + 30 days as the new date

function AddToCookies() {
  textInput = document.getElementById("text__input").value;
  if (!textInput) {
    alert('It\'s empty. Try to input something in "Text input"');
  } else {
    count++;
    let name = "note_" + count;

    document.cookie = name + "=" + textInput + "; expires=" + date;

    notes.textContent = " " + document.cookie;
    notes.textContent = notes.textContent.replace(/note_\d+=/gi, "--> ");
    notes.textContent = notes.textContent.replace(/;/gi, "\n");
  }
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  count = 0;
  notes.textContent = "[Empty]";
}

if (!document.cookie) {
  notes.textContent = "[Empty]";
} else {
  notes.textContent = " " + document.cookie;
  notes.textContent = notes.textContent.replace(/note_\d+=/gi, "--> ");
  notes.textContent = notes.textContent.replace(/;/gi, "\n");
}

document.getElementsByClassName("add")[0].onclick = function () {
  AddToCookies();
  console.log(document.cookie);
};

document.getElementsByClassName("clear")[0].onclick = function () {
  let continueClear = confirm('Are you sure?');
  if (continueClear == true){
  deleteAllCookies();
  console.log(document.cookie);
}
};
