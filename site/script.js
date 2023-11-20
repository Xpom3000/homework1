
alert('задание 1');
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
console.log(people.sort((a, b) => a.age - b.age ));


alert('задание 2');
function isPositive(number) {
    return number > 0;
}

function isMale(people1) {
    return people1.gender === 'male';
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
console.log(filter([3, -4, 1, 9], isPositive)); 

const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
    ]
console.log(filter(people1, isMale)) 


alert('задание 3');
function counter() {
    let time = 0;
    const interval = setInterval(() => {
        time += 3;
        console.log(new Date());
        if (time >= 30) {
            clearInterval(interval);
            console.log('30 секунд прошло.')
        }
    }, 3000);
}
counter();


alert('задание 4');
function delayForSecond(callback) {
    setTimeout(callback, 1000)
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});


alert('задание 5');
function delayForSecond1(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
};

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond1(() => sayHi('Глеб'));
