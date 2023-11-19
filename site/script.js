
alert('задание 1');
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
console.log(people.sort());


alert('задание 2');
function isPositive(number) {
    return number > 0;
}

function isMale() {
    // писать код тут
}
    
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
    ]
console.log(filter(people, isMale))



/*
const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((number) => number * 2)
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((number) => number + 10)
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((number) => number > 3)

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]



function functionWithCallback(callback) {
    // Передаем в колбэк-функцию 2 аргумента строчки: "Глеб" и "Фокин"
    callback("Глеб", "Фокин");
  }
  
  functionWithCallback((name, surname) => {
    // Внутри колбэк-функции мы можем использовать данные,
    // которые передает в него код, который его вызывает, то есть functionWithCallback
    // Название параметров значения не имеет, здесь я назвал их name и surname,
    // потому что functionWithCallback передает в колбэк имя и фамилию
    console.log(`Привет, ${name} ${surname}!`);
  })


*/
/*

let reg = 'js';
reg = reg.toUpperCase();
console.log(reg);


alert('эзадание 2'); //??
const array = (['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
const search1 = 'ко';

function searchStart(array, search1) {
    return array.filter((item) =>
        item.toLowerCase().startsWith(search1.toLowerCase())
    )  
};
console.log(searchStart());

array = (['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
search1 = 'гру';

array = (['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 
search1 = 'Кино';


alert('задание 3');
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


alert('задание 4');
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


alert('задание 5');
function startStart(){
     return (1 + Math.floor(Math.random() * 11));
}

console.log(startStart());


alert('задание 6'); //??
function getRandomArrNumbers(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
   
}
//console.log(getArr.reduce((n, i) => n + i) / getArr.length);
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//getRandomArrNumbers(7);
//getRandomArrNumbers(12);


alert('задание 7');//?
function randomResult(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}    
alert(randomResult(prompt("Введите первое число"), prompt("Введите второе число")));


alert('задание 8');
console.log(new Date());


alert('задание 9');
let currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate() + 73);
    
console.log(currentDate1); 


alert('задание 10');
function formatDate(date) {
    const days = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
    ];

    const months = [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",
    ];

    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}.
    \nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formatDate(new Date()));


*/

