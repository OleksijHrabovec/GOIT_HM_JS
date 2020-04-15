'use strict';

const credits = 24000;
const priceDroid = 3000;
let enterValue = prompt('Сколько дроидов хотите купить??');
let totalPrice = (`${enterValue * priceDroid}`);
let message;

if (enterValue === null)
{
  message = ('Отменено пользователем!');
} else if (totalPrice > credits)
{
  message = ('Недостаточно средств на счету!');
} else if (totalPrice < credits)
{
  message = (`Вы купили ${enterValue} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}else {
  message = ('Неверное значение!!');
}

alert(message);
