// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//let number = prompt("Введіть число");
//console.log(number);
//number = Number(number);
//if (number === 10) {
   // alert("вірно");
//} else {
  //  alert('Невірно');
//}

//let isAdult = confirm("Чи є Вам 18 років?");
//console.log(isAdult);
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

 //const min = Math.floor(Math.random() * (59 - 0) + 0);
//if (min >= 0 && min <= 15) {
  //  alert(`${min} входить в першу чверть`);
//} else if (min > 15 && min <= 30 ) {
    //alert(`${min} входить в другу чверть`);
//} else if (min > 30 && min <= 45) {
   // alert(`${min} входить в третю чверть`);
//} else {
    //alert(`${min} входить в четверту чверть`);
//}


// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

/* let login = prompt("Enter the login");

if (login === "Адмін") {
  let password = prompt("Enter the password");
  
  if (password === "Я головний") {
    console.log("Логін успішний: Адмін");
    alert("Добрий день!");
  } else if (password === null || password === "") {
    console.log("Користувач скасував введення пароля");
    alert("Скасовано");
  } else {
    console.log("Невірний пароль!");
    alert("Невірний пароль!");
  }
  

} else if (login === null || login === "") {
  console.log("Користувач скасував введення логіна");
  alert("Скасовано");
} else {
  console.log(`Невідомий логін: ${login}`);
  alert("Я вас не знаю");
} */


//Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
  
/* let number = 0;

while (number <= 20) {
   console.log(number);
    number += 1;
} */


// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

/* function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

const result = getNumbers(2, 12);
console.log(`сума парних чисел: ${result}`); */



 //Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

/* function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return 'Not a number!';
  } else {
    return a < b ? a : b;
  }
} */



// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).  

/* function isAdult(age) {
  if (isNaN(age) || typeof age !== "number") {
    return "введіть число" ;
  } else if (age >=18){
    return confirm("ви впевнені?");
  } else {
    return false;
  }
} */



// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

/* function fizzBuzz(num) {
   num = Number(num);
  for (let i = 1; i <= num; i++) {
    num += i;
    console.log(num);

     if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz'); 
    } else if (i % 5 === 0) {
       console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
       console.log(i);
    }
    
  }
} */