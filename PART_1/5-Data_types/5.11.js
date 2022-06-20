// 1. Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная.
// Для вывода используйте alert.
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// 2. Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком
// формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
    date = new Date(2012, 0, 3);  // 3 января 2012 года
    alert( getWeekDay(date) );        // нужно вывести "ВТ"

// 3. День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский»
// день недели для даты date.
    date = new Date(2012, 0, 3);  // 3 января 2012 года
function getLocalDay(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}
    alert( getLocalDay(date) );       // вторник, нужно показать 2

// 4. Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число,
// которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
    date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(copyDate.getDate() - days);
    return copyDate.getDate();
}
    alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
    alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
    alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

// 5. Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее
// число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
//     year – год из четырёх цифр, например, 2012.
//     month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// 6. Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд
// с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//     getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть
// конкретного значения сегодняшней даты.
function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

// 7. Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество
// секунд до завтрашней даты.
//     Например, если сейчас 23:00, то:
//     getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть
// конкретного значения сегодняшней даты.
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let difference = tomorrow - now;
    return Math.round(difference / 1000);
}

// 8. Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр,
// т.е. 31.12.16 10:00.
//     Например:
function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${day}.${month}.${year} ${hour}:${minutes}`
    }
}
    alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
    // вчерашняя дата вроде 31.12.2016, 20:00
    alert( formatDate(new Date(new Date - 86400 * 1000)) );
