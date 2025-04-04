/* const person = {
    namePerson: 'Yana',
    age: 37,
    job: 'developer',
};

person.age = 27;
console.log(person);
person.workplace = 'Luxsoft';
console.log(person);
delete person.workplace;
console.log(person);
console.log(person.workplace in person);

const friend = {
    namePerson: 'Nastya',
    age: 25,
    job: 'sale manager',
};

const friends = {
    ...person,
    ...friend,
    sayHello() {
        console.log(`${this.namePerson}, hi!`);  
    },
};

console.log(friends);

for (const i in friends) {
   console.log(`${i}:${friends[i]}`); 
}

for (const i in friends) {
   console.log(`${i}`); 
}

friends.sayHello();

for (const key of Object.keys(friends)) {
    console.log(key);
}


console.log(friends); */


/* Напиши функцію, яка створює об'єкт з ім'ям і віком.
Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
Поверни цей об'єкт. */

/* function users(name, age) {
    return {
        name: name,
        age: age
    },
} */



/*  Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
Поверни оновлений об'єкт.  */

/* function users (name, age) {
    const obj ={
        name: name,
        age: age,
        addAdress(newAdr){
            this.adress = newAdr;
        }  
    };
    return obj;   
} */



/* Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
Поверни оновлений об'єкт. */

/* function users(name, age) {
    const obj = {
        name: name,
        age: age,
        deleteAge() {
            delete this.age;
        }
    };
    return obj;
} */


/* Напиши функцію, яка приймає об'єкт і повертає значення властивості "name". */

/* function users(obj) {
    return obj.name;
} 

const person = { name: 'yana', age: 20 };
console.log(users(person)); */


/* Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні. */

/* function user(obj) {
    return 'name' in obj ? true : false; 
    
}

const person = { name: 'yana', age: 20 };
console.log(user(person));
 */



/* Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
Поверни результат. */

/* function person(obg1, obg2) {
    return { ...obg1, ...obg2 }
} */

/* 
Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
Поверни оновлений об'єкт.  */

/* function person(obj) {
    obj.age = String(obj.age);
    return obj;
} */



/* Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
Якщо її немає, поверни об'єкт без змін.  */

/* function person(obj) {
    if (obj.address !== undefined) {
        obj.address = newValue;
    } else {
        return obj;
    }
}
 */

/* Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!" */
/* function user(person) {
    return `User ${person.name} from ${person.city}!` */



/* Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт. */
/* 
function arrayToObject(arr) {
    const obj = {};
    for (const [key, value] of arr) {
        obj[key] = value;
    }

    return obj;
} */



/* Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
 */

/* function changeArray(arr) {

    for (const i; i < arr.length; i++) {
        arr[i].age += 1;
    }
    return arr;
}
 */

/* Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів. */
/* 
const contactBook = {
    contacts: {
       
    person1:{ name: Yana, phone: 123} ,
    person2:{ name: Nastya, phone: 678} ,
    
    addNewcont(name, phone) {
        const newKey = `person${Object.keys(this.contacts).length + 1}`
        this.contacts[newKey] = { name, phone };
    },
    deleteContact(name) {
        for (let key in this.contacts) {
            if (this.contacts[key].name === name) {
                delete this.contacts[key];
                console.log(`${name} deleted`);
                return;
            }
        }
    },
    findContact(name) {
        for (let key in this.contacts) {
            if (this.contacts[key].name === name) {
                return this.contacts[key];
          }
      }
    },
    }
} */



/* Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення. */


/* const rectangle = {
    a: 0,
    b: 0,

    intil(x, y) {
        this.a = x,
        this.b =y,
    }

    getP() {

        return (this.a + this.b) * 2;
    },
    getS() {
        return this.a * this.b;
    },
} */
/* 


/* Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань. */

/* const toDoList = {
    task1: '',
    task2: '',
    task3: '',
    addNewtask('newTask') {
        const newT = this.toDoList.lenght + 1;
        this.toDoList[newT] = 'newTask'; 
    }

    doneTask(done) {
        for (let key in toDoList) {
            if (this[key] === done) {
                this[key].push(this[key].done);
         }
        }
    }

} */

    

/* Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).  */   

/* const bankAccount = {
    balance: 0,

    diposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Balance: ${amount}`);
            
        } console.log(`Not enough money`);
        
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Недостатньо коштів на рахунку`);
            
        } else if (amount <= 0) {
            console.log(`Сумма повинна бути більша за 0`);
            
        } else {
            this.balance -= amount;
            console.log(`Поточний баланс ${this.balance}`);
            
        }
    },
};
     */










