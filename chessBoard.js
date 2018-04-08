//This small code outputs a chess board of desired size

'use strict'

var size = 8;

var cell = "";

for (var y = 0; y <= size; y++){ //axis x
  for (var x = 0; x <= size; x++){ // axis y
    if ((x + y) % 2 == 0) cell = cell + "\u25A0";
    else cell = cell + "\u25A1";
  }
  cell = cell + "\n"; //когда заполнилассь строка по оси х переходим на следующую строку
}
console.log(cell);
