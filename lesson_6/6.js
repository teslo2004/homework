//Создайте рабочий интерфейс карманного калькулятора с памятью.
//
const obj = {
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '*': (first, second) => first * second,
  '/': (first, second) => first / second,
}

const display = document.getElementById("display");
const displayOperation = document.getElementById("operation");
const tbody = document.querySelector("tbody");
const operations = document.querySelectorAll(".operation");
const digits = document.querySelectorAll(".digit");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const addToMemory = document.getElementById("addToMemory");
const takeFromMemory = document.getElementById("takeFromMemory");
const clearMemory = document.getElementById("clearMemory");
const elements = document.querySelectorAll("tbody tr *");
elements.forEach( function(item) {
  item.addEventListener("mousedown", function() {
    this.setAttribute("class", "red");
  });
  item.addEventListener("mouseup", function() {
    this.removeAttribute("class");
  });

} )

let first = "", second = "";
let operation = "";
let memory = null;

digits.forEach( function(digit) {
  digit.addEventListener("click", function() {
      if (display.innerHTML == second) display.innerHTML = "";
      first += digit.innerHTML;
      display.innerHTML += digit.innerHTML;
  } )
})

operations.forEach( function(item) {
  item.addEventListener("click", function() {
    display.innerHTML = "";
    displayOperation.innerHTML = this.innerHTML;
    if (second) {
      second = obj[operation](+second, +first);
      display.innerHTML = second;
    } else {
      second = first;
    }
    operation = item.innerHTML;
    first = "";
  })
} )


equal.addEventListener("click", function() {
  if (second) {
    first = obj[operation](+second, +first);
    display.innerHTML = first;
    second = "";
  }
})

reset.addEventListener("click", function() {
  first = "";
  second = "";
  operation = "";
  memory = null;
  display.innerHTML = "";
  displayOperation.innerHTML = "";
})

addToMemory.addEventListener("click", function() {
  if (memory == null) memory = +first;
  else memory += +first;
  display.innerHTML = "";
})

takeFromMemory.addEventListener("click", function() {
  first = memory;
  display.innerHTML = first;
})

clearMemory.addEventListener("click", function() {
  memory = null;
})
