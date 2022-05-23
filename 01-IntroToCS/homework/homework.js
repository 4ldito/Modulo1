"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  num = num.toString();
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i] * Math.pow(2, num.length - 1 - i);
    console.log(num.length - 1 - i);
  }
  return total;
}

function DecimalABinario(num) {
  // tu codigo aca
  let restos = "";
  while (num > 0) {
    restos = restos + String(num % 2);
    num = Math.floor(num / 2);
  }

  let restosInvertido = "";
  for (let i = restos.length - 1; i >= 0; i--) {
    restosInvertido = restosInvertido + restos[i];
  }
  return restosInvertido;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
