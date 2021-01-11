'use strict';

const list = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

list.forEach(item => {
  const textOfItem = item.firstChild.textContent;
  const span = document.createElement('span');

  if (item.childNodes.length > 1) {
    item.firstChild.replaceWith(span);
    span.append(textOfItem);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
