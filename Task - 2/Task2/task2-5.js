//Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
//Пример: "Номер вашей карты: **********1245"
let cardNumber = prompt('Введите номер кредитной карты:', '');
alert(`Your card number: ${cardNumber.slice(0, -4).replace(/(\d*)/, '************')}${cardNumber.slice(-4)}`);