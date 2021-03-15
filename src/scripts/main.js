'use strict';

const tree = document.querySelector('.tree');
const listItems = [...document.querySelectorAll('li')];

listItems.forEach(item => {
  const textNode = item.firstChild;
  const span = document.createElement('span');

  span.className = 'wrapper';

  textNode.replaceWith(span);

  span.textContent = textNode.data;
});

tree.addEventListener('click', (clickEvent) => {
  const listOfGoods = clickEvent.target.closest('.wrapper');

  listOfGoods.nextElementSibling.hidden
  = !listOfGoods.nextElementSibling.hidden;
});
