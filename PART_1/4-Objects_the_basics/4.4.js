// 1. Проверка синтаксиса
// Каким будет результат выполнения этого кода?
//     let user = {
//         name: "Джон",
//         go: function() { alert(this.name) }
//     }
//     (user.go)()
// P.S. Здесь есть подвох :)
// Ошибка, так как пропущена ; после фигурных скобок. Если вернуть ;, то всё заработает.

// 2. Объясните значение "this"
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
//     let obj, method;
//     obj = {
//         go: function() { alert(this); }
//     };
//     obj.go();               // (1) [object Object]
//     (obj.go)();             // (2) [object Object]
//     (method = obj.go)();    // (3) undefined
//     (obj.go || obj.stop)(); // (4) undefined
// Ответ: теряется значение this.

// 3. Использование "this" в литерале объекта
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
//     function makeUser() {
//         return {
//             name: "Джон",
//             ref: this
//         };
//     };
//     let user = makeUser();
//     alert( user.ref.name ); // Каким будет результат?
//Ответ: ошибка, так как this ссылается на значение makeUser.

// 4. Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 5. Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { // показывает текущую ступеньку
            alert( this.step );
            return this;
        }
    };
// Теперь, если нам нужно сделать несколько последовательных вызовов,
// мы можем выполнить это так:
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом,
// чтобы их вызов можно было сделать по цепочке, например так:
    ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.