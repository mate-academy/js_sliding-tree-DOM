'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.remove();
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = e.target.parentElement.querySelector('ul');

  if (!childrenList) {
    return;
  }

  childrenList.hidden = !childrenList.hidden;
});
