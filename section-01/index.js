let seconds = 210;
let min = Math.floor(seconds / 60);
let sec = seconds % 60; 

alert(min);
alert(sec);

document.writeln(min, ":", sec);

prompt("enter your age");

let age = +prompt("enter your age:");
document.writeln(age);


let user_dob = 2023 - age;

document.writeln(user_dob);

const value_1 = +prompt();
const value_2 = +prompt();
console.log(value_1 + value_2);