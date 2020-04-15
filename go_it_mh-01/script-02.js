'use strict';

const total = 100;
let enterValue = prompt('Введите количество товаров!!');

if (enterValue > total)
{
  console.log("На складе недостаточно твоаров!");
} else if (enterValue <= total){
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else
{
  console.log('Неверное значение!!');
}