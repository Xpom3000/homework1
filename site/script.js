/*
alert('эзадание 1');
let reg = 'js';
reg = reg.toUpperCase();
console.log(reg);


alert('эзадание 2'); //??
const arr = (['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
const search1 = 'ко';

arr.forEach(searchStart) => {
	if (arr.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(searchStart);
	}
};

arr = (['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
search1 = 'гру';

arr = (['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 
search1 = 'Кино';

/*
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
*/

alert('задание 7');
function randomResult(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}    
alert(randomResult(prompt("Введите первое число"), prompt("Введите второе число")));

/*
alert('задание 8');
let currentDate = new Date();
console.log(currentDate);


alert('задание 9');
let currentDate = new Date();
currentDate.setDate(73);
    
console.log(currentDate); 

/*
alert('задание 10');
const currentDate1 = new Date();
const options = { weekday: "long", yaer: "numeric", month: "long", day: "numeric" };
console.log(currentDate1.toLocaleDateString("ru-Ru", options));
*/