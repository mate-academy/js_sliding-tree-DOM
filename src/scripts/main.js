'use strict';

const tree = document.querySelector('.tree');
const [ ...liTag ] = document.querySelectorAll('li');

liTag.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const elementSibling = e.target.nextSibling;

  if (elementSibling || elementSibling.tagName === 'UL') {
    elementSibling.hidden = !elementSibling.hidden;
  }
});
