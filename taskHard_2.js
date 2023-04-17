'use strict'

const profit = +prompt("Введите сумму вашего дохода:");
console.log(`profit = ${profit}`);

let taxSum = 0;

if (profit <= 15000) {
    taxSum = profit * 0.13;
}
else if (profit > 15000 && profit <= 50000) {
    taxSum = 15000 * 0.13 + ((profit - 15000) * 0.2);
}
if (profit > 50000) {
    taxSum =  15000 * 0.13 + 35000* 0.2 + (profit - 50000) * 0.3;
}


console.log(`Cумма налога составляет ${taxSum} рублей`);