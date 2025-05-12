/*
Você recebe um código existente, que possui dois erros. 
O painel de resultados deve exibir o nome Chris, 
e uma declaração sobre quantos anos Chris terá daqui a 20 anos. 
Como você pode corrigir o problema e corrigir a saída?
*/

let myName = 'Default';
myName = 'Chris';

let myAge = 42;

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);