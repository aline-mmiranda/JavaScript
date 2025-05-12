/*
O array abaixo contém um monte de strings contendo informações sobre estações de trem no norte da Inglaterra. 
As strings são itens de dados que contêm o código da estação de três letras, seguido por alguns dados legíveis 
por máquina, seguidos por um ponto-e-vírgula, seguido pelo nome da estação legível por humanos. 

Por exemplo:

MAN675847583748sjt567654;Manchester Piccadilly

Queremos extrair o código e o nome da estação e juntá-los em uma string com a seguinte estrutura:

MAN: Manchester Piccadilly
*/

var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  var codigoStations = stations[i].slice(0,3);
  var pontoVirgula = stations[i].indexOf(';');
  var nameStations = stations[i].slice(pontoVirgula + 1);
  var finalStations = codigoStations + ': ' + nameStations;
  var result = finalStations;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
