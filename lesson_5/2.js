//Разработать структуру данных "дерево" и создать дерево.
//Создать скрипт, который выведет многоуровневый список из получившегося дерева.

const list = {
  children: [
    {
      data: "hi, I'm the first child",
      children: []
    },
    {
      data: "hi, I'm the second child",
      children: [
        {
          data: "I am a grandson",
          children: [
            {
              data: "Oh, I'm a great-grandson",
              children: []
            },
            {
              data: "I am his brother",
              children: [
                {
                  data: "I don't even know who I am",
                  children: [
                    {
                      data: "It can be really deep",
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      data: "hi, I'm the third child",
      children: [
        {
          data: "hello!",
          children: []
        }
      ]
    }
  ]
}

//создаем фукнцию, второй параметр - нода, ребенком которой будет список
const tree2list = (tree, parent) => {
  //создаем ноду ul
  let ul = document.createElement("ul");
  //добавляем ее к родителю
  parent.appendChild(ul);
  //к каждому ребенку применяем функцию
  tree.children.forEach(function(item) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = item.data;
    if (tree.children.length) {
      tree2list(item, li);
    }
  });
}

let body = document.querySelector("body");
tree2list(list, body);
