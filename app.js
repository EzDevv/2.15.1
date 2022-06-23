"use strict";
//Функция с использованием else
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Родители разрешили?");
    }
}

//Функция без использования else
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm("Родители разрешили?");
}

//Вторая функция будет работать аналогично первой 
//Нет никаких отличий в их работе