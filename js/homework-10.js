import { products } from "./products.js";
import { createProductCard } from "./cardTemplate.js";

// Задание 4. Создаём объект с помощью reduce().
// Ключ — название продукта, значение — его описание.
const productDescriptions = products.reduce((result, product) => {
  result[product.name] = product.description;
  return result;
}, {});

console.log("Описания продуктов:", productDescriptions);

// Задание 5. Спрашиваем, сколько карточек нужно показать.
function getCardsCount() {
  let count;

  while (true) {
    const answer = prompt("Сколько карточек отобразить? Введи число от 1 до 5.");

    // Если пользователь нажал «Отмена», показываем одну карточку.
    if (answer === null) {
      return 1;
    }

    // Проверяем, что введено целое число от 1 до 5.
    if (/^[1-5]$/.test(answer.trim())) {
      count = Number(answer);
      return count;
    }

    alert("Ошибка! Введи целое число от 1 до 5.");
  }
}

// Функция отображения карточек принимает массив товаров.
function renderCards(productsArray) {
  const container = document.querySelector("#products-container");

  if (!container) {
    console.error("Не найден контейнер для карточек!");
    return;
  }

  container.innerHTML = productsArray
    .map((product) => createProductCard(product))
    .join("");
}

// Запускаем программу при открытии страницы.
const cardsCount = getCardsCount();

// Выбираем нужное количество товаров.
const productsToShow = products.slice(0, cardsCount);

// Отображаем карточки на странице.
renderCards(productsToShow);