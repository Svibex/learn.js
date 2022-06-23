// 1. createTextNode vs innerHTML vs textContent
// У нас есть пустой DOM-элемент elem и строка text.
// Какие из этих 3-х команд работают одинаково?
//     elem.append(document.createTextNode(text))
//     elem.innerHTML = text
//     elem.textContent = text
// Ответ: Ответ: 1 и 3. В обоих случаях результатом будет добавление
// text «как текст» в elem.

// 2. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое
// из elem.
    // <ol id="elem">
    //     <li>Привет</li>
    //     <li>Мир</li>
    // </ol>
    // <script>
        function clear(elem) {
                elem.innerHTML = '';
        }
        clear(elem); // очищает список
    // </script>

// 2. Почему остаётся "aaa"?
// В примере ниже вызов table.remove() удаляет таблицу из документа.
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
// Почему так происходит?
    // <table id="table">
    //     aaa
    //     <tr>
    //     <td>Тест</td>
    //     </tr>
    // </table>
    // <script>
    //     alert(table); // таблица, как и должно быть
    //     table.remove();
    //     // почему в документе остался текст "ааа"?
    // </script>
// Ответ: внутри table не может быть текста. HTML в задаче некорректен.

// 3. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
//     1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     2. Создавайте элемент <li> и добавляйте его к <ul>.
//     3. Продолжайте до тех пор, пока пользователь не отменит ввод
//        (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
let ul = document.createElement('ul');
document.body.append(ul);
while (true) {
        let text = prompt('Введите текст для элемента списка', '');
        if (!text) {
                break;
        }
        let li = document.createElement('li');
        li.textContent = text;
        ul.append(li);
}

// 4. Создайте дерево из объекта
// Напишите функцию createTree, которая создаёт вложенный список ul/li
// из объекта.
//     Например:
    let data = {
        "Рыбы": {
            "форель": {},
            "лосось": {}
        },
        "Деревья": {
            "Огромные": {
                "секвойя": {},
                "дуб": {}
            },
            "Цветковые": {
                "яблоня": {},
                "магнолия": {}
            }
        }
    };
// Синтаксис:
//     let container = document.getElementById('container');
//     createTree(container, data); // создаёт дерево в контейнере
// Результат (дерево).
// Выберите один из двух способов решения этой задачи:
//     Создать строку, а затем присвоить через container.innerHTML.
//     Создавать узлы через методы DOM.
// Если получится – сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -–
// пустых <ul></ul> на нижнем уровне.
function createTree(container, obj) {
        container.innerHTML = createTreeText(obj);
}
function createTreeText(obj) {
        let li = '';
        let ul;
        for (let key in obj) {
                li += '<li>' + key + createTreeText(obj[key]) + '</li>';
        }
        if (li) {
                ul = '<ul>' + li + '</ul>'
        }
        return ul || '';
}
createTree(container, data);

// 5. Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество
// вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
let lis = document.getElementsByTagName('li');
for (let li of lis) {
        let descendantsCount = li.getElementsByTagName('li').length;
        if (!descendantsCount) continue;
        li.firstChild.data += ' [' + descendantsCount + ']';
}

// 6. Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month
// в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это
// <td>. У таблицы должен быть заголовок с названиями дней недели,
// каждый день – <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным
// его делать не нужно.
function createCalendar(elem, year, month) {
        let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
        let d = new Date(year, mon);
        let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
        for (let i = 0; i < getDay(d); i++) {
                table += '<td></td>';
        }
        while (d.getMonth() === mon) {
                table += '<td>' + d.getDate() + '</td>';
                if (getDay(d) % 7 === 6) {
                        table += '</tr><tr>';
                }
                d.setDate(d.getDate() + 1);
        }
        if (getDay(d) !== 0) {
                for (let i = getDay(d); i < 7; i++) {
                        table += '<td></td>';
                }
        }
        table += '</tr></table>';
        elem.innerHTML = table;
}
function getDay(date) {
        let day = date.getDay();
        if (day === 0) day = 7;
        return day - 1;
}
createCalendar(calendar, 2012, 9);

// 7. Цветные часы с использованием setInterval
// Создайте цветные часы как в примере:
// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять
// время в элементах.
// <div id="clock">
//     <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
// </div>
function update() {
        let clock = document.getElementById('clock');
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
}
let timerId;
function clockStart() {
        timerId = setInterval(update, 1000);
        update();
}
function clockStop() {
        clearInterval(timerId);
        timerId = null;
}

// 8. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
//     <ul id="ul">
//         <li id="one">1</li>
//         <li id="two">4</li>
//     </ul>
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// 9. Сортировка таблицы
// Вот таблица:
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th><th>Surname</th><th>Age</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>John</td><td>Smith</td><td>10</td>
//             </tr>
//             <tr>
//                 <td>Pete</td><td>Brown</td><td>15</td>
//             </tr>
//             <tr>
//                 <td>Ann</td><td>Lee</td><td>5</td>
//             </tr>
//             <tr>
//                 <td>...</td><td>...</td><td>...</td>
//             </tr>
//         </tbody>
//     </table>
// В ней может быть больше строк.
// Напишите код для сортировки по столбцу "name".
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);