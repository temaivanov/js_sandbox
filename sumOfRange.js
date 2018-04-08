//  Задача: Напишите функцию range,  принимающую два аргумента,  начало  и конец
//  диапазона,  и возвращающую  массив, который содержит  все числа из  него,
//  включая начальное и конечное.

//  Затем напишите  функцию sum,  принимающую массив  чисел и
//  возвращающую  их  сумму.

//  Task: create a function 'range' that would have two parameters -- the beggining and the end of the range.
//  The function should return the array containing all the numbers from the given range.

//  Having done that, create function 'sum' that would have previously created array as parameter and would return sum of the numbers from this array.



function range(a, b){
  var array = [];
  for (var i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}

function sum(array){
  var total = 0;
  for (var i = 0; i <= array.length; i++) {
    total = total + i; // почему i, а не array[i]?
  }
  return total;
}

console.log(range(1, 10));
console.log(sum(range(1,10)));
