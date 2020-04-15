'use strict';

const ADMIN_PASSWORD = 'qwas';
let message;
const enterValue = prompt('Введите пароль');

if (enterValue === ADMIN_PASSWORD)
{
  message = ('Добро пожаловать!');
} else if (enterValue === null)
{
  message = ('Отменено пользователем!');
} else
{
  message = ('Доступ запрещен, неверный пароль!');
}

alert(message);