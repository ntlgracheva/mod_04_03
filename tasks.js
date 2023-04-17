'use strict'

// Вторая задача
{
    const rain = Math.round(Math.random());

    if (rain === 1) { console.log("Пошёл дождь. Возьмите зонт!") }
    else { console.log("Дождя нет!") }
}

// Третья задача
{
    const pointsMath = +prompt("Введите кол-во баллов по математике");
    const pointsRussian = +prompt("Введите кол-во баллов по русскому языку");
    const pointsInformatics = +prompt("Введите кол-во баллов по математике");

    const pointsSum = pointsMath + pointsRussian + pointsInformatics;

    console.log(pointsSum >= 265 ? "Поздравляю, вы поступили на бюджет!" : "Сожалею, вы не поступили на бюджет")
}

// Четвертая задача

{
    const amountTotal = +prompt("Сколько денег вы бы хотели снять?");

    console.log(amountTotal % 100 == 0 ? "Вы можете снять указанную сумму" : "Сожалею, вы не можете снять указанную сумму")
}

