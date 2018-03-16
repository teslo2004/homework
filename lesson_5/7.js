//Разработать скрипт, который имитирует сообщения о покупках в углу экрана

const names = ["Stephen", "Kevin", "LeBron", "Tristan", "Kyrie", "Dwyane"];
const cities = ["Los Angeles", "New-York", "Cleveland", "Toronto"];
const items = ["Basketball ball", "Hot dog", "Shoes"];

const random = (upper, lower) => {
  return Math.round(Math.random() * (upper - lower)) + lower;
}

const randomItem = arr => {
  return random(arr.length - 1, 0);
}

const add = () => {
  const message = `${names[randomItem(names)]} just bought ${items[randomItem(items)]} in ${cities[randomItem(cities)]}`;
  const li = document.createElement("li");
  const ul = document.querySelector(".messages ul");
  ul.appendChild(li);
  li.innerHTML = message;
}

const deleteElement = () => {
  const ul = document.querySelector(".messages ul");
  ul.children[0].remove();
}

const adder = window.setInterval(add, random(3000, 2000));
const killer = window.setInterval(deleteElement, 10000);
