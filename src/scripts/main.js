'use strict';

const list = document.querySelectorAll('ul li');
const tree = document.querySelector('.tree');

list.forEach(item => {
  const textOfItem = item.firstChild.textContent;
  const span = document.createElement('span');

  if (item.childNodes.length > 1) {
    item.firstChild.replaceWith(span);
    span.textContent = textOfItem;
  }
});

tree.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
