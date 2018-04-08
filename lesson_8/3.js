const game = document.querySelector(".card-game");
const cardAmount = 9;
for (let i = 0; i < cardAmount * 2; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  game.appendChild(card);
}
const cards = [];
for (let i = 0, k = 1; i < cardAmount * 2; i += 2, k++) {
  cards[i] = "card" + (k);
  cards[i+1] = "card" + (k);
}
const random = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}
const replace = (arr, first, second) => {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}
const mix = arr => {
  for (let i = 0; i < arr.length; i++) {
    replace(arr, i, random(0, arr.length-1));
  }
}

mix(cards);
mix(cards);
mix(cards);

for (let i = 0; i < game.children.length; i++) {
  game.children[i].classList.add(cards[i]);
}

let first, second;
let counter = 0;
let cont = true; //continue
game.addEventListener("click", function(e) {
  if (cont) {
    e.target.classList.add("opened");
    counter++;
    if (!second) {
      first = e.target;
      second = first;
    } else {
      first = second;
      second = e.target;
      cont = false;
      if (first.classList[1] == second.classList[1]) {
        const timeout1 = window.setTimeout(function() {
          first.remove();
          second.remove();
        }, 500);
      }
      if (counter == 2) {
        const timeout1 = window.setTimeout(function() {
          first.classList.remove("opened");
          second.classList.remove("opened");
          counter = 0;
          second = null;
          cont = true;
        }, 500);
      }
    }
  }
});
