import { comments } from "./comment.js";


// ==========================================
// ЗАДАНИЕ №1
// Добавить type="module" для возможности импорта.
// ==========================================

console.log("Домашнее задание №9");


// ==========================================
// ЗАДАНИЕ №2
// Создать массив чисел от 1 до 10.
// ==========================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter((number) => {
    return number >= 5;
});

console.log("Задание 2:", numbersFromFive);


// ==========================================
// ЗАДАНИЕ №3
// Создайте массив строк, относящихся к любым объектам
// ==========================================

const products = [
    "Телефон",
    "Ноутбук",
    "Холодильник",
    "Телевизор",
    "Пылесос",
    "Микроволновка"
];

const findProduct = products.includes("Ноутбук");

console.log("Задание 3:", findProduct);


// ==========================================
// ЗАДАНИЕ №4
// Напишите функцию, которая аргументом будет принимать массив
// ==========================================

function reverseArray(array) {
    return array.reverse();
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = ["a", "b", "c", "d", "e"];

console.log("Задание 4:");
console.log(reverseArray(firstArray));
console.log(reverseArray(secondArray));


// ==========================================
// ЗАДАНИЕ №5
// Добавьте файл comment.js, в нем создайте константу
// ==========================================

// Массив comments находится в файле comment.js
console.log("Задание 5:", comments);


// =========================================
// ЗАДАНИЕ №7
// Вывести в массив массива тех комментариев
// ==========================================

const commentsWithCom = comments.filter((comment) => {
    return comment.email.includes(".com");
});

console.log("Задание 7:", commentsWithCom);


// ==========================================
// ЗАДАНИЕ №8
// Перебрать массив таким образом, чтобы пользователи
// ==========================================

const changedComments = comments.map((comment) => {
    return {
        ...comment,
        postId: comment.id <= 5 ? 2 : 1
    };
});

console.log("Задание 8:", changedComments);


// ==========================================
// ЗАДАНИЕ №9
// Перебрать массив, который бы состоял из объектов
// ==========================================

const idAndName = comments.map((comment) => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log("Задание 9:", idAndName);


// ==========================================
// ЗАДАНИЕ №10
// Перебираем массив, составляем объекту свойство isInvalid
// ==========================================

const commentsWithInvalid = comments.map((comment) => {
    return {
        ...comment,
        isInvalid: comment.body.length > 180
    };
});

console.log("Задание 10:", commentsWithInvalid);

// ==========================================
// ЗАДАНИЕ №11
// Почитать про метод уменьшения массива reduce.
// ==========================================

// С помощью reduce
const emailsReduce = comments.reduce((result, comment) => {
    result.push(comment.email);
    return result;
}, []);

console.log("Задание 11 — reduce:", emailsReduce);


// С помощью map
const emailsMap = comments.map((comment) => {
    return comment.email;
});

console.log("Задание 11 — map:", emailsMap);


// ==========================================
// ЗАДАНИЕ №12
// Почитайте о методах toString()
// ==========================================

// toString()
const emailsToString = emailsMap.toString();

console.log("Задание 12 — toString:", emailsToString);


// join()
const emailsJoin = emailsMap.join(", ");

console.log("Задание 12 — join:", emailsJoin);