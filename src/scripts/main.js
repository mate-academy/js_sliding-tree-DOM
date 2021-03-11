'use strict';

const listItems = [...document.querySelectorAll('li')];

listItems.forEach(item => {
  const listOfGoods = item.querySelector('ul');

  if (!listOfGoods) {
    return;
  }

  const textNode = item.firstChild;
  const span = document.createElement('span');

  textNode.replaceWith(span);

  span.textContent = textNode.data.trim();

  span.addEventListener('click', () => {
    listOfGoods.hidden = !listOfGoods.hidden;
  });
});
