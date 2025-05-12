/*
Adicione uma nova linha para corrigir o valor armazenado na variável myName existente para seu próprio nome.
*/

let myName = 'Paul';
myName = 'Aline';

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);