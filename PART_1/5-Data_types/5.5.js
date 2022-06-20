// 1. Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида
// «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//     Примеры:
//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив
// символов, потом переделайте всё как нужно и методом join соедините обратно.
function camelize(str) {
    if (!str) return '';
     else return str
         .split('-')
         .map((item, index) => {
             if (index===0) return item;
             else return item[0].toUpperCase()+item.slice(1)
         })
         .join('');
}

// 2. Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
//     Например:
//     let arr = [5, 3, 8, 1];
//     let filtered = filterRange(arr, 1, 4);
//     alert( filtered ); // 3,1 (совпадающие значения)
//     alert( arr ); // 5,3,8,1 (без изменений)
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// 3. Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает
// массив arr и удаляет из него все значения кроме тех, которые
// находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
//     Например:
//     let arr = [5, 3, 8, 1];
//     filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//     alert( arr ); // [3, 1]
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i=0;
        }
    }
}

// 4. Сортировать в порядке по убыванию
    let arr = [5, 2, 1, -10, 8];
    arr = arr.sort((a, b) => b - a);
    alert( arr ); // 8, 5, 2, 1, -10

// 5. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию,
// но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//     let arr = ["HTML", "JavaScript", "CSS"];
//     let sorted = copySorted(arr);
//     alert( sorted ); // CSS, HTML, JavaScript
//     alert( arr ); // HTML, JavaScript, CSS (без изменений)
function copySorted(arr) {
    let copy = arr.slice()
    return copy.sort()
}

// 6. Создать расширяемый калькулятор
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые»
// объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку
// типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и
// возвращает результат. Метод должен понимать плюс + и минус -.
//     Пример использования:
//     let calc = new Calculator;
//     alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в
// калькулятор новые операции. Он принимает оператор name и функцию
// с двумя аргументами func(a,b), которая описывает его.
//     Например, давайте добавим умножение *, деление / и возведение
//     в степень **:
//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);
//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// 7. Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.
//     Например:
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [ vasya, petya, masha ];
    let names = users.map(item => item.name);
    alert( names ); // Вася, Петя, Маша

// 8. Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name,
// surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами
// id и fullName, где fullName – состоит из name и surname.
//     Например:
    vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    petya = { name: "Петя", surname: "Иванов", id: 2 };
    masha = { name: "Маша", surname: "Петрова", id: 3 };
    users = [ vasya, petya, masha ];
let usersMapped = users.map(user => ({
    fullName: `${user.name}+${user.surname}`,
    id: user.id
}));
    // usersMapped = [
    //   { fullName: "Вася Пупкин", id: 1 },
    //   { fullName: "Петя Иванов", id: 2 },
    //   { fullName: "Маша Петрова", id: 3 }
    // ]
    alert( usersMapped[0].id ) // 1
    alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов
// в другой. Попробуйте использовать =>. Это небольшая уловка.

// 9. Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов
// со свойством age и сортирует их по нему.
    Например:
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age);
}
    sortByAge(arr);

    // теперь: [vasya, masha, petya]
    alert(arr[0].name); // Вася
    alert(arr[1].name); // Маша
    alert(arr[2].name); // Петя

// 10. Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным
// последовательностям элементов. Например:
//     let arr = [1, 2, 3];
//
//     shuffle(arr);
//     // arr = [3, 2, 1]
//
//     shuffle(arr);
//     // arr = [2, 1, 3]
//
//     shuffle(arr);
//     // arr = [3, 1, 2]
//     // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
// или [3,1,2] и т.д., с равной вероятностью каждого случая.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let index = Math.floor(Math.random() * (i + 1));
        [array[i], array[index]] = [array[index], array[i]];
    }
}

// 11. Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов
// со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения:
// (age1 + age2 + ... + ageN) / N.
//     Например:
    vasya = { name: "Вася", age: 25 };
    petya = { name: "Петя", age: 30 };
    masha = { name: "Маша", age: 29 };
    arr = [ vasya, petya, masha ];
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
    alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 12. Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.
//     Например:
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
alert( unique(strings) );
strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"];
alert( unique(strings) );
