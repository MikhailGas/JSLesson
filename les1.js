'use strict';
let Tc = 10;
let Tf;
let admin;
let name;

Tf = (9 / 5) * Tc + 32;

name = 'Василий';
admin = name;

document.write("Температура по Цельсию равна " + Tc + "<br>");
document.write('Температура по Фаренгейту равна ' + Tf);
console.log("Температура по Цельсию равна " + Tc);
console.log('Температура по Фаренгейту равна ' + Tf);

document.write('<br>' + 'Админ: ' + admin);
console.log('Админ: ' + admin);

document.write('<br>' + '1000 + "108" равно ' + 1000 + "108");
console.log('1000 + "108" равно ' + 1000 + "108");