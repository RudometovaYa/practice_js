/* function sumArray(numbers, callback) {
    sum = 0;
    for (const numb of numbers) {
        sum += numb;
    }
    callback(sum); 
} */

/* Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек. */
/* 
function doubleArray(numbers, callback) {
    let newNum = [];
    for (let num of numbers) {
        newNum.push(num * 2);
    }
    callback(newNum);
}

function doubleArray(numbers, callback) {
    let newNum = numbers.map(num => num * 2);
    callback(newNum);
}  */

/* Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек. */
/* function filterWords(words, condition, callback) {
    const filteredWords = words.filter(condition);
    callback(filteredWords);
 } */


/* Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек. */
/* function capitalizeStrings(strings, callback) {
    let capitalized = strings.map(str => str[0].toUpperCase() + str.slice(1));
    callback(capitalized);
}  */

/* Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек. */

/*    function sortNumbers(numbers, callback) {
       const sorted =[...numbers].sort((a, b) => a - b);
       callback(sorted);
} */

/* Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек. */

/* function findMax(numbers, callback) {
    const maxNum = Math.max(...numbers);
    callback(maxNum);
}  */


/* Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.  */

function checkEven(numbers, callback) {
    let check = true;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 !== 0) {
            check = false;
            break;
        }
    }
    callbac(check);
}
    

