
alert('эзадание 1');
let password = (1234);
const password2 = prompt("Введите пороль");
if (password == password2) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");

}
    
alert('эзадание 2');
let с = Number(prompt("Введите число "));
0 <= с && с <= 10 ? console.log("Верно") : console.log("Неверно");
с = 0;
0 <= с && с <= 10 ? console.log("Верно") : console.log("Неверно");
с = 10;
0 <= с && с <= 10 ? console.log("Верно") : console.log("Неверно");
с = -3;
0 <= с && с <= 10 ? console.log("Верно") : console.log("Неверно");
с = 2;
0 <= с && с <= 10? console.log("Верно"): console.log("Неверно");

alert('задание 3');
let d = Number(prompt("Введите превое число"));
let e = Number(prompt("Введите второе число"))
d > 100 || e > 100? console.log("Верно"): console.log("Неверно");
alert('эзадание 4');
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
    alert(a + b)

alert('эзадание 5');
let monthNumber = String(prompt('Ведите номер месяца'));
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
    console.log('Зима');
    break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
    break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
    break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
    break;
default:
    console.log('Нет такого месяца')
    break;
}  
