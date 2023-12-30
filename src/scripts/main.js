'use strict';

const list = document.querySelector('.tree');

const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const newList = e.target.parentNode.querySelector('ul');

  if (newList) {
    newList.hidden = !newList.hidden;
  }
});
