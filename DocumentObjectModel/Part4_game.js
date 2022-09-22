let pos0 = document.querySelector("#pos0");
let pos1 = document.querySelector("#pos1");
let pos2 = document.querySelector("#pos2");
let pos3 = document.querySelector("#pos3");
let pos4 = document.querySelector("#pos4");
let pos5 = document.querySelector("#pos5");
let pos6 = document.querySelector("#pos6");
let pos7 = document.querySelector("#pos7");
let pos8 = document.querySelector("#pos8");

let restartButton = document.querySelector("#restartButton");

pos0.addEventListener("click", function () {
    changeValueAtPos(pos0);
})

pos1.addEventListener("click", function () {
    changeValueAtPos(pos1);
})

pos2.addEventListener("click", function () {
    changeValueAtPos(pos2);
})

pos3.addEventListener("click", function () {
    changeValueAtPos(pos3);
})

pos4.addEventListener("click", function () {
    changeValueAtPos(pos4);
})

pos5.addEventListener("click", function () {
    changeValueAtPos(pos5);
})

pos6.addEventListener("click", function () {
    changeValueAtPos(pos6);
})

pos7.addEventListener("click", function () {
    changeValueAtPos(pos7);
})

pos8.addEventListener("click", function () {
    changeValueAtPos(pos8);
})

restartButton.addEventListener("click", function () {
    pos0.textContent = " ";
    pos1.textContent = " ";
    pos2.textContent = " ";
    pos3.textContent = " ";
    pos4.textContent = " ";
    pos5.textContent = " ";
    pos6.textContent = " ";
    pos7.textContent = " ";
    pos8.textContent = " ";
})

function changeValueAtPos(pos) {
    if (pos.textContent == " ") {
        pos.textContent = "X";
    } else if (pos.textContent == "X") {
        pos.textContent = "O";
    } else if (pos.textContent == "O") {
        pos.textContent = " ";
    }
}




