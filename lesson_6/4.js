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

const addCell = (data, parent, button) => {
  const td = document.createElement("td");
  parent.appendChild(td);
  td.innerHTML = data;
  if (button) {
    td.innerHTML += "<input type='button' value='showname'></input>"
    const button = td.children[0];
    button.addEventListener("click", function() {
      alert(td.previousSibling.innerText);
    })
  }
}
const addRow = parent => {
  const tr = document.createElement("tr");
  parent.appendChild(tr);
  addCell(names[randomItem(names)], tr, 0);
  addCell(descriptions[randomItem(descriptions)], tr, 1);
}

for (let i = 0; i < 10; i++) {
  addRow(tbody);
}
