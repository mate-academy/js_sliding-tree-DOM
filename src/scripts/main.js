'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', (element) => {
  const listItem = element.target.parentElement.querySelector('ul');

  if (element.target.tagName === 'SPAN') {
    listItem.hidden = !listItem.hidden;
  }
});
