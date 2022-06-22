// 1. Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
//     1. Какой в нём текст (без поддерева) ?
//     2. Какое число потомков – всех вложенных <li> (включая глубоко
//        вложенные) ?
for (let li of document.querySelectorAll('li')) {
    alert(li.getElementsByTagName('li').length)
}

// 2. Что содержит свойство nodeType?
// Что выведет этот код?
//     <html>
//         <body>
//             <script>
//                 alert(document.body.lastChild.nodeType);
//             </script>
//         </body>
//     </html>
// Ответ: 1 (узел-элемент). Во время выполнения <script> последним
// DOM-узлом является <script>, потому что браузер ещё не обработал
// остальную часть страницы.

// 3. Тег в комментарии
// Что выведет этот код?
//     <script>
//         let body = document.body;
//         body.innerHTML = "<!--" + body.tagName + "-->";
//         alert( body.firstChild.data ); // что выведет?
//     </script>
// Ответ: BODY.

// 4. Где в DOM-иерархии "document"?
// Объектом какого класса является document?
// Какое место он занимает в DOM-иерархии?
// Наследует ли он от Node или от Element, или может от HTMLElement?
// Ответ: document является объектом HTMLDocument.
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node