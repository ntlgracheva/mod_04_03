'use strict'

const profit = +prompt("Введите сумму вашего дохода:");
console.log(`profit= ${profit}`);

let taxPercent;

if (profit <= 15000) {
    taxPercent = 13;
}
else if (profit > 15000 && profit <= 50000) {
    taxPercent = 20;
}
else { taxPercent = 30; }

const taxSum = profit * taxPercent / 100;
console.log(`Cумма налога составляет ${taxSum} рублей`);