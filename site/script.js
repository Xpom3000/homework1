
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
function printMessage(num) {
    if (num % 2 == 0) { {
            return "Число чётное";
        }

    } else {{
            return "Число нечётное";
        }
    }
}

console.log(printMessage(prompt("Введите число")));
 

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
function printMessage(num1) {
    if (num1 < 0) {
        return "Вы ввели неправильное значение";
        
    }if (num1 >= 0 && num1 <= 12) {
        return "Привет, друг!";
        
    }if (num1 >= 13) {
        return "Добро пожаловать!";
        
    }
}

alert(printMessage(prompt("Сколько Вам лет")));


alert('Задание 5');
const printMessage = (a, b) => {
    if ( isNaN(a) || isNaN(b)) {
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
    } if(n >= 0 && n <= 10) {
        return n**3 ;
    } 
}
alert(num2(prompt("Введите число")));


alert('Задание 7');
function squer () {
    return this.radius **2 * 3.14;
}  

function perimetr () {
    return this.radius * 2 * 3.14;
}
const circle1 = {
    radius: 25,
    getArea: squer,
    getPerimeter: perimetr,
    
    }
    
const circle2 = {
    radius: 15,
    getArea: squer,
    getPerimeter: perimetr,
    }
   
console.log(`S1 = ${circle1.getArea()}`);
console.log(`P1 = ${circle1.getPerimeter()}`);
console.log(`S2 = ${circle2.getArea()}`);
console.log(`P2 = ${circle2.getPerimeter()}`);




