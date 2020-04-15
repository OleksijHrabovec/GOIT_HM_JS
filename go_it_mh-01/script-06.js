'use strict';

let input;
let total = 0;

do
{
  input = prompt('Введите любое число');

  if (isNaN(input))
  {
    alert('This is not a number, please try again.')
  } else
  {
    total += Number(input);
  }
} while (input !== null);

if (input === null)
{
  alert(`Общая сумма чисел равна ${total}`);
}