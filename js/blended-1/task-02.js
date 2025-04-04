//let number = 0;
//while (number <= 20) {
// console.log(number);
//number += 1;
//}
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

//function getNumbers(min, max) {
//    let sum = 0;
//    for (let i = max; i >= min; i--) {
//        console.log(i);
//        if (i % 2 === 0) {
//            sum += i;
//        }
//    }
//    return sum;
//}

//const result = getNumbers(1, 10);
//console.log(`сума : ${result}`);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

/* function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return 'Not a number!' ;
    } else {
        return a < b ? a : b;
    }
}
console.log(min(10, "20")); */