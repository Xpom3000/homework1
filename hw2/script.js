alert('эзадание 1');
let a = 10;
alert(a);
alert(a * 2);

alert('эзадание 2');
let yaer = ('2007 год выпуска первого Iphone');
alert(yaer);

alert('эзадание 3');
let name = ('Брендан Эйх создатель JavaScript');
alert(name);

alert('эзадание 4');
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

alert('эзадание 5');
let result = (y ** 5);
alert(result);

alert(`эзадание 6`);
let a1 = 9;
let b1 = 2;
let newResult = a1 % b1;
alert(newResult);

alert('эзадание 7');
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

alert('эзадание 8');
let age = Number(prompt("Сколько вам лет"));
alert(`Ваш возраст ${age}`);

alert('эзадание 9');
const user = {
    name: 'Игорь',
    age: 35,
    isAdmin: true,
    'city of residence': true

}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user["city of residence"]);
user.age = 37;
console.log(user.age);
delete user['city of residence'];
console.log(user["city of residence"]);
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);


alert(`эзадание 10`);
let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);
