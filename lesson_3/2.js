//Сгенерировать массив из 1000 случайных чисел в диапазоне s ± p%, отсортировать его по убыванию
//остатков от деления на 10.

const random = (s, p) => {
  const lower = s - (p/100)*s;
  const upper = s + (p/100)*s;
  return Math.round(Math.random() * (upper - lower)) + lower;
}

const s = +prompt('enter s');
const p = +prompt('enter p');
const arr = [];

for (let i = 0; i < 1000; i++) {
  arr[i] = random(s, p);
}

console.log(arr.sort( (a, b) => b % 10 - a % 10 ));

