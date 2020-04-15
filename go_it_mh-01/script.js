'use strict';

// #1


// #2
// const total = 100;
// let enterValue = prompt('Введите количество товаров!!');

// if (enterValue > total)
// {
//   console.log("На складе недостаточно твоаров!");
// } else if (enterValue <= total){
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else
// {
//   console.log('Неверное значение!!');
// }

// #3
// const ADMIN_PASSWORD = 'qwas';
// let message;
// const enterValue = prompt('Введите пароль');

// if (enterValue === ADMIN_PASSWORD)
// {
//   message = ('Добро пожаловать!');
// } else if (enterValue === null)
// {
//   message = ('Отменено пользователем!');
// } else
// {
//   message = ('Доступ запрещен, неверный пароль!');
// }

// alert(message);


// #4
// const credits = 24000;
// const priceDroid = 3000;
// let enterValue = prompt('Сколько дроидов хотите купить??');
// let totalPrice = (`${enterValue * priceDroid}`);
// let message;

// if (enterValue === null)
// {
//   message = ('Отменено пользователем!');
// } else if (totalPrice > credits)
// {
//   message = ('Недостаточно средств на счету!');
// } else if (totalPrice <= credits)
// {
//   message = (`Вы купили ${enterValue} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
// }else {
//   message = ('Неверное значение!!');
// }

// alert(message);


// // #5
// let enterValue = prompt('В какую страну оформляем доставку???');
// let cost ;

//  if(enterValue)
// {
//   enterValue = enterValue.toLowerCase();
//   switch (enterValue)
//   {
//     case 'китай':
//       cost = 100;
//       break;

//     case 'чили':
//       cost = 250;
//       break;

//     case 'австралия':
//       cost = 170;
//       break;

//     case 'индия':
//       cost = 80;
//       break;

//     case 'ямайка':
//       cost = 120;
//       break;

//     default:
//       alert('В вашей стране доставка не доступна* :(');
//   }
//   if (cost)
//   {
//     alert(`Доставка в ${enterValue} будет стоить ${cost } кредитов`)
//   }
// }


// #6
// let input;
// let total = 0;

// do
// {
//   input = prompt('Введите любое число');

//   if (isNaN(input))
//   {
//     alert('This is not a number, please try again.')
//   } else
//   {
//     total += Number(input);
//   }
// } while (input !== null);

// if (input === null)
// {
//   alert(`Общая сумма чисел равна ${total}`);
// }

