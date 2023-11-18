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
/*
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
alert(list = list.sort(() => Math.random() - 0.5)); 
function fruits(world1, world2) { 
    list.forEach(fruits) {
    if (fruits.toLowerCase().startsWith(world1.toLowerCase()) && fruits.toLowerCase().endsWidth(world2.toLowerCase())) {
        alert("Поздравляем, вы угадали оба элемента");
        
   } else if (fruits.toLowerCase().startsWith(world1.toLowerCase()) || fruits.toLowerCase().endsWidth(world2.toLowerCase())) {
        alert('Вы были близки к победе!');
        
    } else {
        alert('Не угадали')

    }
    
    };

alert(fruits(prompt("Чему равнялся первый элемент массива?"), prompt("Чему равнялся последний элемент массива?")));
 
}
*/