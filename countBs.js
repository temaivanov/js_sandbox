//	Задача: Напишите	функцию	countBs,	которая	принимает	строку	в	качестве	аргумента,
//	и	возвращает	количество	символов	“B”,	содержащихся	в	строке.

//	Task: create a function countBs that would input a line and return the number of Bs in it (regardless of register).

'use strict'

function countBs(string){
  var counter = 0;
  for (var i = 0; i <= string.length; i++) {
    if ((string.charAt(i) == "B")||(string.charAt(i) == "b"))
    counter = counter + 1;}
    console.log('There are '+counter+' such letters in this phrase.');
}

countBs("Barcelona is big and beautiful! Bueno!");
