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
