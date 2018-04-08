const game = document.querySelector(".card-game");
const cardAmount = 6;
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
mix(cards);
for (let i = 0; i < game.children.length; i++) {
  game.children[i].classList.add(cards[i]);
}

let first, second;
/*
game.addEventListener("click", function(e) {
  e.target.classList.add("opened");
  if (!second) {
    first = e.target;
    second = first;
  }
  else {
    first = second;
    second = e.target;
    if (first.classList[1] == second.classList[1]) {
      first.remove();
      second.remove();
    } /*else {
      first.classList.remove("opened");
      second.classList.remove("opened");
    }*/
  }
});
*/
