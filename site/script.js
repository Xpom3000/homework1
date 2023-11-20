
alert('эзадание 1');
let reg = 'js';
reg = reg.toUpperCase();
console.log(reg);


alert('эзадание 2'); 
const array = ['Кошка', 'Кит', 'Комар', 'Носорог']; 
const search1 = 'ко';

function searchStart(array, search1) {
    return array.filter((item) =>
        item.toLowerCase().startsWith(search1.toLowerCase())
    )
    
};
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
console.log(searchStart(array, search1))



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
    //решить методом Map  
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
   
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));




alert('задание 7');
function randomResult(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}    
alert(randomResult(Number(prompt("Введите первое число")), Number(prompt("Введите второе число"))));


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






