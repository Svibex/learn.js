// 1. Работа с переменными
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin;
let name;
name = "John";
admin = name;
alert(admin);

// 2. Придумайте правильные имена
// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
let ourPlanetName;
let currentUserName;

// 3. Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:
//     const birthday = '18.04.1982';
//     const age = someCode(birthday);
// У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода,
// используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?
//     const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
//     const AGE = someCode(BIRTHDAY); // а здесь?
const BIRTHDAY = '18.04.1982'; //Используются заглавные буквы, так как значение известно до запуска скрипта
const age = someCode(birthday); //Используются строчные буквы, так как значение определяется после запуска скрипта
                                // (зависит от других вычисляемых данных)

