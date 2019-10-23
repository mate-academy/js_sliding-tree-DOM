'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (element) => {
  const listItem = element.target.parentElement.querySelector('ul');

  if (element.target.tagName === 'SPAN') {
    listItem.hidden = !listItem.hidden;
  }
});
