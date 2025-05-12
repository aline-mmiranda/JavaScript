/*
Altere a linha que calcula x para que a caixa ainda tenha 50px de largura, 
mas que 50 seja calculado usando os números 43 e 7 e um operador aritmético.
*/

x = 43 + 7;
y = 50;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

/*
Altere a linha que calcula y tenha 75px de altura, 
mas que 75 seja calculado usando os números 25 e 3 e um operador aritmético.
*/

x = 43 + 7;
y = 25 * 3;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

/*
Altere a linha que calcula x para que a caixa tenha 250px de largura, 
mas que 250 seja calculado usando dois números e o operador resto (modulo).
*/

x = 250 % 251;
y = 25 * 3;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

/*
Altere a linha que calcula y para que a caixa tenha 150px de altura, 
mas que 150 seja calculado usando três números e os operadores de subtração e divisão.
*/

x = 250 % 251;
y = 350 / 2 - 25;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

/*
Altere a linha que calcula x para que a caixa tenha 200px de largura, 
mas que 200 seja calculado usando o número 4 e um operador de atribuição.
*/

x = 50; x *= 4;
y = 350 / 2 - 25;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

/*
Altere a linha que calcula y para que a caixa tenha 200px de altura, 
mas que 200 seja calculado usando os números 50 e 3, o operador de multiplicação e o operador de atribuição de adição.
*/

x = 50; x *= 4;
y = 50 * 3; y += 50;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);