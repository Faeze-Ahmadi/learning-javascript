let userName = new String("ali");
alert(userName); 

let username = new String(`saman`);
alert(username); 


let name = new String("Faeze");
let familyName = new String("ahmadi");
let age_ = parseInt(20);

alert(typeof name);
alert(typeof familyName);
alert(typeof age_);


let Name = ("Faeze");
alert(typeof Name);


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