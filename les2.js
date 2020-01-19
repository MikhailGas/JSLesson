//Домашнее задание
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 a=1 ++a добавляет 1
//d = b++; alert(d);           // 1 b=1 b++ добавит 1 при повторном вызове b будет равно 2
//c = (2+ ++a); alert(c);      // 5 на этом шаге а=2 ++а добвляет еще единицу и к а прибавляется 2
//d = (2+ b++); alert(d);      // 4 на этом шаге b=2  и прибавляем 2 при следующем вызове b = 3
//alert(a);                    // 3 шаг 4
//alert(b);                    // 3 шаг 5

//var a = 2;
//var x = 1 + (a *= 2); Х будет равен 5, т.к. вначале выполняется действие в скобках - а присваивается значение а умноженное на 2, т.е. получается 4 и прибавляем 1 получаем 5
// 3.1, 3.2, 3.3--------------------------------------------------
let a, b;

do {
    a = prompt("Введите первое число", 0);
} while (a != +a)

do {
    b = prompt("Введите второе число", 0);
} while (b != +b)
    
if(a >= 0 && b >= 0) console.log("Разность чисел: " + (a - b));
if(a < 0 && b < 0) console.log("Произведение чисел: " + (a * b));
if((a >= 0 && b < 0)||(a < 0 && b >=0)) console.log("Сумма чисел: " + (+a + +b));

//3.4--------------------------------------------------------
function listNumber(num){
    for (let i = num; i <=15; i++){
        console.log(i);
    }
}

listNumber(5);

//3.5---------------------------------------------------------
let a1 = 7;

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return(a / b);
}

console.log(sum(10,20));
console.log(sub(10,20));
console.log(mult(10,20));
console.log(div(10,20));

//3.6----------------------------------------------------------
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "Сумма":
            return arg1 + arg2;
            break;
        case "Разность":
            return arg1 - arg2;
            break;
        case "Произведение":
            return arg1 * arg2;
            break;
        case "Частное":
            return arg1 / arg2;
            break;
        default:
            return "Укажите корректную операцию";
            break;
    }
}



console.log('Сумма:' + mathOperation(15,3,'Сумма'));
console.log('Разность:' + mathOperation(15,3,'Разность'));
console.log('Произведение:' + mathOperation(15,3,'Произведение'));
console.log('Частное:' + mathOperation(15,3,'Частное'));

//3.7-------------------------------------------------------------
let x = 0;
let y = null;
if (x == y) {
    console.log("null и 0 равны")
} else console.log("null и 0 не равны, т.к. это разные типы");

//3.8------------------------------------------------------------
function power(val, pow){
    let res;
    if(pow == 1) return val;
    pow -= 1;
    res = power(val, pow) * val;
    return res;
    
}

let val = 16;
let pow = 4;
console.log(val + " в степени " + pow + " = " + power(val,pow));