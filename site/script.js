
alert('эзадание 1');
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
console.log(randomArr()) 
randomArr(7);
randomArr(12);


