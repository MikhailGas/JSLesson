/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
2. создать функцию конструтор для фруктов Fruit
let apple = new Fruit('зеленое', 'круглое')
console.log(apple) // { ... }
let banan = new Fruit('желтый', 'длинный')

3*. function comparison (a, b) {
 let result = false;
 if (a === b) return true

// ваша логика ? result = comparison(a, b) : выход

// return result
}

let user3 = { 
old: 10, 
family: {
grandFatherName: 'Анатолий',
fatherName: 'Владимир',
brothers: ['Толя', 'Женя']
}

}
let user4 = { 
old: 10, 
family: {
grandFatherName: 'Анатолий',
fatherName: 'Владимир',
brothers: ['Толя', 'Женя']
}

}
console.assert(comparison('текст', 'текст') === true, Не правильно написана);
*/

//1. --------------------------------------------------

function numObject(number){
    let oNumber ={};
    if (number > 999) {
        alert ('Число больше 999');
        return oNumber;
    }
    let string = '' + number;
    
    switch(string.length){
        case 3: 
            oNumber['единицы'] = string[2];
            oNumber['десятки'] = string[1];
            oNumber['сотни'] = string[0];
            return oNumber;
         
        
        case 2: {
            oNumber['единицы'] = string[1];
            oNumber['десятки'] = string[0];
            return oNumber;
        }
            
        case 1: {
            oNumber['единицы'] = string[0];
            return oNumber;
        }
    }
    
    
}

console.log(numObject(353));

//2. ---------------------------------------------------------

function Fruit(color, form){
    let fruit = {
        'цвет': color,
        'форма': form,
    }
    return fruit;
}

let apple = new Fruit('зеленое', 'круглое');
let banan = new Fruit('желтый', 'длинный')
console.log(apple);
console.log(banan);

//3. ----------------------------------------------------------
function comparison (a, b) {
    let result = true;
    let i = 0;
    
    let key1 = [];
    
        
        if ((typeof(a) == 'object') && (typeof(b) == 'object')){
            for(key in a){
                key1.push(key);
                
                
            }
            for(key in b){
                if (key1[i] != key) {
                    result = false;
                    break;
                }
                
                result = comparison(a[key1[i]], b[key]);
                if (!result) break; 
                i++;
            }
            
            

        } else {
            
            
            if (a === b){
                result = true; 

            }else {
                result = false;

            }


        }
        
    
    return result;


}

let user3 = { 
    old: 10, 
    family: {
    grandFatherName: 'Анатолий',
    fatherName: 'Владимир',
    brothers: ['Толя', 'Женя']
    }

}
let user4 = { 
    old: 10, 
    family: {
    grandFatherName: 'Анатолий',
    fatherName: 'Владимир',
    brothers: ['Толя', 'Женя']
    }
}


console.log(comparison(user3,user4));






