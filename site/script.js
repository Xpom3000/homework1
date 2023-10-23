
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
function multip(a) {
    return a*a;
}

console.log(multip(6));
console.log(multip(12));
console.log(multip(10));