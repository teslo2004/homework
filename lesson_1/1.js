/* Написать функцию, которая проверит правильность расстановки круглых скобок во введенной строке.
принимает в себя строку и возвращает true или false в зависимости от того,
правильно ли расставлены скобки в строке.  */

function fun(str) {
  let opening = 0; //кол-во открывающих скобок
  let ending = 0; //кол-во закрывающих скобок
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') opening++;
    else if (str[i] === ')') ending++;
    if (ending > opening) return false;
  }
  return ending === opening;
}
alert(fun(prompt('enter the string')));
