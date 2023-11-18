//game1
function seasons(munth) {
    if (munth >= 3 && munth <= 5) {
        return "Весна!";

    } else if (munth >= 6 && munth <= 8) {
        return "Лето";
        
    } else if (munth >= 9 && munth <= 11) {
        return "Осень";
    
    } else if (munth == 12 || munth == 1 || munth == 2) {
        return "Зимма";
    }    
    alert(seasons(prompt("Введите номер месяца")));
}

//game2

function game2(){
    let fruits = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
    alert(fruits = fruits.sort(() => Math.random() - 0.5)); 

    const firstElement = prompt("Чему равнялся первый элемент массива?")
    const lastElement = prompt("Чему равнялся последний элемент массива?")

    if (firstElement === fruits[0] && lastElement === fruits[fruits.length - 1]) {
        alert("Поздравляем, вы угадали оба элемента");
        
    } else if (firstElement === fruits[0] || lastElement === fruits[fruits.length - 1]) {
        alert('Вы были близки к победе!');
        
    } else {
        alert('Вы не угадали ни одного слова');

    }
}


