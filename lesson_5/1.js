// Написать скрипт, который можно запустить в консоли на любой странице,
// и скрипт выведет количество тегов, комментариев и текстовых узлов на странице.

// tag - 1, text - 3, comment - 8


const fun = () => {
  const amount = {
    1: 0, //начальное кол-во тегов
    3: 0, //начальное кол-во текстовых узлов
    8: 0 //начальное кол-во комментариев
  }
  const counter = node => {
    if (node.nodeType in amount) {
      amount[node.nodeType]++;
    }
    node.childNodes.forEach(counter);
  }
  counter(document);
  console.log(`Кол-во тегов - ${amount[1]}`);
  console.log(`Кол-во текстовых узлов - ${amount[3]}`);
  console.log(`Кол-во комментариев - ${amount[8]}`);
}

fun();
