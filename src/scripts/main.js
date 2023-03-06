'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    const child = e.target.parentNode.querySelector('ul');

    if (child) {
      child.hidden = !child.hidden;
    }
  }
});
