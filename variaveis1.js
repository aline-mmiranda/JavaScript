/*
1 - Declare uma variável chamada myName.
2 - Inicialize myName com um valor adequado, em uma linha separada (você pode usar seu nome real ou qualquer outra coisa).
3 - Declare uma variável chamada myAge e inicialize-a com um valor, na mesma linha.
*/

var myName;
myName = 'Aline';
var myAge = 40;

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);