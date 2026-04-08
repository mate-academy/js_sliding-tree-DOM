'use strict';

const listItems = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

listItems.forEach((item) => {
  const spanWrapper = document.createElement('span');
  const child = item.firstChild;

  spanWrapper.append(child);
  item.prepend(spanWrapper);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const father = e.target.closest('li');
    const item = father.querySelector('ul');

    if (item) {
      item.hidden = !item.hidden;
    }
  }
});
