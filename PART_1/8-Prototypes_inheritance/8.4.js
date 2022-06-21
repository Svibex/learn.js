// 1. Добавьте toString в словарь
// Имеется объект dictionary, созданный с помощью Object.create(null)
// для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать
// список ключей, разделённых запятой. Ваш toString не должен выводиться
// при итерации объекта с помощью цикла for..in.
//     Вот так это должно работать:
let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
        value() { // значение -- это функция
            return Object.keys(this).join();
        }
    }
});
// ваш код, который добавляет метод dictionary.toString
    // добавляем немного данных
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
// только apple и __proto__ выведены в цикле
    for(let key in dictionary) {
        alert(key); // "apple", затем "__proto__"
    }
// ваш метод toString в действии
    alert(dictionary); // "apple,__proto__"

// 2. Разница между вызовами
// Давайте создадим новый объект rabbit:
    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype.sayHi = function() {
        alert(this.name);
    };
    let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?
    rabbit.sayHi();                         // Rabbit
    Rabbit.prototype.sayHi();               // undefined
    Object.getPrototypeOf(rabbit).sayHi();  // undefined
    rabbit.__proto__.sayHi();               // undefined
//Ответ:В первом вызове this == rabbit, во всех остальных
// this равен Rabbit.prototype, так как это объект перед точкой.