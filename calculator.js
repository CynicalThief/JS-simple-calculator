const bar = document.getElementById("Bar");

//1st row
const ac = document.getElementById("AC");
const percent = document.getElementById("Percent");
const del = document.getElementById("Delete");
const division = document.getElementById("Division");
//2nd row
const seven = document.getElementById("Seven");
const eight = document.getElementById("Eight");
const nine = document.getElementById("Nine");
const multi = document.getElementById("Multi");
//3rd row
const four = document.getElementById("Four");
const five = document.getElementById("Five");
const six = document.getElementById("Six");
const sub = document.getElementById("Sub");
//4th row
const one = document.getElementById("One");
const two = document.getElementById("Two");
const three = document.getElementById("Three");
const add = document.getElementById("Add");
//5th row
const twozero = document.getElementById("Doublezero");
const zero = document.getElementById("Zero");
const deci = document.getElementById("Deci");
const result = document.getElementById("Result");

ac.addEventListener('click', () => {
    bar.innerText = "";
})
percent.addEventListener('click', () => {
    bar.innerText += " % ";
})
del.addEventListener('click', () => {
    bar.innerText = bar.innerText.slice(0, -1);
});
division.addEventListener('click', () => {
    bar.innerText += " / ";
})

seven.addEventListener('click', () => {
    bar.innerText += "7";
})
eight.addEventListener('click', () => {
    bar.innerText += "8";
})
nine.addEventListener('click', () => {
    bar.innerText += "9";
})
multi.addEventListener('click', () => {
    bar.innerText += " * ";
})

four.addEventListener('click', () => {
    bar.innerText += "4";
})
five.addEventListener('click', () => {
    bar.innerText += "5";
})
six.addEventListener('click', () => {
    bar.innerText += "6";
})
sub.addEventListener('click', () => {
    bar.innerText += " - ";
})

one.addEventListener('click', () => {
    bar.innerText += "1";
})
two.addEventListener('click', () => {
    bar.innerText += "2";
})
three.addEventListener('click', () => {
    bar.innerText += "3";
})
add.addEventListener('click', () => {
    bar.innerText += " + ";
})

twozero.addEventListener('click', () => {
    bar.innerText += "00";
})
zero.addEventListener('click', () => {
    bar.innerText += "0";
})
deci.addEventListener('click', () => {
    bar.innerText += ".";
})
result.addEventListener('click', () => {
    bar.innerText += " = ";
})