// 1. ------------------------------------------------

let a = 0;
while(a <= 100){
    
    console.log(a);
    a++;
}

//2. -------------------------------------------------

cart = [
     ["Джинсы", "Рубашка","Брюки"],
     [300,500,250]
]

function countBasketPrice() {
    let sum = 0;

    cart[1].forEach(function(price){
        sum += price;
    })
    return sum;
}

console.log(countBasketPrice());

// 4. -----------------------------------------------

function consoleOut(i){
    console.log(i);
    return 8;
}

let i = 0;
for(i = 0;i <= consoleOut(i);i++){}
    


//5. ------------------------------------------------


let row = 'X';

for(let i = 0; i < 20; i++){
    console.log(row);
    row += 'X';
}


let num = 425;

let string = '' + num;
console.log('Сотни: ' + string[0] + ', Десятки: ' + string[1] + ', Единицы: ' + string[2]);