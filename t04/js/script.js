'use strict'



function concat(string1, string2){
     
    arg.count=0;

     function arg(){
         let string2 = prompt('Enter second string!');
        arg.count++;
        if (string2 === null) {return string1};
        return string1 + ' ' + string2; 
       };
       
       if (string2 === undefined){
           return arg;
       }else{
           return string1 + ' ' + string2;
       }
    }
    


// test cases

let phrase1 = concat("Hulk", "smash!");
let output = phrase1;
console.log(output); // Hulk smash!

let phrase2 = concat("Leave");
output = phrase2();
// a prompt appears. Enter "Hulk alone!" into the prompt

console.log(output); // Leave Hulk alone!
console.log(phrase2.count); // 1

output = phrase2();
// // a prompt appears. Enter "me alone, please!" into the prompt

console.log(output); // Leave me alone, please!

output = phrase2();
// // a prompt appears. Enter "HULK ALONE!" into the prompt

console.log(output); // Leave HULK ALONE!
console.log(phrase2.count); // 3

// let phrase3 = concat("Go");
// output = phrase3();
// // a prompt appears. Enter "away!" into the prompt

// console.log(output); // Go away!
// console.log(phrase3.count); // 1
// console.log(phrase2.count); // 3

// // Result in Console panel:
// //Hulk smash!
// //Leave Hulk alone!
// //1