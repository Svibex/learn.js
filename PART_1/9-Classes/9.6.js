// 1. Странный instanceof
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a
// не создан с помощью B().
    function A() {}
    function B() {}
    A.prototype = B.prototype = {};
    let a = new A();
    alert( a instanceof B ); // true
// Ответ: по логике instanceof, именно prototype в действительности
// определяет тип, а не функция-конструктор.