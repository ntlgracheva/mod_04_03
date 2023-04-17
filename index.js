'use strict'

const productName = prompt("Введите Наименование товара");
const productAmount = + prompt("Введите Количество товара");;
const productCategory = prompt("Введите Категорию товара");
const productPrice = + prompt("Введите Цену товара");

if (Number.isNaN(productAmount) || Number.isNaN(productPrice)) { console.log("Вы ввели некорректные данные"); }
else {
    console.log(typeof (productName));
    console.log(typeof (productAmount));
    console.log(typeof (productCategory));
    console.log(typeof (productPrice));

    console.log(`На складе ${productAmount} единицы товара "${productName}" на сумму ${productAmount * productPrice} деревянных`);
}