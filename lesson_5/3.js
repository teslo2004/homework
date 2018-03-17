//Разработать визуализацию алгоритма решета Эратосфена с зачеркиванием очередных составных чисел

// нечитаемый код, экспериментальная версия

const n = +prompt("Enter n");
const m = +prompt("Etner m");
const isPrime = n => {
  if (n<=1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const tbody = document.querySelector("tbody");
let tr = document.createElement("tr");
tbody.appendChild(tr);
for (let i = 1; i <= n * m; i++) {
  if ((i-1) % m === 0) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);
  }
  let td = document.createElement("td");
  td.setAttribute("id", i);
  td.innerHTML = i;
  if (isPrime(i)) td.setAttribute("prime", 1);
  tr.appendChild(td);
}

document.getElementById(1).setAttribute("bgcolor", "green");

(function() {
  let flag = true;
  let i = 2;
  let k, j;
  const interval = window.setInterval( () => {
    if (i >= m*n) window.clearInterval(interval);
    if (flag) {
      let td = document.getElementById(i);
      td.setAttribute("bgcolor", "green");
      flag = !flag;
      k = i;
      j = i;
      do {i++} while(!document.getElementById(i).hasAttribute("prime"));
    } else {
      do {
        k += j;
      } while(document.getElementById(k) && document.getElementById(k).hasAttribute("bgcolor"));
      if (k >= m*n) flag = !flag;
      document.getElementById(k).setAttribute("bgcolor", "red");
    }
  }, 200)
}())
