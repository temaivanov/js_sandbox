// Задача: напишите программу, которая выводит через console.log все цифры от 1 до
// 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна
// выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
// чисел, которые делятся и на 3 и на 5.

// Task: write a programm that would output numbers from 1 to 100, where each number that could be divided by 3 would be replaced by "Fizz",
//  and number that could be divided by 5 would be replaced with "Buzz". For nubers that could be divided by both 3 and 5, replace with "FizzBuzz".

'use strict'

for (let i = 1; i <= 100; i = i+1 ) {
  var outputLine = "";
  if ( i % 3 == 0) outputLine = " is Fizz";
  if ( i % 5 == 0) outputLine = " is Buzz";
  if ((i % 3 == 0)&&(i % 5 == 0)) outputLine = " is FizzBuzz";
  console.log( i + outputLine || i );
}
