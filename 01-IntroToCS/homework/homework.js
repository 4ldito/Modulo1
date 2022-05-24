"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  num = num.toString();
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    /* Supongamos el número 10
       Empieza el for
       i vale 0, num.length vale 1 (porque tiene 2 posiciones, posición 0 y posición 1)

       En programación, los array empiezan en la posición 0, entonces num[0] vale 1, y num[1] vale 0
       Pero, como nosotros los vemos, el 10 es el primer número 

    */
    total += num[i] * Math.pow(2, num.length - 1 - i);
  }
  return total;

  
}

function DecimalABinario(num) {
  // tu codigo aca
  let restos = "";
  while (num > 0) {
    restos = String(num % 2) + restos;
    num = Math.floor(num / 2);
  }
  return restos;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
