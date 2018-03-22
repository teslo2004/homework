//Создайте массив, состоящий из описания людей. На базе него сгенерируйте таблицу с описаниями людей, а
//также кнопку в каждой строке, при нажатии на которую в диалоговом окне будет выведено имя человека.

const tbody = document.querySelector("tbody");
const names = ["Stephen", "Kevin", "LeBron", "Tristan", "Kyrie", "Dwyane"];
const descriptions = ["Attractive", "Hardworking", "Strong", "Awesome", "Awful", "Clever"];
const random = (upper, lower) => {
  return Math.round(Math.random() * (upper - lower)) + lower;
}

const randomItem = arr => {
  return random(arr.length - 1, 0);
}

const addCell = (data, parent) => {
  const td = document.createElement("td");
  parent.appendChild(td);
  td.innerHTML = data;
}

const addButtonValue = (node, nodeValue) => {
  const button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("value", "showname");
  node.appendChild(button);
  button.addEventListener("click", function() {
    alert(nodeValue.innerText);
  })
}

for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  addCell(names[randomItem(names)], tr);
  addCell(descriptions[randomItem(descriptions)], tr);
  addButtonValue(tr.children[1], tr.children[0]);
}
