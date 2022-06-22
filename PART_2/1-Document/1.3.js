// 1. Дочерние элементы в DOM
// Для страницы:
//     <html>
//         <body>
//             <div>Пользователи:</div>
//             <ul>
//                 <li>Джон</li>
//                 <li>Пит</li>
//             </ul>
//         </body>
//     </html>
// Напишите код, как получить…
document.body.firstElementChild // элемент <div>?
document.body.lastElementChild // <ul>?
document.body.lastElementChild.lastElementChild // второй <li>
                                                // (с именем Пит)?

// 2. Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…
// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?
// Ответ:  1. Да, так как элемент lastChild - последний, у него нет
// ссылки nextSibling. 2. Нет, так как elem.children[0] –
// потомок-элемент. Но перед ним могут быть другие узлы.
// Например, previousSibling может быть текстовым узлом.

// 3. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице
// по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и
// выделить их, используя код:
// //  в переменной td находится DOM-элемент для тега <td>
//     td.style.backgroundColor = 'red';
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}