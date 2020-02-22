/*if (!("a" in window)) { 
    var a = 1;
}
alert(a);
//условие не выполнится, так как свойство "а" в window существует.
// переменная а не объявится и alert выведет undefined

var b = function a(x) {
    x && a(--x);
};
alert(a);

// Т.к. функция а присвоена переменной b она не объявлена
// alert выведет undefined

function a(x) {
    return x * 2;
}
var a;
alert(a);

// alert выведет функцию как объект

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

// так как в функции третьему аргументу присваивается 10, то alert выведет 10, т.к. третий аргумент функции это а.


function a() {
    alert(this);
    console.log(this)
}
a.call(null);

// Выдает объет window. Не могу объяснить, почему.
*/
function bindFunc(){
    return this.func(arguments[0], this.num);
    
   
}

var add = function(a,b) { return a+b;};
let obj ={
    func: add,
    num: 2,
}

var add2 = bindFunc.bind(obj);


console.log(add2(6)) // outputs 8
console.log(add2(10)) // outputs 12