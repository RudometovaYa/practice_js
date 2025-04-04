/* Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль. */
/* function name(array) {
    for (let i = o; i < array.length; i++){
        console.log(array[i]);
        
    }
} */

/* Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль. */
/* (за індексом) !!бере парні індекси елементів у масиві!! */

/* function named(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            console.log(array[i]);
            
        }
    }
} */



/* Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль. */
/* !!бере тільки парні числа.!! */
/* function named(numberes) {
    for (let number of numberes) {
        if (number % 2 === 0) {
            console.log(number);
            
        }
    }
} */

    

/* Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max. */

/* function named(arr, max) {
    const number = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            number.push(arr[i]) ;
        }
    }
} */



/* Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.   */

/* function named(arr) {
    const sum = 0;
    for (i = 0; i < arr.lenght; i++) {
        sum += sum[i];
    }
    return sum;
} */



/* Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві. */

/* function named(arr, index) {
    let newIndex = 0;

    for (let number of arr) {
        if (number === index) {
            newIndex ++;
        }
    }
    return newIndex;
} */


/* Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив. */
/* 
function named(numbers) {
    let newNum = [];
    for (let number of numbers) {
        if (number >= 0) {
            newNum.push(number);
        }
    }
    return newNum;
} */



/* Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру. */

/* function named(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 6) {
            str[i] = str[i].toLowerCase();
        } else {
           str[i] = str[i].toUpperCase();
        }
    }
    return str;
} */


/* Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа. */
/* function named(numbers) {
    let newNum = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            newNum.push(numbers[i]); 
        }
    }
    return newNum;
 } */