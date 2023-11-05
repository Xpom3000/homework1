
alert('эзадание 1');
function  comparison (a, b) {
    if (a <= b){
     return a;
        
    }  else {
    return b;
    } 
 }
 
 console.log(comparison(4, 6));
 console.log(comparison(7, 3));
console.log(comparison(5, 5));
 

alert('Задание 2');
let num = prompt("Введите число");
if (num % 2 == 0) {
    function printMessage() {
       return "Число чётное" ;
    }

} else {
    function printMessage() {
        return "Число нечётное";
    }
}

console.log(printMessage());


alert('Задание 3');
//3.1
function multip(a) {
    return a*a;
}

console.log(multip(6));
console.log(multip(12));
console.log(multip(10));

//3.2
function multip(a) {
    return a*a;
}

multip(6);
multip(12);
multip(10);


alert('Задание 4');
let num1 = prompt("Сколько Вам лет");
if (num1 < 0) {
    function printMessage() {
        return "Вы ввели неправильное значение" ;
     }
} if (0 < num1 <= 12) {
    function printMessage() {
       return "Привет, друг!" ;
    }

} if (num1 >= 13) {
    function printMessage() {
        return "Добро пожаловать!";
    }
}
alert(printMessage());


alert('Задание 5');
const printMessage = (a, b) => {
    if ( isNaN(a && b)) {
        return "Одно или оба значения не являются числом";
        
    } else {
        return a * b;
    }    
}
alert(printMessage(prompt("Введите первое число"), prompt("Введите второе число")));


alert('Задание 6');
const num2 = (n) => {
    if (isNaN(n)) {   
        return 'Переданный параметр не является числом';
    } if(0 <= n <= 10) {
        return n**3 ;
    } 
}
alert(num2(prompt("Введите число")));


alert('Задание 7');

function seasons(munth) {
    if (munth >= 3 && munth <= 5) {
        return "Весна!";

    } else if (munth >= 6 && munth <= 8) {
        return "Лето";
        
    } else if (munth >= 9 && munth <= 11) {
        return "Осень";
    
    } else if (munth == 12 || munth == 1 || munth == 2) {
        return "Зимма";
    }    
    
}
alert(seasons(prompt("Введите номер месяца")));





















/*
alert('Задание 6');
let n = prompt("Введите число");

if (n === isNaN) {
    function result() {
        return "это значение не являются числом" ;
    }
    
} else  {
    function result() {
       return n ** 3 ;
    }

}
alert(result());
*/