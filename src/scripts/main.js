'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

lists.forEach(li => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;
    li.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (clickEvent) => {
  const list = clickEvent.target.closest('li').querySelector('ul');

  list.hidden = !list.hidden;
});
