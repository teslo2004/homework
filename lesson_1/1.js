/* Написать функцию, которая проверит правильность расстановки круглых скобок во введенной строке.
принимает в себя строку и возвращает true или false в зависимости от того,
правильно ли расставлены скобки в строке.  */

function fun(str) {
  var opening = 0; //кол-во открывающих скобок
  var ending = 0; //кол-во закрывающих скобок
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') opening++;
    else if (str[i] === ')') ending++;
    if (ending > opening) return false;
  }
  return ending === opening;
}
alert(fun(prompt('enter the string')));
