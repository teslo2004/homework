//Сгенерировать таблицу размером NXN. При нажатии на ячейку задайте этой ячейке случайный цвет.
//Реализовать, используя только один обработчик события (делегирование).

const random = (a, b) => {
  return Math.round(Math.random() * (b - a)) + a;
}

const tbody = document.querySelector("tbody");
const n = +prompt("enter N");
for (let i = 0; i < n; i++) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let j = 0; j < n; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
  }
}

tbody.addEventListener("click", function(e) {
  if (e.target.nodeName == "TD" ) {
    e.target.setAttribute("bgcolor", `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`);
  }
})
