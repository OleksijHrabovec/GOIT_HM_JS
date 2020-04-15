'use strict';

let enterValue = prompt('В какую страну оформляем доставку???');
let cost ;

 if(enterValue)
{
  enterValue = enterValue.toLowerCase();
  switch (enterValue)
  {
    case 'китай':
      cost = 100;
      break;

    case 'чили':
      cost = 250;
      break;

    case 'австралия':
      cost = 170;
      break;

    case 'индия':
      cost = 80;
      break;

    case 'ямайка':
      cost = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна* :(');
  }
  if (cost)
  {
    alert(`Доставка в ${enterValue} будет стоить ${cost } кредитов`)
  }
}