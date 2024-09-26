'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

liAll.forEach(li => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = li.firstChild.textContent;

    li.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  const list = e.target.closest('li').querySelector('ul');

  list.hidden = !list.hidden;
});
