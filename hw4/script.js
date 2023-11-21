
alert('эзадание 1');
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
    
} 
alert('эзадание 2');
let num = 1;
while (num < 6) {
    console.log(num);
    num++;
} 

alert('эзадание 3');
let num1 = 7;
while (num1 < 23) {
    console.log(num1);
    num1++;
    
}

alert('эзадание 4');
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400,
}
for (let item in obj) {
    console.log(`${item } — зарплата ${obj[item]} долларов.`);
   
}


let n = 1000;
let num2 = 0;
while (n >= 50) {
    n /= 2;
    num2++;
    
}
console.log(`Число = ${n}, количество итераций - ${num2}`)


alert('эзадание 6');
let numMunth = 3;
do {
    console.log(`"Сегодня пятница, ${numMunth}-е число. Необходимо подготовить отчет."`);
    numMunth += 7;

} while (numMunth <= 31);