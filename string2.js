/*
Temos os nomes das cidades no Reino Unido, mas a capitalização está toda desarrumada. 
Queremos que você as altere para que elas sejam todas minúsculas, 
exceto pela primeira letra maiúscula.
*/

var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lowerName = cities[i].toLowerCase();
  var firstLetter = lowerName[0];
  var upperLetter = firstLetter.toUpperCase();
  var citiesComplete = upperLetter + lowerName.slice(1);
  var result = citiesComplete;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}