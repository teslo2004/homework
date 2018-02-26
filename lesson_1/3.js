//Написать калькулятор – пользователем вводится первое число, операция (символ),
//второе число и пользователю выводится ответ.

//создаем объект, в котором ключ это символ операции, а значение - функция,
//которую применяет операцию к ее аргументам

const obj = {
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '*': (first, second) => first * second,
  '/': (first, second) => first / second,
  '^': (first, second) => first ** second
}

while(1) {
  const first = +prompt('Enter the first number');

  //вводим символ операции до тех пор, пока множество операций не будет содержать его

  let oper = null;
  do {
    oper = prompt('Enter the operation');
  } while (!obj[oper])
  const second = +prompt('Enter the second number');

  //выводим на экран результат операции

  alert(obj[oper](first, second));
  const exit = confirm('Again?');
  if (!exit) break;
}

