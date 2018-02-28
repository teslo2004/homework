//Найти в массиве количество и сумму элементов, которые делятся на 3
const arr = [];
const length = +prompt('enter the length of the array');
let count = 0,
    sum = 0;
for (let i = 0; i < length; i++) {
  arr[i] = Math.round(Math.random() * 19) + 1;
  if (arr[i] % 3 === 0) {
    count++;
    sum += arr[i];
  }
}
console.log(`array: ${arr}`);
console.log(`amount = ${count} sum = ${sum}`);

