'use strict';

const tree = document.querySelector('.tree');

const listItems = tree.querySelectorAll('li');

listItems.forEach((li) => {
  if (li.querySelector('ul')) {
    const text = li.firstChild.textContent;

    li.firstChild.remove();

    const span = document.createElement('span');

    span.textContent = text;
    li.prepend(span);
  }
});

tree.addEventListener('click', (e) => {
  const curr = e.target;

  if (curr.matches('span')) {
    if (curr.nextSibling.style.display === 'none') {
      curr.nextSibling.style.display = '';
    } else {
      curr.nextSibling.style.display = 'none';
    }
  }
});
