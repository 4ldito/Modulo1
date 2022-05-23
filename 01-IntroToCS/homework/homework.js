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
  while (num > 0) {
      
  }
}

console.log(DecimalABinario(11));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
