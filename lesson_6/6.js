//Создайте рабочий интерфейс карманного калькулятора с памятью.

const display = document.querySelector(".display");
const tbody = document.querySelector("tbody");
const obj = {
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '*': (first, second) => first * second,
  '/': (first, second) => first / second,
}
const operations = document.querySelectorAll(".operation");
const digits = document.querySelectorAll(".digit");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const exit = document.getElementById("exit");
const addToMemory = document.getElementById("addToMemory");
const takeFromMemory = document.getElementById("takeFromMemory");
const clearMemory = document.getElementById("clearMemory");

let first = "", second = "";
let operation = "";
let memory = 0;

digits.forEach( function(digit) {
  digit.addEventListener("click", function() {
      first += digit.innerText;
      display.innerHTML += digit.innerText;
  } )
})

operations.forEach( function(item) {
  item.addEventListener("click", function() {
    display.innerHTML = "";
    if (second) {
      second = obj[operation](+second, +first);
      display.innerHTML = second;
    } else {
      second = first;
    }
    operation = item.innerText;
    first = "";
  })
} )

clear.addEventListener("click", function() {
  first = "";
  display.innerHTML = "";
})

equal.addEventListener("click", function() {
  if (second) {
    first = obj[operation](+second, +first);
    display.innerHTML = first;
    second = "";
  }
})

exit.addEventListener("click", function() {
  first = "";
  second = "";
  operation = "";
  display.innerHTML = "";
})

addToMemory.addEventListener("click", function() {
  memory += +display.innerText;
  display.innerHTML = "";
})

takeFromMemory.addEventListener("click", function() {
  first = memory;
  display.innerHTML = first;
})

clearMemory.addEventListener("click", function() {
  memory = 0;
})
