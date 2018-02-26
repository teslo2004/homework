//Вычислить значение функции arcsin по ряду Тейлора в точке X, используя N первых членов (X, N вводятся).
const asin = (x, n) => {
  //numer - член числителя, denom - член знаменателя
  let numer1 = 1,
      numer2 = x,
      denom1 = 1,
      denom2 = 1,
      denom3 = 1,
      fact_i = 1,
      element;
      res = x;
    for (let i = 1; i <= n; i++) {
      fact_i *= i;
      denom1 *= 4;
      denom2 = fact_i * fact_i;
      denom3 += 2;
      numer2 *= x * x;
      numer1 = fact_i;
      for (let k = i+1; k <= 2*i; k++) {
        numer1 *= k;
      }
      element = (numer1 * numer2) / (denom1 * denom2 * denom3);
      res += element;
    }
  return res;
}

let x = +prompt('Enter x');
let n = +prompt('Enter n');
alert(asin(x, n));
