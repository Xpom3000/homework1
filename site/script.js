
alert('эзадание 1');
const array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) break;      
    
}

alert('эзадание 2');
const array2 = [1, 5, 4, 10, 0, 3];
console.log(`Индекс числа 4 - ${array2.indexOf(4)}`);


alert('эзадание 3');
let array3 = [1, 3, 5, 10, 20];
array3 = array3.join(' ');
console.log(array3);


alert('эзадание 4');
const result = [];
for (let i = 0; i < 3; i++) {
    result[i] = [];
    for (let j = 0; j < 3; j++) {
        result[i] [j] = 1;   
    }
}
console.log(result);


alert('эзадание 5');
let array4 = [1, 1, 1];
array4.push(2, 2, 2);
console.log(array4);


alert('эзадание 6');
let arrNumber = [9, 8, 7, 'a', 6, 5];
arrNumber = arrNumber.filter(i => !isNaN(i)).sort();
console.log(arrNumber);


alert('эзадание 7');
const numbs = [9, 8, 7, 6, 5];
if (numbs.includes(Number(prompt('Угадай число')))) {
    alert('Угадал')
} else {
    alert('Не угадал')
}


alert('эзадание 8');
const str = 'abcdef';
arrString = str.split('').reverse();
console.log(arrString.join(''));
   

alert('эзадание 9');
const array5 = [[1, 2, 3,], [4, 5, 6]];
const flat = array5.flat();
console.log(flat);


alert('эзадание 10');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squares = nums.map(num => num **2);
console.log(squares);


alert('эзадание 11');
//вар.1
const  str1= ['слово', '', 'слог', 'длинное предложение', 'буква'];
const lengths = str1.map(item => item.length);
console.log(lengths);
//вар.2
const  str2 = ['слово', '', 'слог', 'длинное предложение', 'буква'].map(item => item.length);
console.log(str2);


alert('эзадание 12');
function filterPositive(array) {
    let newarray = array.filter(n => n < 0)
    console.log(newarray);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2])

 
