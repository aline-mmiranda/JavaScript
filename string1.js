/*
Temos várias mensagens de cartão, mas queremos classificá-las para listar apenas as mensagens de Natal. 
Queremos que você preencha um teste condicional dentro da estrutura if (...), para testar cada string 
e apenas imprimi-la na lista se for uma mensagem de Natal.
*/

var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  
  if (greetings[i].indexOf('Christmas') !== -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}