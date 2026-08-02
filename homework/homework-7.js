// 1. Функция для вывода температуры в городе
function showTemperature(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Пример вызова
showTemperature("Набережые Челны", 23);


// 2. Проверка скорости относительно скорости света
const speedOfLight = 299792458; // м/с

function checkSpeed(speed) {
    if (speed > speedOfLight) {
        
        console.log("Сверхсветовая скорость");
    } else if (speed < speedOfLight) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}



// Примеры вызова
checkSpeed(300000000);
checkSpeed(200000000);
checkSpeed(299792458);


// 3. Проверка бюджета для покупки товара
const productName = "Ноутбук";
const productPrice = 500; // $

function tryToBuy(budget) {
    const neededAmount = productPrice - budget;

    if (budget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`);
    } else {
        console.log(`Вам не хватает ${neededAmount} $, пополните баланс`);
    }
}

// Примеры вызова
tryToBuy(600);
tryToBuy(400);


// 4. Собственная функция: сколько дней осталось до конца месяца
function daysUntilEndOfMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = now.getDate();

    return lastDayOfMonth - currentDay;
}

// Пример вызова
console.log(`До конца месяца осталось ${daysUntilEndOfMonth()} дней`);