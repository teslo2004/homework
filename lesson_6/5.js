//Создайте квадратную таблицу N*N. При наведении мышкой на ячейку таблицы, в таблице появляется
//какой-либо символ, или ячейка закрашивается красным (задается атрибут class). Через 3 секунды после
//того, как пользователь уберет мышку, символ или цвет пропадает.


const n = +prompt("Enter the n");


const tbody = document.querySelector("tbody");
const addCell = (data, parent) => {
  const td = document.createElement("td");
  parent.appendChild(td);
  td.innerHTML = data;
  td.addEventListener("mouseover", function() {
    this.setAttribute("class", "red");
  });
  td.addEventListener("mouseout", function() {
    const timeout = window.setTimeout( function() {
      td.removeAttribute("class");
    }, 3000);
  })
}
const addRow = (parent, n) => {
  const tr = document.createElement("tr");
  parent.appendChild(tr);
  for (let i = 0; i < n; i++) {
    addCell("", tr);
  }
}

for (let i = 0; i < n; i++) {
  addRow(tbody, n);
}
