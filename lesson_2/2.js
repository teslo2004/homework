/* Ввести две строки и проверить, являются ли они анаграммами друг друга
  (составлены из того же набора символов). */

const anagrams = (a, b) =>
  a.split('').sort().join('') === b.split('').sort().join('');

let first = prompt('enter the first string');
let second = prompt('enter the second string');
alert(anagrams(first, second));
