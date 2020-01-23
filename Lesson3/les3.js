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

let i = 0;
for(;;){
    console.log(i);
    if(i == 10) break; 
    i++;
}

//5. ------------------------------------------------


let row = 'X';

for(let i = 0; i < 20; i++){
    console.log(row);
    row += 'X';
}


