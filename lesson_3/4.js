/* Создать массив из списка имен. Сгенерировать массив из 100 объектов типа «Человек». У каждого объекта должно быть случайным образом выбрано имя, возраст, а также метод, который выводит имя и возраст данного человека. Прогнать методом обхода по этому массиву и заставить каждого человека
представиться.  */

const random = (a, b) => {
  return Math.round(Math.random() * Math.abs((a - b))) + a;
}
const names = ["Stephen", "Kevin", "LeBron", "Tristan", "Kyrie", "Dwyane"];
const people = [];
for (let i = 0; i < 100; i++) {
  people[i] = {
    name: names[random(0, names.length-1)],
    age: random(20, 35),
    say: function() {
      console.log(`My name is ${this.name}. I am ${this.age}`);
    }
  }
}
people.forEach( item => item.say() )
