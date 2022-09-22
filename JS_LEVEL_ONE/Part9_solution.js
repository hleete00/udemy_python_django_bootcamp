let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let age = prompt("How old are you?");
let height = prompt("How tall are you in centimeters?");
let nickname = prompt("What is your pet name/nickname if you have one?");

if ((firstName[0] == lastName[0]) && (age > 20 && age < 30) && (height >= 170) && (nickname[nickname.length - 1] == "y")) {
    console.log("Greetings comrade.");
}